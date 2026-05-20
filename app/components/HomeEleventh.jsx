"use client";
import Image from "next/image";

export default function HomeEleventh() {
    return (
        <section className="relative max-w-[1720px] mx-auto py-10 md:px-0 px-4 flex items-center overflow-hidden">

            {/* Background Image - Reverted to mystical scene to remove baba from background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776405311/mystical-numerology-scene_2_m39keo.png"
                    alt="background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Reddish overlay to match the theme color */}
                <div className="absolute inset-0 bg-[#B8645F]/80"></div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">

                {/* LEFT TEXT */}
                <div className="text-white space-y-6 xl:px-0 px-4 sm:px-10 flex flex-col items-center text-center lg:items-start lg:text-left">
                    <h6 className="text-3xl sm:text-4xl md:text-5xl max-w-[600px] font-[500] leading-tight">
                        Discover What the Stars & Your Hands Reveal About Your Future

                    </h6>

                    <p className="text-sm sm:text-base md:text-2xl text-white leading-relaxed max-w-[600px]">
                        At <span className="font-semibold text-white">Bajrang Astro</span>, every <span className="font-semibold text-white">Janam Kundli</span> and <span className="font-semibold text-white">palm reading</span> session is deeply personal. We don't give generic predictions, we study your unique planetary positions and hand lines to give you honest, accurate guidance that actually helps you make better life decisions.
                    </p>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative md:ml-20 w-[280px] sm:w-[350px] md:w-[420px] lg:w-[500px] h-[350px] sm:h-[420px] md:h-[500px] lg:h-[500px]">
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776492605/Get_a_Glimpse_into_Your_Future_with_Our_Accurate_Astrology_Predictions_uxqy2g.png"
                            alt="astrology hand"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}