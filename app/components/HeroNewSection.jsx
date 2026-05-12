"use client"
import Image from "next/image";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
export default function HeroNewSection() {
    return (
        <section
            className="
    relative w-full xl:py-20 flex items-center justify-center text-white

   bg-[url('https://res.cloudinary.com/dd9tagtiw/image/upload/v1766992308/Group_87_aykgkf.png')]

    bg-cover bg-[position:120%]
  "
        >

            {/* Overlay (optional for better text visibility) */}
            {/* <div className="xl:hidden absolute inset-0 bg-[#E57661]/70"></div> */}

            <div className="relative z-10 max-w-7xl w-full md:px-6 pt-10 xl:py-12 flex flex-col lg:flex-row items-center justify-between md:gap-10">

                {/* LEFT CONTENT */}
                <div className="w-full md:px-0 px-10 xl:pb-0 pb-10 lg:w-1/2 text-center lg:text-left">
                    <h1 className="text-white text-2xl sm:text-3xl lg:text-[40px] max-w-[690px] font-[500] leading-tight">
                        Trusted Astrologer in India
                    </h1>

                    <p className="text-[#FFFFFF] mt-4 text-[18px] sm:text-base lg:text-[24px] xl:max-w-[500px]">
                        Transform Your Space with Vastu Align Your Life with Astrology
                    </p>

                    <p className="text-white mt-4 text-sm md:text-base lg:text-[18px] leading-relaxed xl:max-w-[550px] opacity-90 font-[300]">
                        With 15+ years of experience, <span className="font-semibold">Pandit Vishal Johari</span> at <span className="font-semibold">Bajrang Astro</span> has helped 1000+ families and businesses across India find clarity, peace, and real growth through Janam Kundli, Palm Reading, and expert Vastu Consulting.
                    </p>


                    <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <a href="tel:+918595046368" className="flex text-[21px] cursor-pointer items-center justify-center gap-2 bg-[#e07a5f] border border-[#e07a5f] hover:bg-white hover:text-black transition px-6 py-2 rounded-lg font-[400]">
                            <FaPhoneAlt />
                            Call Us
                        </a>

                        <a 
                            href="https://wa.me/918595046368"
                            target="_blank"
                            rel="noopener noreferrer"
                            className=" w-auto flex text-[21px] cursor-pointer items-center justify-center gap-2 border border-white px-6 py-2 rounded-lg hover:bg-white hover:text-black transition"
                        >
                            <FaWhatsapp size={26} />
                            Chat on WhatsApp
                        </a>
                    </div>

                   
                </div>

                {/* RIGHT IMAGE (BABA) */}
                <div className="md:hidden  w-full lg:w-[400px]  bottom-[-10] flex justify-center lg:justify-end">
                    <Image
                        src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776405399/banner-baba_tlmud0.png"
                        alt="Baba"
                        width={500}
                        height={600}
                        className="w-[250px] sm:w-[320px] lg:w-[450px] h-auto object-contain"
                        priority
                    />
                </div>
            </div>

            {/* DOTS (optional slider style) */}
            <div className="absolute bottom-6 flex gap-2">
                <span className="w-3 h-3 bg-white rounded-full"></span>
                <span className="w-3 h-3 border border-white rounded-full"></span>
                <span className="w-3 h-3 border border-white rounded-full"></span>
            </div>
        </section>
    );
}