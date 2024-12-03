import { divisions } from "@/mockData";
export interface LeagueCardProps {
  leagueName: string;
  divisions: string[];
  platforms: string[];
  server: string;
}

const LeagueCard: React.FC = () => {
  //FETCH LEAGUE DATA.

  return (
    <div className="bg-secondaryBG text-lightBlue p-4 rounded-lg w-64">
      <div className="text-center text-xl font-bold mb-4">League1</div>
      <div className="text-center mb-2 border-t border-white pt-2">
        Draft
      </div>
      <div className="space-y-2 mb-2 border-t pt-2 border-white">
        {divisions.map((div, index) => {
          return <div key={index} className="text-center text-lightYellow">{div}</div>
        })}
      </div>
      <div className="text-center border-t border-white pt-2 mb-2">
        PC . Console
      </div>
      <div className="text-center border-t border-white pt-2">
        Server: NA
      </div>
    </div>
  );
};

export default LeagueCard;
