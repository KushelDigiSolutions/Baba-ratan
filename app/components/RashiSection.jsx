"use client";

import Link from "next/link";
import React from "react";

const rashiData = [
  {
    name: "Aries",
    icon: "♈",
    link: "/rashi/aries",
  },
  {
    name: "Taurus",
    icon: "♉",
    link: "/rashi/taurus",
  },
  {
    name: "Gemini",
    icon: "♊",
    link: "/rashi/gemini",
  },
  {
    name: "Cancer",
    icon: "♋",
    link: "/rashi/cancer",
  },
  {
    name: "Leo",
    icon: "♌",
    link: "/rashi/leo",
  },
  {
    name: "Virgo",
    icon: "♍",
    link: "/rashi/virgo",
  },
  {
    name: "Libra",
    icon: "♎",
    link: "/rashi/libra",
  },
  {
    name: "Scorpio",
    icon: "♏",
    link: "/rashi/scorpio",
  },
  {
    name: "Sagittarius",
    icon: "♐",
    link: "/rashi/sagittarius",
  },
  {
    name: "Capricorn",
    icon: "♑",
    link: "/rashi/capricorn",
  },
  {
    name: "Aquarius",
    icon: "♒",
    link: "/rashi/aquarius",
  },
  {
    name: "Pisces",
    icon: "♓",
    link: "/rashi/pisces",
  },
];

const RashiSection = () => {
  return (
    <section className="w-full bg-[#fdf6f3] py-12 lg:py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-16">
        <span className="inline-block px-4 sm:px-5 py-2 rounded-full bg-[#e07a63]/10 text-[#e57661] text-xs sm:text-sm font-bold tracking-wider mb-4 uppercase">
          Zodiac Directory
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#5b2d2a] leading-[1.2] sm:leading-tight">
          Explore Your Moon Sign
        </h2>

        <p className="max-w-3xl mx-auto mt-6 text-gray-650 text-base md:text-lg leading-8">
          Select your zodiac sign to reveal detailed reports on personality traits, career paths, relationship compatibility, and targeted planetary remedies.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-3 sm:gap-5">
        {rashiData.map((rashi, index) => (
          <Link
            href={rashi.link}
            key={index}
            className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-sm hover:shadow-xl border border-[#f1d6cf] transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e07a63]/10 to-[#f7c4b7]/10 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gradient-to-br from-[#e07a63] to-[#f3b39f] flex items-center justify-center text-white text-3xl sm:text-4xl shadow-lg mb-4 sm:mb-5 group-hover:scale-110 transition duration-300">
                {rashi.icon}
              </div>

              {/* English Name */}
              <h3 className="text-lg sm:text-xl font-bold text-[#5b2d2a] group-hover:text-[#e57661] transition">
                {rashi.name}
              </h3>

              {/* Button */}
              <button className="mt-4 sm:mt-5 px-4 sm:px-5 py-2 cursor-pointer rounded-full bg-[#e07a63] text-white text-xs sm:text-sm font-medium hover:bg-[#cf624b] transition">
                View Profile
              </button>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default RashiSection;