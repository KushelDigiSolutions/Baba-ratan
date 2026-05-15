"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiZap,
  FiAward,
} from "react-icons/fi";

const traits = [
  "Confident",
  "Bold",
  "Creative",
  "Leader",
  "Energetic",
  "Passionate",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Gold & Orange",
  },
  {
    title: "Lucky Number",
    value: "1",
  },
  {
    title: "Ruling Planet",
    value: "Sun",
  },
  {
    title: "Lucky Day",
    value: "Sunday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Leo have?",
    answer:
      "Leo natives are confident, charismatic, energetic, and natural-born leaders who love recognition and success.",
  },
  {
    question: "Which planet rules Leo?",
    answer:
      "The Sun rules Leo and represents confidence, power, creativity, leadership, and positivity.",
  },
  {
    question: "Which careers suit Leo natives?",
    answer:
      "Leadership, entertainment, politics, business, acting, marketing, and management roles suit Leo people.",
  },
];

const LeoPage = () => {
  return (
    <div className="w-full bg-[#fffaf5] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#d97706] via-[#f59e0b] to-[#fbbf24] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Leo Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Leo Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#fff0c7] mt-3">
              सिंह राशि ♌
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Leo is a fire sign ruled by the Sun. Leo natives are powerful,
              confident, ambitious, and charismatic personalities who naturally
              attract attention and leadership roles.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#d97706] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#d96d55] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♌
              </div>

              <div className="absolute top-14 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-12 text-white text-4xl">
                ☀
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
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Leo"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-[#fde7ba]">
              <h3 className="text-[#d97706] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#7c4300] mt-2">
                Fire 🔥
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#d97706] font-semibold uppercase tracking-wider">
              About Leo
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#7c4300] mt-4 leading-tight">
              Personality Of Leo Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Leo natives are courageous, energetic, and full of confidence.
              They naturally shine in social situations and enjoy being admired
              for their talents and achievements.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by the Sun, Leo people carry warmth, positivity, and strong
              leadership qualities. Their ambitious nature helps them achieve
              recognition and success in life.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#fff5dd] border border-[#f5dfab] text-[#b16d07] font-medium"
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
          <span className="text-[#d97706] font-semibold uppercase tracking-wider">
            Leo Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#7c4300] mt-4">
            Lucky Things For Leo
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffaf0] border border-[#fde7ba] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#d97706] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#7c4300] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#d97706] font-semibold uppercase tracking-wider">
            Leo Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#7c4300] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff5dd] flex items-center justify-center text-[#d97706] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#7c4300] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Leo natives are passionate and loyal partners who love expressing
              affection and creating exciting romantic relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff5dd] flex items-center justify-center text-[#d97706] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#7c4300] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Leo people perform exceptionally well in leadership, business,
              entertainment, politics, and creative industries.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff5dd] flex items-center justify-center text-[#d97706] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#7c4300] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Leo natives should focus on maintaining energy levels, regular
              exercise, and balancing work with relaxation.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#d97706] to-[#fbbf24]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiAward />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Leo & Leadership Power
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Leo natives are born leaders who inspire others through confidence
              and positivity. Their strong personality helps them achieve
              success and recognition.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#d97706] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop"
              alt="Leo Leadership"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/20">
              Sun Energy ☀
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#fffaf5]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#fff1d1] flex items-center justify-center text-[#d97706] text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#7c4300] mt-8">
            Today's Leo Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today brings confidence, creativity, and recognition for Leo
            natives. Stay positive and use your leadership skills wisely while
            making important decisions.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#d97706] text-white font-semibold hover:bg-[#b96500] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#d97706] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#7c4300] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#fde7ba] p-8"
            >
              <h3 className="text-2xl font-bold text-[#7c4300]">
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
        <div className="bg-[#fff5dd] border border-[#fde7ba] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#d97706]">
              ♌
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#d97706] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#7c4300] mt-8 leading-tight">
              Get Personalized Leo Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Talk to expert astrologers for Leo horoscope, kundli analysis,
              career growth, relationship guidance, and spiritual remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#d97706] text-white font-semibold hover:bg-[#b96500] transition inline-block text-center"
              >
                Book Consultation
              </a>


              <button className="px-8 py-4 rounded-full border border-[#d97706] text-[#d97706] font-semibold hover:bg-[#d97706] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeoPage;