"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  return <NavBarLG />;
};

const NavBarLG = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="text-white p-4 rounded-lg">
      <nav className="place-self-end max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo {ONLY IF VIEW IS MD+} */}
        <div className="hidden md:flex items-center">
          <div className="flex text-pink-400 text-3xl font-semibold">
            Āgāzi
          </div>
        </div>
        {/* Navigation Links */}
        <NavBarLinks
          screenSettings={
            "hidden md:flex space-x-8 text-lg text-blue-800 rounded-lg"
          }
        />
        <SearchBar screenSettings="hidden md:flex items-center space-x-4" />
        {/* Hamburger Menu Button */}
        <button
          className="md:hidden flex self-start"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
        
        <NavBarLinks
          screenSettings={`${
            isMenuOpen ? "flex" : "hidden"
          } block top-16 left-0 w-full flex-col justify-center text-md text-blue-800 space-y-2 bg-blue-900 p-4 rounded-lg shadow-lg`}
        />
        
      </nav>

      {/* Mobile Search Bar */}
      <SearchBar screenSettings="md:hidden flex justify-center gap-4 pt-4" />
    </header>
  );
};

const NavBarLinks: React.FC<{ screenSettings: string }> = ({
  screenSettings,
}) => {
  return (
    <div className={screenSettings}>
      <Link href="/" className="hover:text-darkYellow">
        HOME
      </Link>
      <Link href="/franchises" className="hover:text-darkYellow">
        Franchises
      </Link>
      <Link href="/leagues" className="hover:text-darkYellow">
        LEAGUES
      </Link>
      <Link href="/apply" className="hover:text-darkYellow">
        JOIN
      </Link>
      <Link href="/about" className="hover:text-darkYellow">
        ABOUT
      </Link>
    </div>
  );
};

const SearchBar: React.FC<{ screenSettings: string }> = ({
  screenSettings,
}) => {
  return (
    <div className={screenSettings}>
      <input
        type="text"
        placeholder="Search leagues or players"
        className="bg-blue text-white p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 w-64"
      />
      <button className="bg-blue text-blue-600 py-2 px-4 rounded-full hover:bg-blue-500 hover:text-darkYellow">
        SEARCH
      </button>
    </div>
  );
};

export default Navbar;
