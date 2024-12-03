export interface UpcomingMatchProps {
  leagueName: string;
  division: string;
  teamA: string;
  teamB: string;
  time: Date;
}

const UpcomingMatchCard: React.FC<UpcomingMatchProps> = ({
  leagueName,
  division,
  teamA,
  teamB,
  time,
}) => (
  <div className="bg-secondaryBG text-lightBlue p-4 rounded-lg w-64">
    <div className="text-center text-xl font-bold mb-4">{leagueName}</div>
    <div className="text-center mb-2 border-t border-white pt-2">{division}</div>
    <div className="text-center space-y-2 mb-2 border-t pt-2 border-white">
        <span className="text-xl text-lightYellow"> {teamA} <br/> </span>
        <span className="text-lightYellow"> vs <br/></span>
        <span className="text-xl text-lightYellow"> {teamB} </span>
        <div className="text-center border-t border-white pt-2 mb-2">
            {formatDate(time)}
        </div>
        </div>
  </div>
);

function formatDate(date: Date): string {
    // Options to format the date components (day of the week, month, day of the month)
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: "short", // e.g., Wed.
      month: "short", // e.g., Nov.
      day: "numeric", // e.g., 15
    };
  
    // Options to format the time components (hour, minute, period like AM/PM)
    const timeOptions: Intl.DateTimeFormatOptions = {
      hour: "numeric",
      minute: "numeric",
      hour12: true, // Ensures we get AM/PM format
      timeZoneName: "short", // Time zone abbreviation (e.g., EST)
    };
  
    // Get the formatted date and time separately
    const formattedDate = new Intl.DateTimeFormat("en-US", dateOptions).format(
      date
    );
    const formattedTime = new Intl.DateTimeFormat("en-US", timeOptions).format(
      date
    );
  
    // Return the combined formatted date and time
    return `${formattedDate} ${formattedTime}`;
  }
  

export default UpcomingMatchCard;
