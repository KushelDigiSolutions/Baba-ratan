// app/grah/shani/page.jsx
"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  Scale,
  Briefcase,
  ShieldCheck,
  Gem,
  HeartHandshake,
  Star,
  Orbit,
  BadgeCheck,
  CheckCircle2,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ShaniGrahPage() {
  return (
    <div className="bg-[#05030a] text-white overflow-hidden">
      {/* ================= HERO SECTION (English) ================= */}
      <section className="relative overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e1b4b_0%,#0f0b29_40%,#05030a_100%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-20 py-12 md:py-16 lg:py-20">
            {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 px-5 py-3 rounded-full shadow-lg backdrop-blur-xl">
                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-sm font-semibold tracking-[3px] uppercase text-indigo-300">
                  Celestial Order • The Lord of Karma
                </span>
              </div>

              <h1 className="mt-8 text-5xl sm:text-7xl lg:text-[110px] font-black leading-[1.1] sm:leading-none">
                <span className="text-white">Shani</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 py-2">
                  Planet
                </span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl leading-9 text-indigo-100/70 max-w-2xl mx-auto lg:mx-0">
                Lord Shani acts as the celestial guardian of universal truth. Governing your actions, discipline, and ultimate destiny, a benefic Saturn rewards your persistent dedication with true stability, absolute power, and long-lasting prosperity.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-10">
                <a href="#remedies-section" className="w-full sm:w-auto">
                  <button className="w-full justify-center group cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 duration-300 shadow-[0_15px_40px_rgba(79,70,229,0.35)]">
                    Explore Remedies
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-300" />
                  </button>
                </a>
                <a href="tel:+917042600873" className="w-full sm:w-auto">
                  <button className="w-full justify-center bg-white/5 border cursor-pointer border-indigo-500/30 text-indigo-200 hover:bg-white hover:text-[#05030a] px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg flex items-center">
                    Consult Astrologer
                  </button>
                </a>
              </div>

              {/* MINI STATS */}
              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 sm:mt-14">
                {[
                  {
                    title: "Cosmic Rule",
                    value: "Karma",
                  },
                  {
                    title: "Worship",
                    value: "Saturday",
                  },
                  {
                    title: "Stone",
                    value: "Sapphire",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-xl text-center"
                  >
                    <p className="text-indigo-200/60 text-xs sm:text-sm">
                      {item.title}
                    </p>
                    <h3 className="text-sm sm:text-base md:text-2xl font-black mt-1 sm:mt-2 text-indigo-300">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              {/* BIG GLOW */}
              <div className="absolute w-[320px] sm:w-[420px] lg:w-[500px] h-[320px] sm:h-[420px] lg:h-[500px] rounded-full bg-gradient-to-br from-indigo-600 to-purple-700 blur-[100px] opacity-30" />

              {/* PLANET */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10"
              >
                {/* OUTER RINGS */}
                <div className="absolute inset-[-20px] sm:inset-[-50px] rounded-full border border-indigo-500/30 animate-spin [animation-duration:20s]"></div>
                <div className="absolute inset-[-40px] sm:inset-[-90px] rounded-full border border-purple-500/20 [animation-duration:15s] animate-[spin_15s_linear_infinite_reverse]"></div>

                {/* MAIN PLANET BODY */}
                <div className="w-[200px] sm:w-[300px] lg:w-[420px] h-[200px] sm:h-[300px] lg:h-[420px] rounded-full bg-gradient-to-br from-indigo-400 via-purple-600 to-[#1e1b4b] shadow-[0_0_120px_rgba(79,70,229,0.4)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-6 sm:top-12 left-6 sm:left-12 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white/20 blur-2xl"></div>
                  <div className="absolute bottom-10 sm:bottom-16 right-10 sm:right-14 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-black/40 blur-2xl"></div>
                  <Orbit className="w-20 sm:w-32 lg:w-44 h-20 sm:h-32 lg:h-44 text-indigo-100 opacity-90 drop-shadow-[0_0_35px_rgba(129,140,248,0.7)] animate-spin [animation-duration:12s]" />
                </div>

                {/* FLOATING GLASS CARDS */}
                <div className="absolute -top-8 -right-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-5 hidden lg:flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-300 flex items-center justify-center">
                    <Scale className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-indigo-200/60">Represents</p>
                    <h3 className="font-bold text-xl text-white">Justice & Duty</h3>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-10 bg-white/10 backdrop-blur-md rounded-3xl shadow-2xl border border-white/10 p-5 hidden lg:flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-purple-500/20 text-purple-300 flex items-center justify-center">
                    <Briefcase className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-purple-200/60">Controls</p>
                    <h3 className="font-bold text-xl text-white">Time & Destiny</h3>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-12 lg:py-20 bg-[#070512]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop"
                alt="Shani Saturn Planet Vedic Astrology India — Bajrang Astro"
                className="rounded-[35px] shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover w-full border border-indigo-500/30"
              />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-indigo-400 font-extrabold uppercase tracking-[4px]">
                About Lord Shani
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white leading-tight">
                The Cosmic Judge & Lord of Karma
              </h2>

              <p className="text-indigo-100/70 leading-8 text-lg mt-8">
                In Vedic astrology, Saturn (Shani) represents absolute truth, discipline, karma, and justice. He is the ultimate cosmic teacher who enforces hard work and punishes misdeeds.
              </p>

              <p className="text-indigo-100/70 leading-8 text-lg mt-5 font-medium">
                A strongly placed Shani in your birth chart blesses you with unbreakable patience, deep spiritual wisdom, massive political power, and long-lasting wealth.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Supreme Political and Democratic Power",
                  "Absolute Mastery over Occult and Secret Sciences",
                  "Immense Wealth through Mining and Industries",
                  "Unwavering Discipline and Spiritual Awakening",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm backdrop-blur-md"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-indigo-200 mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* EFFECTS */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#070512] to-[#120e29]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-indigo-400 uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-white">
              मजबूत शनि के चमत्कारी लाभ
            </h2>

            <p className="text-indigo-100/70 text-lg leading-9 mt-6 font-medium">
              जब जन्म कुंडली में न्यायप्रिय शनि देव शुभ और बलवान होते हैं, तो वे जातक को अटूट धैर्य, गहरा विवेक, राजनीतिक वर्चस्व और दीर्घकालिक संपत्ति प्रदान करते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Scale className="w-8 h-8" />,
                title: "जनता का समर्थन",
                desc: "राजनीति, जनसेवा और सांगठनिक नेतृत्व में भारी सफलता और समाज में मान-सम्मान दिलाता है।",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "औद्योगिक समृद्धि",
                desc: "रियल एस्टेट, खनन (माइनिंग), विनिर्माण (मैन्युफैक्चरिंग) और तेल उद्योगों में भारी वित्तीय लाभ देता है।",
              },
              {
                icon: <BadgeCheck className="w-8 h-8" />,
                title: "रहस्यमयी विद्याएं",
                desc: "गहन अंतर्ज्ञान और ज्योतिष, हस्तरेखा व आध्यात्मिक चिकित्सा के क्षेत्र में असाधारण सफलता दिलाता है।",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "अटूट धैर्य व शांति",
                desc: " worldly दुख-तकलीफों से मन को विरक्त कर Stoic शांति और मानसिक स्थिरता प्रदान करता है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {item.title}
                </h3>

                <p className="text-indigo-200/60 leading-7 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK SHANI */}
      <section className="py-12 lg:py-20 bg-[#05030a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-indigo-400 uppercase tracking-[4px] font-extrabold">
                Signs of Shani Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 leading-tight">
                Negative Impacts of a Weak Saturn
              </h2>

              <p className="text-indigo-100/70 leading-8 text-lg mt-6">
                A debilitated or afflicted Saturn in the horoscope can severely delay your progress, trigger continuous obstacles, and cause health and financial distress.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Chronic delays in all career milestones and sudden professional downfalls",
                  "Severe joint pains, chronic bone diseases, and constant body fatigue",
                  "Unexplained losses in business, heavy debts, and legal disputes",
                  "Strained relationship with employees, subordinates, and working class",
                  "Deep depression, persistent anxiety, and high mental stress",
                  "Frequent property litigations and issues regarding ancestral wealth",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-indigo-500 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-indigo-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1614730321146-b6fa6a46bcb4?q=80&w=1200&auto=format&fit=crop"
                alt="Weak Shani Remedies India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-indigo-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#070512] via-[#120e29] to-[#05030a] border-t border-b border-indigo-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-indigo-400 uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-5 leading-[1.3] md:leading-[1.4]">
              शनि देव को प्रसन्न करने के अचूक उपाय
            </h2>

            <p className="text-indigo-200/70 leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              शनि दोष या साढ़े साती से घबराने की कोई आवश्यकता नहीं है। सरल वैदिक अनुष्ठानों और न्यायसंगत आचरण से आप शनि देव का पूर्ण आशीर्वाद प्राप्त कर सकते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "दिव्यांगों की सेवा",
                desc: "शनिवार के दिन कुष्ठ रोगियों, नेत्रहीनों और दिव्यांगों की यथासंभव सेवा और दान करें।",
              },
              {
                title: "छाया दान करना",
                desc: "लोहे के बर्तन में सरसों का तेल भरकर उसमें अपनी छाया देखें और उसे शनिवार को शनि मंदिर में दान करें।",
              },
              {
                title: "शनि स्तोत्र पाठ",
                desc: "महाराज दशरथ कृत 'शनि स्तोत्र' या हनुमान चालीसा का शनिवार को पूर्ण श्रद्धापूर्वक पाठ करें।",
              },
              {
                title: "सात्विक आचरण",
                desc: "मांसाहार, मदिरापान और झूठ का पूर्ण त्याग करें, क्योंकि शनि देव न्याय और ईमानदारी के रक्षक हैं।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 text-indigo-100 flex flex-col items-center text-center sm:items-start sm:text-left shadow-md backdrop-blur-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-indigo-500 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-white">{item.title}</h3>

                <p className="leading-7 text-indigo-200/60 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-[35px] p-8 mt-12 text-center shadow-xl border border-white/10 backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-white">
              शनि बीज मंत्र
            </h3>

            <p className="text-indigo-300 text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ प्रां प्रीं प्रौं सः शनये नमः
            </p>

            <p className="text-indigo-100/70 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              शनिवार की संध्याकाल में इस महामंत्र का 108 बार जाप करने से सभी कष्ट, साढ़े साती व ढैय्या के दुष्प्रभाव दूर होते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#05030a]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 text-center border border-white/10 shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-indigo-100/70 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Struggling under the strict trials of Sade Sati or Shani Mahadasha? Obtain an extremely accurate, personalized Saturn reading from our elite astrologers. Get customized, easy-to-perform remedies to resolve all roadblocks and align with success today.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="tel:+917042600873" className="w-full sm:w-auto">
                <button className="w-full justify-center bg-gradient-to-r cursor-pointer from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl flex items-center gap-3">
                  <Phone className="w-5 h-5" />
                  Schedule Consultation
                </button>
              </a>

              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                <button className="w-full justify-center border cursor-pointer border-indigo-500/50 text-indigo-300 hover:bg-white hover:text-[#05030a] px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center">
                  Book Digital Call
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}