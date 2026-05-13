/**
 * GBP Read-Only Test — Vem Passear Jampa
 * Escopo: somente leitura. Nenhuma mutação é realizada.
 * Uso: npm run test:readonly
 */

import { OAuth2Client } from 'google-auth-library';
import fs from 'fs';
import path from 'path';
import http from 'http';
import { URL } from 'url';
import { exec } from 'child_process';

const ROOT = path.resolve(__dirname, '..');
const CREDENTIALS_PATH = path.join(ROOT, 'credentials.json');
const TOKEN_PATH = path.join(ROOT, 'token.json');
const SCOPES = ['https://www.googleapis.com/auth/business.manage'];
const REDIRECT_PORT = 9876;
const REDIRECT_URI = `http://localhost:${REDIRECT_PORT}`;

function openBrowser(url: string) {
  const cmd =
    process.platform === 'win32'
      ? `start "" "${url}"`
      : process.platform === 'darwin'
      ? `open "${url}"`
      : `xdg-open "${url}"`;
  exec(cmd);
}

async function authorize(): Promise<OAuth2Client> {
  const raw = fs.readFileSync(CREDENTIALS_PATH, 'utf8');
  const creds = JSON.parse(raw);
  const { client_id, client_secret } = creds.installed ?? creds.web;

  const oAuth2 = new OAuth2Client(client_id, client_secret, REDIRECT_URI);

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH, 'utf8'));
    oAuth2.setCredentials(token);
    console.log('✅ Token existente carregado de token.json');
    return oAuth2;
  }

  const authUrl = oAuth2.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
    prompt: 'consent',
  });

  console.log('\n🌐 Abrindo navegador para autorização OAuth...');
  openBrowser(authUrl);
  console.log('   URL manual (se o navegador não abrir):', authUrl);

  return new Promise((resolve, reject) => {
    const server = http.createServer(async (req, res) => {
      if (!req.url) return;
      const params = new URL(req.url, `http://localhost:${REDIRECT_PORT}`).searchParams;
      const code = params.get('code');
      const error = params.get('error');

      if (error) {
        res.writeHead(400);
        res.end(`Erro de autorização: ${error}`);
        server.close();
        reject(new Error(`OAuth error: ${error}`));
        return;
      }

      if (code) {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h2>Autorizado! Pode fechar esta aba.</h2>');
        server.close();

        const { tokens } = await oAuth2.getToken(code);
        oAuth2.setCredentials(tokens);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens, null, 2));
        console.log('✅ Token salvo em token.json');
        resolve(oAuth2);
      }
    });

    server.listen(REDIRECT_PORT, () => {
      console.log(`   Aguardando callback OAuth em http://localhost:${REDIRECT_PORT}...`);
    });

    server.on('error', reject);
  });
}

async function getAccessToken(auth: OAuth2Client): Promise<string> {
  const res = await auth.getAccessToken();
  if (!res.token) throw new Error('Não foi possível obter access token.');
  return res.token;
}

function assertApiResponse(res: Response, data: any, apiName: string): void {
  if (res.ok) return;
  const errBody = data?.error ?? {};
  const status = errBody.status ?? '';
  // Quota esgotada (acesso GBP ainda não aprovado pelo Google)
  if (
    res.status === 429 ||
    status === 'RESOURCE_EXHAUSTED' ||
    status === 'QUOTA_EXCEEDED' ||
    (res.status === 403 && String(errBody.message ?? '').toLowerCase().includes('quota'))
  ) {
    throw new Error(
      `Quota da API insuficiente — acesso GBP ainda não aprovado pelo Google.\n` +
      `  Caso: 0-9975000041103 | Prazo: 7-10 dias úteis (~2026-05-27)\n` +
      `  Quando aprovado, reexecute: npm run test:readonly`
    );
  }
  throw new Error(`${apiName} (${res.status} ${status}): ${errBody.message ?? JSON.stringify(data)}`);
}

async function listAccounts(auth: OAuth2Client): Promise<any[]> {
  const token = await getAccessToken(auth);
  const res = await fetch('https://mybusinessaccountmanagement.googleapis.com/v1/accounts', {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = (await res.json()) as any;
  assertApiResponse(res, data, 'accounts API');
  return data.accounts ?? [];
}

async function listLocations(auth: OAuth2Client, accountName: string): Promise<any[]> {
  const token = await getAccessToken(auth);
  const readMask = 'name,title,storefrontAddress,phoneNumbers,websiteUri,regularHours';
  const endpoint =
    `https://mybusinessbusinessinformation.googleapis.com/v1/${accountName}/locations` +
    `?readMask=${encodeURIComponent(readMask)}`;
  const res = await fetch(endpoint, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = (await res.json()) as any;
  assertApiResponse(res, data, 'locations API');
  return data.locations ?? [];
}

async function main() {
  console.log('=== GBP Read-Only Test — Vem Passear Jampa ===\n');

  const auth = await authorize();

  console.log('\n📋 Listando accounts...');
  const accounts = await listAccounts(auth);

  if (accounts.length === 0) {
    console.log('  Nenhuma account encontrada. Verifique permissões ou aguarde aprovação da API.');
    return;
  }

  for (const acc of accounts) {
    console.log(`  - ${acc.name}  (${acc.accountName ?? acc.type ?? ''})`);
  }

  const firstAccount = accounts[0].name;
  console.log(`\n📍 Listando locations de "${firstAccount}"...`);
  const locations = await listLocations(auth, firstAccount);

  if (locations.length === 0) {
    console.log('  Nenhuma location encontrada nesta account.');
    return;
  }

  for (const loc of locations) {
    console.log(`\n  Location : ${loc.name}`);
    console.log(`  Título   : ${loc.title ?? '(sem título)'}`);
    if (loc.phoneNumbers?.primaryPhone) console.log(`  Telefone : ${loc.phoneNumbers.primaryPhone}`);
    if (loc.websiteUri) console.log(`  Site     : ${loc.websiteUri}`);
    if (loc.storefrontAddress?.addressLines?.length) {
      console.log(`  Endereço : ${loc.storefrontAddress.addressLines.join(', ')}`);
    }
  }

  console.log('\n✅ Teste concluído. Nenhuma mutação realizada.');
}

main().catch((err: Error) => {
  console.error('❌ Erro:', err.message);
  process.exit(1);
});
