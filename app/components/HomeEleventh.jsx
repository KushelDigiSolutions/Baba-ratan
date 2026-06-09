"use client";
import Image from "next/image";

export default function HomeEleventh() {
    return (
        <section className="relative w-full py-10 flex items-center overflow-hidden">

            {/* Background Image - Reverted to mystical scene to remove baba from background */}
            <div className="absolute inset-0 -z-10">
                <Image
                    src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780988463/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_tln9if.png"
                    alt="background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Reddish overlay to match the theme color */}
                <div className="absolute inset-0 bg-[#B8645F]/80"></div>
            </div>

            {/* Content */}
            <div className="max-w-[1720px] mx-auto px-[20px] xl:px-[90px] w-full grid grid-cols-1 lg:grid-cols-[60%_40%] gap-10 items-center">

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
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780988346/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_kmyc8z.webp"
                            alt="Palm Reading Expert India — Vishal Verma Bajrang Astro"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}