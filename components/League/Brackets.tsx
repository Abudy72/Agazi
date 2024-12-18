import React from "react";
import { Bracket } from "react-tournament-bracket";
import { Game, Side } from "react-tournament-bracket/lib/components/model";


const MultiBracketTournament = () => {

  return (
    <div className="overflow-x-auto">
       <Bracket game={finals} /> 
    
    </div>
  );
};

export default MultiBracketTournament;

const g1 : Game = {
  id: "g1",
  name: "BO3",
  scheduled: 1702548000000,
  bracketLabel: "Regular Season",
  sides: {
    [Side.HOME]: {
      team: { id: "team-A", name: "Team A" },
      score: { score: 0 }
    },
    [Side.VISITOR]: {
      team: { id: "team-B", name: "Team B" },
      score: { score: 0 }
    },
  },
}

const g2 : Game = {
  id: "g2",
  name: "Play Ins",
  scheduled: 1702548000000,
  sides: {
    [Side.HOME]: {
      team: { id: "team-C", name: "Team C" },
      score: { score: 0 }
    },
    [Side.VISITOR]: {
      team: { id: "team-D", name: "Team D" },
      score: { score: 0 }
    },
  },
}

const g3 : Game = {
  id: "g3",
  name: "Play Ins",
  scheduled: 1702548000000,
  sides: {
    [Side.HOME]: {
      team: { id: "team-E", name: "Team E" },
    },
    [Side.VISITOR]: {
      team: { id: "team-F", name: "Team F" },
    },
  },
}

const g4 : Game = {
  id: "g4",
  name: "Play Ins",
  scheduled: 1702548000000,
  sides: {
    [Side.HOME]: {
      team: { id: "team-H", name: "Team H" },
    },
    [Side.VISITOR]: {
      team: { id: "team-I", name: "Team I" },
    },
  },
}
 // // // // // //
const g1_3 : Game = {
  id: "g1_3",
  name: "Semi Finals",
  scheduled: 1702548000000,
    sides: {
      [Side.HOME]: {
        seed: {
          displayName: "Winner Of B1",
          rank: 1,
          sourceGame: g1,
          sourcePool: { type: "Group A" },
        }
      },
      [Side.VISITOR]: {
        seed: {
          displayName: "Winner Of B2",
          rank: 1,
          sourceGame: g2,
          sourcePool: { type: "Group A" },
        }
      },
    }
  }


const g2_4 : Game = {
  id: "g2_4",
  name: "Semi Finals",
  scheduled: 1702548000000,
  sides: {
    [Side.HOME]: {
      seed: {
        displayName: "Winner of B3",
        rank: 1,
        sourceGame: g4,
        sourcePool: { type: "Group A" },
      }
    },
    [Side.VISITOR]: {
      seed: {
        displayName: "Winner of B4",
        rank: 1,
        sourceGame: g3,
        sourcePool: { type: "Group A" },
      }
    },
  },
}

const finals : Game = {
  id: "finals",
  name: "Finals",
  scheduled: 1702548000000,
  sides: {
    [Side.HOME]: {
      team: { id: "team-B", name: "Team B" },
      score: { score: 2 },
      seed: {
        displayName: "1st Seed",
        rank: 1,
        sourceGame: g1_3,
        sourcePool: { type: "Group A" },
      }
    },
    [Side.VISITOR]: {
      team: { id: "team-E", name: "Team E" },
      score: { score: 1 },
      seed: {
        displayName: "1st Seed",
        rank: 1,
        sourceGame: g2_4,
        sourcePool: { type: "Group A" },
      }
    },
  },
}




