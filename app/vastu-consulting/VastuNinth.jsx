"use client";
import Link from 'next/link';

export default function VastuNinth() {
  return (
    <section className="w-full pb-4 ">
      <div className="max-w-[1300px] mx-auto bg-[#F9F9F9] py-12 md:pt-32 md:pb-20 px-4 mx-auto text-center">

        {/* Heading */}
        <div className="w-full flex items-center justify-center">
          <h5 className="font-[500] max-w-[1000px] text-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
            Even <span className="text-[#655615]">one</span> correct Vastu change can transform your entire life.
          </h5>
        </div>

        {/* Button */}
        <div className="mt-10 md:mt-12">
          <Link href="/contact" className="inline-block bg-black hover:bg-white hover:text-black border hover:border cursor-pointer text-white/90 px-12 py-4 rounded-full text-sm sm:text-base md:text-[22px] font-medium shadow-lg ">
            Book Your Vastu Consultation
          </Link>
        </div>

      </div>
    </section>
  );
}