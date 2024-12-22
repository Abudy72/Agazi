import React from "react";
import Image from "next/image";
import { Match } from "@/libs/Types/League";

export interface MatchHistoryProps {
  match: Match;
  leagueName: string;
  division: string;
  teamALogo: string;
  teamBLogo: string;

  teamAWins: number;
  teamBWins: number;
  teamALosses: number;
  teamBLosses: number;
}

const MatchResultComponent: React.FC<MatchHistoryProps> = ({
  teamALogo,
  teamBLogo,
  leagueName,
  match,
  division,
  teamAWins,
  teamALosses,
  teamBWins,
  teamBLosses,
}) => (
  <div>
    <div className="hidden relative md:flex items-center space-x-4 p-1 w-fit">
      <span className="text-2xl absolute top-0 text-white left-0 p-3">{leagueName}</span>
      <Image width="120" height="120" alt="" src={teamALogo} className="m-10" />
      <span className="font-semibold text-lightYellow text-xl p-0">
        {match.sides.home.score?.score ?? 0} - {match.sides.visitor.score?.score ?? 0}
      </span>
      <Image width="120" height="120" alt="" src={teamBLogo} className="m-10" />
      <p className="font-semibold max-w-64">
        <span className="text-xl">{division}</span> <br></br>
        {match.sides.home.team?.name}: &nbsp;W:{teamAWins} &nbsp;L:{teamALosses}{" "}
        <br></br>
        {match.sides.visitor.team?.name}: &nbsp;W:{teamBWins} &nbsp;L:{teamBLosses}
      </p>
    </div>

    <div>
      <div className="flex flex-col items-center space-y-4 p-4 rounded-lg text-white w-full md:hidden">
        {/* League Name */}
        <span className="text-lg text-white font-semibold">{leagueName}</span>

        {/* Teams and Score */}
        <div className="flex items-center justify-between w-full space-x-4">
          {/* Team A */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              width="60"
              height="60"
              alt={`${match.sides.home.team?.name} logo`}
              src={teamALogo}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-center">
              {match.sides.home.team?.name}
            </span>
          </div>

          {/* Score */}
          <span className="text-2xl text-lightYellow  font-bold">
          {match.sides.home.score?.score} - {match.sides.visitor.score?.score}
          </span>

          {/* Team B */}
          <div className="flex flex-col items-center space-y-2">
            <Image
              width="60"
              height="60"
              alt={`${match.sides.visitor.team?.name} logo`}
              src={teamBLogo}
              className="rounded-full"
            />
            <span className="text-sm font-medium text-center">
              {match.sides.visitor.team?.name}
            </span>
          </div>
        </div>

        {/* Division and Stats */}
        <div className="flex flex-col items-center text-center space-y-2">
          <span className="text-sm">{division}</span>
          <p className="text-xs">
            {match.sides.home.team?.name}: W:{teamAWins} L:{teamALosses}
            <br />
            {match.sides.visitor.team?.name}: W:{teamBWins} L:{teamBLosses}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default MatchResultComponent;
