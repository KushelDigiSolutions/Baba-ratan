"use client";

import { Percent } from "lucide-react";
import Image from "next/image";

export default function HomeEigth() {
    const cards = [
        {
            id: 1,
            beforeImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430366/Low_Growth_Poor_Energy_Flow_nfaknr.png"
            ,
            afterImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430368/Balanced_Space_Positive_Energy_zdur5k.png",

            Percent: "+60%",

            result: "  Revenue Growth",
            desc: "Achieved within 4 months of office, Vastu correction and owner desk repositioning in Noida.",
        },

        {
            id: 2,
            beforeImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430367/Frequent_Stress_Dark_Tones_nu6bf1.png",
            afterImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430367/Improved_Harmony_Aligned_Flow_qglrri.png",

            result: "Total Domestic Peace",
            desc: "Family conflicts were reduced completely through South-West bedroom correction and North-East zone clearing.",
        },
        {
            id: 3,
            beforeImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430366/Confusion_Instability_c6kb9n.png",
            afterImg:
                "https://res.cloudinary.com/dumjuhrob/image/upload/v1776430365/Clarity_Opportunities_akbuyl.png",

            result: "Promoted Within 6 Months",
            desc: "Career growth unlocked by activating the North zone for wealth and professional success.",
        },
    ];

    return (
        <section className="max-w-[1720px] mx-auto px-[20px] xl:px-[90px] py-16 bg-[#F8F9FA]">
            {/* HEADER */}
            <div className="text-center max-w-2xl mx-auto mb-12">
                <p className="text-[#E57661] font-medium tracking-wide text-sm">
                    THE POWER OF VASTU
                </p>

                <h5 className="text-2xl md:text-4xl font-semibold mt-3 text-gray-800">
                    See the Difference the Right Direction Can Make

                </h5>

                <p className="text-gray-500 mt-4 text-sm md:text-base">
                    Real people. Real problems. Real results. See how Bajrang Astro Vastu consulting turned stagnation into success across India.

                </p>
            </div>

            {/* CARDS */}
            <div className="space-y-12 flex flex-col">
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className="relative rounded-[40px] md:mx-10 xl:mx-30 overflow-hidden"
                    >
                        {/* IMAGE GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-2">

                            <div className="relative h-[220px] sm:h-[280px] md:h-[500px]">
                                <Image
                                    src={card.beforeImg}
                                    alt="before"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative h-[220px] sm:h-[280px] md:h-[500px]">
                                <Image
                                    src={card.afterImg}
                                    alt="after"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* CENTER FLOATING CARD */}
                        <div className="md:absolute mt-6 md:mt-0 inset-0 md:flex md:items-center md:justify-center px-4">
                            <div className="bg-white md:bg-white/92 md:backdrop-blur-[1px] rounded-[30px] p-6 md:p-10 flex flex-col items-center justify-center text-center mx-auto max-w-[400px]">
                                <p className="text-[#E57661] text-[17px] font-[300] mb-2">
                                    THE TRANSFORMATION
                                </p>

                                <h5 className={`text-2xl xl:text-[40px] max-w-[350px] ${card.id == 1 ? "font-[500]" : "font-[700]"} leading-11 text-[#000000]`}>
                                    {card.Percent && <span className="font-bold">{card.Percent}</span>} {card.result}
                                </h5>

                                <p className="text-[#44474D] max-w-[400px] text-[16px] xl:text-[17px] mt-5">
                                    {card.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}