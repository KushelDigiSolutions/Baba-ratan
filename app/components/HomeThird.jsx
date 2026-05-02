"use client"
import Link from 'next/link'
export default function HomeThird() {
  return (
    <section className="max-w-[1720px] mx-auto bg-white py-16 px-4 flex items-center justify-center">
      
      <div className=" flex flex-col items-center text-center ">
   
        <h3 className="text-3xl md:text-[40px] font-medium text-gray-800 leading-tight">
         Real Guidance Backed by Centuries of Wisdom
        </h3>

        <p className="mt-6 text-[#303030] text-base md:text-[20px] max-w-[850px] leading-relaxed font-[400]">
          At <span className="font-semibold text-black">Bajrang Astro</span>, we blend the time-tested knowledge of <span className="font-semibold text-black">Janam Kundli</span>, <span className="font-semibold text-black">Palm Reading</span>, and <span className="font-semibold text-black">Vastu Shastra</span> with today's practical needs, helping families and businesses across <span className="font-semibold text-black">India</span> find clarity, remove obstacles, and build a life of peace and prosperity.
        </p>

        <div className="mt-8">
          <a
            href="https://wa.me/918595046368"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E57661] cursor-pointer text-white px-6 py-3 rounded-lg text-base md:text-[16px] font-medium transition-all duration-300 hover:bg-white hover:text-[#E57661] border border-[#E57661]"
          >
           Talk to Astrologer
          </a>
        </div>

      </div>
    </section>
  );
}