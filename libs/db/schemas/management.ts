import { mysqlTable, int, varchar, foreignKey, primaryKey } from "drizzle-orm/mysql-core";
import { leagues } from "./leagues"; // Assuming leagues is defined elsewhere

export const management = mysqlTable(
  "management",
  {
    league_id: int("league_id")
      .notNull()
      .references(() => leagues.league_id, { onDelete: "cascade" }),
    manager_name: varchar("manager_name", { length: 255 }).notNull(),
    manager_title: varchar("manager_title", { length: 255 }).notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.league_id, table.manager_name] }),
    leagueFk: foreignKey({
      columns: [table.league_id],
      foreignColumns: [leagues.league_id],
      name: "management_league_fk",
    }).onDelete("cascade"),
  })
);