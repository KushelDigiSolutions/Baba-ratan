// app/grah/rahu/page.jsx
"use client";

import React from "react";
import {
  ArrowRight,
  Phone,
  Flame,
  ShieldAlert,
  Sparkles,
  Eye,
  Orbit,
  Stars,
  BadgeAlert,
} from "lucide-react";

export default function RahuGrahPage() {
  return (
    <div className="bg-[#05010a] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex items-center px-6 lg:px-20 py-12 md:py-16 lg:py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1d1033_0%,#090013_45%,#020004_100%)]"></div>

        {/* Stars */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <span className="px-5 py-2 rounded-full border border-cyan-500 text-sm tracking-[4px] uppercase bg-cyan-500/10">
              नवग्रह • राहु देव
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] sm:leading-tight mt-8">
              <span className="text-white">राहु </span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text py-2">
                ग्रह
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-8 max-w-2xl mx-auto lg:mx-0">
              वैदिक ज्योतिष चक्र में राहु देव को गहन रहस्य, तीक्ष्ण बुद्धि, नवाचार और सांसारिक ऐश्वर्य का प्रतीक माना जाता है। अनुकूल राहु व्यक्ति को रातों-रात सर्वोच्च सफलता, प्रसिद्धि और यश दिलाता है।
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-10">
              <a href="tel:+917042600873" className="w-full sm:w-auto">
                <button className="w-full justify-center bg-gradient-to-r cursor-pointer from-cyan-500 to-blue-600 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
                  ज्योतिषी से बात करें
                  <ArrowRight size={20} />
                </button>
              </a>
              <a href="#remedies-section" className="w-full sm:w-auto">
                <button className="w-full justify-center border border-white/20 cursor-pointer bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition">
                  उपाय देखें
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            {/* Glow */}
            <div className="absolute w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-cyan-500 blur-[140px] opacity-30 rounded-full"></div>

            {/* Planet */}
            <div className="relative flex items-center justify-center">
              {/* DARK GLOW */}
              <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-cyan-500/20 blur-3xl animate-pulse" />

              {/* SHADOW RINGS */}
              <div className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-cyan-400/20 animate-spin [animation-duration:16s]" />

              <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full border border-violet-500/10 animate-[spin_22s_linear_infinite_reverse]" />

              {/* MAIN PLANET */}
              <div className="w-[200px] sm:w-[420px] h-[200px] sm:h-[420px] rounded-full bg-gradient-to-br from-cyan-500 via-[#1e293b] to-black shadow-[0_0_140px_rgba(6,182,212,0.45)] flex items-center justify-center relative overflow-hidden border border-cyan-500/10">
                {/* TEXTURE */}
                <div className="absolute top-6 sm:top-12 left-6 sm:left-12 w-16 sm:w-28 h-16 sm:h-28 rounded-full bg-white/10 blur-2xl" />

                <div className="absolute bottom-10 sm:bottom-16 right-10 sm:right-14 w-24 sm:w-36 h-24 sm:h-36 rounded-full bg-black/50 blur-3xl" />

                {/* DARK ENERGY */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.55),transparent_45%)]" />

                {/* ICON */}
                <div className="relative flex items-center justify-center">
                  {/* ENERGY CORE */}
                  <div className="absolute w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-cyan-400/20 blur-2xl animate-pulse" />

                  {/* ROTATING ORBIT */}
                  <Orbit className="w-20 sm:w-44 h-20 sm:h-44 text-cyan-100 opacity-90 animate-spin [animation-duration:12s] drop-shadow-[0_0_30px_rgba(34,211,238,0.8)]" />

                  {/* CENTER */}
                  <div className="absolute w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-gradient-to-br from-cyan-200 to-violet-400 shadow-[0_0_30px_rgba(34,211,238,0.9)]" />
                </div>

                {/* FLOATING PARTICLES */}
                <div className="absolute top-16 right-20 w-2 h-2 bg-cyan-300 rounded-full animate-ping" />

                <div className="absolute bottom-20 left-16 w-3 h-3 bg-violet-400 rounded-full animate-pulse" />

                <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute top-10 left-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
              <p className="text-sm text-gray-300">प्रतिनिधित्व करता है</p>
              <h4 className="font-bold text-xl">भ्रम (Illusion)</h4>
            </div>

            <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
              <p className="text-sm text-gray-300">नियंत्रित करता है</p>
              <h4 className="font-bold text-xl">महत्वाकांक्षा</h4>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS SECTION */}
      <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-20">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px] font-bold">
            Celestial Qualities
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-[1.3] sm:leading-tight">
            Effects of a Powerful Rahu
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-5 max-w-2xl mx-auto lg:mx-0 mx-auto text-base sm:text-lg leading-8">
            An auspicious and well-aspected Rahu in your horoscope offers revolutionary logical reasoning, complete fearlessness, and sudden career expansion.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            {
              icon: Sparkles,
              title: "Digital Dominance",
              desc: "Grants absolute mastery over IT, AI, software programming, and modern technological innovations.",
            },
            {
              icon: Eye,
              title: "Foreign Settlement",
              desc: "Paves an extremely smooth path for overseas travel, international business, and permanent foreign citizenship.",
            },
            {
              icon: Flame,
              title: "Mass Manipulation",
              desc: "Equips you with unparalleled psychological insights to influence massive crowds and consumer behavior.",
            },
            {
              icon: Stars,
              title: "Sudden Windfalls",
              desc: "Attracts massive, unexpected financial lottery, stock market booms, and hidden treasures.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[24px] sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition"
            >
              <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-cyan-400 mb-4 sm:mb-6" />

              <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm sm:text-base leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* DOSHA & REMEDIES */}
      <section id="remedies-section" className="py-12 md:py-20 lg:py-28 px-6 lg:px-20 bg-white/[0.03]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
              राहु दोष निवारण के <br />
              <span className="text-cyan-400 py-2 inline-block">अचूक उपाय</span>
            </h2>

            <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg leading-8">
              जन्म कुंडली में राहु जनित दोषों के निवारण हेतु वैदिक ग्रंथों में कई कल्याणकारी उपाय व तांत्रिक अनुष्ठान सुझाए गए हैं।
            </p>

            <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
              {[
                "रसोई घर में ही बैठकर भोजन करने की आदत डालें, इससे राहु का नकारात्मक प्रभाव बहुत तेजी से घटता है।",
                "प्रतिदिन घर के मुख्य द्वार पर जल का छिड़काव करें और सफाई कर्मचारियों को समय-समय पर दान दें।",
                "गले में शुद्ध चांदी की ठोस गोली धारण करने से राहु जनित भ्रम, चिंता और भय तुरंत समाप्त होते हैं।",
                "भैरव बाबा के मंदिर में रविवार के दिन सरसों के तेल का चौमुखा दीपक जलाएं और दर्शन करें।"
              ].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5"
                >
                  <div className="w-10 h-10 rounded-full bg-cyan-500 flex items-center justify-center font-bold shrink-0">
                    {i + 1}
                  </div>

                  <p className="text-gray-200 text-sm sm:text-base leading-6 sm:leading-7">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative mt-10 lg:mt-0">
            <div className="absolute inset-0 bg-cyan-500 blur-[120px] opacity-30 rounded-full"></div>

            <div className="relative bg-gradient-to-br from-[#07121f] to-[#020611] border border-cyan-500/20 rounded-[24px] sm:rounded-[40px] p-6 sm:p-10">
              <BadgeAlert className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mb-6 sm:mb-8" />

              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
                राहु महादशा
              </h3>

              <p className="text-gray-400 text-base sm:text-lg leading-8">
                राहु की शुभ दशा जातक को राजनीति, तकनीकी क्षेत्र और वैश्विक व्यापार में असाधारण ऊंचाइयां व आध्यात्मिक चेतना प्रदान करती है।
              </p>

              <a href="tel:+917042600873" className="inline-block w-full sm:w-auto">
                <button className="w-full sm:w-auto justify-center mt-6 sm:mt-8 cursor-pointer bg-cyan-500 px-7 py-4 rounded-2xl font-semibold hover:bg-cyan-600 transition">
                  अभी कॉल करें
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-20">
        <div className="text-center mb-10 sm:mb-16">
          <span className="text-cyan-400 uppercase tracking-[4px] font-bold">
            Astrological Impact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-[1.3] sm:leading-tight">
            Key Areas Influenced by Rahu
          </h2>

          <p className="text-gray-400 mt-4 sm:mt-5 text-base sm:text-lg">
            Rahu commands these primary domains of our modern era, driving unmatched ambition.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            "Stock Market Intuition",
            "Political Diplomacy",
            "Undercover Investigations",
            "Cinematic Stardom",
          ].map((item, index) => (
            <div
              key={index}
              className="border border-cyan-500/20 bg-white/5 rounded-[24px] sm:rounded-3xl p-6 sm:p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-cyan-500/20 border border-cyan-500 mx-auto flex items-center justify-center text-xl sm:text-2xl font-bold text-cyan-400">
                {index + 1}
              </div>

              <h3 className="text-xl sm:text-2xl font-semibold mt-5 sm:mt-6">
                {item}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-20">
        <div className="bg-gradient-to-r from-cyan-600 to-blue-700 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left justify-between gap-8 sm:gap-10">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
              राहु दोष से मुक्ति और <span className="py-2 inline-block">मार्गदर्शन</span>
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 mx-auto lg:mx-0">
              क्या आप राहु की क्रूर दशा, अंतर्दशा अथवा मानसिक भ्रम से परेशान हैं? आज ही अपनी कुंडली का सटीक विश्लेषण कराएं और हमारे ज्योतिषियों से दिव्य उपाय जानें।
            </p>
          </div>
          <a href="tel:+917042600873" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto justify-center bg-white cursor-pointer text-black px-8 py-4 sm:py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition">
              <Phone />
              अभी कॉल करें
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}