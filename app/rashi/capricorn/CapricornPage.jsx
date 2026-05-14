"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiTrendingUp,
  FiShield,
  FiMoon,
} from "react-icons/fi";

const traits = [
  "Disciplined",
  "Hardworking",
  "Responsible",
  "Ambitious",
  "Practical",
  "Patient",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Black & Brown",
  },
  {
    title: "Lucky Number",
    value: "8",
  },
  {
    title: "Ruling Planet",
    value: "Saturn",
  },
  {
    title: "Lucky Day",
    value: "Saturday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Capricorn have?",
    answer:
      "Capricorn natives are disciplined, hardworking, practical, and highly ambitious individuals who focus strongly on success and stability.",
  },
  {
    question: "Which planet rules Capricorn?",
    answer:
      "Saturn rules Capricorn and represents discipline, patience, responsibility, structure, and long-term growth.",
  },
  {
    question: "Which careers suit Capricorn natives?",
    answer:
      "Management, finance, business, administration, engineering, law, and leadership professions suit Capricorn people.",
  },
];

const CapricornPage = () => {
  return (
    <div className="w-full bg-[#faf9f7] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#1f2937] via-[#374151] to-[#4b5563] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-gray-200 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium mb-6">
              Capricorn Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Capricorn Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-gray-200 mt-3">
              मकर राशि ♑
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Capricorn is an earth sign ruled by Saturn. Capricorn natives are
              disciplined, ambitious, practical, and hardworking personalities
              who believe strongly in stability and long-term success.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#1f2937] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#1f2937] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♑
              </div>

              <div className="absolute top-14 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-12 text-white text-4xl">
                ☾
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop"
              alt="Capricorn"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-gray-200">
              <h3 className="text-[#374151] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#111827] mt-2">
                Earth 🌍
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#374151] font-semibold uppercase tracking-wider">
              About Capricorn
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#111827] mt-4 leading-tight">
              Personality Of Capricorn Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Capricorn natives are practical, disciplined, and highly focused
              individuals. They believe in patience, consistency, and achieving
              goals through hard work.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by Saturn, Capricorn people are naturally responsible and
              mature personalities who value structure and long-term success.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-gray-100 border border-gray-200 text-[#374151] font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCKY SECTION */}
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-white">
        <div className="text-center mb-14">
          <span className="text-[#374151] font-semibold uppercase tracking-wider">
            Capricorn Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#111827] mt-4">
            Lucky Things For Capricorn
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fafafa] border border-gray-200 rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#374151] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#111827] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#374151] font-semibold uppercase tracking-wider">
            Capricorn Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#111827] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#111827] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Capricorn natives are loyal, responsible, and dependable partners
              who value commitment and emotional security in relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#111827] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Capricorn people excel in finance, management, engineering,
              administration, business, and leadership professions.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#111827] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Capricorn natives should focus on stress management, proper rest,
              balanced nutrition, and maintaining healthy routines.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#1f2937] to-[#4b5563]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiTrendingUp />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Capricorn & Success
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Capricorn natives believe in discipline, patience, and long-term
              planning. Their hardworking nature helps them achieve great
              success in life.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#1f2937] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop"
              alt="Capricorn Success"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/10">
              Saturn Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-5xl shadow-xl">
            <FiMoon />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#111827] mt-8">
            Today's Capricorn Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today is favorable for planning, career decisions, and financial
            growth. Stay disciplined and trust your practical mindset while
            handling responsibilities.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#374151] text-white font-semibold hover:bg-[#1f2937] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#374151] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#111827] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-gray-200 p-8"
            >
              <h3 className="text-2xl font-bold text-[#111827]">
                {item.question}
              </h3>

              <p className="text-gray-600 leading-8 mt-5">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-10 lg:px-20">
        <div className="bg-gray-100 border border-gray-200 rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#374151]">
              ♑
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#374151] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#111827] mt-8 leading-tight">
              Get Personalized Capricorn Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Connect with expert astrologers for Capricorn horoscope, kundli
              analysis, career guidance, relationship advice, and spiritual
              remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#374151] text-white font-semibold hover:bg-[#1f2937] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#374151] text-[#374151] font-semibold hover:bg-[#374151] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapricornPage;