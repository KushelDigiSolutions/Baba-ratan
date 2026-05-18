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
          <div className="grid lg:grid-cols-2 min-h-screen items-center gap-20 py-20">
            {/* LEFT */}
            <div>
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

              <p className="mt-8 text-lg sm:text-xl leading-9 text-indigo-100/70 max-w-2xl">
                Lord Shani acts as the celestial guardian of universal truth. Governing your actions, discipline, and ultimate destiny, a benefic Saturn rewards your persistent dedication with true stability, absolute power, and long-lasting prosperity.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 sm:gap-5 mt-10">
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
              <div className="relative z-10">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION (Hindi) ================= */}
      <section className="py-16 md:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* LEFT CONTENT */}
            <div>
              <span className="text-indigo-400 uppercase tracking-[4px] font-bold">
                शनि देव की दिव्य महिमा
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.3] mt-6 text-white">
                कर्म के अधिपति और <br />न्याय के परम देवता
              </h2>

              <p className="mt-8 text-lg leading-9 text-indigo-100/70">
                सृष्टि के परम न्यायाधीश शनि देव मनुष्य को सत्यनिष्ठा और न्यायप्रियता की सीख देते हैं। वे प्रत्येक जातक के कर्म चक्र को संतुलित कर उसे समाज में दृढ़ स्थान दिलाते हैं।
              </p>

              <p className="mt-4 text-lg leading-9 text-indigo-100/70">
                शुभ शनि की छत्रछाया में व्यक्ति अत्यंत निडर, व्यावहारिक और दृढ़निश्चयी बनता है, जिससे वह व्यावसायिक जीवन में शिखर पर पहुँचकर स्थाई मान-सम्मान प्राप्त करता है।
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  {
                    title: "लोकतांत्रिक नेतृत्व",
                    desc: "मजदूर वर्ग, जनसमूह और आम जनता का अटूट समर्थन और राजनीतिक वर्चस्व प्राप्त करना।"
                  },
                  {
                    title: "गूढ़ रहस्यों का ज्ञाता",
                    desc: "तंत्र-मंत्र, रहस्यमयी विद्याओं और गहरी शोध (Research) में जातक को महारत हासिल होती है।"
                  },
                  {
                    title: "खनिज और इस्पात लाभ",
                    desc: "पेट्रोलियम, कोयला, लौह उद्योग और कारखानों के व्यापार में अप्रत्याशित और अथाह धन लाभ।"
                  },
                  {
                    title: "निर्मम वास्तविकता",
                    desc: "भ्रम के जालों को काटकर जातक को जीवन की कठोर परंतु सच्ची वास्तविकताओं से परिचित कराना।"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 rounded-3xl p-6 shadow-lg flex items-start gap-5 hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-indigo-300">{item.title}</h4>
                      <p className="text-indigo-100/70 mt-2 leading-7">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD DESIGN */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-[#1e1b4b] to-[#0f0b29] rounded-[24px] sm:rounded-[45px] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] border border-indigo-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl"></div>
                <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 relative z-10">
                  {[
                    {
                      icon: <Briefcase className="w-7 h-7 sm:w-8 sm:h-8" />,
                      title: "राजनीतिक सत्ता",
                      desc: "चुनावों और जन-आंदोलनों में प्रचंड सफलता।"
                    },
                    {
                      icon: <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
                      title: "विदेशी भूमि लाभ",
                      desc: "विदेश यात्रा और विदेशों में स्थाई व्यापारिक विस्तार।"
                    },
                    {
                      icon: <Orbit className="w-7 h-7 sm:w-8 sm:h-8" />,
                      title: "वैराग्य व संन्यास",
                      desc: "आध्यात्मिक मार्ग पर सर्वोच्च वैराग्य की प्राप्ति।"
                    },
                    {
                      icon: <Gem className="w-7 h-7 sm:w-8 sm:h-8" />,
                      title: "न्यायिक विजय",
                      desc: "लंबे समय से चल रहे कोर्ट-कचहरी के मुकदमों में जीत।"
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white/5 rounded-[20px] sm:rounded-3xl p-6 sm:p-8 shadow-lg border border-white/10 hover:-translate-y-2 duration-300"
                    >
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black mt-4 sm:mt-6 text-white">
                        {item.title}
                      </h3>
                      <p className="text-indigo-100/60 text-sm sm:text-base mt-2 sm:mt-3 leading-6 sm:leading-7">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EFFECTS SECTION (English) ================= */}
      <section className="py-16 md:py-28 bg-[#0a0718] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-indigo-400 uppercase tracking-[4px] font-bold">
              Mystical Blessings
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mt-6 leading-[1.3]">
              Divine Rewards of a Strong Saturn
            </h2>
            <p className="text-indigo-100/70 text-base sm:text-lg leading-8 sm:leading-9 mt-6">
              A highly favorable Saturn strengthens your mental resolve, turning every obstacle into a secure stepping stone for permanent, grand success.
            </p>
          </div>

          {/* EFFECT GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-20">
            {[
              {
                icon: <Scale className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Mass Leadership",
                desc: "Attracts unwavering loyalty from employees and grants massive success in democratic politics.",
              },
              {
                icon: <Star className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Industrial Wealth",
                desc: "Ensures heavy financial gains in real estate, mining, manufacturing, and oil industries.",
              },
              {
                icon: <BadgeCheck className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Occult Mastery",
                desc: "Unlocks profound intuition, making you adept in astrology, mysticism, and spiritual healing.",
              },
              {
                icon: <Sparkles className="w-7 h-7 sm:w-8 sm:h-8" />,
                title: "Absolute Detachment",
                desc: "Shields your mind from superficial worldly pain, establishing a state of stoic peace.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-[24px] sm:rounded-[35px] p-6 sm:p-8 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-3 duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center shadow-2xl animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-black mt-6 sm:mt-8">
                  {item.title}
                </h3>
                <p className="text-indigo-100/60 text-base sm:text-lg leading-7 sm:leading-8 mt-3 sm:mt-5">
                  {item.desc}
                </p>
                <a href="tel:+917042600873" className="inline-block w-full">
                  <button className="flex items-center gap-2 cursor-pointer text-indigo-400 font-semibold mt-6 sm:mt-8 group-hover:gap-4 duration-300 w-full sm:w-auto">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MANTRA & REMEDIES SECTION (Hindi) ================= */}
      <section id="remedies-section" className="py-16 md:py-28 bg-[#05030a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* REMEDIES LIST */}
            <div>
              <span className="text-indigo-400 uppercase tracking-[4px] font-bold">
                विशेष निवारण मार्गदर्शिका
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.3] sm:leading-[1.4] mt-6 text-white">
                साढ़े साती, ढैय्या और शनि दोष के <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 py-2">
                  अचूक शास्त्रीय उपाय
                </span>
              </h2>

              <p className="mt-6 text-base sm:text-lg leading-8 sm:leading-9 text-indigo-100/70">
                शनि दोष या साढ़े साती से घबराने की कोई आवश्यकता नहीं है। यह आपकी आंतरिक शक्ति को निखारने का समय है। सरल वैदिक अनुष्ठानों और न्यायसंगत आचरण से आप शनि देव का पूर्ण आशीर्वाद प्राप्त कर सकते हैं।
              </p>

              <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
                {[
                  "शनिवार के दिन कुष्ठ रोगियों, नेत्रहीनों और दिव्यांगों की यथासंभव आर्थिक और शारीरिक सहायता करें।",
                  "लोहे के बर्तन में सरसों का तेल भरकर उसमें अपनी छाया देखें और उसे शनि मंदिर में दान कर दें (छाया दान)।",
                  "महाराज दशरथ कृत 'शनि स्तोत्र' का हर शनिवार को पूर्ण श्रद्धा और विश्वास के साथ पाठ करें।",
                  "मांसाहार और मदिरापान का आजीवन त्याग करें, यह शनि देव को प्रसन्न करने का सबसे सशक्त माध्यम है।"
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-gray-200 text-base sm:text-lg leading-7">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MANTRA BOX */}
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-fuchsia-600 blur-[80px] opacity-40"></div>
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[50px] bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-950 p-6 sm:p-12 lg:p-16 text-center shadow-[0_25px_80px_rgba(79,70,229,0.2)] border border-indigo-500/20">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                  <Gem className="w-10 h-10 sm:w-14 sm:h-14 text-indigo-200" />
                </div>

                <span className="text-indigo-300 block text-sm tracking-[4px] uppercase mt-6 sm:mt-8 font-semibold">
                  वैदिक महामंत्र
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-[1.3]">
                  शनि बीज मंत्र की तांत्रिक साधना
                </h2>

                <p className="text-indigo-200 text-xl sm:text-3xl lg:text-4xl font-bold leading-relaxed mt-6 sm:mt-8">
                  ॐ प्रां प्रीं प्रौं सः शनये नमः
                </p>

                <p className="text-indigo-100/80 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                  शनिवार की शाम नीले ऊनी आसन पर पूर्व दिशा की ओर मुख करके 108 बार जाप करें। यह मानसिक अशांति को शांत कर आत्मिक बल और सुरक्षा कवच प्रदान करता है।
                </p>

                <a href="tel:+917042600873" className="w-full sm:w-auto inline-block">
                  <button className="w-full sm:w-auto mt-6 sm:mt-10 cursor-pointer bg-white text-[#0f0b29] hover:scale-105 duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl">
                    परामर्श शुरू करें
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION (English) ================= */}
      <section className="py-16 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-md rounded-[24px] sm:rounded-[45px] border border-indigo-500/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)] p-6 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex items-center justify-center mx-auto shadow-2xl">
                <HeartHandshake className="w-10 h-10 sm:w-14 sm:h-14" />
              </div>

              <span className="text-indigo-300 block text-sm tracking-[4px] uppercase mt-6 sm:mt-8 font-semibold">
                Divine Consultation
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mt-4 leading-[1.3] text-white">
                Align with Saturn's Cosmic Rhythm
              </h2>

              <p className="text-indigo-100/70 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                Struggling under the strict trials of Sade Sati or Shani Mahadasha? Obtain an extremely accurate, personalized Saturn reading from our elite astrologers. Get customized, easy-to-perform remedies to resolve all roadblocks and align with success today.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-8 sm:mt-12">
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
        </div>
      </section>
    </div>
  );
}