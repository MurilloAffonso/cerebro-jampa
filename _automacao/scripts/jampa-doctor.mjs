#!/usr/bin/env node
// jampa-doctor.mjs — health-check do CEREBRO.JAMPA
// Uso: node _automacao/scripts/jampa-doctor.mjs [--quiet] [--no-log]
// Saída: console com cores ANSI + log opcional em _automacao/logs/doctor-YYYY-MM-DD-HH.log
// Exit code: 0 se zero erros; 1 se houver erros (warnings não falham).

import { readFileSync, readdirSync, existsSync, statSync, mkdirSync, writeFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..", "..");

const args = new Set(process.argv.slice(2));
const QUIET = args.has("--quiet");
const NO_LOG = args.has("--no-log");

const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

const issues = { error: [], warn: [], info: [] };
const logLines = [];

function rec(level, check, message, hint) {
  issues[level].push({ check, message, hint });
  const prefix = level === "error" ? `${C.red}✗ ERRO${C.reset}` : level === "warn" ? `${C.yellow}⚠ AVISO${C.reset}` : `${C.cyan}ℹ INFO${C.reset}`;
  const line = `${prefix} [${check}] ${message}${hint ? `\n      ${C.gray}→ ${hint}${C.reset}` : ""}`;
  if (!QUIET) console.log(line);
  logLines.push(`[${level.toUpperCase()}] [${check}] ${message}${hint ? ` | hint: ${hint}` : ""}`);
}

function ok(check, message) {
  if (!QUIET) console.log(`${C.green}✓${C.reset} [${check}] ${message}`);
  logLines.push(`[OK] [${check}] ${message}`);
}

function section(title) {
  if (!QUIET) console.log(`\n${C.bold}${C.cyan}── ${title} ──${C.reset}`);
  logLines.push(`\n── ${title} ──`);
}

function readJson(p) {
  return JSON.parse(readFileSync(p, "utf8"));
}

function readText(p) {
  return readFileSync(p, "utf8");
}

function safeListDir(p) {
  try { return readdirSync(p); } catch { return []; }
}

function isDir(p) {
  try { return statSync(p).isDirectory(); } catch { return false; }
}

function parseFrontmatter(text) {
  // Simple YAML-frontmatter parser (key: value lines only — sufficient for SKILL.md)
  if (!text.startsWith("---")) return null;
  const end = text.indexOf("\n---", 3);
  if (end === -1) return null;
  const block = text.slice(3, end).trim();
  const out = {};
  for (const raw of block.split("\n")) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const m = line.match(/^([a-zA-Z_][a-zA-Z0-9_-]*):\s*(.*)$/);
    if (!m) continue;
    let val = m[2].trim();
    if ((val.startsWith('"') && val.endsWith('"')) || (val.startsWith("'") && val.endsWith("'"))) {
      val = val.slice(1, -1);
    }
    out[m[1]] = val;
  }
  return out;
}

// ──────────────────────────────────────────────────────────────────────────────
// Checks
// ──────────────────────────────────────────────────────────────────────────────

function checkSkillsDirVsManifest() {
  section("1. Skills: pasta vs manifest");

  const skillsDir = join(ROOT, "skills");
  const manifestPath = join(skillsDir, "manifest.json");

  if (!existsSync(manifestPath)) {
    rec("error", "manifest", "skills/manifest.json não encontrado", "criar manifest com node _automacao/scripts/jampa-doctor.mjs --help");
    return null;
  }

  let manifest;
  try {
    manifest = readJson(manifestPath);
  } catch (e) {
    rec("error", "manifest", `JSON inválido em skills/manifest.json: ${e.message}`);
    return null;
  }

  const folders = safeListDir(skillsDir).filter((n) => isDir(join(skillsDir, n)) && !n.startsWith("_") && n !== "node_modules");
  const manifestIds = new Set(manifest.skills.map((s) => s.id));
  const folderSet = new Set(folders);

  // Folders sem entrada
  for (const f of folders) {
    if (!manifestIds.has(f)) {
      rec("error", "manifest-missing-entry", `pasta skills/${f}/ não consta em manifest.json`, "adicionar entrada ou mover skill para skills/_arquivadas/");
    }
  }
  // Entradas sem pasta
  for (const id of manifestIds) {
    if (!folderSet.has(id)) {
      rec("error", "manifest-orphan-entry", `manifest tem skill "${id}" mas não existe pasta skills/${id}/`, "criar a pasta + SKILL.md ou remover do manifest");
    }
  }

  if (manifestIds.size === folderSet.size && [...manifestIds].every((id) => folderSet.has(id))) {
    ok("manifest", `${manifest.skills.length} skills sincronizadas com pastas`);
  }

  return manifest;
}

function checkSkillMd(manifest) {
  if (!manifest) return;
  section("2. SKILL.md: existência + frontmatter");

  let okCount = 0;
  for (const s of manifest.skills) {
    const p = join(ROOT, "skills", s.id, "SKILL.md");
    if (!existsSync(p)) {
      rec("error", "skill-md", `skills/${s.id}/SKILL.md não existe`);
      continue;
    }
    const text = readText(p);
    const fm = parseFrontmatter(text);
    if (!fm) {
      rec("error", "skill-md", `skills/${s.id}/SKILL.md sem YAML frontmatter (--- ... ---)`, "adicionar bloco --- name: ... description: ... ---");
      continue;
    }
    if (!fm.name) {
      rec("error", "skill-md", `skills/${s.id}/SKILL.md frontmatter sem campo "name"`);
      continue;
    }
    if (fm.name !== s.id) {
      rec("warn", "skill-md", `frontmatter name "${fm.name}" diverge do id "${s.id}"`, "alinhar ou renomear pasta");
    }
    if (!fm.description) {
      rec("warn", "skill-md", `skills/${s.id}/SKILL.md frontmatter sem "description"`);
    }
    okCount++;
  }
  if (okCount === manifest.skills.length) ok("skill-md", `${okCount} SKILL.md válidos`);
}

function checkSchemaEnum(manifest) {
  if (!manifest) return;
  section("3. Schema tarefa-jarvis: enum skill_primaria");

  const schemaPath = join(ROOT, "_automacao", "schemas", "tarefa-jarvis.schema.json");
  if (!existsSync(schemaPath)) {
    rec("warn", "schema", "_automacao/schemas/tarefa-jarvis.schema.json não encontrado");
    return;
  }

  let schema;
  try { schema = readJson(schemaPath); }
  catch (e) { rec("error", "schema", `JSON inválido: ${e.message}`); return; }

  const enumList = schema.properties?.skill_primaria?.enum || [];
  const enumSet = new Set(enumList);
  const skillIds = new Set(manifest.skills.map((s) => s.id));

  // Reservados que sempre podem existir no enum sem corresponder a pasta
  const reservados = new Set(["manual", "bloqueado-sem-skill"]);

  // Skills no manifest faltando no enum (apenas as que executam via Jarvis)
  const faltam = [...skillIds].filter((id) => !enumSet.has(id));
  if (faltam.length) {
    rec("warn", "schema-enum", `enum skill_primaria não cobre: ${faltam.join(", ")}`,
      "atualizar enum em tarefa-jarvis.schema.json (decisão: manter coerente com manifest)");
  }

  // Entradas órfãs no enum
  const orfas = enumList.filter((e) => !skillIds.has(e) && !reservados.has(e));
  if (orfas.length) {
    rec("warn", "schema-enum-orphan", `enum tem entradas sem skill correspondente: ${orfas.join(", ")}`,
      "remover do enum ou criar skill correspondente");
  }

  if (!faltam.length && !orfas.length) ok("schema-enum", "enum sincronizado com manifest");
}

function checkClaudeMdContagem(manifest) {
  if (!manifest) return;
  section("4. CLAUDE.md: contagem de skills");

  const claudeMdPath = join(ROOT, "CLAUDE.md");
  if (!existsSync(claudeMdPath)) {
    rec("warn", "claude-md", "CLAUDE.md não encontrado na raiz do projeto");
    return;
  }
  const text = readText(claudeMdPath);
  const m = text.match(/Skills?\s+Especializadas?\s*\((\d+)\)/i);
  const real = manifest.skills.length;
  if (!m) {
    rec("info", "claude-md", `não encontrei contagem "(N)" — esperado real = ${real}`);
    return;
  }
  const declarado = parseInt(m[1], 10);
  if (declarado !== real) {
    rec("warn", "claude-md", `CLAUDE.md declara ${declarado} skills mas manifest tem ${real}`,
      `corrigir bloco "Skills Especializadas (${real})" em CLAUDE.md`);
  } else {
    ok("claude-md", `contagem ${real} consistente`);
  }
}

function checkLeadsCsv() {
  section("5. CRM: leads.csv parseável");

  const p = join(ROOT, "_crm", "leads.csv");
  if (!existsSync(p)) {
    rec("warn", "crm", "_crm/leads.csv não existe");
    return;
  }
  const text = readText(p).replace(/^﻿/, "");
  const lines = text.split(/\r?\n/).filter((l) => l.length > 0);
  if (lines.length < 1) {
    rec("warn", "crm", "_crm/leads.csv vazio");
    return;
  }
  const header = lines[0];
  const sep = header.includes(";") && !header.includes(",") ? ";" : ",";
  const headerCols = header.split(sep).length;
  let ragged = 0;
  for (let i = 1; i < lines.length; i++) {
    // contagem ingênua — não respeita aspas com vírgulas internas; suficiente para sanity check
    const cols = lines[i].split(sep).length;
    if (cols !== headerCols) ragged++;
  }
  if (ragged > 0) {
    rec("warn", "crm", `${ragged} linha(s) com nº de colunas diferente do header (sep="${sep}", header=${headerCols})`,
      "verificar se contém vírgulas dentro de campos sem aspas");
  } else {
    ok("crm", `${lines.length - 1} leads, ${headerCols} colunas, sep="${sep}"`);
  }
}

function checkPlaceholdersSite() {
  section("6. Site: placeholders perigosos em código público");

  const targets = [
    join(ROOT, "_site", "app"),
    join(ROOT, "_site", "components"),
    join(ROOT, "_site", "data"),
  ].filter((p) => existsSync(p));

  if (!targets.length) {
    rec("info", "site", "_site/app|components|data não encontrado — pulando");
    return;
  }

  const re = /\b(TODO|FIXME|XXX|\[CONFIRMAR[^\]]*\]|\[CONSULTAR[^\]]*\]|undefined|null)\b/;
  const exts = new Set([".tsx", ".ts", ".jsx", ".js"]);
  const hits = [];

  function walk(dir) {
    for (const name of safeListDir(dir)) {
      if (name === "node_modules" || name.startsWith(".")) continue;
      const full = join(dir, name);
      if (isDir(full)) walk(full);
      else {
        const ext = name.slice(name.lastIndexOf("."));
        if (!exts.has(ext)) continue;
        const text = readText(full);
        const lines = text.split(/\r?\n/);
        for (let i = 0; i < lines.length; i++) {
          if (/^\s*\/\//.test(lines[i])) continue; // ignora comentários inline na frente
          // Procura apenas TODO/FIXME/[CONFIRMAR/[CONSULTAR — evita ruído de undefined/null em código TS legítimo
          if (/\b(TODO|FIXME|XXX|\[CONFIRMAR[^\]]*\]|\[CONSULTAR[^\]]*\])\b/.test(lines[i])) {
            hits.push(`${full.replace(ROOT + "\\", "").replace(ROOT + "/", "")}:${i + 1} ${lines[i].trim().slice(0, 100)}`);
          }
        }
      }
    }
  }

  for (const t of targets) walk(t);

  if (hits.length) {
    rec("warn", "site-placeholders", `${hits.length} placeholder(s) em código público:`,
      hits.slice(0, 8).join("\n      ") + (hits.length > 8 ? `\n      … +${hits.length - 8} mais` : ""));
  } else {
    ok("site-placeholders", "código público limpo de TODO/[CONFIRMAR]");
  }
}

function checkSkillsForaDoPadrao() {
  section("7. Skills fora do diretório padrão");

  const claudeSkillsDir = join(ROOT, ".claude", "skills");
  if (!existsSync(claudeSkillsDir)) {
    ok("skills-externas", "nada em .claude/skills/");
    return;
  }
  const items = safeListDir(claudeSkillsDir).filter((n) => isDir(join(claudeSkillsDir, n)));
  if (!items.length) {
    ok("skills-externas", "nada em .claude/skills/");
    return;
  }
  rec("warn", "skills-externas", `${items.length} skill(s) em .claude/skills/: ${items.join(", ")}`,
    "decidir: mover para skills/ (padrão) ou registrar em skills_externas[] no manifest");
}

function checkLogsDir() {
  section("8. Logs e outputs do Jarvis");
  const logsDir = join(ROOT, "_automacao", "logs");
  if (!existsSync(logsDir)) {
    rec("warn", "logs", "_automacao/logs/ não existe", "mkdir _automacao/logs");
  } else {
    ok("logs", "_automacao/logs/ existe");
  }
}

function checkConhecimentoCritico() {
  section("9. Conhecimento crítico");
  const criticos = [
    "_conhecimento/passeios.md",
    "_conhecimento/tom-de-voz.md",
    "_conhecimento/provas-de-confianca.md",
    "_conhecimento/empresa.md",
    "_conhecimento/catalogo_vempassear_estruturado.md",
  ];
  let missing = 0;
  for (const rel of criticos) {
    if (!existsSync(join(ROOT, rel))) {
      rec("error", "conhecimento", `arquivo crítico ausente: ${rel}`);
      missing++;
    }
  }
  if (!missing) ok("conhecimento", `${criticos.length} arquivos críticos presentes`);
}

// ──────────────────────────────────────────────────────────────────────────────
// Run
// ──────────────────────────────────────────────────────────────────────────────

function header() {
  if (QUIET) return;
  console.log(`${C.bold}╔═══════════════════════════════════════════════╗${C.reset}`);
  console.log(`${C.bold}║  CEREBRO.JAMPA — jampa-doctor                ║${C.reset}`);
  console.log(`${C.bold}╚═══════════════════════════════════════════════╝${C.reset}`);
  console.log(`${C.gray}root: ${ROOT}${C.reset}`);
}

function summary() {
  const e = issues.error.length;
  const w = issues.warn.length;
  const i = issues.info.length;
  const status = e === 0 ? `${C.green}OK${C.reset}` : `${C.red}FALHA${C.reset}`;
  if (!QUIET) {
    console.log(`\n${C.bold}── Resumo ──${C.reset}`);
    console.log(`${status} — erros: ${e} · avisos: ${w} · info: ${i}`);
  } else {
    console.log(`status=${e === 0 ? "ok" : "fail"} errors=${e} warnings=${w} infos=${i}`);
  }
  logLines.push(`\n── Resumo ── erros=${e} avisos=${w} info=${i}`);
}

function persistLog() {
  if (NO_LOG) return;
  try {
    const logsDir = join(ROOT, "_automacao", "logs");
    if (!existsSync(logsDir)) mkdirSync(logsDir, { recursive: true });
    const d = new Date();
    const pad = (n) => String(n).padStart(2, "0");
    const stamp = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}-${pad(d.getHours())}h`;
    const out = join(logsDir, `doctor-${stamp}.log`);
    writeFileSync(out, logLines.join("\n") + "\n", "utf8");
    if (!QUIET) console.log(`${C.gray}log salvo: ${out.replace(ROOT, ".")}${C.reset}`);
  } catch (e) {
    if (!QUIET) console.log(`${C.yellow}log não persistido: ${e.message}${C.reset}`);
  }
}

header();
const manifest = checkSkillsDirVsManifest();
checkSkillMd(manifest);
checkSchemaEnum(manifest);
checkClaudeMdContagem(manifest);
checkLeadsCsv();
checkPlaceholdersSite();
checkSkillsForaDoPadrao();
checkLogsDir();
checkConhecimentoCritico();
summary();
persistLog();

process.exit(issues.error.length === 0 ? 0 : 1);
