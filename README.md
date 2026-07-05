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

## Автодеплой на TimeWeb

В репозитории есть GitHub Actions workflow `.github/workflows/deploy.yml`. Он срабатывает на каждый push в `main`, собирает проект и выкладывает `.output` на сервер `5.129.220.101` в `/var/www/app`, после чего перезапускает приложение на порту `3000`.

Для запуска нужно добавить в GitHub Secrets только приватный SSH-ключ:

```text
TIMEWEB_SSH_KEY
```

Публичную часть этого ключа нужно добавить на сервер в `/root/.ssh/authorized_keys`. Nginx должен проксировать домены `tacticfound.ru` и `www.tacticfound.ru` на `http://127.0.0.1:3000`.