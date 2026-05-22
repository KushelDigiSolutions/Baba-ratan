"use client";
import Image from "next/image";

export default function VastuSeveth() {
    return (
        <section className="bg-[radial-gradient(113.61%_98.59%_at_20%_70%,#D6E3FF_0%,rgba(214,227,255,0)_40%),radial-gradient(106.8%_92.68%_at_70%_30%,#FFDEA5_0%,rgba(255,222,165,0)_40%)] py-12 md:py-20 px-4 md:px-10 lg:px-20">
            <div className="max-w-7xl relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                    <h5 className="text-4xl md:text-[26px] max-w-[500px] lg:text-5xl font-[500] text-[#222]">
                        Centuries of Wisdom. Practical <span className="text-[#E57661]">Results.</span>
                    </h5>

                    <p className="mt-6 text-[#303030] text-lg md:text-[20px] leading-relaxed max-w-[500px]">
                        Vishal Verma at Bajrang Astro doesn't just rearrange your space he identifies the root energy blocks and corrects them using authentic Vastu Shastra principles combined with today's practical approach.
                    </p>

                    {/* POINTS */}
                    <div className="mt-8 space-y-4 w-full flex flex-col items-center lg:items-start">
                        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                            <div className="w-10 h-10 rounded-full bg-[#e07a5f] flex items-center justify-center shrink-0">
                                <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842224/15_Years_of_Proven_Spatial_Alchemy_kh84hf.png" width={30} height={30} alt="" />
                            </div>
                            <p className="text-[#303030] font-[400] text-lg">
                                15+ Years of Trusted Vastu Expertise
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
                            <div className="w-10 h-10 rounded-full bg-[#e07a5f] flex items-center justify-center shrink-0">
                                <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842224/15_Years_of_Proven_Spatial_Alchemy_kh84hf.png" width={30} height={30} alt="" />
                            </div>
                            <p className="text-[#303030] font-[400] text-lg">
                                1000+ Homes & Businesses Transformed Across India
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT CARDS */}
                <div className="relative flex justify-center flex-col lg:pb-25 items-center gap-10 lg:transform lg:-translate-y-10 lg:translate-x-9 lg:justify-end w-full">

                    {/* TOP CARD */}
                    <div className="relative z-10 lg:h-[380px] bg-white rounded-3xl p-6 md:p-10 w-[280px] sm:w-[320px] lg:w-[480px] shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col items-center lg:items-start text-center lg:text-left">

                        <div className="mb-4 text-[#e07a5f] text-2xl">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842225/Scientific_Precision_taxxwp.png" width={20} height={20} alt="Scientific_Precision_" />
                        </div>

                        <h5 className="text-xl md:text-2xl font-[500] text-[#222]">
                            Accurate & Systematic Analysis
                        </h5>

                        <p className="mt-3 text-[#303030] text-lg leading-relaxed">
                            Using precise directional mapping to ensure zero-margin error in every Vastu correction.
                        </p>
                    </div>

                    {/* BOTTOM DARK CARD */}
                    <div className="lg:absolute z-20 
                        top-50 lg:-left-10
                      bg-[#1f1a17] text-white 
                        rounded-3xl p-9 md:p-8 
                         w-[300px] sm:w-[340px] lg:w-[460px] lg:h-[340px]
                          shadow-2xl flex flex-col items-center lg:items-start text-center lg:text-left">

                        <div className="mb-4 text-[#e07a5f] text-2xl">
                            <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776842224/Deep_Spiritual_Rooting_ao3zw8.png" width={40} height={40} alt="" />
                        </div>

                        <h5 className="text-xl md:text-2xl font-[500]">
                            Rooted in Original Vastu Shastra
                        </h5>

                        <p className="mt-3 text-[#FFFFFF]/90 text-lg max-w-[360px] leading-relaxed">
                            Every recommendation is cross-referenced with authentic Vedic Vastu scriptures for absolute accuracy.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}