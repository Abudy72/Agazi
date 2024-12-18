class LeagueSettings {
    public static MAX_TEAM_SIZE = 8;
    public static MAX_TEAMS_ALLOWED = 32;
    public static MIN_GROUPS_ALLOWED = 2;
    
    numberOfTeamsRequired: number;
    maxTeamSize: number;

    constructor(numberOfTeamsRequired: number, maxTeamSize: number) {
        this.numberOfTeamsRequired = numberOfTeamsRequired;
        this.maxTeamSize = maxTeamSize;
      }
}

export default LeagueSettings;