# react-object-calisthenics

## Layout

- `src/domain/`: the cart, currency and welcome-survey logic. No React here.
- `src/ui/`: pages, components and primitives that read and call the domain.
- `src/config/`: every configurable value. `src/i18n/`: locales and message catalogs.
- `scripts/prerender.mjs`: renders every route x locale after `vite build`.

## Domain: Object Calisthenics

The domain is the point of the repo, so it holds the rules in
[CONTRIBUTING.md](./CONTRIBUTING.md#object-calisthenics).

- Wrap primitives in value objects, keep classes small, no `else`, one dot per line.
- Domain classes are immutable: a change returns a new instance.
- Write the failing spec first, in `__spec__/` next to the class.

## UI

- Primitives live in `src/ui/primitives`. `components.json` still points shadcn at
  `@/components/ui`, so move what `pnpm dlx shadcn@latest add` writes there.
- Every string goes through `useTranslations()`; `fr.ts` must match `en.ts`.

## Checks

Run `pnpm verify` before a pull request, and `pnpm build && pnpm test:e2e` after a UI or routing
change. Tests follow the testing trophy: mostly integration tests in `src/ui`, unit tests in
`src/domain`, and the three Playwright specs in `e2e/`.

## Releases: changesets, not commits

Shiplane versions from `.changeset/*.md` only. Commit types (`feat`, `fix`) release nothing.

- A pull request that changes the built site adds a changeset (`pnpm changeset`) for
  `react-object-calisthenics`: one sentence, for a visitor; it becomes the changelog line.
- No changeset for what stays out of the build: tests, repository docs, CI, tooling.
- Never edit a `CHANGELOG.md` or a version by hand: the release pull request does it.
- A ship goes to `/preview/` first (`BASE_PATH` set, analytics off), then `pnpm release promote`.

## Env

`.env` is local and ignored; `.env.example` documents it. Never commit `.env`.
