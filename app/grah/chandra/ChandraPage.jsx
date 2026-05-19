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

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">
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
              className="absolute w-[400px] h-[400px] md:w-[600px] md:h-[600px] rounded-full border border-white/10"
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

      {/* IMPORTANCE SECTION */}
      <section className="py-12 md:py-16 lg:py-24 relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-600 font-bold uppercase tracking-widest text-sm"
            >
              Celestial Influence
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-bold mt-4 text-[#1E293B]">
              Why Chandra is Vital in Your Kundli?
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="text-white" size={28} />,
                title: "Mind Care",
                desc: "The Moon dictates your subconscious impulses, primary habits, and how gently you process challenging life changes.",
                color: "bg-pink-500",
              },
              {
                icon: <Shield className="text-white" size={28} />,
                title: "Deep Calm",
                desc: "A favorable Moon establishes supreme mental stillness, absolute emotional security, and steady focus in critical life choices.",
                color: "bg-blue-500",
              },
              {
                icon: <Sparkles className="text-white" size={28} />,
                title: "Artistic Vision",
                desc: "Ignites your latent imaginative powers, original ideas, and the deep intuitive whispers of the soul.",
                color: "bg-indigo-500",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="group bg-slate-50 border border-slate-100 p-10 rounded-[2.5rem] hover:bg-white hover:shadow-2xl transition-all duration-500"
              >
                <div className={`w-16 h-16 rounded-2xl ${item.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-slate-500 leading-relaxed text-lg">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* QUICK DETAILS GRID */}
      <section className="py-12 md:py-16 lg:py-24 text-white !bg-[#0F172A]" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            चंद्र ग्रह <span className="text-blue-400">एक नज़र में</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["ग्रह", "चंद्र देव"],
              ["दिन", "सोमवार"],
              ["रत्न", "सच्चा मोती (Pearl)"],
              ["धातु", "चांदी (Silver)"],
              ["रंग", "सफेद / चमकीला"],
              ["तत्व", "जल तत्व (Water)"],
              ["दिशा", "वायव्य कोण (North-West)"],
              ["देवता", "भगवान शिव"],
            ].map(([title, value], i) => (
              <motion.div
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm"
              >
                <p className="text-sm text-blue-300/70 mb-2 uppercase tracking-wider">{title}</p>
                <h4 className="font-bold text-xl">{value}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EFFECTS SECTION */}
      <section className="py-12 md:py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center">
                <CheckCircle size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Positive Effects</h3>
            </div>

            <ul className="space-y-6">
              {[
                "Unparalleled emotional resilience during extreme life crises",
                "Deep psychic abilities and accurate premonitions",
                "Uninterrupted and deeply restorative sleep cycles",
                "Magnetic public appeal and highly persuasive soft-skills",
                "Continuous flow of liquid cash and maternal inheritance",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600 text-lg">
                  <div className="mt-1 w-2 h-2 rounded-full bg-green-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[3rem] p-12 shadow-sm border border-slate-200"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-red-100 text-red-600 rounded-xl flex items-center justify-center">
                <HelpCircle size={24} />
              </div>
              <h3 className="text-3xl font-bold text-slate-800">Negative Effects</h3>
            </div>

            <ul className="space-y-6">
              {[
                "Unexplained phobias and sudden panic attacks",
                "Chronic respiratory issues and frequent common colds",
                "Severe depression and overwhelming sense of isolation",
                "Loss of accumulated wealth due to highly impulsive decisions",
                "Strained domestic environment and maternal health problems",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-4 text-slate-600 text-lg">
                  <div className="mt-1 w-2 h-2 rounded-full bg-red-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* REMEDIES GRID */}
      <section className="bg-white py-12 md:py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 leading-[1.3]">
              चंद्र दोष निवारण के अचूक उपाय
            </h2>
            <p className="mt-4 text-slate-500 text-lg">चंद्रमा की शुभ ऊर्जा को जाग्रत करने के सर्वोत्तम उपाय</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {remedies.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.02 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-8 flex gap-5 items-center shadow-sm"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0">
                  <Star className="text-blue-600" size={24} />
                </div>
                <p className="font-bold text-slate-800 text-lg">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-12 md:py-16 lg:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Astrological FAQs About Chandra</h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-blue-400 transition-colors cursor-pointer"
              >
                <div className="flex justify-between items-center">
                  <h4 className="font-bold text-xl text-slate-800">{faq.q}</h4>
                  <div className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center">
                    <ArrowRight className="text-slate-400" size={16} />
                  </div>
                </div>
                <p className="mt-4 text-slate-500 leading-relaxed">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="relative py-12 md:py-16 lg:py-24 !bg-[#1E293B] overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem]"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              चंद्र देव की <span className="text-blue-400">कृपा प्राप्त करें</span>
            </h2>

            <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto lg:mx-0 mx-auto mb-12">
              क्या आप मन की बेचैनी या जीवन में बढ़ते तनाव से परेशान हैं? आज ही अपनी कुंडली का विस्तृत चंद्र प्रभाव विश्लेषण प्राप्त करें और हमारे ज्योतिषियों से विशेष समाधान पाएं।
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
                href="tel:+917042600873"
                className="inline-block"
              >
                <button className="bg-blue-600 border cursor-pointer border-white/30 hover:bg-blue-700 text-white px-10 py-5 rounded-3xl font-bold text-lg shadow-2xl transition-all hover:scale-105">
                  परामर्श बुक करें
                </button>
              </a>

              <button className="border cursor-pointer border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-3xl font-bold text-lg transition-all">
                सपोर्ट से संपर्क करें
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChandraGrahPage;