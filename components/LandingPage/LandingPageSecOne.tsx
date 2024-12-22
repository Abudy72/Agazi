import Image from "next/image";
import Link from "next/link";

const LandingPageSecOne = () => {
  return (
    <div className="flex flex-col items-center w-full min-h-screen mt-4">
      <div className="flex justify-center m-8">
        <h1 className="py-4 text-center text-lightBlue font-light sm:text-4xl md:text-7xl">
          JOIN THRILLING TOURNAMENTS
        </h1>
      </div>

      {/* Section 1 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
        <Image
          width={150}
          height={150}
          src="/team.svg"
          alt="Team icon"
          className="max-w-[150px]"
        />
        <p className="text-2xl text-white text-center md:text-left">
          Become part of a franchise to connect with others and{" "}
          <span className="text-lightYellow">GROW</span> as a player!
        </p>
      </div>

      {/* Section 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-4 py-4">
        <p className="text-2xl text-white text-center md:text-left">
          Sign up to compete in upcoming leagues and tournaments, and view the{" "}
          <span className="text-lightYellow">ACTION</span> as it unfolds!
        </p>
        <Image
          width={150}
          height={150}
          src="/champ.svg"
          alt="Champion icon"
          className="max-w-[150px]"
        />
      </div>

      {/* Section 3 */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 py-4">
        <Image
          width={150}
          height={150}
          src="/team.svg"
          alt="Team icon"
          className="max-w-[150px]"
        />
        <p className="text-2xl text-white text-center md:text-left">
          Search for teams, compete together, and claim exciting prizes{" "}
          <span className="text-sm text-lightYellow">(if applicable)!</span>
        </p>
      </div>

      {/* Section 4 */}
      <div className="flex flex-col items-center py-8 text-center text-lightBlue">
        <h2 className="sm:text-2xl md:text-4xl font-light">
          CLAIM YOUR ACCOUNT TO DISPLAY
        </h2>
        <h3 className="sm:text-2xl md:text-4xl xl:py-8 font-light" >
          YOUR STATS, POWER RANKINGS, ACHIEVEMENTS, AND MORE!
        </h3>
      </div>

      <div className="flex justify-center gap-4 text-white underline">
        <Link href="/leagues">Leagues</Link>
        <Link href="/franchises">Franchises</Link>
        <Link href="/upcoming">Upcoming leagues</Link>
      </div>
    </div>
  );
};

export default LandingPageSecOne;
