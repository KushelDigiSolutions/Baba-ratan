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
  FiHome,
} from "react-icons/fi";

const traits = [
  "Emotional",
  "Caring",
  "Loyal",
  "Protective",
  "Intuitive",
  "Sensitive",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "White & Silver",
  },
  {
    title: "Lucky Number",
    value: "2",
  },
  {
    title: "Ruling Planet",
    value: "Moon",
  },
  {
    title: "Lucky Day",
    value: "Monday",
  },
];

const faqData = [
  {
    question: "What kind of personality does Cancer have?",
    answer:
      "Cancer natives are emotional, caring, intuitive, and family-oriented individuals who value deep emotional connections.",
  },
  {
    question: "Which planet rules Cancer?",
    answer:
      "The Moon rules Cancer and represents emotions, intuition, comfort, and emotional balance.",
  },
  {
    question: "Which careers suit Cancer natives?",
    answer:
      "Counseling, healthcare, hospitality, teaching, social work, interior design, and creative fields suit Cancer people.",
  },
];

const CancerPage = () => {
  return (
    <div className="w-full bg-[#fbfcff] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#5a6fcf] via-[#7487de] to-[#9aaaf0] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Cancer Zodiac Sign
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Cancer Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#e8edff] mt-3">
              कर्क राशि ♋
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-white/90 max-w-2xl">
              Cancer is a water sign ruled by the Moon. Cancer natives are
              emotional, caring, protective, and deeply connected to family,
              relationships, and emotional security.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-white text-[#5a6fcf] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <button className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#5a6fcf] transition">
                Talk To Astrologer
              </button>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[150px] md:text-[240px] text-white drop-shadow-2xl">
                ♋
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
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1400&auto=format&fit=crop"
              alt="Cancer"
              className="w-full h-[550px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-8 -right-8 bg-white shadow-2xl rounded-3xl p-6 border border-[#dce4ff]">
              <h3 className="text-[#5a6fcf] font-semibold">
                Element
              </h3>

              <p className="text-3xl font-bold text-[#2f3c7c] mt-2">
                Water 🌊
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div>
            <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider">
              About Cancer
            </span>

            <h2 className="text-4xl md:text-6xl font-bold text-[#2f3c7c] mt-4 leading-tight">
              Personality Of Cancer Natives
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-8">
              Cancer natives are compassionate, emotional, and deeply intuitive
              individuals. They care deeply for loved ones and create strong
              emotional bonds in relationships.
            </p>

            <p className="text-gray-600 text-lg leading-9 mt-5">
              Ruled by the Moon, Cancer people are sensitive and nurturing.
              Their emotional intelligence helps them understand others deeply
              and provide support whenever needed.
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-4 mt-10">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-5 py-3 rounded-full bg-[#eef2ff] border border-[#dce4ff] text-[#4d61bf] font-medium"
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
          <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider">
            Cancer Astrology
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#2f3c7c] mt-4">
            Lucky Things For Cancer
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8faff] border border-[#dce4ff] rounded-[35px] p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#5a6fcf] text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-3xl font-bold text-[#2f3c7c] mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-16">
          <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider">
            Cancer Insights
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#2f3c7c] mt-4">
            Love, Career & Health
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-4xl">
              <FiHeart />
            </div>

            <h3 className="text-3xl font-bold text-[#2f3c7c] mt-7">
              Love & Relationship
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Cancer natives are loyal and deeply emotional partners who value
              love, care, emotional security, and long-term relationships.
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-4xl">
              <FiBriefcase />
            </div>

            <h3 className="text-3xl font-bold text-[#2f3c7c] mt-7">
              Career & Finance
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Cancer people perform well in caring professions like healthcare,
              counseling, education, hospitality, and creative industries.
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[35px] p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-20 h-20 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-4xl">
              <FiActivity />
            </div>

            <h3 className="text-3xl font-bold text-[#2f3c7c] mt-7">
              Health & Wellness
            </h3>

            <p className="text-gray-600 leading-8 mt-5">
              Cancer natives should focus on emotional wellness, healthy food,
              and stress management to maintain inner peace and stability.
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#5a6fcf] to-[#92a3ef]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="text-white">
            <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center text-5xl backdrop-blur-md">
              <FiHome />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold mt-8 leading-tight">
              Cancer & Emotional Security
            </h2>

            <p className="text-lg md:text-xl leading-9 text-white/90 mt-8">
              Cancer natives value family, emotional comfort, and meaningful
              relationships. Their caring nature makes them dependable and
              emotionally supportive people.
            </p>

            <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-[#5a6fcf] font-semibold hover:scale-105 transition">
              Explore Compatibility
              <FiArrowRight />
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop"
              alt="Cancer Emotion"
              className="w-full h-[450px] object-cover rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-6 left-6 bg-white/20 backdrop-blur-md rounded-2xl px-5 py-3 text-white border border-white/20">
              Moon Energy 🌙
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE */}
      <section className="py-24 px-4 md:px-10 lg:px-20 bg-[#fbfcff]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-28 h-28 mx-auto rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-5xl shadow-xl">
            <FiMoon />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-[#2f3c7c] mt-8">
            Today's Cancer Horoscope
          </h2>

          <p className="text-lg md:text-xl leading-9 text-gray-600 mt-8">
            Today is a favorable day for emotional healing and strengthening
            personal relationships. Trust your intuition and avoid unnecessary
            stress while making decisions.
          </p>

          <button className="mt-10 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#5a6fcf] text-white font-semibold hover:bg-[#4358b6] transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-14">
          <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider">
            FAQs
          </span>

          <h2 className="text-4xl md:text-6xl font-bold text-[#2f3c7c] mt-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[30px] border border-[#dce4ff] p-8"
            >
              <h3 className="text-2xl font-bold text-[#2f3c7c]">
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
        <div className="bg-[#eef2ff] border border-[#dce4ff] rounded-[45px] p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-10 left-10 text-[180px] text-[#5a6fcf]">
              ♋
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-24 h-24 mx-auto rounded-full bg-[#5a6fcf] text-white flex items-center justify-center text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-[#2f3c7c] mt-8 leading-tight">
              Get Personalized Cancer Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-7 text-gray-600 text-lg leading-9">
              Connect with expert astrologers for Cancer horoscope, kundli
              analysis, relationship advice, emotional healing, and spiritual
              remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-[#5a6fcf] text-white font-semibold hover:bg-[#4358b6] transition">
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-full border border-[#5a6fcf] text-[#5a6fcf] font-semibold hover:bg-[#5a6fcf] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancerPage;