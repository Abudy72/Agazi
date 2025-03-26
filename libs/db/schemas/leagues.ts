import { int, varchar, mysqlTable, date } from "drizzle-orm/mysql-core";


export const leagues = mysqlTable("leagues", {
    league_id: int("league_id").primaryKey(),
    league_name: varchar("league_name", { length: 255 }).notNull(),
    current_season: int("current_season").notNull(),
    season_start: date("season_start").notNull(),
    season_end: date("season_end").notNull(),
    league_prizing: int("league_prizing").notNull(),
    rule_book_link: varchar("rule_book_link", { length: 255 }).notNull(),
    discord_link: varchar("discord_link", { length: 255 }).notNull(),
    x_link: varchar("x_link", { length: 255 }).notNull(),
    twitch_link: varchar("twitch_link", { length: 255 }).notNull(),
    logo_link: varchar("logo_link", { length: 255 }).notNull(),
    draft_style: varchar("draft_style", { length: 255 }).notNull(),
    signups: varchar("signups", { length: 255 }).notNull()
});