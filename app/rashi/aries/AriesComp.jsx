"use client";

import React from "react";
import {
  FiStar,
  FiHeart,
  FiBriefcase,
  FiSmile,
  FiSun,
  FiArrowRight,
} from "react-icons/fi";

const traits = [
  "Confident",
  "Energetic",
  "Leader",
  "Passionate",
  "Brave",
  "Independent",
];

const luckyThings = [
  { label: "Lucky Color", value: "Red" },
  { label: "Lucky Number", value: "9" },
  { label: "Lucky Day", value: "Tuesday" },
  { label: "Ruling Planet", value: "Mars" },
  { label: "Element", value: "Fire" },
  { label: "Compatible Signs", value: "Leo, Sagittarius" },
];

const faqData = [
  {
    q: "What is Aries Rashi known for?",
    a: "Aries people are known for leadership, courage, confidence, and energetic personalities.",
  },
  {
    q: "Which planet rules Aries?",
    a: "Mars is the ruling planet of Aries and represents power and action.",
  },
  {
    q: "Which career suits Aries?",
    a: "Leadership roles, business, sports, management, defense, and entrepreneurship suit Aries natives.",
  },
];

const AriesRashiPage = () => {
  return (
    <div className="w-full bg-[#fff8f5] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#d96d55] to-[#b85645]">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="text-white">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-sm font-medium mb-5">
              Zodiac Sign Details
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Aries Rashi <br />
              <span className="text-[#ffe0d7]">(मेष राशि)</span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl">
              Aries is the first zodiac sign ruled by Mars. Aries natives are
              passionate, courageous, energetic, and natural-born leaders who
              love challenges and adventure.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-7 py-3 rounded-full bg-white text-[#d96d55] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-7 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#d96d55] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                <div className="text-[140px] md:text-[180px] text-white">
                  ♈
                </div>
              </div>

              {/* Floating Glow */}
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1400&auto=format&fit=crop"
              alt="Aries"
              className="w-full rounded-[30px] shadow-xl object-cover h-[450px]"
            />
          </div>

          {/* Content */}
          <div>
            <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
              About Aries
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-3 leading-tight">
              Personality Of Aries Rashi
            </h2>

            <p className="text-gray-600 mt-6 leading-8 text-lg">
              Aries natives are fearless and action-oriented individuals. They
              are highly ambitious and love to lead from the front. Their
              enthusiasm and confidence inspire people around them.
            </p>

            <p className="text-gray-600 mt-4 leading-8 text-lg">
              They enjoy competition, adventure, and trying new things. Aries
              people are straightforward and honest, though sometimes impatient
              and impulsive.
            </p>

            {/* Traits */}
            <div className="flex flex-wrap gap-4 mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#fff1ec] border border-[#f4cfc4] text-[#a14f40] font-medium"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCKY THINGS */}
      <section className="py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="text-center mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
            Astrology Details
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-3">
            Lucky Things For Aries
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff7f4] border border-[#f3d8d0] rounded-3xl p-7 hover:shadow-xl transition"
            >
              <h3 className="text-[#d96d55] text-lg font-semibold">
                {item.label}
              </h3>

              <p className="text-3xl font-bold text-[#4e2723] mt-3">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LIFE SECTIONS */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
            Aries Insights
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-3">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Love */}
          <div className="bg-white rounded-[30px] p-8 shadow-md hover:shadow-2xl transition">
            <FiHeart className="text-[#d96d55] text-5xl mb-6" />

            <h3 className="text-2xl font-bold text-[#4e2723]">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              Aries people are passionate lovers who value honesty and deep
              emotional connections. They bring excitement and energy into
              relationships.
            </p>
          </div>

          {/* Career */}
          <div className="bg-white rounded-[30px] p-8 shadow-md hover:shadow-2xl transition">
            <FiBriefcase className="text-[#d96d55] text-5xl mb-6" />

            <h3 className="text-2xl font-bold text-[#4e2723]">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              Aries natives excel in leadership positions, startups, sports,
              management, and business due to their ambitious and fearless
              mindset.
            </p>
          </div>

          {/* Health */}
          <div className="bg-white rounded-[30px] p-8 shadow-md hover:shadow-2xl transition">
            <FiSmile className="text-[#d96d55] text-5xl mb-6" />

            <h3 className="text-2xl font-bold text-[#4e2723]">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              Aries individuals are energetic but should avoid stress and
              impulsive habits. Meditation and regular exercise help maintain
              balance.
            </p>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#d96d55] to-[#b85645]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <FiSun className="mx-auto text-6xl mb-6" />

          <h2 className="text-3xl md:text-5xl font-bold">
            Today's Aries Horoscope
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/90">
            Today brings positive energy and new opportunities for Aries
            natives. Your confidence and leadership qualities will help you
            achieve success in important tasks. Focus on communication and avoid
            unnecessary arguments.
          </p>

          <button className="mt-10 inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#d96d55] font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-3">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f0d5cd] rounded-3xl p-7"
            >
              <h3 className="text-xl font-bold text-[#4e2723]">
                {item.q}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="bg-[#fff1ec] border border-[#f3d3c9] rounded-[40px] p-10 md:p-16 text-center">
          <FiStar className="mx-auto text-6xl text-[#d96d55] mb-6" />

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] leading-tight">
            Get Personal Astrology Guidance
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Talk to our expert astrologers and discover accurate predictions,
            remedies, kundli insights, career guidance, and relationship
            solutions.
          </p>

          <div className="flex flex-wrap justify-center gap-5 mt-10">
            <button className="px-8 py-4 rounded-full bg-[#d96d55] text-white font-semibold hover:bg-[#bf573f] transition">
              Book Consultation
            </button>

            <button className="px-8 py-4 rounded-full border border-[#d96d55] text-[#d96d55] font-semibold hover:bg-[#d96d55] hover:text-white transition">
              Chat On WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AriesRashiPage;