"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const HomeSecond = () => {
    return (
        <section className="w-full py-10 bg-[#f7f7f7]">
            <div className="max-w-[1720px] mx-auto px-[20px] xl:px-[90px] space-y-6">

                <div className="grid grid-cols-1 md:grid-cols-[54%_44%]  gap-6">

                    {/* LEFT CARD */}
                    <div className="bg-white p-6 md:p-10 relative overflow-hidden flex flex-col justify-between min-h-[300px]">

                        {/* Top Icon */}
                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780734832/Palm_Reading_Expert_India_Vishal_Verma_Bajrang_Astro_icon_zxhzno.webp"
                            alt="best astrologer bajrang astro vastu consulting vishal verma"
                            width={30}
                            height={30}
                        />

                        {/* Content */}
                        <div className="lg:max-w-[70%] mt-10 md:mt-20 xl:mt-46">
                            <h2 className="text-3xl font-[400] mb-3 text-center md:text-left">
                                Vastu Consulting
                            </h2>

                            <p className="text-[#44474D] mb-6 leading-relaxed text-center md:text-left">
                               Balance your home, office, or factory with the five fundamental elements of nature and watch how blocked energy transforms into growth, peace, and lasting success. 

                            </p>

                            <Link href="/vastu-consulting" className="text-[#E57661] text-[19px] flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all">
                            Explore Vastu Services ↗
                            </Link>
                        </div>

                        {/* Right Bottom Image */}
                        <Image
                            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776411820/Vastu_Consulting_daaqvl.png"
                            alt="best astrologer bajrang astro vastu consulting vishal verma"
                            width={160}
                            height={160}
                            className="absolute bottom-6 right-7 object-contain hidden sm:block"
                        />

                    </div>

                    {/* RIGHT CARD */}
                    <div
                        className="relative overflow-hidden flex flex-col justify-between p-6 md:p-10 min-h-[300px] text-white"
                        style={{
                            backgroundImage:
                                "url('https://res.cloudinary.com/dumjuhrob/image/upload/v1776411609/Astrology_Services_pekzoy.png')",
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >

                        <div className="absolute inset-0 bg-[#E57661] mix-blend-multiply"></div>

                        <div className="relative z-10">
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776412844/Astrology_Services-icon_sf9g5z.png"
                                alt="best astrologer bajrang astro vastu consulting vishal verma"
                                width={35}
                                height={35}
                            />
                        </div>

                        {/* CONTENT (BOTTOM LEFT) */}
                        <div className="relative z-10">
                            <h2 className="text-3xl font-[400] mb-3 text-center md:text-left">
                                Astrology Services
                            </h2>

                            <p className="text-white mb-6 max-w-[400px] leading-relaxed text-center md:text-left">
                               Unlock the secrets written in your birth chart and the lines of your hands with accurate, honest readings that guide your biggest life decisions. 

                            </p>

                            <Link href="/astrology-consulting" className="flex items-center justify-center md:justify-start gap-2 hover:gap-3 transition-all text-[18px]">
                               Explore Astrology Services ↗
                            </Link>
                        </div>
                    </div>

                </div>


                {/* 🔶 BOTTOM BIG CARD */}
                <div className="grid grid-cols-1 md:grid-cols-2 bg-white">

                    {/* LEFT TEXT */}
                    <div className="p-6 md:p-15 flex flex-col justify-center items-center md:items-start text-center md:text-left">
                        <div className='flex items-center mb-4 gap-2'>
                            <Image
                                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780734833/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_icon_fwxmwl.webp"
                                alt="best astrologer bajrang astro vastu consulting vishal verma"
                                width={20}
                                height={20}
                                className='object-contain'
                            />
                            <p className="text-[#775A19] font-medium">
                                Aura Enhancement
                            </p>
                        </div>

                        <h3 className="text-[18px] md:text-[33px] font-[500] mb-6">
                            Gemstone & Spiritual Shop
                        </h3>

                        <p className="text-[#44474D] max-w-[500px] md:text-[19px] mb-6 leading-relaxed">
                            From certified natural gemstones to energised brass pyramids, every product is carefully selected to strengthen your aura and support your Vastu and astrology remedies.
                        </p>

                        <p className="text-[#44474D] max-w-[500px] md:text-[19px] mb-6 leading-relaxed">
                            All products are 100% authentic, lab-tested, and energised before delivery.
                        </p>

                        <div className="flex gap-4 flex-wrap justify-center md:justify-start">
                            <Link href="/shop" className="bg-[#E57661] cursor-pointer rounded-[6px] text-white px-10 py-4 hover:bg-white hover:text-[#E57661] border border-[#E57661]">
                                Shop Collection
                            </Link>

                            <Link href="/shop" className="border border-[#E57661] cursor-pointer rounded-[6px] text-[#E57661] px-10 py-4 hover:bg-[#E57661] hover:text-white">
                                Authenticity Guide
                            </Link>
                        </div>
                    </div>

                    <div className='relative w-full min-h-[300px]'>
                        {/* RIGHT IMAGE */}
                        <Image
                            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780734833/Vishal_Verma_Trusted_Astrologer_in_Meerut_Noida_Ghaziabad_gemstone_nkmm2f.webp"
                            alt="Bajrang Astro — Best Astrologer in India by Vishal Verma"
                            fill
                            className='object-cover'
                        />
                    </div>

                </div>

            </div>
        </section>
    )
}

export default HomeSecond
