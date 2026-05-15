"use client";

import React from "react";
import {
  FiStar,
  FiHeart,
  FiBriefcase,
  FiActivity,
  FiSun,
  FiMoon,
  FiArrowRight,
} from "react-icons/fi";
import RashiSection from "./RashiSection";

const allRashi = [
  { name: "Aries", hindi: "मेष", icon: "♈" },
  { name: "Taurus", hindi: "वृषभ", icon: "♉" },
  { name: "Gemini", hindi: "मिथुन", icon: "♊" },
  { name: "Cancer", hindi: "कर्क", icon: "♋" },
  { name: "Leo", hindi: "सिंह", icon: "♌" },
  { name: "Virgo", hindi: "कन्या", icon: "♍" },
  { name: "Libra", hindi: "तुला", icon: "♎" },
  { name: "Scorpio", hindi: "वृश्चिक", icon: "♏" },
  { name: "Sagittarius", hindi: "धनु", icon: "♐" },
  { name: "Capricorn", hindi: "मकर", icon: "♑" },
  { name: "Aquarius", hindi: "कुंभ", icon: "♒" },
  { name: "Pisces", hindi: "मीन", icon: "♓" },
];

const horoscopeCards = [
  {
    title: "Love Horoscope",
    icon: <FiHeart />,
    desc: "Know your relationship compatibility, romance, and emotional bonding through astrology.",
  },
  {
    title: "Career Horoscope",
    icon: <FiBriefcase />,
    desc: "Get guidance for job, business, finance, growth, and future career opportunities.",
  },
  {
    title: "Health Horoscope",
    icon: <FiActivity />,
    desc: "Discover wellness predictions, health advice, and energetic balance for your zodiac.",
  },
];

const faqData = [
  {
    q: "What is Rashi in astrology?",
    a: "Rashi represents your zodiac sign based on the position of the Moon in Vedic astrology.",
  },
  {
    q: "How many Rashis are there?",
    a: "There are 12 Rashis in Vedic astrology, each having unique characteristics and planetary influence.",
  },
  {
    q: "How can I know my Rashi?",
    a: "Your Rashi can be determined using your date, time, and place of birth.",
  },
];

const RashiDetailsPage = () => {
  return (
    <div className="w-full bg-[#fff8f5] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#d96d55] to-[#b85645] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-10 left-10 text-[180px] text-white">
            ✦
          </div>
          <div className="absolute bottom-0 right-10 text-[200px] text-white">
            ☾
          </div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 text-sm font-medium mb-6">
              Vedic Astrology
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Your <br />
              Zodiac Rashi
            </h1>

            <p className="mt-6 text-lg leading-8 text-white/90 max-w-2xl">
              Explore all 12 zodiac rashis and understand personality traits,
              love compatibility, career growth, lucky colors, horoscope
              insights, and spiritual guidance according to Vedic astrology.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <button className="px-8 py-4 rounded-full bg-white text-[#d96d55] font-medium hover:scale-105 transition">
                Explore Rashis
              </button>

              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#d96d55] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] rounded-full border border-white/20 bg-white/10 backdrop-blur-md flex items-center justify-center">
              <div className="grid grid-cols-4 gap-6">
                {allRashi.slice(0, 12).map((item, index) => (
                  <div
                    key={index}
                    className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/20 flex items-center justify-center text-3xl text-white hover:scale-110 transition"
                  >
                    {item.icon}
                  </div>
                ))}
              </div>

              {/* <div className="absolute w-32 h-32 rounded-full bg-white flex items-center justify-center text-[#d96d55] text-5xl shadow-2xl">
                <FiSun />
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT RASHI */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1400&auto=format&fit=crop"
              alt="Rashi"
              className="w-full h-[500px] object-cover rounded-[40px] shadow-2xl"
            />
          </div>

          <div>
            <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
              About Zodiac Signs
            </span>

            <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-4 leading-tight">
              Understanding Rashi In Vedic Astrology
            </h2>

            <p className="text-gray-600 mt-6 leading-8 text-lg">
              In Vedic astrology, Rashi refers to the zodiac sign determined by
              the Moon’s position at the time of birth. Each Rashi has its own
              nature, ruling planet, strengths, weaknesses, and spiritual
              influence.
            </p>

            <p className="text-gray-600 mt-5 leading-8 text-lg">
              Rashis play an important role in understanding personality,
              relationships, career, finances, and future predictions. Astrology
              helps individuals align their life with cosmic energies.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="bg-white rounded-3xl p-6 shadow-md">
                <FiSun className="text-4xl text-[#d96d55]" />
                <h3 className="text-xl font-bold text-[#4e2723] mt-4">
                  Planetary Influence
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Every zodiac sign is ruled by a specific planet.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 shadow-md">
                <FiMoon className="text-4xl text-[#d96d55]" />
                <h3 className="text-xl font-bold text-[#4e2723] mt-4">
                  Emotional Nature
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  Rashis influence emotions, thinking, and behavior.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RashiSection />

      {/* HOROSCOPE SECTION */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
            Horoscope Insights
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-4">
            Astrology Predictions
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {horoscopeCards.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[35px] p-8 shadow-md hover:shadow-2xl transition"
            >
              <div className="w-20 h-20 rounded-full bg-[#fff1ec] flex items-center justify-center text-[#d96d55] text-4xl">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-[#4e2723] mt-6">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-8 mt-4">
                {item.desc}
              </p>

              <button className="mt-6 inline-flex items-center gap-2 text-[#d96d55] font-semibold">
                Read More
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#d96d55] to-[#b85645]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <FiStar className="mx-auto text-6xl mb-6" />

          <h2 className="text-3xl md:text-5xl font-bold">
            Daily Horoscope & Predictions
          </h2>

          <p className="mt-8 text-lg leading-8 text-white/90">
            Stay updated with daily astrology predictions, lucky timings,
            planetary movements, spiritual remedies, and guidance for your
            zodiac sign.
          </p>

          <button className="mt-10 px-8 py-4 rounded-full bg-white text-[#d96d55] font-semibold hover:scale-105 transition">
            View Daily Horoscope
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f1d6cf] rounded-[30px] p-7"
            >
              <h3 className="text-xl font-bold text-[#4e2723]">
                {item.q}
              </h3>

              <p className="text-gray-600 leading-7 mt-4">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="bg-[#fff1ec] border border-[#f1d6cf] rounded-[40px] p-10 md:p-16 text-center">
          <FiStar className="mx-auto text-6xl text-[#d96d55] mb-6" />

          <h2 className="text-3xl md:text-5xl font-bold text-[#4e2723] leading-tight">
            Get Personalized Astrology Guidance
          </h2>

          <p className="max-w-3xl mx-auto mt-6 text-gray-600 text-lg leading-8">
            Consult our experienced astrologers for kundli analysis, horoscope,
            relationship guidance, career predictions, and spiritual remedies.
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

export default RashiDetailsPage;