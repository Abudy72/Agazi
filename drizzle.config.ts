import { defineConfig } from "drizzle-kit";

export default defineConfig({
  dialect: 'postgresql', // 'mysql' | 'sqlite' | 'turso'
  schema: './libs/db/schemas'
})