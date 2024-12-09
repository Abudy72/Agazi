import React from "react";
import Image from "next/image";

type CompletedMatchsProps = {
    teamA: string;
    teamB: string,
    scoreA: number;
    scoreB: number;
}
export const CompletedMatchs: React.FC<{
  prop: CompletedMatchsProps;
}> = ({ prop }) => {
  return (
    <div>
        <div className="flex flex-row items-center text-xl">
        <span className="m-1">{prop.teamA}</span>
            <Image height={150} width={150} src={"teamACat.svg"} alt={""}/>
            <span className="text-lightYellow m-4">{prop.scoreA} - {prop.scoreB}</span>
            <Image height={150} width={150} src={"teamBCat.svg"} alt={""}/>
            <span className="m-1">{prop.teamB}</span>
        </div>
    </div>
  )
};
