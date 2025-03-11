import { int, varchar, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { leagues } from "./leagues";

export const divisions = mysqlTable("divisions", {
    division_id: int("division_id").unique(),
    league_id: int("league_id").references(() => leagues.league_id, { onDelete: "cascade" }),
    division_name: varchar("division_name", { length: 255 }).notNull()
}, (table) => {
    return { pk: primaryKey({ columns: [table.league_id, table.division_id] }) };
});