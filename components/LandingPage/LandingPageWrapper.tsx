"use client";
import LandingPageSecOne from "./LandingPageSecOne";
import LandingPageSecTwo from "./LandingPageSecTwo";

const LandingPageWrapper = () => {

  return (
    <div>
      <div className="hidden md:flex md:flex-col ">
        <div>
          <LandingPageSecOne />
        </div>

        <div>
          <LandingPageSecTwo />
        </div>
      </div>

      <div className="md:hidden flex">
        <LandingPageSecOne />
      </div>

      <div className="sm:hidden flex">
        <LandingPageSecTwo />
      </div>
    </div>
  );
};

export default LandingPageWrapper;
