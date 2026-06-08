// app/grah/shukra/page.jsx
"use client";

import React from "react";
import {
  Heart,
  Sparkles,
  Gem,
  ArrowRight,
  Music2,
  Crown,
  MoonStar,
  HeartHandshake,
  Star,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ShukraGrahPage() {
  return (
    <div className="bg-[#07040b] text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-screen overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#3b123e_0%,#120611_40%,#07040b_100%)]"></div>

        {/* STARS */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:40px_40px]"></div>

        {/* GLOW */}
        <div className="absolute top-[-120px] left-[-120px] w-[500px] h-[500px] bg-pink-500/30 rounded-full blur-[150px] animate-pulse"></div>

        <div className="absolute bottom-[-120px] right-[-120px] w-[500px] h-[500px] bg-fuchsia-500/20 rounded-full blur-[150px] animate-pulse"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 min-h-screen items-center py-12 md:py-16 lg:py-20">
            {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-pink-500/20 bg-pink-500/10 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-pink-400"></div>

                <span className="uppercase tracking-[4px] text-sm text-pink-200">
                  Navgrah • Shukra Dev
                </span>
              </div>

              <h1 className="mt-10 text-5xl sm:text-7xl lg:text-[120px] font-black leading-[1.1]">
                <span className="block text-white">Shukra</span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 py-2">
                  Grah
                </span>
              </h1>

              <p className="mt-10 text-lg sm:text-xl leading-9 text-white/70 max-w-2xl mx-auto lg:mx-0">
                In Vedic Astrology, Lord Shukra (Venus) governs profound
                material wealth, beauty, romance, luxury, and artistic
                brilliance.
              </p>

              {/* INFO CARDS */}
              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 w-full max-w-md">
                {[
                  { label: "तत्व", value: "जल" },
                  { label: "दिन", value: "शुक्रवार" },
                  { label: "रत्न", value: "हीरा" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/95 border border-pink-200 rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                  >
                    <p className="text-pink-500 text-xs sm:text-sm font-semibold">{item.label}</p>
                    <h3 className="text-pink-800 font-bold text-sm sm:text-base md:text-xl mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-8">
                <button className="w-full sm:w-auto justify-center group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold flex items-center">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-600"></div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] -translate-x-full group-hover:translate-x-full"></div>

                  <span className="relative flex items-center gap-3">
                    Explore Remedies
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>

                <button className="w-full sm:w-auto justify-center border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-[#120611] duration-300 px-8 py-4 rounded-2xl font-semibold flex items-center">
                  Talk To Astrologer
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              {/* RINGS */}
              <div className="absolute w-[320px] sm:w-[420px] lg:w-[500px] h-[320px] sm:h-[420px] lg:h-[500px] rounded-full border border-pink-500/10 animate-spin [animation-duration:25s]"></div>

              <div className="absolute w-[260px] sm:w-[320px] lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[380px] rounded-full border border-fuchsia-500/10 animate-spin [animation-duration:18s]"></div>

              {/* PLANET */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative w-[200px] sm:w-[300px] lg:w-[430px] h-[200px] sm:h-[300px] lg:h-[430px]"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 rounded-full blur-[70px] opacity-70 animate-pulse"></div>

                <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-pink-300 via-pink-500 to-fuchsia-700 shadow-[0_0_120px_rgba(236,72,153,0.45)] overflow-hidden flex items-center justify-center">
                  <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-white/20 blur-3xl"></div>

                  <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-black/20 blur-3xl"></div>

                  <div className="relative">
                    <div className="absolute inset-0 bg-white blur-3xl opacity-30"></div>

                    <MoonStar className="relative w-20 sm:w-32 lg:w-44 h-20 sm:h-32 lg:h-44 text-white animate-pulse" />
                  </div>
                </div>

                {/* FLOATING CARDS */}
                <div className="hidden lg:block absolute top-10 -left-20 bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 animate-bounce [animation-duration:4s]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-pink-500/20 text-pink-300 flex items-center justify-center">
                      <Heart className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="text-white/50 text-sm">Represents</p>

                      <h3 className="font-bold text-xl">Love</h3>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute bottom-10 -right-20 bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 animate-bounce [animation-duration:5s]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center">
                      <Gem className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="text-white/50 text-sm">Controls</p>

                      <h3 className="font-bold text-xl">Luxury</h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-12 lg:py-20 bg-[#07040b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop"
                alt="Shukra Grah Effects Love Luxury India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover w-full border border-white/10"
              />
            </div>

            <div>
              <span className="text-pink-400 font-extrabold uppercase tracking-[4px]">
                About Lord Shukra
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white leading-tight">
                The Cosmic Sovereign of Beauty and Abundance
              </h2>

              <p className="text-gray-300 leading-8 text-lg mt-8">
                Lord Shukra blesses natives with wealth, romance, attraction,
                artistic excellence, and luxurious living.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Magnetic Charisma",
                  "Luxury & Wealth",
                  "Marital Bliss",
                  "Artistic Excellence",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-pink-500/20 text-pink-300 flex items-center justify-center">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-pink-200 mt-5">
                      {item}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENEFITS ================= */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#07040b] to-[#1a081c]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-pink-400 uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-white">
              मजबूत शुक्र के चमत्कारी लाभ
            </h2>

            <p className="text-gray-300 text-lg leading-9 mt-6 font-medium">
              शुक्र ग्रह व्यक्ति को प्रेम, सौंदर्य, धन, विलासिता और कला का
              आशीर्वाद प्रदान करता है।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: "भौतिक सुख-समृद्धि",
                desc: "धन, वैभव, वाहन और विलासिता का आशीर्वाद।",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "आकर्षण व सौंदर्य",
                desc: "व्यक्तित्व में आकर्षण और लोकप्रियता बढ़ती है।",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "दाम्पत्य मधुरता",
                desc: "वैवाहिक जीवन में प्रेम और सामंजस्य आता है।",
              },
              {
                icon: <Music2 className="w-8 h-8" />,
                title: "कलात्मक प्रतिभा",
                desc: "संगीत, कला और डिजाइन में सफलता मिलती है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-[30px] p-8 border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {item.title}
                </h3>

                <p className="text-pink-200/60 leading-7 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= WEAK SHUKRA ================= */}
      <section className="py-12 lg:py-20 bg-[#07040b]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-pink-400 uppercase tracking-[4px] font-extrabold">
                Signs of Weak Venus
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 leading-tight">
                Negative Impacts of a Weak Shukra
              </h2>

              <div className="space-y-5 mt-10">
                {[
                  "Relationship conflicts",
                  "Financial instability",
                  "Skin and hormonal issues",
                  "Creative block",
                  "Loss of confidence",
                  "Overindulgence and addictions",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-5 bg-white/5 border border-white/10 rounded-2xl p-5"
                  >
                    <div className="w-12 h-12 rounded-full bg-pink-500 text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-pink-100">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1200&auto=format&fit=crop"
                alt="Weak Shukra Remedies India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-pink-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= REMEDIES ================= */}
      <section className="py-12 lg:py-20 bg-gradient-to-br from-[#07040b] via-[#1a081c] to-[#07040b] border-t border-b border-pink-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-pink-400 uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-5 leading-[1.3]">
              शुक्र ग्रह को बलवान करने के उपाय
            </h2>

            <p className="text-pink-200/70 leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              इन उपायों से शुक्र ग्रह के शुभ प्रभाव बढ़ते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              "सफेद वस्तुओं का दान",
              "हीरा या ओपल धारण",
              "इत्र का प्रयोग",
              "श्री सूक्त का पाठ",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-pink-500 text-white flex items-center justify-center">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-white">
                  {item}
                </h3>
              </div>
            ))}
          </div>

          {/* MANTRA */}
          <div className="bg-white/5 rounded-[35px] p-8 mt-12 text-center border border-white/10">
            <h3 className="text-3xl font-extrabold text-white">
              शुक्र बीज मंत्र
            </h3>

            <p className="text-pink-300 text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide">
              ॐ द्रां द्रीं द्रौं सः शुक्राय नमः
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 lg:py-20 bg-[#07040b]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 text-center border border-white/10">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white flex items-center justify-center mx-auto">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-pink-100/70 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Consult our experienced astrologers to understand the effects of
              Venus in your Kundli.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a
                href="tel:+917042600873"
                className="bg-pink-500 hover:bg-pink-400 text-white px-8 py-4 rounded-2xl font-semibold duration-300"
              >
                Book Consultation
              </a>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-pink-500/50 text-pink-300 hover:bg-white hover:text-[#07040b] px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2"
              >
                Book Digital Call
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}