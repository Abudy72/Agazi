export interface PlayerPersonalStats {
    // KDA
    kills: number;
    deaths: number;
    assists: number;

    //Damage
    dmg_dealt: number;
    dmg_mitigated: number;
    dmg_taken: number;
    dmg_magical: number;
    dmg_physical: number;
    dmg_magical_taken: number;
    dmg_physical_taken: number;
    dmg_structure: number;

    
    // Misc
    healing: number;
    healing_self: number;
    distance: number;
    gold: number;
}