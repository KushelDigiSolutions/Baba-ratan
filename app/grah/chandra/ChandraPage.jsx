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
    "Chant Om Som Somaya Namah",
    "Observe Monday Fast",
    "Donate Milk, Rice & White Clothes",
    "Wear Pearl Gemstone",
    "Respect Mother & Elders",
    "Meditation Under Moonlight",
  ];

  const faqs = [
    {
      q: "What does Chandra represent in astrology?",
      a: "Chandra represents the mind, emotions, mother, and mental peace in Vedic astrology.",
    },
    {
      q: "How can I strengthen weak moon?",
      a: "Strengthen the Moon by chanting mantras, fasting on Mondays, and respecting your mother.",
    },
    {
      q: "Who should wear Pearl gemstone?",
      a: "Pearl is recommended for those whose Moon is a benefic planet but weak in their birth chart.",
    },
    {
      q: "What are symptoms of weak Chandra?",
      a: "Symptoms include mental stress, mood swings, sleep disorders, and emotional instability.",
    },
  ];

  return (
    <div className="bg-[#F8FAFC] text-[#1E293B] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155] text-white py-20 overflow-hidden">
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

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium mb-6 text-blue-200">
              <Sparkles size={14} /> Moon Planet Analysis
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Chandra Grah <br />
              <span className="text-blue-300">Astrology Guide</span>
            </h1>

            <p className="mt-8 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Chandra controls emotions, mental peace, intuition, and stability.
              Discover how the Moon's placement impacts your destiny and explore powerful remedies.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
                <a href="tel:+917042600087">
                    <button className="bg-white cursor-pointer text-[#1e293b] px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                Talk to Astrologer <ArrowRight size={18} />
              </button>
                </a>
            

              <button className="border cursor-pointer border-white/30 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition-all">
                View Remedies
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
                    <p className="text-xs text-blue-200">Mental Energy</p>
                    <p className="font-bold">Emotional Power</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* IMPORTANCE SECTION */}
      <section className="py-24 relative bg-white overflow-hidden">
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
              Why Chandra is Vital?
            </h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="text-white" size={28} />,
                title: "Emotional Strength",
                desc: "Governs emotional stability, bonding, and your inner feeling world.",
                color: "bg-pink-500",
              },
              {
                icon: <Shield className="text-white" size={28} />,
                title: "Inner Peace",
                desc: "A strong Moon brings tranquility and clarity to your decision-making process.",
                color: "bg-blue-500",
              },
              {
                icon: <Sparkles className="text-white" size={28} />,
                title: "Creative Intuition",
                desc: "Powers your imagination, dreams, and the subconscious mind.",
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
      <section className="py-24 text-white !bg-[#0F172A]" style={{ backgroundColor: '#0F172A' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
            Chandra Grah <span className="text-blue-400">At a Glance</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              ["Planet", "Moon"],
              ["Day", "Monday"],
              ["Gemstone", "Pearl"],
              ["Metal", "Silver"],
              ["Color", "White/Silver"],
              ["Element", "Water"],
              ["Direction", "North-West"],
              ["Deity", "Lord Shiva"],
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
      <section className="py-24 bg-slate-50">
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
                "Deep mental peace & stability",
                "Exceptional memory and focus",
                "High emotional intelligence",
                "Strong intuition & creativity",
                "Family harmony and love",
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
                "Unnecessary stress & anxiety",
                "Frequent mood swings",
                "Sleep disorders & lethargy",
                "Chronic overthinking",
                "Internal emotional imbalance",
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
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900">
              Chandra Remedies
            </h2>
            <p className="mt-4 text-slate-500 text-lg">Effective ways to balance Moon energy</p>
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
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Questions? We have answers.</h2>

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
      <section className="relative py-24 !bg-[#1E293B] overflow-hidden" style={{ backgroundColor: '#1E293B' }}>
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]" />

        <div className="max-w-5xl mx-auto text-center px-6 relative z-10">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className="bg-white/5 backdrop-blur-2xl border border-white/10 p-12 rounded-[4rem]"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
              Unlock Your <span className="text-blue-400">Moon Power</span>
            </h2>

            <p className="text-xl text-white leading-relaxed max-w-2xl mx-auto mb-12">
              Get a personalized Moon analysis and detailed kundli report
              with specific remedies and gemstone recommendations.
            </p>

            <div className="flex flex-wrap justify-center gap-6">
              <a
  href="tel:+917042600873"
  className="inline-block"
>
    <button className="bg-blue-600 border cursor-pointer border-white/30 hover:bg-blue-700 text-white px-10 py-5 rounded-3xl font-bold text-lg shadow-2xl transition-all hover:scale-105">
                Book Consultation
              </button>
</a>
            
              <button className="border cursor-pointer border-white/30 text-white hover:bg-white/10 px-10 py-5 rounded-3xl font-bold text-lg transition-all">
                Contact Support
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ChandraGrahPage;