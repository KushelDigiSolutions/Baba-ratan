"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiCompass,
  FiGlobe,
  FiSun,
} from "react-icons/fi";

const traits = [
  "Adventurous",
  "Optimistic",
  "Independent",
  "Energetic",
  "Honest",
  "Free-Spirited",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Purple & Yellow",
  },
  {
    title: "Lucky Number",
    value: "3",
  },
  {
    title: "Ruling Planet",
    value: "Jupiter",
  },
  {
    title: "Lucky Day",
    value: "Thursday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Sagittarius have?",
    answer:
      "Sagittarius natives are adventurous, optimistic, energetic, and freedom-loving individuals who enjoy exploring life.",
  },
  {
    question: "Which planet rules Sagittarius?",
    answer:
      "Jupiter rules Sagittarius and represents wisdom, expansion, positivity, growth, and higher knowledge.",
  },
  {
    question: "Which careers suit Sagittarius natives?",
    answer:
      "Travel, teaching, marketing, entrepreneurship, sports, media, and creative professions suit Sagittarius people.",
  },
];

const SagittariusPage = () => {
  return (
    <div className="w-full bg-[#fffdf8] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#6d28d9] via-[#7c3aed] to-[#a855f7] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium mb-6">
              Sagittarius Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Sagittarius Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ead7ff] mt-3">
              धनु राशि ♐
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Sagittarius is a fire sign ruled by Jupiter. Sagittarius natives
              are adventurous, optimistic, energetic, and freedom-loving
              personalities who enjoy exploring life and learning new things.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#6d28d9] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#6d28d9] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♐
              </div>

              <div className="absolute top-14 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-12 text-white text-4xl">
                ☄
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
              src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
              alt="Sagittarius"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-[#e9d5ff]">
              <h3 className="text-[#7c3aed] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#4c1d95] mt-2">
                Fire 🔥
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#7c3aed] font-semibold uppercase tracking-wider">
              About Sagittarius
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#4c1d95] mt-4 leading-tight">
              Personality Of Sagittarius Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Sagittarius natives are energetic, adventurous, and highly
              optimistic individuals. They enjoy freedom, travel, and exploring
              new opportunities in life.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by Jupiter, Sagittarius people possess wisdom, positivity,
              and a strong desire for growth and learning.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#f6efff] border border-[#e9d5ff] text-[#6d28d9] font-medium"
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
          <span className="text-[#7c3aed] font-semibold uppercase tracking-wider">
            Sagittarius Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#4c1d95] mt-4">
            Lucky Things For Sagittarius
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fcfaff] border border-[#e9d5ff] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#7c3aed] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#4c1d95] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#7c3aed] font-semibold uppercase tracking-wider">
            Sagittarius Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#4c1d95] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#f6efff] flex items-center justify-center text-[#7c3aed] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#4c1d95] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Sagittarius natives are honest, fun-loving, and adventurous
              partners who value freedom and positivity in relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#f6efff] flex items-center justify-center text-[#7c3aed] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#4c1d95] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Sagittarius people perform well in travel, education, media,
              business, sports, and leadership professions.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#f6efff] flex items-center justify-center text-[#7c3aed] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#4c1d95] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Sagittarius natives should focus on maintaining energy levels,
              regular exercise, and balanced routines.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#6d28d9] to-[#a855f7]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/10 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiCompass />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Sagittarius & Adventure
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Sagittarius natives love adventure, freedom, and discovering new
              opportunities. Their positive mindset inspires everyone around
              them.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#6d28d9] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1400&auto=format&fit=crop"
              alt="Sagittarius Adventure"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/10">
              Jupiter Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#fffdf8]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#f6efff] flex items-center justify-center text-[#7c3aed] text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#4c1d95] mt-8">
            Today's Sagittarius Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today is favorable for learning, travel, communication, and trying
            new opportunities. Stay positive and trust your adventurous spirit.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#7c3aed] text-white font-semibold hover:bg-[#6d28d9] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#7c3aed] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#4c1d95] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#e9d5ff] p-8"
            >
              <h3 className="text-2xl font-bold text-[#4c1d95]">
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
        <div className="bg-[#f6efff] border border-[#e9d5ff] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#7c3aed]">
              ♐
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#7c3aed] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#4c1d95] mt-8 leading-tight">
              Get Personalized Sagittarius Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Connect with expert astrologers for Sagittarius horoscope, kundli
              analysis, career guidance, relationship advice, and spiritual
              remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#7c3aed] text-white font-semibold hover:bg-[#6d28d9] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#7c3aed] text-[#7c3aed] font-semibold hover:bg-[#7c3aed] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SagittariusPage;