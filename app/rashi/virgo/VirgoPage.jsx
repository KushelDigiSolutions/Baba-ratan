"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiCheckCircle,
  FiShield,
  FiSun,
} from "react-icons/fi";

const traits = [
  "Practical",
  "Intelligent",
  "Organized",
  "Helpful",
  "Analytical",
  "Perfectionist",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Green",
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
    question: "What kind of personality does Virgo have?",
    answer:
      "Virgo natives are intelligent, practical, detail-oriented, and highly organized individuals who value perfection and discipline.",
  },
  {
    question: "Which planet rules Virgo?",
    answer:
      "Mercury rules Virgo and represents intelligence, communication, logic, and analytical thinking.",
  },
  {
    question: "Which careers suit Virgo natives?",
    answer:
      "Healthcare, teaching, accounting, research, technology, writing, and management roles suit Virgo people.",
  },
];

const VirgoPage = () => {
  return (
    <div className="w-full bg-[#fafcf7] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#5b8c51] via-[#74a96a] to-[#98c68f] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Virgo Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Virgo Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#eaffdf] mt-3">
              कन्या राशि ♍
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Virgo is an earth sign ruled by Mercury. Virgo natives are
              practical, disciplined, intelligent, and highly detail-oriented
              individuals who believe in perfection and hard work.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#5b8c51] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#5b8c51] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♍
              </div>

              <div className="absolute top-14 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-12 text-white text-4xl">
                ☘
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
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1400&auto=format&fit=crop"
              alt="Virgo"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-[#d8ead3]">
              <h3 className="text-[#5b8c51] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#305228] mt-2">
                Earth 🌿
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#5b8c51] font-semibold uppercase tracking-wider">
              About Virgo
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#305228] mt-4 leading-tight">
              Personality Of Virgo Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Virgo natives are disciplined, analytical, and highly practical
              individuals. They love organization, cleanliness, and solving
              problems efficiently.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by Mercury, Virgo people possess excellent communication and
              logical thinking abilities. Their perfectionist mindset helps them
              achieve success in work and personal life.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#eef8eb] border border-[#d8ead3] text-[#4f7c46] font-medium"
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
          <span className="text-[#5b8c51] font-semibold uppercase tracking-wider">
            Virgo Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#305228] mt-4">
            Lucky Things For Virgo
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8fcf7] border border-[#d8ead3] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#5b8c51] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#305228] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#5b8c51] font-semibold uppercase tracking-wider">
            Virgo Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#305228] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#305228] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Virgo natives are loyal, caring, and supportive partners who value
              honesty, trust, and emotional stability in relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#305228] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Virgo people excel in research, management, healthcare,
              technology, teaching, and detail-oriented professions.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#305228] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Virgo natives should avoid stress and overthinking while
              maintaining balanced nutrition and regular physical activity.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#5b8c51] to-[#98c68f]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiCheckCircle />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Virgo & Perfection
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Virgo natives are naturally organized and perfection-oriented.
              Their disciplined mindset helps them achieve goals with precision
              and dedication.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#5b8c51] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1400&auto=format&fit=crop"
              alt="Virgo Personality"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/20">
              Mercury Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#fafcf7]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#305228] mt-8">
            Today's Virgo Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today is favorable for planning, organization, and completing
            pending tasks. Stay focused and trust your practical instincts while
            making decisions.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5b8c51] text-white font-semibold hover:bg-[#476d3f] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#5b8c51] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#305228] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#d8ead3] p-8"
            >
              <h3 className="text-2xl font-bold text-[#305228]">
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
        <div className="bg-[#eef8eb] border border-[#d8ead3] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#5b8c51]">
              ♍
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#5b8c51] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#305228] mt-8 leading-tight">
              Get Personalized Virgo Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Connect with expert astrologers for Virgo horoscope, kundli
              analysis, career advice, relationship guidance, and spiritual
              remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#5b8c51] text-white font-semibold hover:bg-[#476d3f] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#5b8c51] text-[#5b8c51] font-semibold hover:bg-[#5b8c51] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirgoPage;