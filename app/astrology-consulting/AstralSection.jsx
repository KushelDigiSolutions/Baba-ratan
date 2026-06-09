"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function AstralSection() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.1 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[#251F1E] text-white py-12 lg:py-24 px-6 lg:px-20 overflow-hidden"
        >
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div className={`transition-all duration-1000 ease-out text-center lg:text-left flex flex-col items-center lg:items-start ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-20"}`}>
                    <h2 className="text-4xl lg:text-5xl font-bold max-w-[600px] leading-tight mb-8 lg:mb-12 mx-auto lg:mx-0">
                        Vedic wisdom, applied to your life.
                    </h2>

                    {/* ITEM 1 */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-6 mb-12 group w-full">
                        <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-full bg-[#E57661] transition-transform duration-300 group-hover:scale-110 mx-auto lg:mx-0">
                            <Image
                                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781001832/Online_Astrology_Services_India_Bajrang_Astro_Vishal_Johari_icon_wlalaq.webp"
                                alt="Self Awareness Icon best astrology consultation in delhi by Vishal Verma"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">
                                Know Yourself Deeply
                            </h3>
                            <p className="text-[#FFFFFF]/90 text-lg max-w-[500px] leading-relaxed mx-auto lg:mx-0">
                                Through accurate <span className="font-bold text-white">Janam Kundli analysis</span>, <span className="font-bold text-white">Vishal Verma</span> reveals your true strengths, hidden talents, and emotional patterns so you can make better life decisions every day.
                            </p>
                        </div>
                    </div>

                    {/* ITEM 2 */}
                    <div className="flex flex-col lg:flex-row items-center lg:items-start text-center lg:text-left gap-6 group w-full">
                        <div className="w-14 h-14 shrink-0 flex items-center justify-center rounded-full bg-[#E57661] transition-transform duration-300 group-hover:scale-110 mx-auto lg:mx-0">
                            <Image
                                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781001831/Career_Astrology_Prediction_India_Vishal_Verma_icon_fhfrsa.webp"
                                alt="Perfect Timing Icon best astrology consultation in delhi by Vishal Verma"
                                width={24}
                                height={24}
                                className="object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-semibold mb-3">
                                Right Action at the Right Time
                            </h3>
                            <p className="text-[#FFFFFF]/90 text-lg max-w-[500px] leading-relaxed mx-auto lg:mx-0">
                                <span className="font-bold text-white">Vedic astrology consultation</span> at <span className="font-bold text-white">Bajrang Astro</span> identifies your best dasha periods so you never miss the right moment for career growth, marriage, or financial investment.
                            </p>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE (Rotating Wheel with Static Icons) */}
                <div className={`relative flex justify-center items-center transition-all duration-1000 delay-300 ease-out ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-20"}`}>

                    {/* Wheel Container */}
                    <div className="relative w-full max-w-[450px] aspect-square flex items-center justify-center">

                        {/* Rotating Wheel Asset */}
                        <div className="relative w-full h-full flex items-center justify-center animate-spin-slow overflow-hidden">
                            <img
                                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781001973/Vedic_Birth_Chart_Analysis_India_Bajrang_Astro_npz5lm.png"
                                alt="Online Astrology Services India — Bajrang Astro Vishal Johari"
                                className="w-full h-auto object-contain relative z-10"
                                style={{ clipPath: 'circle(36% at 50% 50%)', transform: 'scale(1.38)' }}
                            />
                        </div>

                        {/* Static Icons Wheel (New Image) */}
                        <div className="absolute inset-0 pointer-events-none z-20 flex items-center justify-center">
                            <img
                                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781002112/Best_Astrologer_in_Noida_Delhi_NCR_Bajrang_Astro_agltlf.png"
                                alt="Icons Wheel best astrology consultation in delhi by Vishal Verma"
                                className="w-full h-auto object-contain"
                                style={{ transform: 'scale(1.14)' }}
                            />
                        </div>

                        {/* Accuracy Rate Box */}
                        <div className="absolute bottom-1 right-0 md:right-10 bg-white text-black rounded-[32px] px-8 py-10 shadow-2xl z-30 transform hover:scale-105 transition-transform duration-300">
                            <h3 className="text-5xl font-bold text-[#E57661] mb-2">98%</h3>
                            <p className="text-sm font-bold tracking-[0.2em] text-gray-800">
                                ACCURACY RATE
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}