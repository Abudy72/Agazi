
import { int, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { divisions } from "./divisions";

export const matches = mysqlTable("matches", {
    match_id: int("match_id").unique(),
    division_id: int("division_id").references(() => divisions.division_id, { onDelete: "cascade" })
}, (table) => {
    return { pk: primaryKey({ columns: [table.division_id, table.match_id] }) };
});