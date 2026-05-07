#!/usr/bin/env node
// foundation-check.mjs — valida a estrutura mínima do CEREBRO.JAMPA
// Uso: node _automacao/scripts/foundation-check.mjs [--quiet]
// Exit code: 0 se zero erros; 1 se houver erros

import { existsSync, statSync, readFileSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT = resolve(__dirname, "..", "..");

const QUIET = process.argv.includes("--quiet");

const C = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  red: "\x1b[31m",
  yellow: "\x1b[33m",
  green: "\x1b[32m",
  cyan: "\x1b[36m",
  gray: "\x1b[90m",
};

let errors = 0;
let warnings = 0;

function isDir(p) {
  try { return statSync(p).isDirectory(); } catch { return false; }
}

function isFile(p) {
  try { return statSync(p).isFile(); } catch { return false; }
}

function ok(label, msg) {
  if (!QUIET) console.log(`${C.green}✓${C.reset} ${label}: ${msg}`);
}

function warn(label, msg, hint) {
  warnings++;
  console.log(`${C.yellow}⚠ AVISO${C.reset} ${label}: ${msg}`);
  if (hint) console.log(`  ${C.gray}→ ${hint}${C.reset}`);
}

function fail(label, msg, hint) {
  errors++;
  console.log(`${C.red}✗ ERRO${C.reset} ${label}: ${msg}`);
  if (hint) console.log(`  ${C.gray}→ ${hint}${C.reset}`);
}

function section(title) {
  if (!QUIET) console.log(`\n${C.bold}── ${title} ──${C.reset}`);
}

// ── 1. Diretórios obrigatórios ───────────────────────────────────────────────

section("1. Diretórios obrigatórios");

const REQUIRED_DIRS = [
  { path: "_conhecimento",          label: "conhecimento" },
  { path: "_memoria",               label: "memoria" },
  { path: "skills",                 label: "agentes/skills" },
  { path: "_automacao/workflows",   label: "workflows" },
  { path: "_automacao/logs",        label: "logs" },
  { path: "_automacao/schemas",     label: "schemas" },
  { path: "_automacao/scripts",     label: "scripts" },
  { path: "configs",                label: "configs" },
  { path: "_crm",                   label: "dados-operacionais" },
  { path: "_seguro",                label: "dados-sensiveis" },
  { path: "_site",                  label: "produto-site" },
  { path: "docs",                   label: "documentacao" },
];

for (const { path, label } of REQUIRED_DIRS) {
  const abs = join(ROOT, path);
  if (isDir(abs)) {
    ok(label, path);
  } else {
    fail(label, `diretório ausente: ${path}`, `criar: mkdir ${path}`);
  }
}

// ── 2. Arquivos obrigatórios ─────────────────────────────────────────────────

section("2. Arquivos obrigatórios");

const REQUIRED_FILES = [
  { path: "CLAUDE.md",                                    label: "claude-md" },
  { path: "project-manifest.json",                        label: "manifest-projeto" },
  { path: "skills/manifest.json",                         label: "manifest-skills" },
  { path: "_automacao/scripts/jampa-doctor.mjs",          label: "jampa-doctor" },
  { path: "_automacao/scripts/foundation-check.mjs",      label: "foundation-check" },
  { path: "_automacao/schemas/tarefa-jarvis.schema.json", label: "schema-tarefa" },
  { path: "_automacao/schemas/decision.schema.json",      label: "schema-decision" },
  { path: "_automacao/schemas/log.schema.json",           label: "schema-log" },
  { path: "_automacao/schemas/prompt.schema.json",        label: "schema-prompt" },
  { path: "_automacao/schemas/workflow.schema.json",      label: "schema-workflow" },
  { path: "_automacao/riscos.md",                         label: "politica-riscos" },
  { path: "_memoria/decisoes.md",                         label: "decisoes" },
  { path: "_memoria/proximos-passos.md",                  label: "proximos-passos" },
  { path: "_conhecimento/passeios.md",                    label: "conhecimento-passeios" },
  { path: "_conhecimento/empresa.md",                     label: "conhecimento-empresa" },
  { path: "docs/project-context.md",                      label: "project-context" },
  { path: "docs/approval-policy.md",                      label: "approval-policy" },
  { path: "docs/decision-log.md",                         label: "decision-log" },
  { path: "configs/README.md",                            label: "configs-readme" },
  { path: "_seguro/README.md",                            label: "seguro-readme" },
];

for (const { path, label } of REQUIRED_FILES) {
  const abs = join(ROOT, path);
  if (isFile(abs)) {
    ok(label, path);
  } else {
    fail(label, `arquivo ausente: ${path}`, `criar o arquivo`);
  }
}

// ── 3. Schemas são JSON válido ───────────────────────────────────────────────

section("3. Schemas são JSON válido");

const SCHEMA_FILES = [
  "_automacao/schemas/tarefa-jarvis.schema.json",
  "_automacao/schemas/decision.schema.json",
  "_automacao/schemas/log.schema.json",
  "_automacao/schemas/prompt.schema.json",
  "_automacao/schemas/workflow.schema.json",
];

for (const rel of SCHEMA_FILES) {
  const abs = join(ROOT, rel);
  if (!isFile(abs)) {
    warn("schema-json", `${rel} não existe — pulando validação JSON`);
    continue;
  }
  try {
    const content = readFileSync(abs, "utf8");
    JSON.parse(content);
    ok("schema-json", `${rel} é JSON válido`);
  } catch (e) {
    fail("schema-json", `${rel} tem JSON inválido: ${e.message}`, "corrigir sintaxe JSON");
  }
}

// ── 4. project-manifest.json é JSON válido ───────────────────────────────────

section("4. project-manifest.json é JSON válido");

const manifestPath = join(ROOT, "project-manifest.json");
if (isFile(manifestPath)) {
  try {
    const content = readFileSync(manifestPath, "utf8");
    const manifest = JSON.parse(content);
    ok("manifest", "project-manifest.json é JSON válido");
    if (manifest.versao || manifest.version) {
      ok("manifest-version", `versão: ${manifest.versao || manifest.version}`);
    } else {
      warn("manifest-version", "project-manifest.json sem campo 'version'");
    }
    if (manifest.estrutura) {
      const keys = Object.keys(manifest.estrutura);
      ok("manifest-estrutura", `${keys.length} entradas de estrutura mapeadas`);
    } else {
      warn("manifest-estrutura", "project-manifest.json sem campo 'estrutura'");
    }
  } catch (e) {
    fail("manifest", `project-manifest.json com JSON inválido: ${e.message}`);
  }
}

// ── 5. Proteção de dados sensíveis ──────────────────────────────────────────

section("5. Proteção de dados sensíveis");

const gitignorePath = join(ROOT, ".gitignore");
if (isFile(gitignorePath)) {
  const gi = readFileSync(gitignorePath, "utf8");
  if (gi.includes("_seguro")) {
    ok("gitignore-seguro", "_seguro/ está no .gitignore");
  } else {
    fail("gitignore-seguro", "_seguro/ NÃO está no .gitignore",
      "adicionar '_seguro/' ao .gitignore antes de criar qualquer credencial");
  }
  if (gi.includes(".env")) {
    ok("gitignore-env", ".env está no .gitignore");
  } else {
    warn("gitignore-env", ".env não encontrado no .gitignore");
  }
} else {
  warn("gitignore", ".gitignore não encontrado na raiz");
}

// ── Resumo ───────────────────────────────────────────────────────────────────

const status = errors === 0 ? `${C.green}OK${C.reset}` : `${C.red}FALHA${C.reset}`;
console.log(`\n${C.bold}── Resumo ──${C.reset}`);
console.log(`${status} — erros: ${errors} · avisos: ${warnings}`);

if (errors > 0) {
  console.log(`\n${C.red}${C.bold}Corrija os ERROs antes de prosseguir.${C.reset}`);
}

process.exit(errors === 0 ? 0 : 1);
