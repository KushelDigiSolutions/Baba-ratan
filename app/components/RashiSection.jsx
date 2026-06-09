"use client";

import Link from "next/link";
import React from "react";

const rashiData = [
  {
    name: "Aries",
    hindiName: "Mesh (मेष)",
    alt:"Aries Mesh Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♈",
    link: "/rashi/aries",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578897/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_aries_rashi_bklszt.png",
  },
  {
    name: "Taurus",
    hindiName: "Vrishabha (वृषभ)",
    alt:"Taurus Vrishabh Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♉",
    link: "/rashi/taurus",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_taurus_zodiac_fbwdtv.png",
  },
  {
    name: "Gemini",
    hindiName: "Mithuna (मिथुन)",
    alt:"Gemini Mithun Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♊",
    link: "/rashi/gemini",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Palm_Reading_Expert_India_Vishal_Verma_Bajrang_Astro_gemini_zodiac_il9bgr.png",
  },
  {
    name: "Cancer",
    hindiName: "Karka (कर्क)",
    alt:"Cancer Kark Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♋",
    link: "/rashi/cancer",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578894/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_cancer_zodiac_jg8umo.png",
  },
  {
    name: "Leo",
    hindiName: "Simha (सिंह)",
    alt:"Leo Simha Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♌",
    link: "/rashi/leo",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578442/Vishal_Verma_Trusted_Astrologer_in_Meerut_Noida_Ghaziabad_leo_zodiac_wdtoho.png",
  },
  {
    name: "Virgo",
    hindiName: "Kanya (कन्या)",
    alt:"Virgo Kanya Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♍",
    link: "/rashi/virgo",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578442/Vedic_Astrology_Services_India_Bajrang_Astro_virgo_zodiac_r3kzjt.png",
  },
  {
    name: "Libra",
    hindiName: "Tula (तुला)",
    alt:"Libra Tula Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♎",
    link: "/rashi/libra",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780579019/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_libra_zodiac_rw6gjf.png",
  },
  {
    name: "Scorpio",
    hindiName: "Vrishchika (वृश्चिक)",
    alt:"Scorpio Vrishchik Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♏",
    link: "/rashi/scorpio",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Best_Astrologer_in_Delhi_NCR_Bajrang_Astro_Vishal_Johari_scorpio_zodiac_dufegc.png",
  },
  {
    name: "Sagittarius",
    hindiName: "Dhanu (धनु)",
    alt:"Sagittarius Dhanu Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♐",
    link: "/rashi/sagittarius",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Online_Astrology_Consultation_India_Bajrang_Astro_sagittarius_zodiac_oa78ki.png",
  },
  {
    name: "Capricorn",
    hindiName: "Makara (मकर)",
    alt:"Capricorn Makar Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♑",
    link: "/rashi/capricorn",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Bajrang_Astro_Best_Astrologer_in_India_by_Vishal_Verma_capricorn_zodiac_s9hln7.png",
  },
  {
    name: "Aquarius",
    hindiName: "Kumbha (कुंभ)",
    alt:"Aquarius Kumbh Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♒",
    link: "/rashi/aquarius",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578893/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_aquarius_zodiac_ggukcr.png",
  },
  {
    name: "Pisces",
    hindiName: "Meena (मीन)",
    alt:"Pisces Meen Rashi Vedic Astrology India — Bajrang Astro",
    icon: "♓",
    link: "/rashi/pisces",
    image: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578321/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_pisces_zodiac_hvsbhh.png",
  },
];

const renderZodiacSVG = (name) => {
  switch (name) {
    case "Aries":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Ram Horns */}
          <path d="M50 38 C40 24 22 24 19 38 C16 52 30 54 36 45" fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
          <path d="M50 38 C60 24 78 24 81 38 C84 52 70 54 64 45" fill="none" stroke="#f59e0b" strokeWidth="8" strokeLinecap="round" />
          {/* Ram Face */}
          <path d="M36 38 L64 38 L50 70 Z" fill="#ef4444" />
        </svg>
      );
    case "Taurus":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Bull Horns */}
          <path d="M25 38 C20 22 30 17 40 30 C45 34 55 34 60 30 C70 17 80 22 75 38" fill="none" stroke="#94a3b8" strokeWidth="8" strokeLinecap="round" />
          {/* Bull Face */}
          <path d="M32 38 C32 58 40 71 50 71 C60 71 68 58 68 38 Z" fill="#0f766e" />
          {/* Nose details */}
          <ellipse cx="50" cy="61" rx="10" ry="6" fill="#14b8a6" />
        </svg>
      );
    case "Gemini":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Left Twin Head */}
          <circle cx="40" cy="40" r="14" fill="#3b82f6" opacity="0.85" />
          <path d="M26 65 C26 53 34 50 40 50 C46 50 54 53 54 65 Z" fill="#3b82f6" opacity="0.85" />
          {/* Right Twin Head */}
          <circle cx="60" cy="40" r="14" fill="#ec4899" opacity="0.85" />
          <path d="M46 65 C46 53 54 50 60 50 C66 50 74 53 74 65 Z" fill="#ec4899" opacity="0.85" />
        </svg>
      );
    case "Cancer":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Crab Legs */}
          <path d="M25 45 C15 45 15 55 25 55 M25 50 C15 50 15 60 25 60" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" fill="none" />
          <path d="M75 45 C85 45 85 55 75 55 M75 50 C85 50 85 60 75 60" stroke="#f43f5e" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Crab Pincers */}
          <path d="M35 35 C25 25 35 15 42 28" fill="none" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
          <path d="M65 35 C75 25 65 15 58 28" fill="none" stroke="#f43f5e" strokeWidth="6" strokeLinecap="round" />
          {/* Crab Body */}
          <ellipse cx="50" cy="48" rx="18" ry="14" fill="#e11d48" />
        </svg>
      );
    case "Leo":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Lion Mane */}
          <circle cx="50" cy="48" r="24" fill="#ea580c" />
          <path d="M32 30 C20 40 20 60 32 70 C40 78 60 78 68 70 C80 60 80 40 68 30 Z" fill="#f97316" />
          {/* Lion Face */}
          <circle cx="50" cy="50" r="16" fill="#f59e0b" />
          {/* Lion Nose & Cheeks */}
          <path d="M46 54 L54 54 L50 60 Z" fill="#7c2d12" />
        </svg>
      );
    case "Virgo":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Flowing Hair */}
          <path d="M30 40 C30 20 65 15 65 40 C65 65 72 70 55 70 C40 70 30 60 30 40" fill="#f59e0b" />
          {/* Maiden Face */}
          <circle cx="48" cy="45" r="11" fill="#fed7aa" />
          {/* Hair details */}
          <path d="M38 40 C38 32 48 30 52 40" fill="none" stroke="#d97706" strokeWidth="3" />
        </svg>
      );
    case "Libra":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Base Stand */}
          <path d="M50 25 L50 72 M35 72 L65 72" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
          {/* Beam */}
          <path d="M25 35 L75 35" stroke="#475569" strokeWidth="5" strokeLinecap="round" fill="none" />
          {/* Left Scale */}
          <path d="M25 35 L17 55 L33 55 Z" fill="#64748b" />
          {/* Right Scale */}
          <path d="M75 35 L67 55 L83 55 Z" fill="#64748b" />
        </svg>
      );
    case "Scorpio":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Tail */}
          <path d="M50 65 C50 75 32 75 30 60 C28 50 38 45 35 38" fill="none" stroke="#701a75" strokeWidth="5" strokeLinecap="round" />
          <path d="M35 38 L30 35 L38 32 Z" fill="#a21caf" />
          {/* Body */}
          <ellipse cx="50" cy="50" rx="10" ry="16" fill="#4a044e" />
          {/* Claws */}
          <path d="M45 42 C35 38 38 28 42 22" fill="none" stroke="#701a75" strokeWidth="4" strokeLinecap="round" />
          <path d="M55 42 C65 38 62 28 58 22" fill="none" stroke="#701a75" strokeWidth="4" strokeLinecap="round" />
        </svg>
      );
    case "Sagittarius":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Bow */}
          <path d="M28 28 C45 28 65 48 65 65" fill="none" stroke="#d97706" strokeWidth="6" strokeLinecap="round" />
          {/* Bow String */}
          <path d="M28 28 L65 65" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" fill="none" />
          {/* Arrow */}
          <path d="M22 68 L60 30" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" fill="none" />
          <path d="M60 30 L50 28 M60 30 L62 40" stroke="#ea580c" strokeWidth="5" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "Capricorn":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Horns */}
          <path d="M44 35 C38 18 20 22 24 40" fill="none" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
          <path d="M56 35 C62 18 80 22 76 40" fill="none" stroke="#334155" strokeWidth="7" strokeLinecap="round" />
          {/* Goat Face */}
          <path d="M38 35 L62 35 L50 72 Z" fill="#64748b" />
          {/* Ears */}
          <path d="M38 35 L25 45 M62 35 L75 45" stroke="#475569" strokeWidth="4" strokeLinecap="round" fill="none" />
        </svg>
      );
    case "Aquarius":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Water Stream */}
          <path d="M28 55 C15 65 25 75 35 70 C45 65 55 78 68 72" fill="none" stroke="#06b6d4" strokeWidth="5" strokeLinecap="round" />
          {/* Pitcher / Pot */}
          <path d="M45 28 C45 22 55 22 55 28 L62 48 C68 55 60 62 50 62 C40 62 32 55 38 48 Z" fill="#0284c7" />
        </svg>
      );
    case "Pisces":
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full p-2">
          {/* Fish 1 */}
          <path d="M30 45 C30 35 48 35 48 45 C48 55 30 55 30 45" fill="#f59e0b" />
          <path d="M24 40 L30 45 L24 50 Z" fill="#f59e0b" />
          {/* Fish 2 */}
          <path d="M70 55 C70 45 52 45 52 55 C52 65 70 65 70 55" fill="#ea580c" />
          <path d="M76 50 L70 55 L76 60 Z" fill="#ea580c" />
        </svg>
      );
    default:
      return null;
  }
};

const RashiSection = () => {
  return (
    <section className="max-w-[1720px] mx-auto px-[20px] xl:px-[90px] w-full bg-[#fdf6f3] py-12 lg:py-16 overflow-hidden">
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
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 sm:gap-6">
        {rashiData.map((rashi, index) => (
          <Link
            href={rashi.link}
            key={index}
            className="group bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl border border-[#f1d6cf] transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden flex flex-col items-center justify-between"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#e07a63]/10 to-[#f7c4b7]/10 opacity-0 group-hover:opacity-100 transition duration-300" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center text-center h-full w-full">
              
              {/* Flat design circular zodiac image exactly like the screenshot */}
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center overflow-hidden mb-4 transition-transform duration-300 relative">
                {rashi.image ? (
                  <img src={rashi.image} alt={rashi.alt} className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
                ) : (
                  renderZodiacSVG(rashi.name)
                )}
              </div>

              {/* Rashi English Name */}
              <h3 className="text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wider">
                {rashi.name}
              </h3>

              {/* Rashi Hindi Name (Mesha, Vrishabha etc.) */}
              <h4 className="text-lg sm:text-xl font-bold text-[#5b2d2a] group-hover:text-[#e57661] transition mt-1">
                {rashi.hindiName}
              </h4>
            </div>

            {/* View Profile Button */}
            <div className="relative z-10 w-full mt-5 text-center">
              <button className="w-full py-2.5 cursor-pointer rounded-full bg-[#e07a63] text-white text-xs sm:text-sm font-semibold hover:bg-[#cf624b] transition shadow-sm">
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