# Catálogo Júlia Costa Lash Designer

Protótipo responsivo de catálogo para um pequeno negócio de estética, desenvolvido para praticar TypeScript, organização de interface e testes de ponta a ponta.

> Estado do projeto: demonstração. O link de WhatsApp usa um número fictício e o conteúdo comercial precisa ser revisado antes de qualquer uso em produção.

## O que existe hoje

- página principal com sete serviços;
- página de stories com quatro cartões demonstrativos;
- navegação responsiva;
- animações com `IntersectionObserver`;
- build de produção com Vite;
- testes E2E com Playwright.

## Tecnologias

- HTML e CSS;
- TypeScript;
- Vite;
- Playwright.

## Executar localmente

Requisitos: Node.js 20.19 ou superior e npm.

```bash
npm ci
npm run dev
```

O endereço local é informado pelo Vite no terminal.

## Verificações

```bash
npm run build
npm test
npm audit
```

Os testes validam carregamento das duas páginas, quantidade de cartões e navegação. Em 24 de setembro de 2026, as dependências foram atualizadas e o `npm audit` não apontou vulnerabilidades conhecidas.

## Estrutura

```text
.
├── index.html
├── stories.html
├── src/
│   ├── main.ts
│   ├── stories.ts
│   └── style.css
├── tests/
│   └── catalogo.spec.ts
└── public/
    └── favicon.svg
```

## Deploy

O `vite.config.ts` usa o caminho-base `/julia-costa-lash-catalogo/`, compatível com GitHub Pages. O repositório ainda não possui automação de publicação; o deploy precisa ser configurado antes de afirmar que o site está no ar.

## Limitações e próximos passos

- substituir textos e preços de demonstração por conteúdo aprovado;
- adicionar imagens otimizadas e texto alternativo;
- configurar deploy automatizado;
- ampliar os testes de acessibilidade e navegação móvel;
- remover mensagens de `console.log` antes de uma versão de produção.

## Privacidade

Não inclua dados de clientes, imagens sem autorização ou contatos pessoais no repositório. O número de WhatsApp atual (`5500000000000`) é apenas um placeholder.
