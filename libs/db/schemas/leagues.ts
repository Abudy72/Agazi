import { int, varchar, mysqlTable } from "drizzle-orm/mysql-core";


export const leagues = mysqlTable("leagues", {
    league_id: int("league_id").primaryKey(),
    league_name: varchar("league_name", { length: 255 }).notNull(),
    current_season: int("current_season").notNull()
});