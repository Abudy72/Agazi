import {StageType } from "../Types/League";


export function generateBrackets(stageType: StageType, divId: string, teamIDs: string[]): [string,string][]{
    if(teamIDs.length === 0){
        throw new Error("No divisions found.")
    }else {
        switch (stageType) {
            case StageType.RR:
                return generateRoundRobinPairs(teamIDs)
            case StageType.SE:
                return generateSingleElimPairs(teamIDs);
            default:
                throw new Error("Please specify a stage type")
        }
    }
}


function generateRoundRobinPairs(teamIds: string[]): [string, string][] {
    const pairs: [string, string][] = [];
    for (let i = 0; i < teamIds.length; i++) {
      for (let j = i + 1; j < teamIds.length; j++) {
        pairs.push([teamIds[i], teamIds[j]]);
      }
    }
  
    return pairs;
  }

  function generateSingleElimPairs(teamIds: string[]): [string, string][] {
    let currentIndex = teamIds.length;
    const pairs: [string, string][] = [];
    // While there remain elements to shuffle...
    while (currentIndex != 0 && pairs.length <= teamIds.length) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [teamIds[currentIndex], teamIds[randomIndex]] = [
        teamIds[randomIndex],
        teamIds[currentIndex],
      ];
    }
    console.log(teamIds);
    let i: number = 0;
    for (i = 0; pairs.length < teamIds.length / 2; i++) {
      pairs.push([teamIds[i], teamIds[(i + 1) * 2]]);
    }
    // CASE FOR LAST ELEMENT.
    pairs[pairs.length - 1] = [
      pairs[pairs.length - 1][0],
      teamIds[teamIds.length - 1],
    ];
    return pairs;
  }

 
