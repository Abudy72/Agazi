import { int, varchar, bigint, mysqlTable } from "drizzle-orm/mysql-core";
import { matchData } from "./matchData";

export const profiles = mysqlTable("profiles", {
    discord_id: bigint("discord_id", { mode: "number" }).primaryKey(),
    player_id: int("player_id").unique().notNull().references(() => matchData.player_id, { onDelete: "cascade" }),
    player_name: varchar("player_name", { length: 255 }).notNull()
});