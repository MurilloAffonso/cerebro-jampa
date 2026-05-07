# configs/

Configurações de projeto e ambiente do CEREBRO.JAMPA.

## Regras

- Nunca armazenar credenciais, tokens ou chaves aqui — use `_seguro/`
- Nunca commitar arquivos `.env` nesta pasta
- Toda mudança requer aprovação de Murillo

## Estrutura esperada

```
configs/
├── README.md         ← este arquivo
└── (arquivos de configuração sem credenciais)
```

## O que vai aqui

- Configurações de ferramentas (ESLint, Prettier, etc.)
- Parâmetros de ambiente sem dados sensíveis
- Preferências de projeto não cobertas por CLAUDE.md

## O que NÃO vai aqui

- Tokens de API
- Senhas ou chaves secretas → use `_seguro/`
- Dados de clientes → use `_crm/`
