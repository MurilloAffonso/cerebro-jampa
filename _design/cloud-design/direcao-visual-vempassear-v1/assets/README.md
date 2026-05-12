# Assets visuais — pacote de briefing v1

Cópias dos ativos atuais usados no site, prontos para anexar ao Claude Design.

| Arquivo | Origem no projeto | Quando usar |
|---|---|---|
| `logo-original-fundo-branco.jpg` | `_site/public/images/logo/logo.jpg` | Arquivo-mãe enviado por Murilo. Fundo branco caixa. Não usar direto no site, é só referência |
| `logo-azul-transparente.png` | `_site/public/images/logo/logo-azul-transparente.png` | Versão PNG transparente gerada via PowerShell + System.Drawing (chroma-key). Usado no Header em 150px |
| `logo-branca-transparente.png` | `_site/public/images/logo/logo-transparente.png` | Versão branca (apaga em fundo claro). Usada no Footer em 88px sobre fundo ocean |
| `logo-selo-redondo.png` | `_site/public/images/logo/logo-icone.png` | Versão selo circular azul. Reserva para favicon/redes — não usado no site hoje |
| `cadastur-certificado.jpeg` | `_site/public/credenciais/cadastur-certificado.jpeg` | Certificado oficial do Ministério do Turismo. Usado no CadasturCertificate com lightbox |
| `parceiro-quiosque-pe-na-areia.jpg` | `_site/public/parceiros/quiosque-pe-na-areia.jpg` | Logo do único parceiro confirmado. Usado no 1º card do PartnersMarquee |

## Restrições de uso (Claude Design)

- **NÃO redesenhar o logo** — pode propor tratamento de cor/tamanho/contexto, não alterar desenho
- **NÃO usar certificado Cadastur como elemento decorativo** — é prova jurídica, sempre apresentado com peso institucional
- **NÃO criar variação da logo do parceiro** — é marca de terceiro, só usar como recebido
- Tudo aqui é referência visual. Implementação fica em `_site/public/`.
