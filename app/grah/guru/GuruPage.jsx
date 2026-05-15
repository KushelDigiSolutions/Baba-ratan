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
} from "lucide-react";

export default function GuruGrahPage() {
  return (
    <div className="bg-[#fffdf8] text-[#2b2215] overflow-hidden">
      {/* ================= HERO ================= */}
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
                  Navgrah • Guru Dev
                </span>
              </div>

              <h1 className="mt-8 text-6xl sm:text-7xl lg:text-[110px] font-black leading-none">
                <span className="text-[#8b5e1a]">Guru</span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f2b84b] to-[#8b5e1a]">
                  Grah
                </span>
              </h1>

              <p className="mt-8 text-lg sm:text-xl leading-9 text-[#5e4a2d] max-w-2xl">
                Guru Grah wisdom, spirituality, prosperity aur higher
                learning ka pratik mana jata hai. Strong Guru life me
                positivity, fortune aur success lekar aata hai.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-10">
                <button className="group cursor-pointer bg-[#8b5e1a] hover:bg-[#70450c] text-white px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 duration-300 shadow-[0_15px_40px_rgba(139,94,26,0.35)]">
                  Explore Remedies
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 duration-300" />
                </button>
                <a href="tel:+917042600873">
                  <button className="bg-white/80 border cursor-pointer border-[#e9c87b] text-[#8b5e1a] hover:bg-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg">
                    Talk To Astrologer
                  </button>
                </a>

              </div>

              {/* MINI STATS */}
              <div className="grid sm:grid-cols-3 gap-5 mt-14">
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
                    value: "Pukhraj",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/70 backdrop-blur-xl border border-white rounded-3xl p-6 shadow-xl"
                  >
                    <p className="text-[#8b5e1a]/70 text-sm">
                      {item.title}
                    </p>

                    <h3 className="text-2xl font-black mt-2 text-[#8b5e1a]">
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
              <div className="relative z-10">
                {/* OUTER RING */}
                <div className="absolute inset-[-50px] rounded-full border border-[#c58a2d]/30 animate-spin"></div>

                <div className="absolute inset-[-90px] rounded-full border border-[#c58a2d]/20"></div>

                {/* PLANET */}
                <div className="w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] rounded-full bg-gradient-to-br from-[#ffe29a] via-[#f2b84b] to-[#8b5e1a] shadow-[0_0_120px_rgba(242,184,75,0.55)] flex items-center justify-center relative overflow-hidden">
                  {/* PLANET TEXTURE */}
                  <div className="absolute top-10 left-10 w-24 h-24 rounded-full bg-white/10 blur-2xl"></div>

                  <div className="absolute bottom-16 right-14 w-32 h-32 rounded-full bg-black/10 blur-2xl"></div>

                  <SunMedium className="w-32 sm:w-44 h-32 sm:h-44 text-white" />
                </div>

                {/* FLOATING CARD */}
                <div className="absolute -top-8 -right-10 bg-white rounded-3xl shadow-2xl border border-[#f4deb0] p-5 hidden lg:flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#fff3d4] text-[#8b5e1a] flex items-center justify-center">
                    <BookOpen className="w-7 h-7" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Represents
                    </p>

                    <h3 className="font-bold text-xl">
                      Wisdom
                    </h3>
                  </div>
                </div>

                <div className="absolute -bottom-8 -left-10 bg-white rounded-3xl shadow-2xl border border-[#f4deb0] p-5 hidden lg:flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-[#fff3d4] text-[#8b5e1a] flex items-center justify-center">
                    <Crown className="w-7 h-7" />
                  </div>

                  <div>
                    <p className="text-sm text-gray-500">
                      Controls
                    </p>

                    <h3 className="font-bold text-xl">
                      Prosperity
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT ================= */}
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* LEFT CONTENT */}
            <div>
              <span className="text-[#c58a2d] uppercase tracking-[4px] font-bold">
                About Guru Grah
              </span>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight mt-6">
                Wisdom Aur Knowledge Ka Planet
              </h2>

              <p className="mt-8 text-lg leading-9 text-gray-600">
                Guru Grah astrology me spirituality, intelligence,
                prosperity aur positivity ko represent karta hai.
                Strong Guru insaan ko respect aur fortune deta hai.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  "Spiritual growth aur positivity badhata hai",
                  "Financial prosperity aur fortune attract karta hai",
                  "Knowledge aur wisdom improve karta hai",
                  "Respect aur honor provide karta hai",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white border border-[#f4deb0] rounded-3xl p-6 shadow-lg flex items-start gap-4 hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-[#fff3d4] text-[#c58a2d] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>

                    <p className="text-lg text-gray-700 leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT CARD DESIGN */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#fff5d8] to-[#ffe7b0] rounded-[45px] p-8 shadow-[0_25px_60px_rgba(0,0,0,0.08)] border border-[#f2d28a] relative overflow-hidden">
                {/* DECOR */}
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#f2c14e]/20 blur-3xl"></div>

                <div className="grid sm:grid-cols-2 gap-6 relative z-10">
                  {[
                    {
                      icon: <GraduationCap className="w-8 h-8" />,
                      title: "Education",
                    },
                    {
                      icon: <ShieldCheck className="w-8 h-8" />,
                      title: "Protection",
                    },
                    {
                      icon: <Orbit className="w-8 h-8" />,
                      title: "Growth",
                    },
                    {
                      icon: <Gem className="w-8 h-8" />,
                      title: "Prosperity",
                    },
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
                        Strong Guru brings positivity and wisdom.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= EFFECTS ================= */}
      <section className="py-28 bg-[#2f220e] relative overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-yellow-300 uppercase tracking-[4px] font-bold">
              Positive Effects
            </span>

            <h2 className="text-5xl lg:text-6xl font-black text-white mt-6">
              Strong Guru Ke Benefits
            </h2>

            <p className="text-white/70 text-lg leading-9 mt-6">
              Strong Guru life me wisdom, luck aur prosperity lata
              hai.
            </p>
          </div>

          {/* EFFECT GRID */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {[
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Wisdom",
              },
              {
                icon: <Star className="w-8 h-8" />,
                title: "Good Luck",
              },
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Honor",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Positivity",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="group bg-white/5 border border-white/10 rounded-[35px] p-8 backdrop-blur-xl hover:bg-white/10 hover:-translate-y-3 duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#f2c14e] to-[#8b5e1a] text-white flex items-center justify-center shadow-2xl">
                  {item.icon}
                </div>

                <h3 className="text-white text-3xl font-black mt-8">
                  {item.title}
                </h3>

                <p className="text-white/60 text-lg leading-8 mt-5">
                  Strong Guru enhances wisdom and success in life.
                </p>

                <button className="flex items-center gap-2 text-yellow-300 font-semibold mt-8 group-hover:gap-4 duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= MANTRA SECTION ================= */}
      <section className="py-28 bg-[#fffaf0]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[50px] bg-gradient-to-br from-[#f2c14e] via-[#d39b31] to-[#8b5e1a] p-12 sm:p-16 text-center shadow-[0_25px_80px_rgba(139,94,26,0.3)]">
            {/* DECOR */}
            <div className="absolute top-[-60px] right-[-60px] w-56 h-56 rounded-full bg-white/10"></div>

            <div className="absolute bottom-[-60px] left-[-60px] w-56 h-56 rounded-full bg-white/10"></div>

            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                <Gem className="w-14 h-14 text-white" />
              </div>

              <h2 className="text-4xl sm:text-5xl font-black text-white mt-10">
                Guru Beej Mantra
              </h2>

              <p className="text-yellow-100 text-2xl sm:text-4xl font-bold leading-relaxed mt-8">
                ॐ ग्रां ग्रीं ग्रौं सः गुरुवे नमः
              </p>

              <p className="text-white/85 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Roz Guru mantra ka jaap aur Guruvar ko yellow color
                use karna shubh mana jata hai.
              </p>

              <button className="mt-10 bg-white text-[#8b5e1a] hover:scale-105 duration-300 px-8 py-4 rounded-2xl font-semibold shadow-2xl">
                Start Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="bg-white rounded-[45px] border border-[#f4deb0] shadow-[0_20px_60px_rgba(0,0,0,0.08)] p-12 lg:p-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-60 h-60 bg-[#fff3d4] rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#f2c14e] to-[#8b5e1a] text-white flex items-center justify-center mx-auto shadow-2xl">
                <HeartHandshake className="w-14 h-14" />
              </div>

              <h2 className="text-5xl lg:text-6xl font-black mt-10 leading-tight">
                Personalized
                <span className="block text-[#8b5e1a]">
                  Guru Consultation
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Apni kundli me Guru ki position aur uske effects ko
                samajhne ke liye expert astrologer se consultation le.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-12">
                <button className="bg-[#8b5e1a] hover:bg-[#70450c] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl">
                  Book Consultation
                </button>

                <button className="border border-[#8b5e1a] text-[#8b5e1a] hover:bg-[#8b5e1a] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}