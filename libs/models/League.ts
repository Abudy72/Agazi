export interface MatchUp {
    teamA: Franchise;
    teamB: Franchise;

    isPlayed: boolean;
    scoreA?: number;
    scoreB?: number;
    matchId: string;
    setId: string;

    matchUpDate: Date;
    season: number;
    gameType: GameType;
}

export enum GameType {
    PlayIns,
    QuarterFinals,
    SemiFinals,
    Finals
}
export interface Franchise {
    franchiseId: number;
    franchiseName: string;
    logo?: string;
}

export function gameTypeToString(gameType: GameType): string {
    switch (gameType) {
        case GameType.PlayIns:
            return "Play-Ins";
        case GameType.QuarterFinals:
            return "Quarter Finals";
        case GameType.SemiFinals:
            return "Semi Finals";
        case GameType.Finals:
            return "Finals";
        default:
            return "Unknown Game Type";
    }
}