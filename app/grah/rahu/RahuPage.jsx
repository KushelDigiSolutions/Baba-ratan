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
  Star,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

export default function RahuGrahPage() {
  return (
    <div className="bg-[#050508] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex items-center px-6 lg:px-20 py-12 md:py-16 lg:py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2d3748_0%,#1a202c_45%,#0a0f18_100%)]"></div>

        {/* Stars */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-500 text-sm tracking-[4px] uppercase bg-zinc-500/10 text-zinc-200">
              <div className="w-2 h-2 rounded-full bg-zinc-400" />
              <span>नवग्रह • राहु देव</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-[1.1] sm:leading-tight mt-8">
              <span className="text-white">राहु </span>
              <span className="bg-gradient-to-r from-gray-400 via-slate-400 to-zinc-500 text-transparent bg-clip-text py-2">
                ग्रह
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-8 max-w-2xl mx-auto lg:mx-0">
              वैदिक ज्योतिष चक्र में राहु देव को गहन रहस्य, तीक्ष्ण बुद्धि, नवाचार और सांसारिक ऐश्वर्य का प्रतीक माना जाता है। अनुकूल राहु व्यक्ति को रातों-रात सर्वोच्च सफलता, प्रसिद्धि और यश दिलाता है।
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 w-full max-w-md">
              {[
                { label: "तत्व", value: "वायु" },
                { label: "दिन", value: "शनिवार" },
                { label: "रत्न", value: "गोमेद" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-zinc-500/30 rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                >
                  <p className="text-zinc-400 text-xs sm:text-sm font-semibold">{item.label}</p>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-xl mt-2">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-8">
              <a href="tel:+917042600873" className="w-full sm:w-auto">
                <button className="w-full justify-center bg-gradient-to-r cursor-pointer from-gray-600 to-slate-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
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
            <div className="absolute w-[320px] sm:w-[450px] h-[320px] sm:h-[300px] lg:h-[450px] bg-slate-500 blur-[140px] opacity-30 rounded-full"></div>

            {/* Planet */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center"
            >
              {/* DARK GLOW */}
              <div className="absolute w-44 h-44 sm:w-64 sm:h-64 rounded-full bg-slate-500/20 blur-3xl animate-pulse" />

              {/* SHADOW RINGS */}
              <div className="absolute w-[240px] sm:w-[320px] h-[240px] sm:h-[320px] rounded-full border border-slate-400/20 animate-spin [animation-duration:16s]" />

              <div className="absolute w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] rounded-full border border-zinc-500/10 animate-[spin_22s_linear_infinite_reverse]" />

              {/* MAIN PLANET */}
              <div className="w-[200px] sm:w-[420px] h-[200px] sm:h-[420px] rounded-full bg-gradient-to-br from-gray-500 via-[#374151] to-black shadow-[0_0_140px_rgba(107,114,128,0.45)] flex items-center justify-center relative overflow-hidden border border-slate-500/10">
                {/* TEXTURE */}
                <div className="absolute top-6 sm:top-12 left-6 sm:left-12 w-16 sm:w-28 h-16 sm:h-28 rounded-full bg-white/10 blur-2xl" />

                <div className="absolute bottom-10 sm:bottom-16 right-10 sm:right-14 w-24 sm:w-36 h-24 sm:h-36 rounded-full bg-black/50 blur-3xl" />

                {/* DARK ENERGY */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent_35%),radial-gradient(circle_at_70%_70%,rgba(0,0,0,0.55),transparent_45%)]" />

                {/* ICON */}
                <div className="relative flex items-center justify-center">
                  {/* ENERGY CORE */}
                  <div className="absolute w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-slate-400/20 blur-2xl animate-pulse" />

                  {/* ROTATING ORBIT */}
                  <Orbit className="w-20 sm:w-44 h-20 sm:h-44 text-gray-100 opacity-90 animate-spin [animation-duration:12s] drop-shadow-[0_0_30px_rgba(156,163,175,0.8)]" />

                  {/* CENTER */}
                  <div className="absolute w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-gradient-to-br from-gray-200 to-slate-400 shadow-[0_0_30px_rgba(156,163,175,0.9)]" />
                </div>

                {/* FLOATING PARTICLES */}
                <div className="absolute top-16 right-20 w-2 h-2 bg-gray-300 rounded-full animate-ping" />

                <div className="absolute bottom-20 left-16 w-3 h-3 bg-zinc-400 rounded-full animate-pulse" />

                <div className="absolute top-1/2 right-10 w-2 h-2 bg-white rounded-full animate-ping" />
              </div>
            </motion.div>

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

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-12 lg:py-20 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop"
                alt="Rahu Shadow Planet Vedic Astrology India — Bajrang Astro"
                className="rounded-[35px] shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover w-full border border-white/10"
              />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-gray-400 font-extrabold uppercase tracking-[4px]">
                About Lord Rahu
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white leading-tight">
                The Celestial Shadow of Infinite Ambition
              </h2>

              <p className="text-gray-300 leading-8 text-lg mt-8">
                In Vedic astrology, Rahu represents intense ambition, material success, deep obsession, software/IT development, and mysterious illusions. It breaks conventions to propel you toward unprecedented status.
              </p>

              <p className="text-gray-300 leading-8 text-lg mt-5 font-medium">
                When favorably placed, Rahu is a catalyst for sudden corporate windfalls, supreme logical reasoning, public fame, and high foreign accomplishments.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10 w-full">
                {[
                  "Mastery over Modern IT, AI, & Coding",
                  "Lucrative Sudden Returns in Stock Market",
                  "Political Superiority & Public Dominance",
                  "Successful Foreign Travel and Settling",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm hover:scale-[1.02] duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 text-gray-300 flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-gray-200 mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#050508] to-[#0c0d14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-gray-400 uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-white">
              मजबूत राहु के चमत्कारी लाभ
            </h2>

            <p className="text-gray-300 text-lg leading-9 mt-6 font-medium">
              जब जन्म कुंडली में तीक्ष्ण बुद्धि और रहस्य के कारक राहु देव शुभ और बलवान होते हैं, तो वे जातक को रातों-रात असीमित सफलता, प्रसिद्धि और तकनीकी वर्चस्व प्रदान करते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "तकनीकी और नवाचार",
                desc: "आईटी (IT), कृत्रिम बुद्धिमत्ता (AI), कंप्यूटर प्रोग्रामिंग और अत्याधुनिक वैज्ञानिक शोध में शीर्ष सफलता दिलाता है।",
              },
              {
                icon: <Eye className="w-8 h-8" />,
                title: "विदेश यात्रा और वास",
                desc: "विदेशी संपर्कों, अंतरराष्ट्रीय व्यापार और विदेशों में स्थायी निवास का मार्ग सुगम बनाता है।",
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "जनता पर प्रभुत्व",
                desc: "व्यक्ति में असाधारण कूटनीतिक कौशल और जनसमूह को आकर्षित व प्रभावित करने की अद्भुत क्षमता पैदा करता है।",
              },
              {
                icon: <Stars className="w-8 h-8" />,
                title: "अचानक धन लाभ",
                desc: "शेयर बाजार, लॉटरी, पैतृक संपत्ति या गुप्त स्रोतों से अप्रत्याशित वित्तीय लाभ प्रदान करता है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gray-500 to-slate-700 text-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK RAHU */}
      <section className="py-12 lg:py-20 bg-[#050508]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-gray-400 uppercase tracking-[4px] font-extrabold">
                Signs of Rahu Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 leading-tight">
                Negative Impacts of a Weak Rahu
              </h2>

              <p className="text-gray-300 leading-8 text-lg mt-6">
                An afflicted or weak Rahu in the birth chart creates severe illusion, sudden downfalls, and absolute instability in life.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Deep mental confusion, persistent anxiety, and phantom fears",
                  "Sudden loss of reputation, false allegations, and legal troubles",
                  "Severe digestion problems, gas troubles, and mysterious diseases",
                  "Unstable career, constant job switches, and financial losses",
                  "Strained relations with paternal relatives and subordinates",
                  "Addictive tendencies, sleep disorders, and nightmares",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-slate-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop"
                alt="Weak Rahu Remedies India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-gray-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#050508] via-[#0c0d14] to-[#050508] border-t border-b border-gray-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-gray-400 uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-5 leading-[1.3] md:leading-[1.4]">
              राहु देव को शांत करने के अचूक वैदिक उपाय
            </h2>

            <p className="text-gray-400 leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              राहु देव के प्रतिकूल प्रभावों को दूर करने और उनकी शुभ दृष्टि प्राप्त करने के लिए शास्त्रों में बहुत प्रभावी उपाय बताए गए हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "सफाई कर्मियों को दान",
                desc: "सफाई कर्मचारियों या निर्धनों को शनिवार के दिन काले तिल, कंबल, उड़द या अनाज दान करें।",
              },
              {
                title: "चांदी की गोली रखना",
                desc: "राहु जनित भ्रम, चिंता और भय को दूर करने के लिए अपने पास सदैव शुद्ध चांदी की एक ठोस गोली रखें।",
              },
              {
                title: "रसोई में भोजन करना",
                desc: "सदैव रसोई घर में जमीन पर बैठकर भोजन ग्रहण करने की आदत डालें, इससे राहु का दुष्प्रभाव शांत होता है।",
              },
              {
                title: "भैरव बाबा की उपासना",
                desc: "प्रत्येक शनिवार को भैरव देव के मंदिर में चौमुखी दीपक जलाएं और काल भैरव अष्टक का पाठ करें।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 text-gray-100 flex flex-col items-center text-center sm:items-start sm:text-left shadow-md backdrop-blur-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-600 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-white">{item.title}</h3>

                <p className="leading-7 text-gray-400 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-[35px] p-8 mt-12 text-center shadow-xl border border-white/10 backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-white">
              राहु बीज मंत्र
            </h3>

            <p className="text-gray-300 text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ भ्रां भ्रीं भ्रौं सः राहवे नमः
            </p>

            <p className="text-gray-100/70 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              शनिवार की संध्याकाल में या राहु काल में इस महामंत्र का 108 बार जाप करने से सभी मानसिक संताप और भ्रम दूर होते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#050508]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 text-center border border-white/10 shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-gray-500 to-slate-700 text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-300 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of Rahu in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="tel:+917042600873" className="bg-slate-600 hover:bg-slate-700 text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-slate-600/20 cursor-pointer">
                Book Consultation
              </a>

              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="border border-gray-500/50 text-gray-300 hover:bg-white hover:text-[#050508] px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                Book Digital Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
