import { Division } from "@/libs/Types/League";
import { FaDiscord, FaTwitter, FaTwitch } from "react-icons/fa";
import Image from "next/image";

export interface LeagueInfoProps {
  leagueName: string;
  season: number;
  seasonStart: string;
  seasonEnd: string;
  leaguePrizing: number;
  Divisions: Division[];

  ruleBookLink: string;
  discordLink: string;
  twitterLink: string;
  twitchLink: string;
  logoLink: string;

  owners: string[];
  management: [string, string][]; // [ManagerName, ManagerTItle]
}

const LeagueInfo: React.FC<{ leagueInfo: LeagueInfoProps }> = ({
  leagueInfo,
}) => {
  return (
    <div className="bg-[#0A2B5C]  text-white p-6 rounded-lg flex flex-col md:flex-row max-w-7xl mx-auto mb-4 ">
      {/* Left Section */}
      <div className="flex flex-col items-center w-full p-4">
        <Image
          src={leagueInfo.logoLink} // Replace with actual image path
          alt={`${leagueInfo.leagueName} Logo`}
          className="mb-4"
          width="250"
          height="250"
        />
        <h2 className="text-xl font-bold py-2">{leagueInfo.leagueName}</h2>
      </div>

      {/* Right Section */}
      <div className="w-full p-4">
        <h3 className="text-xl font-bold text-yellow-400 py-2 ">League Info</h3>
        <p className="p-0.7">Current Season: {leagueInfo.season}</p>
        <p className="p-0.7">Season Starts:  {leagueInfo.seasonStart}</p>
        <p className="p-0.7">Season Ends:    {leagueInfo.seasonEnd}</p>
        <p className="p-0.7">
          League Prizing: {leagueInfo.leaguePrizing.toLocaleString()} GEMS
        </p>
        <p className="py-2 text-lg font-bold">Divisions:</p>
        <ul className="list-disc pl-5 py-0.5">
          {leagueInfo.Divisions.map((div, index) => (
            <li key={index}>{div.division_name}</li>
          ))}
        </ul>
        <p className="text-blue-400 underline cursor-pointer">Rule book</p>
        {/* Socials */}

        <div className="flex space-x-4 py-2 text-2xl mt-4">
          <a href={leagueInfo.discordLink}><FaDiscord className="cursor-pointer hover:text-blue-400" /></a>
          <a href={leagueInfo.twitterLink}><FaTwitter className="cursor-pointer hover:text-blue-400" /></a>
          <a href={leagueInfo.twitchLink}><FaTwitch className="cursor-pointer hover:text-blue-400" /></a>
        </div>
      </div>
      {/* Staff Directory */}
      <div className="w-full p-4">
        <h3 className="text-lg font-bold text-yellow-400">Staff Directory:</h3>
        <p className="font-bold py-2">Owner(s):</p>
        <ul>
          {leagueInfo.owners.map((owner, key) => (
            <li key={key} className="py-0.7">
              {owner}
            </li>
          ))}
        </ul>
        <p className="font-bold py-2">Management:</p>
        <ul>
          {leagueInfo.management.map((manager, key) => (
            <li key={key} className="py-0.7">
              {manager[1]}: {manager[0]}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LeagueInfo;
