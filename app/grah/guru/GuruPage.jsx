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
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen items-center gap-20 py-12 md:py-16 lg:py-20">
            {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-3 bg-white/70 border border-white px-5 py-3 rounded-full shadow-lg backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-[#c58a2d]" />
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

              <p className="mt-8 text-lg sm:text-xl leading-9 text-[#5e4a2d] max-w-2xl mx-auto lg:mx-0">
                Jupiter, known as Brihaspati, remains the supreme celestial guide of divine wisdom, higher knowledge, and spiritual growth. A benefic Guru fills your life with absolute positivity, continuous financial abundance, and exceptional fortune.
              </p>

              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 w-full max-w-md">
                {[
                  { label: "तत्व", value: "आकाश" },
                  { label: "दिन", value: "गुरुवार" },
                  { label: "रत्न", value: "पुखराज" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/95 border border-[#fce0b0] rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                  >
                    <p className="text-[#c58a2d] text-xs sm:text-sm font-semibold">{item.label}</p>
                    <h3 className="text-[#7a4d0b] font-bold text-sm sm:text-base md:text-xl mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-8">
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

      {/* ABOUT */}
      <section className="py-12 lg:py-20 bg-[#fffdf8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781009800/Guru_Jupiter_Planet_Vedic_Astrology_India_Bajrang_Astro_t8jckd.avif"
                alt="Guru Jupiter Planet Vedic Astrology India — Bajrang Astro"
                className="rounded-[35px] shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover w-full border border-[#f4deb0]/30"
              />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#c58a2d] font-extrabold uppercase tracking-[4px]">
                About Lord Guru
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-[#8b5e1a] leading-tight">
                The Guru of Wisdom & Abundance
              </h2>

              <p className="text-gray-700 leading-8 text-lg mt-8">
                In Vedic astrology, Jupiter (Guru) represents supreme wisdom, spiritual righteousness, intellect, and divine grace. It is the most benevolent planetary force in the cosmos.
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-5 font-medium">
                A strongly placed Guru in your birth chart blesses you with deep knowledge, high administrative stature, virtuous children, marital bliss, and continuous financial expansion.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Supreme Academic Wisdom and Intellect",
                  "Virtuous Marital Harmony and Progeny Blessing",
                  "Immense Wealth, Gold, and Financial Prosperity",
                  "Divine Protection and Spiritual Enlightenment",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-[#f4deb0] flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#fff3d4] text-[#c58a2d] flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-[#8b5e1a] mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#fffdf8] to-[#fcf5e3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#c58a2d] uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-[#8b5e1a]">
              मजबूत गुरु के चमत्कारी लाभ
            </h2>

            <p className="text-gray-700 text-lg leading-9 mt-6 font-medium">
              जब जन्म कुंडली में देवगुरु बृहस्पति शुभ और बलवान होते हैं, तो वे जातक को असीम ज्ञान, यश, धार्मिक झुकाव और अटूट वित्तीय समृद्धि प्रदान करते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "दिव्य ज्ञान व विवेक",
                desc: "असाधारण बौद्धिक क्षमता, सही निर्णय लेने की शक्ति और शिक्षा, अध्यापन या परामर्श के क्षेत्र में अभूतपूर्व सफलता मिलती है।",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "संतान सुख",
                desc: "सदाचारी, बुद्धिमान और माता-पिता का आदर करने वाली संतान का सुख प्राप्त होता है जो कुल का नाम रोशन करती है।",
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "व्यापारिक विस्तार",
                desc: "नैतिक मूल्यों और ईमानदारी से समझौता किए बिना व्यापारिक साम्राज्य का अभूतपूर्व और निरंतर विस्तार होता है।",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "सकारात्मक आभामंडल",
                desc: "जातक के चारों ओर एक सुरक्षात्मक और दिव्य आभामंडल बनता है जो नकारात्मकता को पूर्ण रूप से नष्ट कर देता है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-[#f4deb0]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ffe29a] to-[#8b5e1a] text-[#8b5e1a] flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#8b5e1a] mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK GURU */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#c58a2d] uppercase tracking-[4px] font-extrabold">
                Signs of Guru Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#8b5e1a] mt-5 leading-tight">
                Negative Impacts of a Weak Jupiter
              </h2>

              <p className="text-gray-700 leading-8 text-lg mt-6">
                A debilitated or afflicted Jupiter in the horoscope can severely obstruct your higher learning, child-related happiness, and financial expansion.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Frequent hurdles in higher education and severe loss of memory",
                  "Delays in childbirth or persistent conflicts with children",
                  "Severe financial debts, wrong investments, and business losses",
                  "Liver disorders, obesity, diabetes, and other health issues",
                  "Loss of reputation, social isolation, and trust deficit in life",
                  "Strained relationship with father, mentors, or elder siblings",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#fffdf8] border border-[#f4deb0] rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#8b5e1a] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-[#8b5e1a]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781009908/Guru_Grah_Effects_Wealth_Wisdom_India_Vishal_Verma_ovwpad.avif"
                alt="Weak Guru Remedies India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-[#f4deb0]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#fffdf8] via-[#fcf5e3] to-[#f4deb0] border-t border-b border-[#8b5e1a]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#8b5e1a] uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#8b5e1a] mt-5 leading-[1.3] md:leading-[1.4]">
              बृहस्पति ग्रह को बलवान करने के अचूक तरीके
            </h2>

            <p className="text-[#5e4a2d] leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              वैदिक ज्योतिष में बृहस्पति के अशुभ प्रभावों को दूर करने और इसके शुभ फलों को प्राप्त करने के लिए अत्यंत प्रभावशाली उपाय और अनुष्ठान बताए गए हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "केसर का तिलक",
                desc: "प्रतिदिन मस्तक, कंठ और नाभि पर शुद्ध केसर या हल्दी का तिलक लगाने से बृहस्पति देव अत्यंत बलवान होते हैं।",
              },
              {
                title: "चने की दाल का दान",
                desc: "गुरुवार को मंदिर में चने की दाल, बेसन के लड्डू, पीले वस्त्र या हल्दी का दान करना अत्यंत शुभ होता है।",
              },
              {
                title: "पीतल के पात्र",
                desc: "भोजन या जल पीने के लिए सोने या पीतल के पात्रों का प्रयोग करें, यह गुरु की ऊर्जा को शरीर में बढ़ाता है।",
              },
              {
                title: "विष्णु उपासना",
                desc: "'श्री रामरक्षा स्तोत्र' या 'विष्णु सहस्रनाम' का नियमित पाठ करने से गुरु के समस्त दोष तत्काल भस्म हो जाते हैं।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/95 border border-[#f4deb0] rounded-[30px] p-8 text-[#8b5e1a] flex flex-col items-center text-center sm:items-start sm:text-left shadow-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#8b5e1a] text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="leading-7 text-gray-600 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[35px] p-8 mt-12 text-center shadow-xl border border-[#f4deb0]">
            <h3 className="text-3xl font-extrabold text-[#8b5e1a]">
              गुरु बीज मंत्र
            </h3>

            <p className="text-[#c58a2d] text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ ग्रां ग्रीं ग्रौं सः गुरुवे नमः
            </p>

            <p className="text-gray-700 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              गुरुवार के दिन इस महामंत्र का 108 बार जाप करने से जीवन की सभी बाधाएं दूर होती हैं और ज्ञान का विकास होता है।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#fffdf8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-10 text-center border border-[#f4deb0] shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#ffe29a] to-[#8b5e1a] text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#8b5e1a] mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-700 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of Jupiter in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="tel:+917042600873" className="bg-[#8b5e1a] hover:bg-[#70450c] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-yellow-500/20 cursor-pointer">
                Book Consultation
              </a>

              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="border border-[#8b5e1a]/50 text-[#8b5e1a] hover:bg-[#8b5e1a] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                Book Digital Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}