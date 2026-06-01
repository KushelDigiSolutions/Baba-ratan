"use client";

import React from "react";
import {
  Sun,
  Flame,
  Crown,
  Sparkles,
  Shield,
  Star,
  ArrowRight,
  HeartHandshake,
  Briefcase,
  Activity,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SuryaGrahPage() {
  return (
    <div className="bg-[#fffcf9] overflow-hidden text-[#5c2508]">
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-br from-[#ffecd9] via-[#ffd8b3] to-[#ffb88c] py-16 lg:py-24 border-b border-[#ffa366]/30">
        <div className="absolute inset-0 opacity-10 bg-[url('/stars.png')] bg-cover"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="bg-[#f97316]/10 text-[#d97706] border border-[#f97316]/20 px-5 py-2 rounded-full text-sm tracking-wide font-semibold">
                नवग्रह • सूर्य देव
              </span>

              <h1 className="text-5xl lg:text-7xl font-extrabold text-[#9a3412] leading-tight mt-7">
                सूर्य ग्रह
              </h1>

              <p className="text-lg sm:text-xl text-[#7c2d12] leading-9 mt-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                वैदिक ज्योतिष में सूर्य (Sun) को ग्रहों का राजा और आत्मा का कारक माना जाता है। मजबूत सूर्य आपके जीवन में अपार नेतृत्व क्षमता, तेज, राजकीय मान-सम्मान और करियर में सर्वोच्च सफलता सुनिश्चित करता है।
              </p>

              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
                <a href="#remedies-section" className="w-full sm:w-auto">
                  <button className="w-full justify-center bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-2xl font-semibold transition duration-300 shadow-lg shadow-orange-500/20 cursor-pointer">
                    उपाय जानें
                  </button>
                </a>

                <a 
                  href="https://calendly.com/bajrangastroofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto border border-[#f97316]/40 bg-white/60 text-[#ea580c] px-8 py-4 rounded-2xl font-semibold hover:bg-white transition duration-300 inline-block text-center cursor-pointer shadow-sm"
                >
                  ज्योतिषी से बात करें
                </a>
              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-12 w-full max-w-md">
                {[
                  { label: "तत्व", value: "अग्नि" },
                  { label: "दिन", value: "रविवार" },
                  { label: "रत्न", value: "माणिक्य" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/95 border border-[#ffd8b3] rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                  >
                    <p className="text-[#9a3412] text-xs sm:text-sm font-semibold">{item.label}</p>
                    <h3 className="text-[#7c2d12] font-bold text-sm sm:text-base md:text-xl mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center items-center min-h-[360px] sm:min-h-[520px] w-full overflow-hidden">
              {/* Background Glow */}
              <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-orange-300/30 blur-3xl"></div>

              {/* Outer Orbit */}
              <div className="hidden sm:block absolute w-[520px] h-[520px] rounded-full border border-[#f97316]/20 animate-[spin_30s_linear_infinite]"></div>

              {/* Middle Orbit */}
              <div className="hidden sm:block absolute w-[420px] h-[420px] rounded-full border border-[#f97316]/10"></div>

              {/* Small Floating Planets */}
              <div className="hidden sm:block absolute top-16 right-12 w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-yellow-500 shadow-[0_0_30px_rgba(251,146,60,0.4)] animate-pulse"></div>

              <div className="hidden sm:block absolute bottom-20 left-10 w-10 h-10 rounded-full bg-gradient-to-br from-red-300 to-orange-400 shadow-[0_0_20px_rgba(249,115,22,0.3)] animate-bounce"></div>

              {/* Main Sun */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 scale-90 sm:scale-100"
              >
                {/* Pulse Glow */}
                <div className="absolute inset-0 rounded-full bg-orange-400/20 blur-2xl scale-125 animate-pulse"></div>

                {/* Sun Body */}
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] max-w-full rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-500 shadow-[0_0_100px_rgba(249,115,22,0.5)] border border-[#ffb88c] flex items-center justify-center overflow-hidden">
                  
                  {/* Inner Ring */}
                  <div className="absolute inset-5 rounded-full border border-white/20"></div>

                  {/* Shine Effect */}
                  <div className="absolute top-10 left-14 w-28 h-28 bg-white/20 blur-2xl rounded-full"></div>

                  {/* Rotating Light Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-white/40 animate-spin"></div>

                  <Sun className="w-32 h-32 sm:w-40 sm:h-40 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
                </div>
              </motion.div>

              {/* Floating Glass Card */}
              <div className="absolute bottom-6 z-50 right-0 sm:right-6 bg-white/95 border border-[#ffd8b3] rounded-2xl px-5 py-4 shadow-xl">
                <p className="text-[#9a3412] text-sm font-semibold">ब्रह्मांडीय ऊर्जा</p>
                <h3 className="text-[#7c2d12] font-semibold text-lg mt-1">
                  शक्ति और नेतृत्व
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-12 lg:py-20 bg-[#fffcf9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1538370965046-79c0d6907d47?q=80&w=1200&auto=format&fit=crop"
                alt="Surya Sun Planet Vedic Astrology India — Bajrang Astro"
                className="rounded-[35px] shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover w-full border border-[#ffd8b3]/30"
              />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#f97316] font-extrabold uppercase tracking-[4px]">
                About Lord Surya
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-[#9a3412] leading-tight">
                The King of Planetary Forces
              </h2>

              <p className="text-gray-700 leading-8 text-lg mt-8">
                In Vedic astrology, the Sun represents your soul's core, raw vitality, and fundamental willpower. It is the primary driving force behind all worldly achievements.
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-5 font-medium">
                A strongly placed Sun in your birth chart blesses you with unbreakable self-confidence, robust health, and the magnetic charisma to lead and inspire the masses.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Unshakable Spiritual Core and Inner Radiance",
                  "Unprecedented Governmental and Administrative Success",
                  "Absolute Immunity against Hidden Enemies and Rivals",
                  "Generational Wealth and Royal Prestige Accumulation",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-[#ffd8b3] flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#ffedd5] text-[#f97316] flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-[#7c2d12] mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-[#fffcf9] to-[#ffecd9]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#f97316] uppercase tracking-[4px] font-extrabold">
              सकारात्मक प्रभाव
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 text-[#9a3412] leading-[1.3] md:leading-[1.4]">
              मजबूत सूर्य के चमत्कारी लाभ
            </h2>

            <p className="text-gray-700 leading-8 mt-6 text-lg font-medium">
              जब आपकी कुंडली में सूर्य बलवान स्थिति में होता है, तो वह आपके व्यक्तित्व को एक अलग ही चमक और आत्मविश्वास प्रदान करता है, जिससे आप हर क्षेत्र में विजय प्राप्त करते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "राजकीय सम्मान",
                desc: "शासन-प्रशासन और राजनीति के क्षेत्र में उच्च पद और अद्वितीय दबदबा प्राप्त होता है।",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "पिता से मधुर संबंध",
                desc: "पैतृक संपत्ति का पूर्ण लाभ मिलता है और पिता के साथ आत्मीय संबंध मजबूत होते हैं।",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "आत्मिक ऊर्जा",
                desc: "आत्मा में एक विशेष प्रकार का ओज उत्पन्न होता है जो हर निराशा को नष्ट कर देता है।",
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "नेत्र ज्योति और अस्थि बल",
                desc: "नेत्र संबंधी विकार दूर होते हैं और शरीर की अस्थियां वज़्र के समान मजबूत बनती हैं।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-[#ffd8b3]/60"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#7c2d12] mt-6">{item.title}</h3>

                <p className="text-gray-600 leading-7 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK SURYA */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#f97316] uppercase tracking-[4px] font-extrabold">
                Signs of Surya Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#9a3412] mt-5 leading-tight">
                Negative Impacts of a Weak Sun
              </h2>

              <p className="text-gray-700 leading-8 text-lg mt-6">
                A debilitated or afflicted Sun in the horoscope can severely limit your potential, causing unwarranted obstacles and a persistent lack of inner drive.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Chronic lethargy and deep-seated pessimism",
                  "Unwarranted defamation and false legal allegations",
                  "Severe heart palpitations and chronic bone ailments",
                  "Continuous friction and losses in ancestral wealth",
                  "Extreme difficulty in passing government examinations",
                  "Loss of willpower to lead or manage responsibilities",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#fffcf9] border border-[#ffd8b3] rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#f97316] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-[#7c2d12]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop"
                alt="Weak Surya Remedies India — Bajrang Astro Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-[#ffd8b3]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#ffecd9] via-[#ffd8b3] to-[#ffb88c] border-t border-b border-[#ffa366]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#9a3412] uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7c2d12] mt-5 leading-[1.3] md:leading-[1.4]">
              सूर्य ग्रह को बलवान करने के अचूक तरीके
            </h2>

            <p className="text-[#5c2508] leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              वैदिक ज्योतिष में सूर्य के अशुभ प्रभावों को दूर करने और इसके शुभ फलों को प्राप्त करने के लिए अत्यंत प्रभावशाली उपाय और अनुष्ठान बताए गए हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "आदित्य हृदय स्तोत्र",
                desc: "प्रतिदिन प्रातःकाल आदित्य हृदय स्तोत्र का पाठ करने से असाध्य रोगों और शत्रुओं का नाश होता है।",
              },
              {
                title: "तांबे का बर्तन",
                desc: "रात भर तांबे के पात्र में रखे जल का प्रात: सेवन करना सूर्य की सकारात्मक ऊर्जा को अवशोषित करता है।",
              },
              {
                title: "गेहूं और गुड़ का दान",
                desc: "प्रत्येक रविवार को गरीबों में गेहूं, लाल वस्त्र और गुड़ का दान करने से राजयोग का निर्माण होता है।",
              },
              {
                title: "पिता की सेवा",
                desc: "प्रतिदिन पिता या पितातुल्य व्यक्तियों के चरण स्पर्श कर उनका आशीर्वाद लेना सबसे बड़ा सूर्य उपाय है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/95 border border-[#ffd8b3] rounded-[30px] p-8 text-[#7c2d12] flex flex-col items-center text-center sm:items-start sm:text-left shadow-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#f97316] text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="leading-7 text-gray-600 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[35px] p-8 mt-12 text-center shadow-xl border border-[#ffd8b3]">
            <h3 className="text-3xl font-extrabold text-[#9a3412]">
              सूर्य बीज मंत्र
            </h3>

            <p className="text-[#ea580c] text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः
            </p>

            <p className="text-gray-700 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              सूर्योदय के समय इस पवित्र मंत्र का 108 बार जाप करने से मान-सम्मान, धन और सौभाग्य की प्राप्ति होती है।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#fffcf9]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-10 text-center border border-[#ffd8b3] shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#f97316] to-[#fb923c] text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#9a3412] mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-700 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of the Sun in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="bg-[#f97316] hover:bg-[#ea580c] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-orange-500/20 cursor-pointer">
                Book Consultation
              </a>

              <button className="border border-[#f97316]/50 text-[#f97316] hover:bg-[#f97316] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                View More Details <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
