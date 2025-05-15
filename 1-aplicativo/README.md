# LP Tek - Monorepo

Este é um monorepo Next.js contendo múltiplos sites que compartilham componentes e estilos.

## Estrutura do Projeto

```
/                         # raiz do repositório
├── components/           # biblioteca compartilhada
├── styles/
│   └── global.css        # único CSS global
├── next.base.config.mjs  # config compartilhado
├── tsconfig.base.json    # TypeScript base
├── tailwind.config.ts    # configuração global do Tailwind
├── package.json          # dependências & scripts
├── sistema/              # site do sistema
├── aplicativo/           # site do aplicativo
├── landing_page/         # site de landing page
├── ecommerce/            # site de e-commerce
├── website/              # site institucional
├── dev_prod/             # site de desenvolvimento de produtos
└── automacao/            # site de automação
```

## Como Executar

Para desenvolver um site específico:

```bash
# Sistema
npm run dev:sistema

# Aplicativo
npm run dev:aplicativo

# Landing Page
npm run dev:landing_page

# E-commerce
npm run dev:ecommerce

# Website
npm run dev:website

# Desenvolvimento de Produtos
npm run dev:dev_prod

# Automação
npm run dev:automacao
```

Para buildar um site específico:

```bash
# Sistema
npm run build:sistema

# Aplicativo
npm run build:aplicativo

# Landing Page
npm run build:landing_page

# E-commerce
npm run build:ecommerce

# Website
npm run build:website

# Desenvolvimento de Produtos
npm run build:dev_prod

# Automação
npm run build:automacao
```

## Adicionando um Novo Site

1. Crie uma nova pasta na raiz
2. Copie a estrutura básica de um site existente:
   - `app/layout.tsx`
   - `next.config.mjs`
   - `tsconfig.json`
   - `public/` (copie os arquivos de outro site)
3. Atualize os metadados e conteúdo específicos do site
4. Adicione os scripts correspondentes no `package.json`

## Convenções

- Use `@components/*` para importar componentes compartilhados
- Use `@styles/*` para importar estilos globais
- Mantenha assets específicos de cada site em `site-N/public/`
- Mantenha dados específicos em `site-N/dados/` 