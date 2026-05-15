"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiShield,
  FiUsers,
} from "react-icons/fi";

const traits = [
  "Balanced",
  "Charming",
  "Diplomatic",
  "Social",
  "Creative",
  "Peaceful",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Pink & Blue",
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
    question: "What kind of personality does Libra have?",
    answer:
      "Libra natives are charming, balanced, peaceful, and social individuals who value harmony and beauty in life.",
  },
  {
    question: "Which planet rules Libra?",
    answer:
      "Venus rules Libra and represents beauty, luxury, love, relationships, and creativity.",
  },
  {
    question: "Which careers suit Libra natives?",
    answer:
      "Fashion, design, law, public relations, business, media, and creative professions suit Libra people.",
  },
];

const LibraPage = () => {
  return (
    <div className="w-full bg-[#fffafb] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#d16ba5] via-[#e084b7] to-[#f3a7cf] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Libra Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Libra Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ffe4f2] mt-3">
              तुला राशि ♎
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Libra is an air sign ruled by Venus. Libra natives are charming,
              balanced, artistic, and peaceful personalities who seek harmony
              and beauty in every aspect of life.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#c75292] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#c75292] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♎
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
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop"
              alt="Libra"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-[#f5d5e6]">
              <h3 className="text-[#c75292] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#6b1f49] mt-2">
                Air 🌬️
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#c75292] font-semibold uppercase tracking-wider">
              About Libra
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#6b1f49] mt-4 leading-tight">
              Personality Of Libra Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Libra natives are naturally charming, diplomatic, and peace-loving
              individuals. They enjoy socializing and building meaningful
              relationships.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by Venus, Libra people are attracted toward beauty, luxury,
              creativity, and harmony. Their balanced mindset helps them make
              thoughtful decisions.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#fff0f7] border border-[#f5d5e6] text-[#b1447f] font-medium"
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
          <span className="text-[#c75292] font-semibold uppercase tracking-wider">
            Libra Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#6b1f49] mt-4">
            Lucky Things For Libra
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff8fb] border border-[#f5d5e6] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#c75292] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#6b1f49] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#c75292] font-semibold uppercase tracking-wider">
            Libra Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#6b1f49] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff0f7] flex items-center justify-center text-[#c75292] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#6b1f49] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Libra natives are romantic, caring, and loyal partners who value
              emotional balance and harmony in relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff0f7] flex items-center justify-center text-[#c75292] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#6b1f49] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Libra people perform well in creative industries, law, business,
              fashion, public relations, and leadership roles.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff0f7] flex items-center justify-center text-[#c75292] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#6b1f49] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Libra natives should maintain emotional balance and avoid stress
              through meditation, exercise, and healthy routines.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#d16ba5] to-[#f3a7cf]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiUsers />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Libra & Harmony
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Libra natives believe in peace, fairness, and strong
              relationships. Their diplomatic personality helps them maintain
              balance in every situation.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#c75292] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop"
              alt="Libra Harmony"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/20">
              Venus Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#fffafb]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#fff0f7] flex items-center justify-center text-[#c75292] text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#6b1f49] mt-8">
            Today's Libra Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today is favorable for communication, relationships, and creative
            decisions. Stay calm and trust your balanced mindset while handling
            important situations.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#c75292] text-white font-semibold hover:bg-[#b3407c] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#c75292] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#6b1f49] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#f5d5e6] p-8"
            >
              <h3 className="text-2xl font-bold text-[#6b1f49]">
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
        <div className="bg-[#fff0f7] border border-[#f5d5e6] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#c75292]">
              ♎
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#c75292] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#6b1f49] mt-8 leading-tight">
              Get Personalized Libra Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Talk to expert astrologers for Libra horoscope, kundli analysis,
              relationship guidance, career advice, and spiritual remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#c75292] text-white font-semibold hover:bg-[#b3407c] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#c75292] text-[#c75292] font-semibold hover:bg-[#c75292] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LibraPage;