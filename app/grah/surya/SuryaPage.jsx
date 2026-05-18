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

export default function SuryaGrahPage() {
  return (
    <div className="bg-[#fff7f5] overflow-hidden text-[#2d1f1f]">
      {/* HERO SECTION */}
      <section className="relative bg-[#c96e67] py-16 lg:py-24">
        <div className="absolute inset-0 opacity-10 bg-[url('/stars.png')] bg-cover"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-white/20 text-white border border-white/20 px-5 py-2 rounded-full text-sm tracking-wide">
                नवग्रह • सूर्य देव
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mt-7">
                सूर्य ग्रह
              </h1>

              <p className="text-xl text-white/90 leading-9 mt-8 max-w-2xl">
                वैदिक ज्योतिष में सूर्य (Sun) को ग्रहों का राजा और आत्मा का कारक माना जाता है। मजबूत सूर्य आपके जीवन में अपार नेतृत्व क्षमता, तेज, राजकीय मान-सम्मान और करियर में सर्वोच्च सफलता सुनिश्चित करता है।
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="bg-white text-[#c96e67] px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300">
                  उपाय जानें
                </button>

                <a 
                  href="https://calendly.com/bajrangastroofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#c96e67] duration-300 inline-block text-center"
                >
                  ज्योतिषी से बात करें
                </a>

              </div>

              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-12">
                {[
                  { label: "तत्व", value: "अग्नि" },
                  { label: "दिन", value: "रविवार" },
                  { label: "रत्न", value: "माणिक्य" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-2 sm:p-5 text-center"
                  >
                    <p className="text-white/70 text-xs sm:text-sm">{item.label}</p>
                    <h3 className="text-white font-bold text-sm sm:text-base md:text-xl mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center items-center min-h-[360px] sm:min-h-[520px] w-full overflow-hidden">
              {/* Background Glow */}
              <div className="absolute w-[280px] h-[280px] sm:w-[420px] sm:h-[420px] rounded-full bg-yellow-400/20 blur-3xl"></div>

              {/* Outer Orbit */}
              <div className="hidden sm:block absolute w-[520px] h-[520px] rounded-full border border-white/20 animate-[spin_30s_linear_infinite]"></div>

              {/* Middle Orbit */}
              <div className="hidden sm:block absolute w-[420px] h-[420px] rounded-full border border-white/10"></div>

              {/* Small Floating Planets */}
              <div className="hidden sm:block absolute top-16 right-12 w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-yellow-500 shadow-[0_0_30px_rgba(255,190,60,0.6)] animate-pulse"></div>

              <div className="hidden sm:block absolute bottom-20 left-10 w-10 h-10 rounded-full bg-gradient-to-br from-red-300 to-orange-500 shadow-[0_0_20px_rgba(255,120,60,0.5)] animate-bounce"></div>

              {/* Main Sun */}
              <div className="relative z-10 scale-90 sm:scale-100">
                {/* Pulse Glow */}
                <div className="absolute inset-0 rounded-full bg-yellow-300/30 blur-2xl scale-125 animate-pulse"></div>

                {/* Sun Body */}
                <div className="relative w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] max-w-full rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 shadow-[0_0_100px_rgba(255,190,60,0.7)] border border-white/20 flex items-center justify-center overflow-hidden">
                  
                  {/* Inner Ring */}
                  <div className="absolute inset-5 rounded-full border border-white/10"></div>

                  {/* Shine Effect */}
                  <div className="absolute top-10 left-14 w-28 h-28 bg-white/20 blur-2xl rounded-full"></div>

                  {/* Rotating Light Ring */}
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-white animate-spin"></div>

                  <Sun className="w-32 h-32 sm:w-40 sm:h-40 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
                </div>
              </div>

              {/* Floating Glass Card */}
              <div className="absolute bottom-6 z-50 right-0 sm:right-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-2xl">
                <p className="text-white/60 text-sm">ब्रह्मांडीय ऊर्जा</p>
                <h3 className="text-white font-semibold text-lg mt-1">
                  शक्ति और नेतृत्व
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt="surya"
                className="rounded-[35px] shadow-2xl h-[600px] object-cover w-full"
              />
            </div>

            <div>
              <span className="text-[#c96e67] font-semibold uppercase tracking-[4px]">
                About Lord Surya
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 leading-tight">
                The King of Planetary Forces
              </h2>

              <p className="text-gray-600 leading-8 text-lg mt-8">
                In Vedic astrology, the Sun represents your soul's core, raw vitality, and fundamental willpower. It is the primary driving force behind all worldly achievements.
              </p>

              <p className="text-gray-600 leading-8 text-lg mt-5">
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
                    className="bg-white rounded-2xl p-6 border border-[#f4d6d0]"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#fff0ec] text-[#c96e67] flex items-center justify-center">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-medium text-xl mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#fff7f5] to-[#ffe9e3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
              सकारात्मक प्रभाव
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-5 leading-[1.3] md:leading-[1.4]">
              मजबूत सूर्य के चमत्कारी लाभ
            </h2>

            <p className="text-gray-600 leading-8 mt-6 text-lg">
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
                desc: "नेत्र संबंधी विकार दूर होते हैं और शरीर की अस्थियां वज्र के समान मजबूत बनती हैं।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[30px] p-8  hover:-translate-y-2 duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-[#c96e67] to-[#de8d67] text-white flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="text-gray-600 leading-7 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK SURYA */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
                Signs of Surya Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 leading-tight">
                Negative Impacts of a Weak Sun
              </h2>

              <p className="text-gray-600 leading-8 text-lg mt-6">
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
                    className="flex items-center gap-5 bg-[#fff5f2] border border-[#f5d7d1] rounded-2xl p-5"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c96e67] text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>

                    <p className="text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=1200&auto=format&fit=crop"
                alt="weak surya"
                className="rounded-[35px] shadow-2xl h-[650px] object-cover w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section className="py-16 md:py-20 bg-gradient-to-r from-[#c96e67] to-[#de8d67]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-white/80 uppercase tracking-[4px] font-semibold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-5 leading-[1.3] md:leading-[1.4]">
              सूर्य ग्रह को बलवान करने के अचूक तरीके
            </h2>

            <p className="text-white/90 leading-8 max-w-3xl mx-auto text-lg mt-6">
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
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-[30px] p-8 text-white"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-[#c96e67] flex items-center justify-center">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="leading-7 text-white/80 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[35px] p-8 mt-12 text-center shadow-2xl">
            <h3 className="text-3xl font-bold">
              सूर्य बीज मंत्र
            </h3>

            <p className="text-[#c96e67] text-2xl font-semibold mt-6">
              ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः
            </p>

            <p className="text-gray-600 leading-8 mt-5 text-lg">
              सूर्योदय के समय इस पवित्र मंत्र का 108 बार जाप करने से मान-सम्मान, धन और सौभाग्य की प्राप्ति होती है।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#fff7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-10 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#c96e67] to-[#de8d67] text-white flex items-center justify-center mx-auto shadow-xl">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-600 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of the Sun in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="bg-[#c96e67] hover:bg-[#b85d57] text-white px-8 py-4 rounded-2xl font-semibold duration-300">
                Book Consultation
              </a>

              <button className="border border-[#c96e67] text-[#c96e67] hover:bg-[#c96e67] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2">
                View More Details <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}