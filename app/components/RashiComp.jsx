"use client";

import { link } from "framer-motion/client";
import Link from "next/link";
import React from "react";

const grahData = [
    {
        name: "Surya",
        hindi: "सूर्य",
        icon: "☀️",
        desc: "Represents power, confidence & leadership.",
        link: "/grah/surya",
    },
    {
        name: "Chandra",
        hindi: "चंद्र",
        icon: "🌙",
        desc: "Controls emotions, mind & peace.",
        link: "/grah/chandra",
    },
    {
        name: "Mangal",
        hindi: "मंगल",
        icon: "🔥",
        desc: "Symbol of courage, strength & energy.",
        link: "/grah/mangal",
    },
    {
        name: "Budh",
        hindi: "बुध",
        icon: "🟢",
        desc: "Represents intelligence & communication.",
        link: "/grah/budh",
    },
    {
        name: "Guru",
        hindi: "गुरु",
        icon: "🟡",
        desc: "Planet of wisdom, growth & spirituality.",
        link: "/grah/guru",
    },
    {
        name: "Shukra",
        hindi: "शुक्र",
        icon: "💖",
        desc: "Represents love, luxury & beauty.",
        link: "/grah/shukra",
    },
    {
        name: "Shani",
        hindi: "शनि",
        icon: "🪐",
        desc: "Planet of discipline, karma & justice.",
        link: "/grah/shani",
    },
    {
        name: "Rahu",
        hindi: "राहु",
        icon: "🌑",
        desc: "Represents illusion, desire & ambition.",
        link: "/grah/rahu",
    },
    {
        name: "Ketu",
        hindi: "केतु",
        icon: "☄️",
        desc: "Symbol of spirituality & detachment.",
        link: "/grah/ketu",
    },
];

const GrahSection = () => {
    return (
        <section className="w-full bg-white py-16 px-4 md:px-10 lg:px-20 overflow-hidden">
            {/* Heading */}
            <div className="text-center mb-12">
                <span className="inline-block px-4 py-1 rounded-full bg-[#e07a63]/10 text-[#d96d55] text-sm font-semibold tracking-wide mb-4">
                    Navgrah Astrology
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-[#5b2d2a] leading-tight">
                    Explore The <span className="text-[#d96d55]">Navgrah</span>
                </h2>

                <p className="max-w-2xl mx-auto mt-4 text-gray-600 text-sm md:text-base leading-7">
                    Understand the influence of the nine planets in astrology and how
                    they affect your life, career, emotions, and destiny.
                </p>
            </div>

            {/* Grah Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {grahData.map((grah, index) => (
                    <Link href={grah.link}
                        key={index}
                        className="group relative bg-[#fff7f4] border border-[#f2d6cf] rounded-3xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                    >
                        {/* Hover Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#e07a63]/10 to-transparent opacity-0 group-hover:opacity-100 transition duration-300" />

                        {/* Content */}
                        <div className="relative z-10">
                            {/* Icon */}
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#e07a63] to-[#f4b3a0] flex items-center justify-center text-4xl shadow-lg mb-5 group-hover:scale-110 transition duration-300">
                                {grah.icon}
                            </div>

                            {/* Names */}
                            <h3 className="text-2xl font-bold text-[#5b2d2a]">
                                {grah.hindi}
                            </h3>

                            <p className="text-[#d96d55] font-medium mt-1">{grah.name}</p>

                            {/* Description */}
                            <p className="text-gray-600 text-sm leading-6 mt-4">
                                {grah.desc}
                            </p>

                            {/* Button */}
                            <button className="mt-6 px-5 py-2 rounded-full bg-[#e07a63] text-white text-sm font-medium hover:bg-[#cf624b] transition">
                                Know More
                            </button>
                        </div>
                    </Link>
                ))}
            </div>
        </section>
    );
};

export default GrahSection;