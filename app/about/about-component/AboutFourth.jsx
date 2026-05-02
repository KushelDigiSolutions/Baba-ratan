"use client";

import Image from "next/image";

export default function AboutFourth() {
  return (
    <section className=" max-w-[1720px] mx-auto px-4 md:px-10 lg:px-20 py-10 bg-[#f4f4f4]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-[70%_30%] gap-6">

        {/* LEFT CARD */}
        <div className="bg-[#E57661] text-white rounded-2xl p-6 md:p-15 flex flex-col justify-between min-h-[300px]">

          <div className="mb-6">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776501098/Deep_Personal_Reading_xd3s9a.png"
              alt="icon"
              width={40}
              height={40}
            />
          </div>

          <div>
            <h3 className="text-2xl md:text-3xl font-[500] mb-4">
              Janam Kundli & Palm Reading

            </h3>

            <p className="text-sm md:text-base text-white leading-relaxed max-w-[400px]">
              Pandit Vishal Johari doesn't just read your chart — he understands your life. Book a 1:1 Vedic astrology consultation for a complete Janam Kundli analysis and hast rekha reading personalised only for you.
              .
            </p>
          </div>

          <div className="mt-8">
            <a href="https://wa.me/918595046368" target="_blank" rel="noopener noreferrer" className="flex group items-center cursor-pointer gap-2 text-[16px] font-semibold tracking-wide">
              WhatsApp Us   <span className="transition-transform duration-300 group-hover:translate-x-2">
                →
              </span>
            </a>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-[#FFFFFF] rounded-2xl p-6 xl:p-10 flex flex-col items-center justify-center text-center min-h-[300px]">

          <div className="mb-4">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776501098/Transit_Updates_mawp64.png"
              alt="icon"
              width={40}
              height={40}
            />
          </div>

          <h3 className="text-2xl md:text-3xl font-[500] mb-3">
            Weekly Astrology Updates

          </h3>

          <p className="text-[16px] text-gray-600 max-w-xs mb-6">
            Get weekly insights on how current planetary movements and dasha changes are affecting your Kundli straight from the best astrologer in India.
            .
          </p>

          <button className="bg-[#E57661] text-white px-5 py-2 rounded-lg text-sm font-medium hover:bg-white hover:border hover:border-[#E57661] border hover:text-[#E57661] cursor-pointer border-[#E57661]  transition">
            Book Now

          </button>
        </div>

      </div>
    </section>
  );
}