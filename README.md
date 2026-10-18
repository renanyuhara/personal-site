# Personal Site · yuhara.dev

Personal portfolio of Renan Yuhara, built with Next.js, React, and TypeScript.

> Work in progress. The public website has not been deployed.

## Languages and conventions

**English is the default language for everything:** source code, comments, documentation, issues, pull requests, commit messages, and website content.

The website currently supports:

- English: `/en` (default; `/` redirects to `/en`)
- Portuguese: `/pt`

Translations are stored in `src/i18n/messages/`. The locale is explicit in the URL; no automatic browser-language redirection occurs. Text changes should update **both** dictionaries.

## Development

Node.js 22 or later is recommended.

```bash
npm install
npm run dev
```

Visit http://localhost:3000 (redirects to `/en`).

Quality checks:

```bash
npm run lint
npm run typecheck
npm run build
```

## Project structure

- `src/app/[locale]`: localized pages, HTML language, and SEO metadata
- `src/i18n`: supported locales, dictionaries, and translations
- `src/data`: public profile details and project metadata
- `src/middleware.ts`: default-English redirect
- `.github/workflows`: CI
- `SECURITY.md`: security guidelines

## Security

The repository is **public**. Never commit credentials, private addresses, internal workplace information, or third-party personal data. Keep secrets in hosting environment variables and never expose them through `NEXT_PUBLIC_*` variables.

The production domain, hosting, and branch protections are not configured yet. Review all biographical text and links before enabling search indexing.

## Next steps

1. Run CI and check the website locally.
2. Review the English copy and Portuguese translations.
3. Add tests, accessibility checks, and reproducible dependency lockfile.
4. Configure hosting and custom domain after approval.
