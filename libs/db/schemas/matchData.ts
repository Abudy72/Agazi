import { int, varchar, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { matches } from "./matches";


export const matchData = mysqlTable("match_data", {
    player_id: int("player_id"),
    match_id: int("match_id").references(() => matches.match_id, { onDelete: "cascade" }),
    player_name: varchar("player_name", { length: 255 }).notNull(),
    team: varchar("team", { length: 50 }).notNull(),
    assigned_role: varchar("assigned_role", { length: 50 }).notNull(),
    played_role: varchar("played_role", { length: 50 }).notNull(),
    kills: int("kills").notNull(),
    deaths: int("deaths").notNull(),
    assists: int("assists").notNull(),
    gold_earned: int("gold_earned").notNull(),
    xp_earned: int("xp_earned").notNull(),
    damage_dealt: int("damage_dealt").notNull(),
    damage_mitigated: int("damage_mitigated").notNull(),
    minion_damage: int("minion_damage").notNull(),
    npc_damage: int("npc_damage").notNull(),
    ally_healing: int("ally_healing").notNull(),
    self_healing: int("self_healing").notNull(),
    wards_placed: int("wards_placed").notNull(),
    structure_damage: int("structure_damage").notNull(),
    tower_kills: int("tower_kills").notNull(),
    phoenix_kills: int("phoenix_kills").notNull(),
    titan_kills: int("titan_kills").notNull(),
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