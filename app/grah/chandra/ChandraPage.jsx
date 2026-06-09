// app/grah/chandra/page.jsx
"use client";

import React from "react";
import {
  Moon,
  Sparkles,
  Heart,
  Shield,
  Star,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Zap,
  ShieldCheck,
  HeartHandshake,
  Orbit,
} from "lucide-react";
import { motion } from "framer-motion";

const ChandraGrahPage = () => {
  const remedies = [
    "भगवान शिव के 'चंद्रशेखर' स्वरूप का प्रतिदिन रुद्राक्ष की माला से ध्यान करें और शिवलिंग पर जल अर्पित करें।",
    "सोमवार को चांदी के पात्र में कच्चा दूध और अक्षत डालकर चंद्र देव को अर्घ्य दें।",
    "पूर्णिमा के दिन व्रत रखें और गंगाजल मिश्रित जल से स्नान कर मानसिक शुद्धता प्राप्त करें।",
    "अपनी माता या सास को चांदी का कोई आभूषण या सफेद वस्त्र उपहार स्वरूप भेंट करें।",
    "नियमित रूप से 'ॐ श्रां श्रीं श्रौं सः चंद्रमसे नमः' बीज मंत्र का 108 बार मानसिक जाप करें।",
    "तनाव और घबराहट दूर करने के लिए सदैव अपने पास एक शुद्ध चांदी का चौकोर टुकड़ा रखें।",
  ];

  const faqs = [
    {
      q: "How does the Moon phase (Shukla Paksha/Krishna Paksha) impact my birth chart?",
      a: "Being born during Shukla Paksha (waxing Moon) generally brings natural optimism and steady growth, while Krishna Paksha births often yield highly introspective and deeply intuitive personalities.",
    },
    {
      q: "What is Kemdrum Dosha and how does it affect mental peace?",
      a: "Kemdrum Dosha occurs when the Moon is entirely isolated in the chart. It triggers intense feelings of loneliness and financial struggles, requiring strong spiritual remedies to overcome.",
    },
    {
      q: "Can a strong Chandra mitigate other malefic planetary effects?",
      a: "Yes, an exceptionally strong Moon acts as a divine shield, balancing the aggressive energies of Mars and Saturn by maintaining your emotional stability during extreme crisis.",
    },
    {
      q: "Why is water so heavily emphasized in Moon remedies?",
      a: "The Moon physically governs the tides and fundamentally controls the water element. Consuming water from silver vessels aligns your internal fluid balance with lunar vibrations.",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-12 md:py-16 lg:py-20 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-white rounded-full"
              style={{
                width: Math.random() * 3 + "px",
                height: Math.random() * 3 + "px",
                top: Math.random() * 100 + "%",
                left: Math.random() * 100 + "%",
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div className="text-center lg:text-left" initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-blue-200">
              <Sparkles size={14} /> नवग्रह • चंद्र देव
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              चंद्र ग्रह <br />
              <span className="text-blue-300">मन और मानसिक शांति</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl mx-auto lg:mx-0">
              चंद्र देव हमारे अंतर्मन, भावनाओं और आंतरिक प्रसन्नता के परम संचालक हैं। जन्म कुंडली में शुभ चंद्रमा का प्रभाव जीवन में असीम मानसिक शांति, मधुर संबंध और सृजनात्मक ऊर्जा का संचार करता है।
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 w-full max-w-md">
              {[
                { label: "तत्व", value: "जल" },
                { label: "दिन", value: "सोमवार" },
                { label: "रत्न", value: "मोती" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/95 border border-slate-200 rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                >
                  <p className="text-blue-600 text-xs sm:text-sm font-semibold">{item.label}</p>
                  <h3 className="text-slate-800 font-bold text-sm sm:text-base md:text-xl mt-2">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-8">
              <a href="tel:+917042600873">
                <button className="bg-white cursor-pointer text-[#1e293b] px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                  ज्योतिषी से बात करें <ArrowRight size={18} />
                </button>
              </a>

              <button className="border cursor-pointer border-white/30 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
                उपाय देखें
              </button>
            </div>
          </motion.div>

          <div className="relative flex justify-center items-center">
            {/* Orbits */}
            <motion.div
              className="absolute w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full border border-white/5"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[300px] sm:h-[400px] lg:h-[600px] rounded-full border border-white/10"
              animate={{ rotate: -360 }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Moon Visualization */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative z-10"
            >
              <div className="w-64 h-64 md:w-96 md:h-96 rounded-full bg-gradient-to-tr from-[#E2E8F0] via-white to-[#CBD5E1] shadow-[0_0_100px_rgba(255,255,255,0.3)] flex items-center justify-center border-8 border-white/10">
                <Moon size={160} className="text-[#475569] drop-shadow-2xl" />

                {/* Glow Ring */}
                <div className="absolute inset-0 rounded-full animate-pulse bg-white/20 blur-2xl -z-10" />
              </div>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-10 -right-10 bg-white/10 backdrop-blur-xl border border-white/20 p-4 rounded-2xl shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-500 rounded-lg">
                    <Zap size={20} className="text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-200">मानसिक ऊर्जा</p>
                    <p className="font-bold">भावनात्मक शक्ति</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781008858/Chandra_Moon_Planet_Vedic_Astrology_India_Bajrang_Astro_sa7hch.avif"
                alt="Chandra Moon Planet Vedic Astrology India — Bajrang Astro"
                className="rounded-[35px] shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover w-full border border-slate-200/50"
              />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-blue-600 font-extrabold uppercase tracking-[4px]">
                About Lord Chandra
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-slate-800 leading-tight">
                The Mother of Emotional Consciousness
              </h2>

              <p className="text-slate-700 leading-8 text-lg mt-8">
                In Vedic astrology, the Moon (Chandra) governs the mind, emotions, maternal connections, and your deep inner temperament. It represents the peace of your soul and your psychological foundation.
              </p>

              <p className="text-slate-700 leading-8 text-lg mt-5 font-medium">
                A highly favorable Moon establishes supreme mental stillness, absolute emotional security, and steady focus in critical life choices, shielding you from stress.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10 w-full">
                {[
                  "Unparalleled Emotional Resilience & Deep Calm",
                  "Magnified Creative Imagination & Intuition",
                  "Sweet, Harmonious Personal & Maternal Relations",
                  "Steady Flow of Liquid Cash and Financial Stability",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm hover:scale-[1.02] duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-slate-800 mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-[#f0f4f8] to-[#e2ebf0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-blue-600 uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-[#1E293B]">
              मजबूत चंद्रमा के दिव्य लाभ
            </h2>
            <p className="text-slate-700 text-lg leading-9 mt-6 font-medium">
              जब जन्म कुंडली में चंद्र देव उच्च या स्वराशि में होकर बलवान होते हैं, तो वे जातक को असीम मानसिक शक्ति, शांति और भौतिक सुख प्रदान करते हैं।
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "अतुलनीय मानसिक शांति",
                desc: "मन शांत, एकाग्र और सदैव प्रसन्न रहता है। डिप्रेशन, चिंता और मानसिक तनाव कोसों दूर रहते हैं।",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "सृजनात्मक प्रतिभा",
                desc: "जातक के भीतर कला, संगीत, लेखन और रचनात्मक क्षेत्रों में असाधारण और दिव्य प्रतिभा विकसित होती है।",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "मधुर पारिवारिक संबंध",
                desc: "माता के साथ अत्यंत स्नेही संबंध बनते हैं और समाज में जातक को भरपूर मान-सम्मान और लोकप्रियता मिलती है।",
              },
              {
                icon: <Orbit className="w-8 h-8" />,
                title: "आर्थिक समृद्धि",
                desc: "जीवन में कभी भी नकदी (Liquid Cash) की कमी नहीं होती और दूध, चांदी, जल से जुड़े व्यापार में भारी सफलता मिलती है।",
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-slate-200">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#1E293B] mt-6">{item.title}</h3>
                <p className="text-slate-600 leading-7 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK CHANDRA */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-blue-600 uppercase tracking-[4px] font-extrabold">
                Signs of Chandra Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1E293B] mt-5 leading-tight">
                Negative Impacts of a Weak Moon
              </h2>

              <p className="text-slate-700 leading-8 text-lg mt-6">
                A debilitated or afflicted Moon in the horoscope can severely destabilize your emotional wellness, causing extreme mood fluctuations and a persistent lack of peace.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Severe anxiety, unexplained phobias, and panic attacks",
                  "Frequent respiratory issues, lung disorders, and severe colds",
                  "Deep sense of emotional isolation and chronic depression",
                  "Strained relationship with mother or maternal figures",
                  "Loss of focus and constant mental restlessness",
                  "Sudden financial fluctuations and loss of liquid wealth",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-slate-50 border border-slate-200 rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-[#1E293B]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781008926/Chandra_Grah_Effects_Mind_Emotions_India_Vishal_Verma_a1geww.avif"
                alt="Weak Chandra Remedies India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-slate-200/50"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#f0f4f8] via-[#e2ebf0] to-[#d9e2ec] border-t border-b border-blue-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-blue-600 uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E293B] mt-5 leading-[1.3] md:leading-[1.4]">
              चंद्र देव को बलवान करने के अचूक तरीके
            </h2>

            <p className="text-slate-700 leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              वैदिक ज्योतिष में चंद्र देव के अशुभ प्रभावों को दूर करने और इसके शुभ फलों को प्राप्त करने के लिए अत्यंत प्रभावशाली उपाय और अनुष्ठान बताए गए हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "शिव उपासना",
                desc: "प्रतिदिन शिवलिंग पर कच्चा दूध मिश्रित जल चढ़ाएं और 'ॐ नमः शिवाय' का जाप करें। यह सर्वोत्तम चंद्र उपाय है।",
              },
              {
                title: "माता की सेवा",
                desc: "नियमित रूप से अपनी माता और माता समान स्त्रियों के चरण स्पर्श कर उनका आशीर्वाद लें और उन्हें कभी न दुखाएं।",
              },
              {
                title: "चांदी का प्रयोग",
                desc: "दाहिने हाथ की कनिष्ठिका उंगली में चांदी की अंगूठी में असली मोती धारण करें या चांदी के पात्र में पानी पिएं।",
              },
              {
                title: "सोमवार का व्रत",
                desc: "सोमवार के दिन नमक रहित व्रत रखें और सफेद वस्तुओं जैसे दूध, चावल, चीनी या सफेद वस्त्रों का दान करें।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/95 border border-slate-200 rounded-[30px] p-8 text-[#1E293B] flex flex-col items-center text-center sm:items-start sm:text-left shadow-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="leading-7 text-gray-600 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[35px] p-8 mt-12 text-center shadow-xl border border-slate-200">
            <h3 className="text-3xl font-extrabold text-[#1E293B]">
              चंद्र बीज मंत्र
            </h3>

            <p className="text-blue-600 text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ श्रां श्रीं श्रौं सः चंद्राय नमः
            </p>

            <p className="text-gray-700 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              सोमवार की शाम को इस पवित्र मंत्र का 108 बार जाप करने से मानसिक शांति, उत्तम स्वास्थ्य और एकाग्रता प्राप्त होती है।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-10 text-center border border-slate-200 shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#1E293B] mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-700 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of the Moon in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="tel:+917042600873" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-blue-500/20 cursor-pointer">
                Book Consultation
              </a>

              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="border border-blue-600/50 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                Book Digital Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChandraGrahPage;
