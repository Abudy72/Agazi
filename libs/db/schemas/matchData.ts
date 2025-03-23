import { int, varchar, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { matches } from "./matches";


export const matchData = mysqlTable("match_data", {
    match_id: varchar("match_id",{length: 255}).references(() => matches.match_id, { onDelete: "cascade" }),
    player_id: varchar("player_id", {length: 255}),
    player_name: varchar("player_name", { length: 255 }).notNull(),
    team: varchar("team", { length: 50 }).notNull(),
    assigned_role: varchar("assigned_role", { length: 50 }).notNull(),
    played_role: varchar("played_role", { length: 50 }).notNull(),
    kills: int("kills").notNull().default(0),
    deaths: int("deaths").notNull().default(0),
    assists: int("assists").notNull().default(0),
    gold_earned: int("gold_earned").notNull().default(0),
    xp_earned: int("xp_earned").notNull().default(0),
    damage_dealt: int("damage_dealt").notNull().default(0),
    damage_mitigated: int("damage_mitigated").notNull().default(0),
    damage_taken: int("damage_taken").notNull().default(0),
    minion_damage: int("minion_damage").notNull().default(0),
    npc_damage: int("npc_damage").notNull().default(0),
    ally_healing: int("ally_healing").notNull().default(0),
    self_healing: int("self_healing").notNull().default(0),
    wards_placed: int("wards_placed").notNull().default(0),
    structure_damage: int("structure_damage").notNull().default(0),
    tower_kills: int("tower_kills").notNull().default(0),
    phoenix_kills: int("phoenix_kills").notNull().default(0),
    titan_kills: int("titan_kills").notNull().default(0),
    platform: varchar("platform", {length: 255}).notNull(),
    starter_item: varchar("starter_item", { length: 255 }),
    relic: varchar("relic", { length: 255 }),
    item1: varchar("item1", { length: 255 }),
    item2: varchar("item2", { length: 255 }),
    item3: varchar("item3", { length: 255 }),
    item4: varchar("item4", { length: 255 }),
    item5: varchar("item5", { length: 255 }),
    item6: varchar("item6", { length: 255 })
}, (table) => {
    return { pk: primaryKey({ columns: [table.player_id, table.match_id] }) };
});