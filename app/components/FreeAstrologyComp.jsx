"use client";

import React from "react";

const astrologyServices = [
    {
        title: "Match Making",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654311/1000_Happy_Clients_Bajrang_Astro_India_Vishal_Verma_match_making_a6spql.jpg",
    },
    {
        title: "Kundli",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654311/Best_Astrologer_in_Delhi_NCR_Bajrang_Astro_Vishal_Johari_kundli_f1ksqy.jpg",
    },
    {
        title: "Planet Transits",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654311/Online_Astrology_Consultation_India_Bajrang_Astro_planet_transit_acywsr.jpg",
    },
    {
        title: "Remedies",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654311/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_remedies_fialnt.jpg",
    },
    {
        title: "Love",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654312/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_love_ujnr0f.jpg",
    },
    {
        title: "Panchang",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654342/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_panchang_dfgde3.jpg",
    },
    {
        title: "Tarot Reading",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654342/Vishal_Verma_Trusted_Astrologer_in_Meerut_Noida_Ghaziabad_tarot_reading_rqrfr5.jpg",
    },
    {
        title: "Numerology",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654342/Vedic_Astrology_Services_India_Bajrang_Astro_numerology_ttxf6d.jpg",
    },
    {
        title: "Vastu",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654311/Palm_Reading_Expert_India_Vishal_Verma_Bajrang_Astro_vastu_bziao7.jpg",
    },
    {
        title: "Zodiac Signs",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654312/Best_Astrologer_in_Delhi_NCR_Bajrang_Astro_Vishal_Johari_zodiac_apnvil.jpg",
    },
    {
        title: "Festivals",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654312/Online_Astrology_Consultation_India_Bajrang_Astro_festivals_dkvjnh.jpg",
    },
    {
        title: "Spirituality",
        image:
            "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780654344/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_spritiulity_elfyft.jpg",
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