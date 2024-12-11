import { MatchHistoryProps } from "./components/League/MatchResults";
import { LeagueCardProps } from "./components/League/leagueCards";
import { UpcomingMatchProps } from "./components/Matches/UpcomingMatches";
import { Franchise, GameType, MatchUp } from "./libs/models/LeagueDEMO";

export const franchies: string[] = [
  "Royal Jesters",
  "Kittens With Mittens",
  "Hanford Hairnets",
  "La Jungla",
  "The King's Court",
];

export const divisions: string[] = [
  "Athens",
  "Deep Sea",
  "HeavyWeight",
  "Divine"
];

export const platforms: string[] = [
  "PC",
  "Console"
]

export const leaguesMOCKDATA: LeagueCardProps[] = [
  {
    leagueName: "Rising Stars League",
    divisions: ["Division 1", "Division 2"],
    platforms: ["PC", "PlayStation"],
    server: "NA East",
    draft: "Snake Draft",
  },
  {
    leagueName: "Champions United",
    divisions: ["Gold", "Platinum", "Diamond"],
    platforms: ["Xbox", "PC"],
    server: "EU West",
    draft: "Auction Draft",
  },
  {
    leagueName: "Legends Arena",
    divisions: ["Open", "Pro", "Elite"],
    platforms: ["PlayStation", "PC"],
    server: "OCE",
    draft: "Linear Draft",
  },
  {
    leagueName: "Elite Esports",
    divisions: ["Tier 1", "Tier 2"],
    platforms: ["PC"],
    server: "Asia",
    draft: "Random Draft",
  },
  {
    leagueName: "Global Clash",
    divisions: ["Bronze", "Silver", "Gold"],
    platforms: ["PlayStation", "Xbox"],
    server: "NA Central",
    draft: "Snake Draft",
  },
  {
    leagueName: "Victory Circuit",
    divisions: ["North", "South", "East", "West"],
    platforms: ["PC", "PlayStation"],
    server: "SA",
    draft: "Auction Draft",
  },
  {
    leagueName: "Dynasty League",
    divisions: ["Amateur", "Semi-Pro", "Pro"],
    platforms: ["Xbox", "PC"],
    server: "EU Central",
    draft: "Linear Draft",
  },
  {
    leagueName: "Summit Series",
    divisions: ["Novice", "Intermediate", "Advanced"],
    platforms: ["PlayStation"],
    server: "Asia Southeast",
    draft: "Snake Draft",
  },
  {
    leagueName: "Infinity League",
    divisions: ["Core", "Hardcore"],
    platforms: ["PC"],
    server: "ME",
    draft: "Random Draft",
  },
  {
    leagueName: "Conquerors Cup",
    divisions: ["Division A", "Division B"],
    platforms: ["PlayStation", "Xbox", "PC"],
    server: "Africa",
    draft: "Auction Draft",
  },
];



export const upcomingMatchesMOCKDATA: UpcomingMatchProps[] = [
  {
    leagueName: 'Dota 2',
    division: 'Division A',
    teamA: 'Team Alpha',
    teamB: 'Team Delta',
    time: new Date('2024-12-24T02:20:02'),
  },
  {
    leagueName: 'FIFA 23',
    division: 'Division C',
    teamA: 'Team Alpha',
    teamB: 'Team Delta',
    time: new Date('2024-12-27T12:12:02'),
  },
  {
    leagueName: 'Valorant',
    division: 'Division C',
    teamA: 'Team Charlie',
    teamB: 'Team Foxtrot',
    time: new Date('2024-12-25T03:05:02'),
  },
  {
    leagueName: 'League of Legends',
    division: 'Division B',
    teamA: 'Team Bravo',
    teamB: 'Team Foxtrot',
    time: new Date('2024-12-19T12:45:02'),
  },
  {
    leagueName: 'League of Legends',
    division: 'Division D',
    teamA: 'Team Delta',
    teamB: 'Team Charlie',
    time: new Date('2025-01-04T19:10:02'),
  },
  {
    leagueName: 'Dota 2',
    division: 'Division B',
    teamA: 'Team Bravo',
    teamB: 'Team Alpha',
    time: new Date('2025-01-06T10:21:02'),
  },
  {
    leagueName: 'Valorant',
    division: 'Division A',
    teamA: 'Team Charlie',
    teamB: 'Team Echo',
    time: new Date('2024-12-17T19:57:02'),
  },
  {
    leagueName: 'League of Legends',
    division: 'Division D',
    teamA: 'Team Foxtrot',
    teamB: 'Team Bravo',
    time: new Date('2024-12-29T09:55:02'),
  },
  {
    leagueName: 'League of Legends',
    division: 'Division C',
    teamA: 'Team Foxtrot',
    teamB: 'Team Alpha',
    time: new Date('2024-12-18T20:19:02'),
  },
  {
    leagueName: 'Dota 2',
    division: 'Division A',
    teamA: 'Team Bravo',
    teamB: 'Team Charlie',
    time: new Date('2024-12-25T23:26:02'),
  }
];


export function fetchRecentMatches(): MatchHistoryProps[] {
  const demo =
    "https://pbs.twimg.com/profile_images/1745851721350324224/_Cz_nxO1_400x400.jpg";
  const matchA: MatchHistoryProps = {
    match: matchUpA,
    leagueName: leaguesMOCKDATA[0].leagueName,
    division: divisions[0],
    teamALogo: matchUpA.teamA.logo ?? demo,
    teamBLogo: matchUpA.teamB.logo ?? demo,
    teamAWins: 5,
    teamBWins: 10,
    teamALosses: 1,
    teamBLosses: 3,
  };

  const matchB: MatchHistoryProps = {
    match: matchUpA,
    leagueName: "Quacken Smite League",
    division: divisions[0],
    teamALogo: matchUpA.teamA.logo ?? demo,
    teamBLogo: matchUpA.teamB.logo ?? demo,
    teamAWins: 5,
    teamBWins: 10,
    teamALosses: 1,
    teamBLosses: 3,
  };

  const matchD: MatchHistoryProps = {
    match: matchUpA,
    leagueName: "League1",
    division: divisions[0],
    teamALogo: matchUpA.teamA.logo ?? demo,
    teamBLogo: matchUpA.teamB.logo ?? demo,
    teamAWins: 5,
    teamBWins: 10,
    teamALosses: 1,
    teamBLosses: 3,
  };

  const matchC: MatchHistoryProps = {
    match: matchUpA,
    leagueName:"League2",
    division: divisions[1],
    teamALogo: matchUpA.teamA.logo ?? demo,
    teamBLogo: matchUpA.teamB.logo ?? demo,
    teamAWins: 5,
    teamBWins: 10,
    teamALosses: 1,
    teamBLosses: 3,
  };
  const matchE: MatchHistoryProps = {
    match: matchUpA,
    leagueName:"League3",
    division: divisions[2],
    teamALogo: matchUpA.teamA.logo ?? demo,
    teamBLogo: matchUpA.teamB.logo ?? demo,
    teamAWins: 5,
    teamBWins: 10,
    teamALosses: 1,
    teamBLosses: 3,
  };
  const matchF: MatchHistoryProps = {
    match: matchUpA,
    leagueName:"League4",
    division: divisions[0],
    teamALogo: matchUpA.teamA.logo ?? demo,
    teamBLogo: matchUpA.teamB.logo ?? demo,
    teamAWins: 5,
    teamBWins: 10,
    teamALosses: 1,
    teamBLosses: 3,
  };

  return [matchA,matchB,matchC,matchD,matchE,matchF]
}



  export const theCrew: Franchise = {
    franchiseId: 1,
    franchiseName: "The Crew",
    logo: "/DemoLogo.png"
};

export const KWM: Franchise = {
    franchiseId: 3,
    franchiseName: "Kittens With Mittens",
    logo: "/DemoLogo.png"
};

export const FT: Franchise = {
    franchiseId: 4,
    franchiseName: "Flaming Tanukis",
    logo:"/DemoLogo.png"
};

export const HS: Franchise = {
    franchiseId: 5,
    franchiseName: "Heart Shitters",
    logo: "/team.svg"
};

export const matchUpA: MatchUp =  {
    teamA: theCrew,
    teamB: HS,
    isPlayed: true,
    scoreA: 2,
    scoreB: 1,
    matchId: "",
    setId: "",
    matchUpDate: new Date(2024, 7, 23, 14, 30),
    season: 0,
    gameType: GameType.QuarterFinals
  }
  
  export const matchUpB: MatchUp =  {
    teamA: HS,
    teamB: FT,
    isPlayed: true,
    scoreA: 2,
    scoreB: 1,
    matchId: "",
    setId: "",
    matchUpDate: new Date(2024, 7, 23, 14, 30),
    season: 0,
    gameType: GameType.Finals
  }
  export const matchUpC: MatchUp =  {
    teamA: FT,
    teamB: KWM,
    isPlayed: true,
    scoreA: 2,
    scoreB: 1,
    matchId: "",
    setId: "",
    matchUpDate: new Date(2024, 7, 23, 14, 30),
    season: 0,
    gameType: GameType.PlayIns
  }