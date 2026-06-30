# Тактика основателя

Практический цех пересборки бизнеса. Сайт построен на TanStack Start + Vite + Tailwind v4.

## Разработка

```bash
bun install
bun run dev
```

## Production build

```bash
bun install
bun run build
node .output/server/index.mjs
```

Сервер слушает порт из переменной `PORT` (по умолчанию 3000).

## Деплой

Проект синхронизирован с Lovable. Любой коммит в `main` (хоть из Lovable, хоть напрямую в GitHub) попадает в репозиторий и может быть подхвачен сервером через `git pull` + rebuild.