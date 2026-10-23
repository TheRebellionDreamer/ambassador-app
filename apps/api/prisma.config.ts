import 'dotenv/config';
import { defineConfig } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
    seed: 'tsx prisma/seed.ts',
  },
  datasource: {
    // generate работает и без БД, поэтому без env() — он падает на отсутствующей переменной
    url: process.env.DATABASE_URL,
  },
});
