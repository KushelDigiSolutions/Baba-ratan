"use client";
import Image from "next/image";

export default function HomeFifth() {
    const cards = [
        { text: "Business not growing", icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780986048/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_icon_c2vkg3.webp" },
        { text: "Financial instability", icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780986048/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_icon_btrray.webp" },
        { text: "Stress at home or office", icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780986048/Palm_Reading_Expert_India_Vishal_Verma_Bajrang_Astro_icon_gqh0ov.webp" },
        {
            text: " Constant negative energy"
                
            , icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780986048/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_icon_dzi4rb.webp"
        },
        { text: "Repeated failures in career", icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780986049/Vishal_Verma_Trusted_Astrologer_in_Meerut_Noida_Ghaziabad_icon_h206tm.webp" },
        { text: "Conflicts in relationships", icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780986048/Vedic_Astrology_Services_India_Bajrang_Astro_icon_fm9q6w.webp" },
    ];

    return (
        <section className=" relative max-w-[1720px] mx-auto px-[20px] xl:px-[90px] py-16 md:px-10">
            {/* <Image
        src="YOUR_BG_IMAGE_URL"
        alt="background"
        fill
        priority
        className="object-cover -z-10"
      /> */}
            <div className="absolute inset-0 bg-[#FED48826] -z-10" />
            <div className="max-w-[1720px] mx-auto px-[20px] xl:px-[90px]">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h5 className="text-2xl md:text-[35px] font-[500] text-black">
                       Struggling in Your Life or Business? 

                    </h5>

                    <p className="mt-4 text-[#303030] text-[16px] md:text-[23px] font-[400] max-w-[850px] mx-auto">
                        Most problems we face are not just bad luck they may be silently caused by <span className="font-bold">Vastu imbalances</span> or unfavourable planetary positions in your <span className="font-bold">Janam Kundli.</span>
                    </p>
                </div>

                {/* Main Layout */}
                <div className="grid xl:grid-cols-[55%_40%] gap-10 md:gap-20 items-stretch">

                    {/* LEFT GRID */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {cards.map((item, index) => (
                            <div
                                key={index}
                                className="bg-[#FFFFFFCC]/80 rounded-2xl p-8 transition duration-300 flex flex-col gap-4 items-center text-center xl:items-start xl:text-left"
                            >

                                <div className="relative w-6 h-6">
                                    <Image
                                        src={item.icon}
                                        alt={item.text +"-icon-best astrologer bajrang astro vishal verma"}
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <p className="text-[#000000] mt-auto font-[400] text-[17px] md:text-[19px] leading-snug">
                                    {item.text}
                                </p>
                            </div>
                        ))}
                    </div>


                    <div className="relative rounded-[30px] overflow-hidden h-[280px] sm:h-[350px] md:h-[450px]">

                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780985034/Bajrang_Astro_Best_Astrologer_in_India_by_Vishal_Verma_ytyqw7.png"
                            alt="Vastu Shastra Consultation India — Bajrang Astro"
                            fill
                            priority
                            className="object-cover"
                        />

                        <div className="absolute inset-0 bg-black/10" />

                        {/* TOP CARD */}
                        <div className="absolute top-4 right-4 bg-[#FFFFFF] rounded-[20px] px-4 py-5 flex flex-col gap-1">
                            <div className="flex flex-col items-start gap-2">

                                <div className="relative w-4 h-4">
                                    <Image
                                        src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776421669/VASTU_PRECISION_bjdywk.png"
                                        alt="shield"
                                        fill
                                        className="object-contain"
                                    />
                                </div>

                                <span className="text-[11px] font-[500] text-[#44474D] tracking-wide">
                                    VASTU PRECISION
                                </span>
                            </div>

                            <p className="text-sm font-bold text-[#303030]">
                                99.8% Alignment
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}