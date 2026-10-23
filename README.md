# Ambassador App

Приложение для амбассадора табачного бренда: карта заведений, визиты и дегустации, склад, маршруты.
Работает оффлайн и синхронизируется с сервером.

- План и архитектура: [`docs/PLAN.md`](docs/PLAN.md)
- Промпт для продолжения FE-части: [`docs/FE_HANDOFF_PROMPT.md`](docs/FE_HANDOFF_PROMPT.md)

## Структура

| Путь              | Что                                                       |
| ----------------- | --------------------------------------------------------- |
| `apps/api`        | BE: NestJS + Prisma + Postgres                            |
| `apps/web`        | FE: Vite + React + Mantine + Dexie + PWA                  |
| `packages/shared` | `@ambassador/shared`: zod-схемы и типы, общие для FE и BE |

## Требования

- Node 24 (`.nvmrc`), pnpm 10
- PostgreSQL 16: `docker compose up -d postgres` (Docker / OrbStack) или локальный `brew install postgresql@16`

## Запуск

```bash
pnpm install                      # заодно генерирует Prisma Client
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env

pnpm db:up                        # Postgres в Docker
pnpm --filter @ambassador/api db:migrate
pnpm --filter @ambassador/api db:seed

pnpm dev                          # shared (watch) + api + web
# или по отдельности: pnpm dev:api / pnpm dev:web
```

- API: http://localhost:3000. Swagger: http://localhost:3000/docs. Health: `/health`, `/health/ready` (проверяет БД).
- Web: http://localhost:5173

## Скрипты (корень)

| Скрипт                                    | Что делает          |
| ----------------------------------------- | ------------------- |
| `pnpm build`                              | собирает все пакеты |
| `pnpm typecheck`                          | проверка типов      |
| `pnpm lint`                               | oxlint              |
| `pnpm test`                               | unit-тесты          |
| `pnpm format`                             | prettier            |
| `pnpm --filter @ambassador/api test:e2e`  | e2e-тесты API       |
| `pnpm --filter @ambassador/api db:studio` | Prisma Studio       |
