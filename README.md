# Personal Site · yuhara.dev

Portfólio pessoal de Renan Yuhara: engenharia de software, projetos e interesses.

> Estado: primeira versão em desenvolvimento. Conteúdo e identidade visual sujeitos a revisão antes da publicação.

## Stack

- Next.js (App Router), React e TypeScript
- CSS responsivo sem dependências de UI
- CI no GitHub Actions (lint, typecheck e build)
- Deploy previsto: Vercel, com domínio gerido separadamente

## Executar localmente

Requer Node.js 22 ou superior.

```bash
npm install
npm run dev
```

Abre http://localhost:3000.

## Qualidade

```bash
npm run lint
npm run typecheck
npm run build
```

## Estrutura

- `src/app`: rotas, metadados e estilos
- `src/data`: informações públicas e projetos exibidos no site
- `.github/workflows`: pipeline CI
- `SECURITY.md`: política de segurança e checklist de publicação

## Publicação e privacidade

Este repositório é **público**. Não comitar tokens, credenciais, endereços residenciais, documentos internos ou dados pessoais de terceiros. A informação profissional é apresentada de forma genérica até ser revista.

Para configuração opcional, usa `.env.local` (ignorando-o no Git). Não colocar segredos em variáveis `NEXT_PUBLIC_*`.

Deploy e domínio **ainda não foram configurados**. Antes do lançamento, rever textos, links, SEO e consentimento para fotografias.

## Próximos passos

1. Validar o texto biográfico e os projetos a destacar.
2. Rever identidade visual, fotografias e eventual versão EN/PT.
3. Configurar Vercel, domínio e políticas da branch principal.
4. Acrescentar testes e acessibilidade.
