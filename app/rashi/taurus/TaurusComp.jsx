"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiShield,
  FiBriefcase,
  FiActivity,
  FiSun,
  FiArrowRight,
  FiMoon,
} from "react-icons/fi";

const traits = [
  "Loyal",
  "Reliable",
  "Patient",
  "Practical",
  "Luxury Lover",
  "Strong Minded",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Green & Pink",
  },
  {
    title: "Lucky Number",
    value: "6",
  },
  {
    title: "Ruling Planet",
    value: "Venus",
  },
  {
    title: "Lucky Day",
    value: "Friday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Taurus have?",
    answer:
      "Taurus natives are calm, loyal, dependable, practical, and emotionally strong individuals.",
  },
  {
    question: "Which planet rules Taurus?",
    answer:
      "Venus is the ruling planet of Taurus which represents beauty, luxury, love, and comfort.",
  },
  {
    question: "Which careers suit Taurus natives?",
    answer:
      "Finance, real estate, luxury business, management, designing, and creative fields suit Taurus people.",
  },
];

const TaurusPage = () => {
  return (
    <div className="w-full bg-[#fffaf7] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#e57661] via-[#e57661] to-[#e57661] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6 border border-white/20">
              Taurus Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Taurus Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ffe8d7] mt-3">
              वृषभ राशि ♉
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Taurus is an earth sign ruled by Venus. Taurus natives are known
              for stability, loyalty, luxury, patience, and emotional strength.
              They value comfort, beauty, relationships, and long-term success.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#b56d4d] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#b56d4d] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:30s]" />

              <div className="text-[140px] md:text-[220px] text-white drop-shadow-2xl">
                ♉
              </div>

              <div className="absolute top-12 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-10 text-white text-3xl">
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
              src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1400&auto=format&fit=crop"
              alt="Taurus"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-[#f0d7cc]">
              <h3 className="text-[#b56d4d] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#4d2b20] mt-2">
                Earth 🌍
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#b56d4d] font-semibold uppercase tracking-wider">
              About Taurus
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#4d2b20] mt-4 leading-tight">
              Personality Of Taurus Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Taurus natives are practical, trustworthy, and emotionally stable.
              They prefer peace and comfort in life and usually avoid
              unnecessary conflicts. Their strong willpower helps them achieve
              long-term goals successfully.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by Venus, Taurus people are naturally attracted toward
              beauty, luxury, relationships, art, and harmony. They enjoy
              creating a stable and secure life for themselves and their loved
              ones.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#fff1ea] border border-[#f1d4c6] text-[#a45c3f] font-medium"
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
          <span className="text-[#b56d4d] font-semibold uppercase tracking-wider">
            Taurus Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#4d2b20] mt-4">
            Lucky Things For Taurus
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff8f4] border border-[#f0d7cc] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#b56d4d] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#4d2b20] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#b56d4d] font-semibold uppercase tracking-wider">
            Taurus Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#4d2b20] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#b56d4d] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#4d2b20] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Taurus natives are loyal and deeply committed partners. They value
              emotional security and stable long-term relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#b56d4d] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#4d2b20] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Taurus people are hardworking and financially smart. They achieve
              success through patience, discipline, and consistency.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#b56d4d] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#4d2b20] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Taurus natives should maintain a healthy routine and avoid stress
              eating. Yoga and meditation help maintain balance.
            </p>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#e57661] to-[#e57661]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="w-28 h-28 mx-auto rounded-full bg-white/20 flex items-center justify-center text-5xl backdrop-blur-md">
            <FiSun />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mt-8">
            Today's Taurus Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
            Today is a favorable day for Taurus natives. Financial opportunities
            may arise and relationships will feel emotionally fulfilling. Stay
            calm and trust your instincts while making important decisions.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#b56d4d] font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#b56d4d] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#4d2b20] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#f1d7ca] p-8"
            >
              <h3 className="text-2xl font-bold text-[#4d2b20]">
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
        <div className="bg-[#fff1ea] border border-[#f0d7cc] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#e57661]">
              ♉
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#e57661] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#4d2b20] mt-8 leading-tight">
              Get Personalized Taurus Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Talk to expert astrologers for Taurus horoscope, kundli analysis,
              career guidance, relationship advice, and powerful remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#b56d4d] text-white font-semibold hover:bg-[#9f5739] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#b56d4d] text-[#b56d4d] font-semibold hover:bg-[#b56d4d] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaurusPage;