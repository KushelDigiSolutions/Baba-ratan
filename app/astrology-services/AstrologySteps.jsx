"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function AstrologySteps() {
  const [visibleSteps, setVisibleSteps] = useState({
    step1: false,
    step2: false,
    step3: false,
  });

  const step1Ref = useRef(null);
  const step2Ref = useRef(null);
  const step3Ref = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === step1Ref.current) {
            setVisibleSteps((prev) => ({ ...prev, step1: true }));
          } else if (entry.target === step2Ref.current) {
            setVisibleSteps((prev) => ({ ...prev, step2: true }));
          } else if (entry.target === step3Ref.current) {
            setVisibleSteps((prev) => ({ ...prev, step3: true }));
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (step1Ref.current) observer.observe(step1Ref.current);
    if (step2Ref.current) observer.observe(step2Ref.current);
    if (step3Ref.current) observer.observe(step3Ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-16 md:py-24 bg-[#FCF8F4] overflow-hidden">
      {/* Background Decorative Path (Zigzag line) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-full">
          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922599/Three_Steps_to_Alignment_wnxvae.png"
            alt="path"
            fill
            className="object-contain opacity-20"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-[40px] font-bold text-[#303030] mb-16 md:mb-24">
          Three Steps to Your Reading
        </h2>

        <div className="space-y-24 md:space-y-40">
          {/* STEP 1 */}
          <div
            ref={step1Ref}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          >
            {/* TEXT BOX */}
            <div className={`w-full md:w-1/2 bg-white p-8 md:p-14 rounded-[32px] shadow-sm border border-[#F3EBE9] transition-all duration-1000 ease-out ${visibleSteps.step1 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="text-[60px] md:text-[80px] leading-none font-bold text-[#FDE0DC] mb-6">01</div>
              <h3 className="text-2xl md:text-[28px] text-[#303030] font-bold mb-4">
                Share Your Birth Details
              </h3>
              <p className="text-[#303030]/80 text-lg leading-relaxed">
                Simply provide your date, time, and place of birth, and Vishal Verma will prepare your accurate Janam Kundli for a complete Vedic astrology consultation.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 delay-200 ease-out ${visibleSteps.step1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="relative w-full max-w-[420px] aspect-square shadow-2xl rounded-[40px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922603/Input_Birth_Data_ryrj5t.png"
                  alt="Step 1"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* STEP 2 */}
          <div
            ref={step2Ref}
            className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-20"
          >
            {/* TEXT BOX */}
            <div className={`w-full md:w-1/2 bg-white p-8 md:p-14 rounded-[32px] shadow-sm border border-[#F3EBE9] transition-all duration-1000 ease-out ${visibleSteps.step2 ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}>
              <div className="text-[60px] md:text-[80px] leading-none font-bold text-[#FDE0DC] mb-6">02</div>
              <h3 className="text-2xl md:text-[28px] text-[#303030] font-bold mb-4">
                Deep Kundli Analysis
              </h3>
              <p className="text-[#303030]/80 text-lg leading-relaxed">
                Every planet, house, and dasha in your birth chart is studied in detail identifying the root cause of challenges in your career, marriage, health, and finances.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 delay-200 ease-out ${visibleSteps.step2 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="relative w-full max-w-[420px] aspect-square shadow-2xl rounded-[40px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922605/Planetary_Analysis_nkqjf9.png"
                  alt="Step 2"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* STEP 3 */}
          <div
            ref={step3Ref}
            className="flex flex-col md:flex-row items-center gap-12 md:gap-20"
          >
            {/* TEXT BOX */}
            <div className={`w-full md:w-1/2 bg-white p-8 md:p-14 rounded-[32px] shadow-sm border border-[#F3EBE9] transition-all duration-1000 ease-out ${visibleSteps.step3 ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
              <div className="text-[60px] md:text-[80px] leading-none font-bold text-[#FDE0DC] mb-6">03</div>
              <h3 className="text-2xl md:text-[28px] text-[#303030] font-bold mb-4">
                Personalised Remedies
              </h3>
              <p className="text-[#303030]/80 text-lg leading-relaxed">
                You receive clear, practical remedies, gemstones, mantras, or timing guidance tailored specifically to your Kundli by the best astrologer in India.
              </p>
            </div>

            {/* IMAGE BOX */}
            <div className={`w-full md:w-1/2 flex justify-center transition-all duration-1000 delay-200 ease-out ${visibleSteps.step3 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
              <div className="relative w-full max-w-[420px] aspect-square shadow-2xl rounded-[40px] overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776922604/Personalized_Remedies_rkyik6.png"
                  alt="Step 3"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* CTA BUTTON */}
        <div className={`flex justify-center mt-20 md:mt-32 transition-all duration-1000 delay-500 ${visibleSteps.step3 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <a 
            href="https://calendly.com/bajrangastroofficial/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#E57661] text-white px-12 py-4 rounded-full text-lg font-bold shadow-xl hover:bg-[#d96552] hover:scale-105 transition-all duration-300 cursor-pointer inline-block"
          >
            Book Your Reading
          </a>
        </div>

      </div>
    </section>
  );
}