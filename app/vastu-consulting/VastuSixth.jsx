"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";



export default function VastuSixth() {
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const data = {
        residential: {
            title: "Home Vastu Consulting",
            desc: "Transform your home into a place of peace, health, and abundance with Vishal Verma expert home Vastu analysis across India.",
            img: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780998652/Best_Vastu_Consultant_in_Meerut_Bajrang_Astro_xmysor.webp",
        },
        commercial: {
            title: "Office Vastu Consulting",
            desc: "Align your workplace energy to boost team performance, attract better clients, and grow your business revenue consistently.",
            icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780998652/Vastu_Shastra_Expert_India_Vishal_Verma_Bajrang_Astro_icon_q63xqj.webp",
        },
        plot: {
            title: "Plot & Land Analysis",
            desc: "Before you buy or build let Vishal Verma analyse the soil energy, directional slope, and Vastu compatibility of your plot to avoid future problems.",
            icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780998651/Vastu_Consulting_for_Business_India_Bajrang_Astro_icon_bjuu1s.webp",
        },
        industrial: {
            title: "Factory & Industrial Vastu",
            desc: "Reduce machine breakdowns, worker issues, and production losses with a complete factory Vastu consultation customised for large industrial spaces.",
            img: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780998775/Vastu_Site_Visit_Noida_Gurgaon_Ghaziabad_Bajrang_Astro_oo95zh.webp",
        },
    };

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

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="bg-[radial-gradient(140.3%_104.29%_at_10%_20%,rgba(254,212,136,0.15)_0%,#F8F9FA_90%)] py-10 px-4 md:px-10 lg:px-20 overflow-hidden"
        >
            <div className="max-w-[1250px] mx-auto flex flex-col gap-6">
                <div className={`transition-all duration-1000 text-center lg:text-left flex flex-col items-center lg:items-start ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                    <h4 className="text-[28px] md:text-[40px] font-[500] text-[#1E1E1E]">
                        Our Vastu{" "}
                        <span className="text-[#E57661]">Services</span>
                    </h4>

                    {/* Subtext */}
                    <p className="text-[16px] md:text-[25px] text-[#303030]">
                        Expert analysis for every property type across India.
                    </p>
                </div>

                {/* TOP SECTION */}
                <div className="grid lg:grid-cols-[57%_43%] justify-center items-center gap-2">

                    {/* BIG CARD */}
                    <div className={`bg-[#FFFFFF] p-4 md:p-6 rounded-3xl transition-all duration-1000 delay-300 flex flex-col items-center lg:items-start text-center lg:text-left ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="rounded-2xl overflow-hidden">
                            <Image
                                src={data.residential.img}
                                alt="Home Vastu Consulting Expert India — Bajrang Astro"
                                width={800}
                                height={500}
                                className="w-full object-contain rounded-2xl"
                            />
                        </div>

                        <h4 className="text-2xl md:text-[30px] font-[500] mt-4 text-[#303030]">
                            {data.residential.title}
                        </h4>
                        <p className="text-lg md:text-[20px] max-w-[550px] text-[#303030] mt-2">
                            {data.residential.desc}
                        </p>
                    </div>

                    {/* SMALL CARD */}
                    <div className={`bg-[#D9735B] h-auto lg:min-h-[350px] min-h-[380px] text-white p-11 lg:p-8 xl:p-11 rounded-3xl flex flex-col justify-between items-center lg:items-start text-center lg:text-left transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex flex-col items-center lg:items-start">
                            <Image
                                src={data.commercial.icon}
                                alt="best office vastu consultant in india — Bajrang Astro"
                                width={40}
                                height={40}
                            />
                            <h4 className="text-2xl md:text-[30px] font-[500] mt-4">
                                {data.commercial.title}
                            </h4>
                            <p className=" text-[#FFFFFF] max-w-[400px] text-lg md:text-[20px] mt-2 opacity-100">
                                {data.commercial.desc}
                            </p>
                        </div>
                        <button className="mt-6 cursor-pointer text-[19px] flex items-center justify-center lg:justify-start w-full lg:w-auto">
                            <span className="border-b border-white pb-[2px]">
                                Explore Strategy
                            </span>
                            <FiArrowUpRight size={35} className="text-2xl" />
                        </button>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="grid lg:grid-cols-[40%_60%] gap-2">

                    {/* LEFT CARD */}
                    <div className={`bg-[#775A19] text-white p-12 rounded-3xl flex flex-col justify-between items-center lg:items-start text-center lg:text-left transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="flex flex-col items-center lg:items-start">
                            <Image
                                src={data.plot.icon}
                                alt="Plot Vastu Consultant India — Bajrang Astro"
                                width={80}
                                height={80}
                            />
                            <h5 className="lg:text-[30px] text-[25px] font-[500] mt-4">
                                {data.plot.title}
                            </h5>
                            <p className="lg:text-[19px] text-[16px] mt-2 opacity-96">
                                {data.plot.desc}
                            </p>
                        </div>

                        <button className="mt-6 cursor-pointer text-[19px] flex items-center justify-center lg:justify-start w-full lg:w-auto">
                            <span className="border-b border-white pb-[2px]">
                                Explore Strategy
                            </span>
                            <FiArrowUpRight size={30} />
                        </button>
                    </div>

                    {/* RIGHT CARD */}
                    <div className={`bg-[#FFFFFF] px-12 xl:py-0 py-6 rounded-[40px] flex lg:flex-row flex-col gap-9 items-center transition-all duration-1000 delay-900 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
                        <div className="lg:w-[200px] lg:h-[200px] rounded-xl overflow-hidden shrink-0">
                            <Image
                                src={data.industrial.img}
                                alt="Factory Vastu Consulting India — Vishal Verma"
                                width={300}
                                height={300}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <h5 className="text-2xl md:text-[30px] font-[500] text-[#303030]">
                                {data.industrial.title}
                            </h5>
                            <p className="text-lg md:text-[20px] text-[#303030] mt-2">
                                {data.industrial.desc}
                            </p>
                            <button className="mt-3 cursor-pointer text-[16px] text-[#D9735B] flex items-center justify-center lg:justify-start w-full lg:w-auto">
                                <span className="border-b border-white pb-[2px]">
                                    Learn More
                                </span>
                                <FiArrowUpRight size={30} className="text-2xl" />
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}