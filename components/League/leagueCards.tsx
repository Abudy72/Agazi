export interface LeagueCardProps {
  leagueName: string;
  divisions: string[];
  platforms: string[];
  server: string;
  draft: string;
}

const LeagueCard: React.FC<LeagueCardProps> = ({leagueName, divisions, platforms, server, draft}) => {
  return (
    <div className="bg-secondaryBG text-lightBlue p-4 rounded-lg w-64 shadow-lg">
      <div className="text-center text-xl font-bold mb-4">{leagueName}</div>
      <div className="text-center mb-2 border-t border-white pt-2">
        {draft}
      </div>
      <div className="space-y-2 mb-2 border-t pt-2 border-white">
        {divisions.map((div, index) => {
          return <div key={index} className="text-center text-lightYellow">{div}</div>
        })}
      </div>
      <div className="text-center border-t border-white pt-2 mb-2">
        <>[ {' '}</>{platforms.map((platform, index) => {
          return <span key={index}>{platform} {' '} </span>
        })}<>]</>
      </div>
      <div className="text-center border-t border-white pt-2">
        Server: {server}
      </div>
    </div>
  );
};

export default LeagueCard;
