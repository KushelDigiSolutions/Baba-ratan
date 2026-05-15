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
  FiMessageCircle,
} from "react-icons/fi";

const traits = [
  "Intelligent",
  "Talkative",
  "Creative",
  "Energetic",
  "Curious",
  "Friendly",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Yellow",
  },
  {
    title: "Lucky Number",
    value: "5",
  },
  {
    title: "Ruling Planet",
    value: "Mercury",
  },
  {
    title: "Lucky Day",
    value: "Wednesday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Gemini have?",
    answer:
      "Gemini natives are intelligent, social, energetic, and highly communicative individuals who love exploring new ideas.",
  },
  {
    question: "Which planet rules Gemini?",
    answer:
      "Mercury rules Gemini and represents communication, intelligence, learning, and creativity.",
  },
  {
    question: "Which careers suit Gemini natives?",
    answer:
      "Media, communication, writing, marketing, teaching, and technology-related careers suit Gemini people.",
  },
];

const GeminiPage = () => {
  return (
    <div className="w-full bg-[#fffdf8] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#e57661] via-[#e57661] to-[#f4d37a] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Gemini Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Gemini Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#fff6d8] mt-3">
              मिथुन राशि ♊
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Gemini is an air sign ruled by Mercury. Gemini natives are smart,
              expressive, social, and full of curiosity. They love learning,
              communication, and discovering new opportunities in life.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#c58c1d] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#c58c1d] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♊
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              alt="Gemini"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-[#f4e0ae]">
              <h3 className="text-[#c58c1d] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#5b3b07] mt-2">
                Air 🌬️
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#c58c1d] font-semibold uppercase tracking-wider">
              About Gemini
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#5b3b07] mt-4 leading-tight">
              Personality Of Gemini Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Gemini natives are naturally curious and highly intelligent. They
              enjoy conversations, social gatherings, and exploring new ideas.
              Their quick thinking and adaptable personality make them unique.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by Mercury, Gemini people are excellent communicators. They
              are energetic, creative, and often succeed in environments that
              involve learning, speaking, and networking.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#fff6dd] border border-[#f2dfab] text-[#a06b11] font-medium"
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
          <span className="text-[#c58c1d] font-semibold uppercase tracking-wider">
            Gemini Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#5b3b07] mt-4">
            Lucky Things For Gemini
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffaf0] border border-[#f3e3ba] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#c58c1d] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#5b3b07] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#c58c1d] font-semibold uppercase tracking-wider">
            Gemini Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#5b3b07] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff5d9] flex items-center justify-center text-[#c58c1d] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#5b3b07] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Gemini natives are romantic, expressive, and fun-loving partners.
              They enjoy meaningful conversations and emotional bonding.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff5d9] flex items-center justify-center text-[#c58c1d] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#5b3b07] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Gemini people succeed in media, communication, writing,
              technology, teaching, and business due to their smart thinking.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#fff5d9] flex items-center justify-center text-[#c58c1d] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#5b3b07] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Gemini natives should avoid overthinking and maintain mental
              balance. Meditation and healthy sleep improve focus and energy.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#e57661] to-[#e57661]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiMessageCircle />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Gemini & Communication Skills
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Gemini natives are gifted communicators who easily connect with
              people. Their creativity and confidence help them express ideas
              clearly and effectively.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#c58c1d] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt="Gemini Communication"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/20">
              Mercury Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#fffdf8]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#fff4d3] flex items-center justify-center text-[#c58c1d] text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#e57661] mt-8">
            Today's Gemini Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today brings positive communication and exciting opportunities for
            Gemini natives. Focus on your goals and avoid unnecessary
            distractions.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#e57661] text-white font-semibold hover:bg-[#a87315] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#c58c1d] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#5b3b07] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#f1e2b7] p-8"
            >
              <h3 className="text-2xl font-bold text-[#5b3b07]">
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
        <div className="bg-[#fff7df] border border-[#f2dfab] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#e57661]">
              ♊
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#e57661] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#5b3b07] mt-8 leading-tight">
              Get Personalized Gemini Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Talk to expert astrologers for Gemini horoscope, kundli analysis,
              compatibility, career guidance, and powerful remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#e57661] text-white font-semibold hover:bg-[#a87315] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#e57661] text-[#e57661] font-semibold hover:bg-[#c58c1d] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GeminiPage;