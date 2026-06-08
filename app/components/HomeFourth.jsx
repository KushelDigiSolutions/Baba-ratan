"use client";

import Image from "next/image";

export default function HomeFourth() {
    return (
        <section className="bg-[#f7f7f7] max-w-[1720px] mx-auto px-[20px] xl:px-[90px] py-16 md:px-10 xl:px-35">

            <div className="text-center flex flex-col items-center">
                <p className="text-[#E57661] text-sm tracking-widest font-medium">

                    VASTU SHASTRA

                </p>

                <h3 className="text-2xl md:text-4xl font-[500] mt-3">
                    Why Vastu is Important for Your Success
                </h3>

                <p className="text-[#303030] max-w-[740px] mt-4 text-[14px] md:text-[19px] font-[400]">
                    When your home or workplace is aligned with nature's five elements, success stops feeling like a struggle, it becomes a natural outcome of living and working in the right energy.

                </p>
            </div>

            {/* GRID */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                {/* CARD 1 */}
                <div className="bg-white p-5 md:p-10 rounded-[40px] flex flex-col justify-between">
                    <div>
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-8 mx-auto md:mx-0">
                            <Image src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780646994/Bajrang_Astro_Best_Astrologer_in_India_by_Vishal_Verma_icon_ar8sm0.webp" alt="Trusted Vedic Astrology Consultation India — Bajrang Astro" width={22} height={22} />
                        </div>

                        <h4 className="font-[500] text-[#191C1D] text-2xl text-center md:text-left">Business Growth</h4>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 leading-7 font-[400] text-center md:text-left">
                            Right placement of your office desk and entrance direction directly attracts better clients, bigger deals, and faster <span className="font-bold">business growth in Delhi NCR.</span>
                        </p>
                    </div>

                    <div className="mt-10">
                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780646217/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_g100bf.webp"
                            alt="Vastu Consulting for Home and Office India — Bajrang Astro"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full h-[120px]"
                        />
                    </div>
                </div>

                {/* CARD 2 */}
                <div className="bg-white p-5 md:p-9 rounded-[40px] flex flex-col justify-between">
                    <div>
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-8 mx-auto md:mx-0">
                            <Image src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780646994/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_icon_r7d1hy.webp" alt="Positive Energy-icon-best astrologer-bajrang-astro Vishal Verma" width={22} height={22} />
                        </div>

                        <h4 className="font-[500] text-[#191C1D] text-2xl text-center md:text-left">Positive Energy</h4>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 leading-7 font-[400] text-center md:text-left">
                            A Vastu-balanced home invites fresh, positive energy into every room, reducing stress, improving relationships, and bringing peace to daily life.
                        </p>
                    </div>

                    <div className="mt-6">
                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780646218/Palm_Reading_Expert_India_Vishal_Verma_Bajrang_Astro_woskhd.webp"
                            alt="Vedic Astrology Services India — Bajrang Astro"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full h-[120px]"
                        />
                    </div>
                </div>

                {/* CARD 3 */}
                <div className="bg-white p-5 md:p-9 rounded-[40px] flex flex-col justify-between">
                    <div>
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-8 mx-auto md:mx-0">
                            <Image src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780646994/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_icon_kxjdpm.webp" alt="Removing Obstacles-icon-best astrologer-bajrang-astro Vishal Verma" width={22} height={22} />
                        </div>
                        <h4 className="font-[500] text-[#191C1D] text-2xl text-center md:text-left">Removing Obstacles</h4>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 leading-7 font-[400] text-center md:text-left">
                            Hidden <span className="font-bold text-black">Vastu doshas</span> in your space create invisible blocks in career, health, and finances. We identify and correct them without major renovation.
                        </p>
                    </div>

                    <div className="mt-6">
                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780646219/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_atytli.webp"
                            alt="Best Astrologer in Delhi NCR — Bajrang Astro Vishal Johari"
                            width={400}
                            height={200}
                            className="rounded-lg object-cover w-full h-[120px]"
                        />
                    </div>
                </div>
            </div>

            {/* BOTTOM GRID */}
            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">

                {/* CARD 4 (LEFT - BIG IMAGE) */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-6">

                    <div className="flex-1">
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-4 mx-auto md:mx-0">
                            <Image src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780647208/Palm_Reading_Expert_India_Vishal_Verma_Bajrang_Astro_icon_rlf8b8.webp" alt="Financial Stability-icon-best astrologer-bajrang-astro Vishal Verma" width={22} height={22} />
                        </div>
                        <h4 className="font-[500] text-[#191C1D] text-2xl md:text-3xl">Financial Stability</h4>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 leading-7 font-[400]">
                            Correct South-West zone alignment in your home or office locks in wealth and stops money from draining, giving your finances a strong, stable foundation.
                        </p>
                    </div>

                    <div className="flex-1 w-full">
                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780648395/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_financial_stability_jlfyuf.webp"
                            alt="Janam Kundli Analysis by Best Astrologer in India"
                            width={300}
                            height={200}
                            className="rounded-xl object-cover w-full h-[240px]"
                        />
                    </div>
                </div>

                {/* CARD 5 */}
                <div className="bg-white p-8 rounded-[40px] shadow-sm flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-6">

                    <div className="flex-1 w-full order-2 md:order-1">
                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780648395/Vishal_Verma_Trusted_Astrologer_in_Meerut_Noida_Ghaziabad_peaceful_environment_kbnge9.webp"
                            alt="1000+ Happy Clients Bajrang Astro India — Vishal Verma"
                            width={300}
                            height={200}
                            className="rounded-xl object-cover w-full h-[240px]"
                        />
                    </div>

                    <div className="flex-1 order-1 md:order-2">
                        <div className="w-13 h-13 flex items-center justify-center bg-[#E57661] rounded-xl mb-4 mx-auto md:mx-0">
                            <Image src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780647208/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_icon_p05rev.webp" alt="Peaceful Environment-icon-best astrologer-bajrang-astro Vishal Verma" width={22} height={22} />
                        </div>

                        <h4 className="font-[500] text-[#191C1D] text-2xl md:text-3xl">Peaceful Environment</h4>
                        <p className="text-[#44474D]/90 text-[16px] mt-4 leading-7 font-[400]">
                            Balancing air, water, and earth elements in your living or work space naturally reduces stress, improves focus, and brings lasting harmony to your daily life.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}