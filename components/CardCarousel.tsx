"use client";
import React, { useEffect, useState } from "react";
import LeagueCard, { LeagueCardProps } from "./League/leagueCards";
import UpcomingMatchCard, { UpcomingMatchProps } from "./Matches/UpcomingMatches";

type Props =
  | { type: "league"; prop: LeagueCardProps[] }
  | { type: "match"; prop: UpcomingMatchProps[] };

const Carousel: React.FC<Props> = ({ type, prop }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % prop.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + prop.length) % prop.length
    );
  };

  const UseIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const handleResize = () => {
        setIsMobile(window.innerWidth <= 768);
      };

      // Initial check
      handleResize();

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return isMobile;
  };

  const getVisibleSlides = () => {
    const isMobile = UseIsMobile();
    const total = prop.length;

    if (isMobile) {
      return [prop[currentIndex]]; // Show only the current card on mobile
    }

    return [
      prop[(currentIndex - 1 + total) % total], // Previous card
      prop[currentIndex], // Current card
      prop[(currentIndex + 1) % total], // Next card
    ];
  };

  return (
    <div>
      <div className="flex flex-row justify-center items-center">
        {/* Prev Button */}
        <button
          className="transform -translate-y-1/2 text-white p-2"
          onClick={prevSlide}
        >
          Prev
        </button>

        {/* Visible Slides */}
        {getVisibleSlides().map((item, index) => (
          <div key={index}>
            {type === "league" ? (
              <LeagueCard {...(item as LeagueCardProps)} />
            ) : (
              <UpcomingMatchCard {...(item as UpcomingMatchProps)} />
            )}
          </div>
        ))}

        {/* Next Button */}
        <button className="text-white p-2" onClick={nextSlide}>
          Next
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center mb-4">
        {prop.map((_, idx) => (
          <div
            key={idx}
            className={`w-2 h-2 rounded-full mx-1 my-2 ${
              idx === currentIndex ? "bg-lightYellow" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
