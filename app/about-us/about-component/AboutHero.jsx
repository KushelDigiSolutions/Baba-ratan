"use client";

import React from "react";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="relative max-w-[1720px] mx-auto py-30 flex items-center justify-center text-center px-4 overflow-hidden min-h-[500px]">

      {/* Background Video Section */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          // Purani image ko poster ki tarah use kar rahe hain load time ke liye
          poster="https://res.cloudinary.com/dumjuhrob/image/upload/v1776933909/starss_fpqv8f.png"
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source
            src="https://res.cloudinary.com/daup99ghe/video/upload/v1777015919/229467_klpvvp.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Gradient Overlay (Aapki original theme) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#b45c54]/60 to-[#b96a7a]/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-white">
        <h1 className="text-3xl sm:text-4xl md:text-[50px] font-[600] leading-tight mb-8">
          Honest Guidance.
          <br />  Trusted Expertise.
        </h1>

        <p className="text-sm sm:text-base md:text-[22px] max-w-[800px] mx-auto leading-relaxed text-white/90 mb-10">
          Real answers to your life's biggest questions, through accurate Janam Kundli analysis, expert Palm Reading, and authentic Vastu consulting by Vishal Verma at Bajrang Astro. Trusted by 1000+ families and businesses across India.
        </p>

        <div className="flex justify-center">
          <Link href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="inline-block bg-white text-[#b45c54] px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#FCF8F4] hover:scale-105 transition-all duration-300 cursor-pointer">
            Book Your Consultation
          </Link>
        </div>
      </div>
    </section>
  );
}
