"use client";

import React from "react";

const astrologyServices = [
    {
        title: "Match Making",
        image:
            "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Kundli",
        image:
            "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Planet Transits",
        image:
            "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Remedies",
        image:
            "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Love",
        image:
            "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Panchang",
        image:
            "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Tarot Reading",
        image:
            "https://images.unsplash.com/photo-1515942661900-94b3d1972591?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Numerology",
        image:
            "https://images.unsplash.com/photo-1501139083538-0139583c060f?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Vastu",
        image:
            "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Zodiac Signs",
        image:
            "https://images.unsplash.com/photo-1532968961962-8a0cb3a2d4f5?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Festivals",
        image:
            "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=1200&auto=format&fit=crop",
    },
    {
        title: "Spirituality",
        image:
            "https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1200&auto=format&fit=crop",
    },
];

const FreeAstrologyReadings = () => {
    return (
        <section className="w-full bg-[#f8f4f1] py-16 px-4 md:px-10 lg:px-20">
            {/* Heading */}
            <div className="mb-12">
                <span className="inline-block px-4 py-1 rounded-full bg-[#e07a63]/10 text-[#d96d55] text-sm font-semibold tracking-wide mb-4">
                     Astrology Services
                </span>

                <h2 className="text-3xl md:text-5xl font-bold text-[#5b2d2a]">
                     Astrology Readings
                </h2>

                <p className="text-gray-600 mt-4 max-w-2xl mx-auto lg:mx-0 text-sm md:text-base leading-7">
                    Explore free astrology tools and spiritual guidance including kundli,
                    horoscope, tarot, vastu, numerology and more.
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
                {astrologyServices.map((service, index) => (
                    <div
                        key={index}
                        className="group cursor-pointer"
                    >
                        {/* Image */}
                        <div className="relative overflow-hidden rounded-3xl">
                            <img
                                src={service.image}
                                alt={service.title+"best astrologer bajrang astro vishal verma"}
                                className="w-full h-[170px] object-cover rounded-3xl transition duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/25 transition duration-300 rounded-3xl" />
                        </div>

                        {/* Title */}
                        <h3 className="text-center mt-4 text-lg md:text-xl font-semibold text-[#2f1a18] group-hover:text-[#d96d55] transition">
                            {service.title}
                        </h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FreeAstrologyReadings;