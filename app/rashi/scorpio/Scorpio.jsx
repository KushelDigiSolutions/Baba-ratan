"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiMoon,
  FiShield,
  FiZap,
} from "react-icons/fi";

const traits = [
  "Passionate",
  "Powerful",
  "Mysterious",
  "Focused",
  "Loyal",
  "Determined",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Red & Maroon",
  },
  {
    title: "Lucky Number",
    value: "9",
  },
  {
    title: "Ruling Planet",
    value: "Mars & Pluto",
  },
  {
    title: "Lucky Day",
    value: "Tuesday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Scorpio have?",
    answer:
      "Scorpio natives are passionate, intense, determined, and emotionally powerful individuals who value loyalty and honesty.",
  },
  {
    question: "Which planet rules Scorpio?",
    answer:
      "Mars and Pluto rule Scorpio and represent transformation, power, courage, passion, and emotional depth.",
  },
  {
    question: "Which careers suit Scorpio natives?",
    answer:
      "Research, investigation, medicine, psychology, business, defense, and leadership professions suit Scorpio people.",
  },
];

const ScorpioPage = () => {
  return (
    <div className="w-full bg-[#0f0a12] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#2a0d1d] via-[#4a102c] to-[#7a183d] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-red-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium mb-6">
              Scorpio Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Scorpio Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ffb3cc] mt-3">
              वृश्चिक राशि ♏
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/80 max-w-2xl">
              Scorpio is a water sign ruled by Mars and Pluto. Scorpio natives
              are passionate, mysterious, fearless, and emotionally intense
              personalities with strong determination and deep intuition.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#7a183d] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#7a183d] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♏
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
              alt="Scorpio"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-[#1a1117] shadow-2xl rounded-3xl p-6 border border-[#4a102c]">
              <h3 className="text-[#ff6b9a] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-white mt-2">
                Water 🌊
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider">
              About Scorpio
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-white mt-4 leading-tight">
              Personality Of Scorpio Natives
            </h2>

            <p className="text-gray-300 text-lg leading-9 mt-8">
              Scorpio natives are fearless, determined, and emotionally strong
              individuals. They possess deep intuition and powerful inner
              strength.
            </p>

            <p className="text-gray-300 text-lg leading-9 mt-5">
              Ruled by Mars and Pluto, Scorpio people are naturally passionate
              and transformative personalities who never give up on their goals.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#2b1620] border border-[#4a102c] text-[#ff8cb3] font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCKY SECTION */}
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-[#140c11]">
        <div className="text-center mb-14">
          <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider">
            Scorpio Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Lucky Things For Scorpio
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1117] border border-[#4a102c] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#ff6b9a] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-white mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider">
            Scorpio Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-[#1a1117] rounded-[35px] p-9 border border-[#4a102c] hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-white mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-300 leading-8 mt-5">
              Scorpio natives are passionate and deeply loyal partners who value
              emotional connection, trust, and honesty in relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-[#1a1117] rounded-[35px] p-9 border border-[#4a102c] hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-white mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-300 leading-8 mt-5">
              Scorpio people excel in research, business, investigation,
              medicine, management, and leadership professions.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-[#1a1117] rounded-[35px] p-9 border border-[#4a102c] hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-white mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-300 leading-8 mt-5">
              Scorpio natives should maintain emotional balance, proper sleep,
              and stress management for overall wellness.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#4a102c] to-[#7a183d]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiZap />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Scorpio & Inner Power
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/80 mt-8">
              Scorpio natives are emotionally powerful and highly focused
              individuals. Their courage and determination help them overcome
              every challenge.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#7a183d] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Scorpio Power"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/10">
              Pluto Energy 🔥
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#0f0a12]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-5xl shadow-xl">
            <FiMoon />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-8">
            Today's Scorpio Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-300 mt-8">
            Today is powerful for transformation, emotional growth, and making
            bold decisions. Trust your intuition and stay focused on your goals.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7a183d] text-white font-semibold hover:bg-[#5c0f2d] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-white mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1117] rounded-[30px] border border-[#4a102c] p-8"
            >
              <h3 className="text-2xl font-bold text-white">
                {item.question}
              </h3>

              <p className="text-gray-300 leading-8 mt-5">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 md:px-10 lg:px-20">
        <div className="bg-[#1a1117] border border-[#4a102c] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#ff6b9a]">
              ♏
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#7a183d] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mt-8 leading-tight">
              Get Personalized Scorpio Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-300 text-lg leading-9">
              Connect with expert astrologers for Scorpio horoscope, kundli
              analysis, relationship guidance, career advice, and spiritual
              remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#7a183d] text-white font-semibold hover:bg-[#5c0f2d] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#ff6b9a] text-[#ff6b9a] font-semibold hover:bg-[#ff6b9a] hover:text-black transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScorpioPage;