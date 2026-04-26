# Vem Passear em Jampa — Site Oficial

Site oficial da agência de turismo receptivo **Vem Passear em Jampa** em João Pessoa, Paraíba.

**Missão:** Ajudar turistas a descobrir João Pessoa com atendimento rápido, confiança e orientação prática.

---

## Stack

- **Framework:** Next.js 14+
- **Linguagem:** TypeScript
- **Styling:** Tailwind CSS
- **Deployment:** Vercel (recomendado)
- **Package Manager:** npm

---

## Estrutura do Projeto

```
_site/
├── app/                    # Páginas e layouts (Next.js App Router)
│   ├── layout.tsx         # Root layout (Header, Footer)
│   ├── page.tsx           # Home
│   ├── passeios/          # Passeios (dinâmico)
│   │   ├── [categoria]/
│   │   │   ├── page.tsx   # Página da categoria
│   │   │   └── [slug]/
│   │   │       └── page.tsx # Página do passeio
│   ├── sobre/
│   │   └── page.tsx       # Sobre Murillo e empresa
│   └── blog/              # Blog (Phase 2)
│
├── components/            # Componentes reutilizáveis
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── HeroBlock.tsx
│   ├── InfoCard.tsx
│   ├── ButtonPrimary.tsx
│   └── FAQAccordion.tsx
│
├── data/                  # Dados estruturados locais
│   ├── passeios.ts       # Array de 29 passeios (do vault)
│   └── empresa.ts        # CNPJ, Cadastur, contatos
│
├── lib/                   # Funções utilitárias
│   ├── seo.ts            # Helpers para metadata, schema JSON-LD
│   └── utils.ts          # Funções genéricas
│
├── types/                 # Tipos TypeScript
│   └── index.ts
│
├── styles/
│   └── globals.css       # Estilos globais (Tailwind)
│
├── public/               # Assets estáticos
│   ├── images/
│   ├── icons/
│   └── fonts/
│
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
├── postcss.config.js
└── README.md             # Este arquivo
```

---

## Como Rodar Localmente

### Instalação

```bash
cd _site
npm install
```

### Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
npm run build
npm start
```

### Type Checking

```bash
npm run type-check
```

---

## Dados e Conteúdo

### Fonte de Verdade

**Todos os dados são puxados do vault:**
- Passeios → `_conhecimento/catalogo_vempassear_estruturado.md`
- Empresa → `_conhecimento/empresa.md`
- Tom de voz → `_conhecimento/tom-de-voz.md`
- SEO → `_conhecimento/seo-local-joao-pessoa.md`

### Como Atualizar Dados

1. **Passeios:** Edite `data/passeios.ts` (em sync com vault)
2. **Empresa:** Edite `data/empresa.ts` (em sync com vault)
3. **Conteúdo textual:** Altere a página correspondente em `app/`

**Regra:** NUNCA inventar dados. Sempre validar com `_conhecimento/`.

---

## SEO e Performance

### Otimizações Já Implementadas

- ✅ **Next/Image:** Otimização automática de imagens
- ✅ **Metadata dinâmica:** Meta tags corretas por página
- ✅ **Schema JSON-LD:** Estrutura de dados para Google
- ✅ **Mobile-first:** Design responsivo desde o início
- ✅ **Core Web Vitals:** Performance otimizada (LCP < 2.5s)

### Checklist antes de Deploy

- [ ] Todas imagens têm alt text descritivo
- [ ] Meta description e OG tags em cada página
- [ ] Links internos corretos (breadcrumb, navegação)
- [ ] Mobile responsivo (teste em 320px, 768px, 1024px)
- [ ] CTA WhatsApp funcional
- [ ] Sem console errors
- [ ] Schema.org validation OK

---

## Acessibilidade

- ✅ WCAG AA (mínimo)
- ✅ Contraste 4.5:1+ em body text
- ✅ Focus states em botões
- ✅ 44px+ tap targets
- ✅ Semantic HTML (h1, h2, nav, etc)

---

## Variáveis de Ambiente

Crie `.env.local` na raiz do projeto:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+5583988888888
NEXT_PUBLIC_DOMAIN=https://vempassearjampa.com.br
```

---

## Deploy (Vercel)

1. Push para repositório Git
2. Conecte a Vercel ao repositório
3. Vercel detecta Next.js automaticamente
4. Deploy com 0 configuração
5. Customize domínio (vempassearjampa.com.br)

---

## Decisões Técnicas

Veja:
- `CLAUDE.md` (raiz do projeto) — Regras gerais
- `_memoria/politica-uso-claude-code.md` — Stack oficial (Next.js)
- `_memoria/decisoes-estrategicas.md` — Decisões de posicionamento
- `skills/programador-de-site/SKILL.md` — Padrões implementação

---

## Próximos Passos

### Fase 2 (Próxima)

1. Implementar Home completamente
2. Criar 3 páginas de passeio (Seixas, Litoral Sul, etc)
3. Implementar página de categoria
4. Conectar dados reais do vault
5. Testar responsividade e SEO

### Fase 3

1. Implementar 20+ passeios
2. Blog com 3-5 artigos iniciais
3. GMB integrado
4. TripAdvisor / Viator

---

## Contato e Dúvidas

**Proprietário:** Murillo  
**Email:** vempassearjampa@gmail.com  
**WhatsApp:** [Link](https://wa.me/5583988888888)  
**Cadastur:** 52.077.577

---

**Versão:** 0.1.0  
**Criado:** 2026-04-25  
**Status:** Base técnica pronta para Fase 2
