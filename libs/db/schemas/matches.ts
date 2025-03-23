
import { int, mysqlTable, primaryKey, varchar } from "drizzle-orm/mysql-core";
import { divisions } from "./divisions";

export const matches = mysqlTable("matches", {
    match_id: varchar("match_id", {length: 255}).unique(),
    division_id: int("division_id").references(() => divisions.division_id, { onDelete: "cascade" }),
    winning_team: varchar("winning_team", {length: 255}).notNull(),
    duration: varchar("duration", {length: 255}).notNull()
    
}, (table) => {
    return { pk: primaryKey({ columns: [table.division_id, table.match_id] }) };
});