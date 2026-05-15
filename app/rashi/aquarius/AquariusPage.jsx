"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiGlobe,
  FiZap,
  FiCloud,
} from "react-icons/fi";

const traits = [
  "Innovative",
  "Independent",
  "Intelligent",
  "Creative",
  "Humanitarian",
  "Visionary",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Blue & Turquoise",
  },
  {
    title: "Lucky Number",
    value: "11",
  },
  {
    title: "Ruling Planet",
    value: "Saturn & Uranus",
  },
  {
    title: "Lucky Day",
    value: "Saturday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Aquarius have?",
    answer:
      "Aquarius natives are intelligent, innovative, independent, and forward-thinking individuals who love creativity and freedom.",
  },
  {
    question: "Which planet rules Aquarius?",
    answer:
      "Saturn and Uranus rule Aquarius and represent innovation, intelligence, originality, discipline, and futuristic thinking.",
  },
  {
    question: "Which careers suit Aquarius natives?",
    answer:
      "Technology, science, media, innovation, research, entrepreneurship, and creative professions suit Aquarius people.",
  },
];

const AquariusPage = () => {
  return (
    <div className="w-full bg-[#f7fcff] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#0f4c81] via-[#1f6aa5] to-[#38bdf8] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-cyan-200 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-300 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium mb-6">
              Aquarius Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Aquarius Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#d7f5ff] mt-3">
              कुंभ राशि ♒
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Aquarius is an air sign ruled by Saturn and Uranus. Aquarius
              natives are innovative, intelligent, independent, and futuristic
              personalities who believe in creativity and freedom.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#0f4c81] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#0f4c81] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♒
              </div>

              <div className="absolute top-14 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-12 text-white text-4xl">
                ☁
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
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop"
              alt="Aquarius"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-cyan-100">
              <h3 className="text-[#0f4c81] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#0b3559] mt-2">
                Air 🌬️
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#0f4c81] font-semibold uppercase tracking-wider">
              About Aquarius
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#0b3559] mt-4 leading-tight">
              Personality Of Aquarius Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Aquarius natives are intelligent, visionary, and independent
              individuals. They enjoy innovation, creativity, and thinking
              beyond traditional boundaries.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by Saturn and Uranus, Aquarius people possess futuristic
              ideas, originality, and strong humanitarian values.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#eef9ff] border border-cyan-100 text-[#0f4c81] font-medium"
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
          <span className="text-[#0f4c81] font-semibold uppercase tracking-wider">
            Aquarius Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#0b3559] mt-4">
            Lucky Things For Aquarius
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8fdff] border border-cyan-100 rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#0f4c81] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#0b3559] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#0f4c81] font-semibold uppercase tracking-wider">
            Aquarius Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#0b3559] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#0b3559] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Aquarius natives are caring, supportive, and freedom-loving
              partners who value trust, understanding, and individuality.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#0b3559] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Aquarius people excel in technology, science, innovation,
              research, entrepreneurship, and creative industries.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#0b3559] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Aquarius natives should maintain mental peace, proper rest, and
              balanced routines to stay energetic and productive.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#0f4c81] to-[#38bdf8]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiZap />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Aquarius & Innovation
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Aquarius natives are futuristic thinkers who love innovation,
              creativity, and making positive changes in the world.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#0f4c81] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Aquarius Innovation"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/10">
              Uranus Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#f7fcff]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-5xl shadow-xl">
            <FiCloud />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#0b3559] mt-8">
            Today's Aquarius Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today is favorable for innovation, communication, and creative
            ideas. Stay confident and trust your unique thinking abilities.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#0f4c81] text-white font-semibold hover:bg-[#0b3559] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#0f4c81] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#0b3559] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-cyan-100 p-8"
            >
              <h3 className="text-2xl font-bold text-[#0b3559]">
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
        <div className="bg-[#eef9ff] border border-cyan-100 rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#0f4c81]">
              ♒
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#0f4c81] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#0b3559] mt-8 leading-tight">
              Get Personalized Aquarius Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Connect with expert astrologers for Aquarius horoscope, kundli
              analysis, career guidance, relationship advice, and spiritual
              remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#0f4c81] text-white font-semibold hover:bg-[#0b3559] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#0f4c81] text-[#0f4c81] font-semibold hover:bg-[#0f4c81] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AquariusPage;