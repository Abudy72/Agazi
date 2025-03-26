import { mysqlTable, int, varchar, primaryKey } from "drizzle-orm/mysql-core";
import { leagues } from "./leagues"; 

export const owners = mysqlTable(
  "owners",
  {
    league_id: int("league_id")
      .notNull()
      .references(() => leagues.league_id, { onDelete: "cascade" }),
    owner_name: varchar("owner_name", { length: 255 }).notNull(),
  },
  (table) => ({
    pk: primaryKey({ columns: [table.league_id, table.owner_name] }),
  })
);