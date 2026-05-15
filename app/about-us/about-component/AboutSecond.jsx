"use client";
import Image from "next/image";

export default function AboutSecond() {
  return (
    <section className="w-full bg-[#D9D9D9]/5 py-10 px-6 md:px-20 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[48%_52%] gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-3xl md:text-[40px] font-[500] text-[#303030] mb-6">
            Who We Are
          </h2>

          <p className="text-[#303030] text-[17px] max-w-[580px] md:text-[21px] leading-relaxed mb-5">
            Bajrang Astro is led by Vishal Verma, one of the best astrologers in India, with 15+ years of experience in Vedic astrology consultation, accurate Janam Kundli analysis, and expert palm reading across India. .
          </p>

          <p className="text-[#303030] max-w-[580px] text-[17px] md:text-[21px] leading-relaxed">
            Our approach is simple, honest, and practical, no fear tactics, no false promises. Just clear online astrology services and real guidance that helps you make better decisions in career, marriage, health, and finances.


          </p>
        </div>

        {/* RIGHT IMAGE CARD */}
        <div className="flex relative w-full justify-center ">
          <div className="absolute w-full md:max-w-[520px] h-[280px] md:h-[300px] bottom-0 bg-[#B76463] rounded-[10px] "></div>
          <div className="relative w-full max-w-md h-[350px] md:h-[380px]   overflow-hidden flex items-end justify-center">

            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776405399/banner-baba_tlmud0.png"
              alt="person"
              width={400}
              height={500}
              className="object-contain h-full w-auto"
              priority
            />
          </div>
        </div>

      </div>
    </section>
  );
}
