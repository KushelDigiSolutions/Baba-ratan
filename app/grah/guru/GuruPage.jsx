// app/grah/guru/page.jsx
"use client";

import React from "react";
import {
  ArrowRight,
  Sparkles,
  Crown,
  BookOpen,
  ShieldCheck,
  Gem,
  HeartHandshake,
  Star,
  SunMedium,
  Orbit,
  GraduationCap,
  CheckCircle2,
  Phone,
} from "lucide-react";

export default function GuruGrahPage() {
  return (
    <div className="bg-[#fffdf8] text-[#2b2215] overflow-hidden">
      {/* ================= HERO SECTION (English) ================= */}
      <section className="relative overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[#f6e4b3]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.04)_1px,transparent_1px)] bg-[size:70px_70px]" />

        {/* GLOW */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-300/30 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-orange-300/30 rounded-full blur-[120px]" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 min-h-screen items-center gap-20 py-20">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 bg-white/70 border border-white px-5 py-3 rounded-full shadow-lg backdrop-blur-xl">
                <div className="w-3 h-3 rounded-full bg-[#c58a2d]" />
                <span className="text-sm font-semibold tracking-[3px] uppercase text-[#7a4d0b]">
                  Navgrah • Lord Guru
                </span>
              </div>

              <h1 className="mt-8 text-5xl sm:text-7xl lg:text-[110px] font-black leading-[1.1]">
                <span className="text-[#8b5e1a]">Guru</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f2b84b] to-[#8b5e1a] py-2">
                  Planet
                </span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl leading-9 text-[#5e4a2d] max-w-2xl">
                Jupiter, known as Brihaspati, remains the supreme celestial guide of divine wisdom, higher knowledge, and spiritual growth. A benefic Guru fills your life with absolute positivity, continuous financial abundance, and exceptional fortune.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 sm:gap-5 mt-10">
                <a href="#remedies-section" className="w-full sm:w-auto">
                  <button className="w-full justify-center group cursor-pointer bg-[#8b5e1a] hover:bg-[#70450c] text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 duration-300 shadow-[0_15px_40px_rgba(139,94,26,0.35)]">
                    Explore Remedies
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-300" />
                  </button>
                </a>
                <a href="tel:+917042600873" className="w-full sm:w-auto">
                  <button className="w-full bg-white/80 border cursor-pointer border-[#e9c87b] text-[#8b5e1a] hover:bg-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg">
                    Consult Astrologer
                  </button>
                </a>
              </div>

              {/* MINI STATS */}
              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-14">
                {[
                  {
                    title: "Day",
                    value: "Thursday",
                  },
                  {
                    title: "Element",
                    value: "Ether",
                  },
                  {
                    title: "Gemstone",
                    value: "Yellow Sapphire",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-xl border border-white rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-xl text-center"
                  >
                    <p className="text-[#8b5e1a]/70 text-xs sm:text-sm">
                      {item.title}
                    </p>
                    <h3 className="text-sm sm:text-base md:text-2xl font-black mt-1 sm:mt-2 text-[#8b5e1a]">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              {/* BIG GLOW */}
              <div className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-[#ffcf67] to-[#c58a2d] blur-[100px] opacity-40" />

              {/* PLANET */}
              <div className="relative z-10 mt-10 lg:mt-0">
                {/* OUTER RING */}
                <div className="absolute inset-[-20px] sm:inset-[-50px] rounded-full border border-[#c58a2d]/30 animate-spin"></div>
                <div className="absolute inset-[-40px] sm:inset-[-90px] rounded-full border border-[#c58a2d]/20"></div>

                {/* PLANET */}
                <div className="w-[200px] sm:w-[300px] lg:w-[420px] h-[200px] sm:h-[300px] lg:h-[420px] rounded-full bg-gradient-to-br from-[#ffe29a] via-[#f2b84b] to-[#8b5e1a] shadow-[0_0_120px_rgba(242,184,75,0.55)] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-16 sm:w-24 h-16 sm:h-24 rounded-full bg-white/10 blur-2xl"></div>
                  <div className="absolute bottom-10 sm:bottom-16 right-10 sm:right-14 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-black/10 blur-2xl"></div>
                  <SunMedium className="w-20 sm:w-32 lg:w-44 h-20 sm:h-32 lg:h-44 text-white" />
                </div>

                {/* FLOATING GLASS CARDS */}
                <div className="absolute -top-8 -right-10 bg-white rounded-3xl shadow-2xl border border-[#f4deb0] p-5 hidden lg:flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#fff3d4] text-[#8b5e1a] flex items-center justify-center">
                    <BookOpen className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Represents</p>
                    <h3 className="font-bold text-xl text-black">Intellect</h3>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-10 bg-white rounded-3xl shadow-2xl border border-[#f4deb0] p-5 hidden lg:flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#fff3d4] text-[#8b5e1a] flex items-center justify-center">
                    <Crown className="w-7 h-7" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Controls</p>
                    <h3 className="font-bold text-xl text-black">Abundance</h3>
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
              <span className="text-[#c58a2d] uppercase tracking-[4px] font-bold">
                गुरु देव के बारे में
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.3] mt-6">
                ज्ञान और समृद्धि के कारक
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                सृष्टि के परम मार्गदर्शक देवगुरु बृहस्पति उच्च विवेक, नीतिशास्त्र, धर्मपरायणता और सुख-समृद्धि के सबसे बड़े अधिष्ठाता माने जाते हैं।
              </p>

              <p className="mt-4 text-lg leading-9 text-gray-600">
                शुभ गुरु का प्रभाव जातक को समाज में सर्वोच्च यश, कीर्ति और आध्यात्मिक चेतना प्रदान करता है, जिससे उसका जीवन सदैव सौभाग्यशाली बना रहता है।
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  {
                    title: "संतान और विवाह सुख",
                    desc: "उत्तम संतान की प्राप्ति और सुखी वैवाहिक जीवन का परम आशीर्वाद देना।"
                  },
                  {
                    title: "न्याय व धर्मपरायणता",
                    desc: "जातक को अत्यंत न्यायप्रिय, सत्यवादी और धार्मिक संस्थाओं का संरक्षक बनाना।"
                  },
                  {
                    title: "आध्यात्मिक गुरु की प्राप्ति",
                    desc: "जीवन के हर कठिन मोड़ पर एक सच्चे मार्गदर्शक और सद्गुरु का सान्निध्य मिलना।"
                  },
                  {
                    title: "विशाल दृष्टिकोण",
                    desc: "संकीर्ण सोच से बाहर निकालकर ब्रह्मांडीय और दार्शनिक दृष्टिकोण (Philosophical Vision) प्रदान करना।"
                  }
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#f4deb0] rounded-3xl p-6 shadow-lg flex items-start gap-5 hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#fff3d4] text-[#c58a2d] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-[#8b5e1a]">{item.title}</h4>
                      <p className="text-gray-600 mt-2 leading-7">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD DESIGN */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#fff5d8] to-[#ffe7b0] rounded-[45px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-[#f2d28a] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#f2c14e]/20 blur-3xl"></div>
                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  {[
                    {
                      icon: <GraduationCap className="w-8 h-8" />,
                      title: "पुखराज की शक्ति",
                      desc: "पुखराज धारण करने से भाग्य का उदय।"
                    },
                    {
                      icon: <ShieldCheck className="w-8 h-8" />,
                      title: "स्वर्ण संचय",
                      desc: "सोने और बहुमूल्य रत्नों का अपार संचय।"
                    },
                    {
                      icon: <Orbit className="w-8 h-8" />,
                      title: "धार्मिक यात्रा",
                      desc: "पवित्र तीर्थस्थलों की अनवरत यात्रा।"
                    },
                    {
                      icon: <Gem className="w-8 h-8" />,
                      title: "रोग निवारण",
                      desc: "लीवर और पाचन संबंधी जटिल रोगों से मुक्ति।"
                    }
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="bg-white rounded-3xl p-8 shadow-lg border border-[#f7e5bc] hover:-translate-y-2 duration-300"
                    >
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#f2c14e] to-[#c58a2d] text-white flex items-center justify-center shadow-lg">
                        {item.icon}
                      </div>
                      <h3 className="text-2xl font-black mt-6">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 mt-3 leading-7">
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
      <section className="py-16 md:py-28 bg-[#2f220e] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-yellow-300 uppercase tracking-[4px] font-bold">
              Positive Influences
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mt-6 leading-[1.3]">
              Benefits of a Powerful Jupiter
            </h2>
            <p className="text-white/70 text-lg leading-9 mt-6">
              A powerfully placed Jupiter in your horoscope illuminates your life path with divine grace, endless fortune, and outstanding intellect.
            </p>
          </div>

          {/* EFFECT GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-20">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Divine Wisdom",
                desc: "Unlocks ancient knowledge, making you a phenomenal teacher, consultant, or advisor.",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Progeny Bliss",
                desc: "Ensures the birth of highly obedient, intelligent, and prosperous children.",
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Corporate Expansion",
                desc: "Drives massive scale-ups in business ventures without compromising on ethical standards.",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Aura of Purity",
                desc: "Surrounds you with an impenetrable golden aura that completely deflects negative energy.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-[24px] sm:rounded-[35px] p-6 sm:p-8 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-3 duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#f2c14e] to-[#8b5e1a] text-white flex items-center justify-center shadow-2xl animate-pulse">
                  {item.icon}
                </div>
                <h3 className="text-white text-2xl sm:text-3xl font-black mt-6 sm:mt-8">
                  {item.title}
                </h3>
                <p className="text-white/60 text-base sm:text-lg leading-7 sm:leading-8 mt-3 sm:mt-5">
                  {item.desc}
                </p>
                <a href="tel:+917042600873">
                  <button className="flex items-center gap-2 cursor-pointer text-yellow-300 font-semibold mt-6 sm:mt-8 group-hover:gap-4 duration-300">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MANTRA & REMEDIES SECTION (Hindi) ================= */}
      <section id="remedies-section" className="py-16 md:py-28 bg-[#fffaf0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
            {/* REMEDIES LIST */}
            <div>
              <span className="text-[#c58a2d] uppercase tracking-[4px] font-bold">
                विशेष निवारण मार्गदर्शिका
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.3] sm:leading-[1.4] mt-6 text-[#2b2215]">
                गुरु दोष निवारण के <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f2b84b] to-[#8b5e1a] py-2">
                  अचूक वैदिक उपाय
                </span>
              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                यदि कुंडली में बृहस्पति देव का प्रभाव प्रतिकूल हो, तो घबराने की कोई आवश्यकता नहीं है। देवगुरु की कृपा प्राप्त करने व उनकी शुभ ऊर्जा को प्रबल करने के लिए अत्यंत सरल व अचूक उपाय शास्त्रों में वर्णित हैं।
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "प्रतिदिन मस्तक, कंठ और नाभि पर शुद्ध केसर का तिलक लगाने से बृहस्पति अत्यंत बलवान होता है।",
                  "गुरुवार को शिव मंदिर में चने की दाल और बेसन के लड्डू अर्पण कर ब्राह्मणों को भोजन कराएं।",
                  "स्वर्ण या पीतल के पात्र में जल पीने की आदत डालें, यह गुरु की ऊर्जा को सीधे शरीर में पहुंचाता।",
                  "'श्री रामरक्षा स्तोत्र' या 'विष्णु सहस्रनाम' का नियमित पाठ करने से बृहस्पति के समस्त दोष तत्काल भस्म हो जाते हैं।"
                ].map((text, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-white border border-[#f4deb0] rounded-2xl p-5 shadow-sm"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#f2c14e] text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>
                    <p className="text-gray-700 text-lg leading-7">{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* MANTRA BOX */}
            <div className="relative mt-10 lg:mt-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#f2c14e] to-[#8b5e1a] blur-[80px] opacity-35"></div>
              <div className="relative overflow-hidden rounded-[24px] sm:rounded-[50px] bg-gradient-to-br from-[#f2c14e] via-[#d39b31] to-[#8b5e1a] p-6 sm:p-12 lg:p-16 text-center shadow-[0_25px_80px_rgba(139,94,26,0.3)] border border-yellow-500/20">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                  <Gem className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
                </div>

                <span className="text-yellow-100 block text-sm tracking-[4px] uppercase mt-6 sm:mt-8 font-semibold">
                  वैदिक महामंत्र
                </span>

                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white mt-4 leading-[1.3]">
                  गुरु बीज मंत्र की साधना
                </h2>

                <p className="text-yellow-100 text-xl sm:text-3xl md:text-4xl font-bold leading-relaxed mt-6 sm:mt-8">
                  ॐ ग्रां ग्रीं ग्रौं सः गुरुवे नमः
                </p>

                <p className="text-white/85 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                  गुरुवार को पीली वस्तुएं दान करने, गाय को चना दाल खिलाने और गुरु मंत्र का जाप करने से जीवन की सभी बाधाएं दूर होती हैं।
                </p>

                <a href="tel:+917042600873" className="w-full sm:w-auto inline-block">
                  <button className="w-full sm:w-auto mt-6 sm:mt-10 cursor-pointer bg-white text-[#8b5e1a] hover:scale-105 duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl">
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
          <div className="bg-white rounded-[24px] sm:rounded-[45px] border border-[#f4deb0] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-6 sm:p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 sm:w-60 h-40 sm:h-60 bg-[#fff3d4] rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#f2c14e] to-[#8b5e1a] text-white flex items-center justify-center mx-auto shadow-2xl">
                <HeartHandshake className="w-10 h-10 sm:w-14 sm:h-14" />
              </div>

              <span className="text-[#8b5e1a] block text-sm tracking-[4px] uppercase mt-6 sm:mt-8 font-semibold">
                Divine Consultation
              </span>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mt-4 leading-[1.3]">
                Personalized Guru Consultation
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                Discover the absolute power of Jupiter's placements in your chart. Connect with our Vedic experts for highly effective, custom remedies and genuine gemstone counseling today.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-8 sm:mt-12">
                <a href="tel:+917042600873" className="w-full sm:w-auto">
                  <button className="w-full bg-[#8b5e1a] cursor-pointer hover:bg-[#70450c] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    Book Consultation
                  </button>
                </a>

                <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full border cursor-pointer border-[#8b5e1a] text-[#8b5e1a] hover:bg-[#8b5e1a] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center justify-center gap-2">
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