"use client";

import { link } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const rashiData = [
    {
        name: "Aries",
        hindi: "मेष",
        icon: "♈",
        link: "/rashi/aries",
    },
    {
        name: "Taurus",
        hindi: "वृषभ",
        icon: "♉",
        link: "/rashi/taurus",
    },
    {
        name: "Gemini",
        hindi: "मिथुन",
        icon: "♊",
        link: "/rashi/gemini",
    },
    {
        name: "Cancer",
        hindi: "कर्क",
        icon: "♋",
        link: "/rashi/cancer",
    },
    {
        name: "Leo",
        hindi: "सिंह",
        icon: "♌",
        link: "/rashi/leo",
    },
    {
        name: "Virgo",
        hindi: "कन्या",
        icon: "♍",
        link: "/rashi/virgo",
    },
    {
        name: "Libra",
        hindi: "तुला",
        icon: "♎",
        link: "/rashi/libra",
    },
    {
        name: "Scorpio",
        hindi: "वृश्चिक",
        icon: "♏",
        link: "/rashi/scorpio",
    },
    {
        name: "Sagittarius",
        hindi: "धनु",
        icon: "♐",
        link: "/rashi/sagittarius",
    },
    {
        name: "Capricorn",
        hindi: "मकर",
        icon: "♑",
            link: "/rashi/capricorn",
    },
    {
        name: "Aquarius",
        hindi: "कुंभ",
        icon: "♒",
        link: "/rashi/aquarius",
    },
    {
        name: "Pisces",
        hindi: "मीन",
        icon: "♓",
        link: "/rashi/pisces",
    },
];

const RashiSection = () => {
    return (
        <section className="w-full bg-[#fdf6f3] py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 rounded-full bg-[#e07a63]/10 text-[#d96d55] text-sm font-semibold tracking-wide mb-4">
                    Astrology Guidance
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-[#5b2d2a] leading-tight">
                    Explore Your <span className="text-[#d96d55]">Rashi</span>
                </h2>

                <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-sm md:text-base leading-7">
                    Discover personality traits, horoscope insights, compatibility,
                    strengths, and future predictions based on your zodiac sign.
                </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5">
                {rashiData.map((rashi, index) => (
                    <Link href={rashi.link}
                        key={index}
                        className="group bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl border border-[#f1d6cf] transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e07a63]/10 to-[#f7c4b7]/10 opacity-0 group-hover:opacity-100 transition duration-300" />

                        {/* Content */}
                        <div className="relative z-10 flex flex-col items-center text-center">
                            {/* Icon */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e07a63] to-[#f3b39f] flex items-center justify-center text-white text-4xl shadow-lg mb-5 group-hover:scale-110 transition duration-300">
                                {rashi.icon}
                            </div>

                            {/* Hindi Name */}
                            <h3 className="text-lg md:text-xl font-bold text-[#5b2d2a]">
                                {rashi.hindi}
                            </h3>

                            {/* English Name */}
                            <p className="text-sm text-gray-500 mt-1">{rashi.name}</p>

                            {/* Button */}
                            <button className="mt-5 px-5 py-2 cursor-pointer rounded-full bg-[#e07a63] text-white text-sm font-medium hover:bg-[#cf624b] transition">
                                View Details
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default RashiSection;