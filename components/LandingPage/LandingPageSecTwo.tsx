import Image from "next/image";

const LandingPageSecTwo = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-white">
      <span className="pb-4 text-3xl font-light uppercase text-lightBlue text-center">
        CREATE AND HOST YOUR LEAGUES ON āgāzi
      </span>

      <div className="flex flex-col md:flex-row items-center justify-center py-4 space-y-4 md:space-x-4 md:space-y-0">
        <Image
          width="120"
          height="120"
          src={"questionMark.svg"}
          alt="Team icon"
          className="hidden md:flex"
        />
        <span className="py-4 text-2xl text-white text-center md:text-left">
          <span className="text-lightYellow">Āgāzi</span> is your ultimate tool
          to host and manage leagues!
        </span>
      </div>

      <button className="rounded-3xl border-solid bg-blue p-2 mb-4">
        Setup my league
      </button>

      <div className="flex flex-col items-center md:items-start mt-4 space-y-6">
        {/* Row 1 */}
        <div className="flex items-center space-x-4 w-full">
          <Image width="75" height="75" src={"ben1.svg"} alt="Champion icon" />
          <span className="text-white text-center md:text-left">
            Track your stats, rosters, trades, and match results—all stored for
            long-term access!
          </span>
        </div>
        {/* Row 2 */}
        <div className="flex items-center space-x-4 w-full">
          <Image width="75" height="75" src={"ben2.svg"} alt="Champion icon" />
          <span className="text-white text-center md:text-left">
            Manage schedules, brackets, drafts, franchise, and team
            applications.
          </span>
        </div>

        {/* Row 3 */}
        <div className="flex items-center space-x-4 w-full">
          <Image width="75" height="75" src={"ben3.svg"} alt="Champion icon" />
          <span className="text-white text-center md:text-left">
            Generate power rankings and evaluate team performance with the help
            of our advanced AI models!
          </span>
        </div>

        {/* Row 4 */}
        <div className="flex items-center space-x-4 w-full">
          <Image width="75" height="75" src={"ben4.svg"} alt="Champion icon" />
          <span className="text-white text-center md:text-left">
            Everything integrated within our discord bot!{" "}
            <span className="text-sm text-lightYellow">(coming soon!)</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPageSecTwo;
