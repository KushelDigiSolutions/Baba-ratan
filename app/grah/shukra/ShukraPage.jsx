"use client";

import React from "react";
import {
  Heart,
  Sparkles,
  Gem,
  ArrowRight,
  Stars,
  Music2,
  Flower2,
  Crown,
  MoonStar,
  HeartHandshake,
  Diamond,
} from "lucide-react";

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
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-ping"></div>

                <span className="uppercase tracking-[4px] text-sm text-pink-200">
                  Navgrah • Shukra Dev
                </span>
              </div>

              <h1 className="mt-10 text-5xl sm:text-7xl lg:text-[120px] font-black leading-[1.1]">
                <span className="block text-white">
                  Shukra
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400 py-2">
                  Grah
                </span>
              </h1>

              <p className="mt-10 text-lg sm:text-xl leading-9 text-white/70 max-w-2xl mx-auto lg:mx-0">
                In Vedic Astrology, Lord Shukra (Venus) governs profound material wealth, exquisite beauty, magnetic romance, and artistic brilliance. A benefically placed Shukra blesses the native with an incredibly luxurious lifestyle, domestic bliss, and immense popularity.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-10 sm:mt-12">
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

              {/* FLOATING INFO */}
              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-16">
                {[
                  {
                    title: "Day",
                    value: "Friday",
                  },
                  {
                    title: "Gem",
                    value: "Diamond",
                  },
                  {
                    title: "Energy",
                    value: "Luxury",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-2 sm:p-5 hover:-translate-y-2 duration-300 text-center"
                  >
                    <p className="text-pink-200/60 text-xs sm:text-sm">
                      {item.title}
                    </p>

                    <h3 className="text-sm sm:text-base md:text-xl font-bold mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center mt-10 lg:mt-0">
              {/* OUTER RING */}
              <div className="absolute w-[320px] sm:w-[420px] lg:w-[500px] h-[320px] sm:h-[420px] lg:h-[500px] rounded-full border border-pink-500/10 animate-spin [animation-duration:25s]"></div>

              <div className="absolute w-[260px] sm:w-[320px] lg:w-[380px] h-[260px] sm:h-[320px] lg:h-[380px] rounded-full border border-fuchsia-500/10 animate-spin [animation-duration:18s]"></div>

              {/* PLANET */}
              <div className="relative w-[200px] sm:w-[300px] lg:w-[430px] h-[200px] sm:h-[300px] lg:h-[430px]">
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 rounded-full blur-[70px] opacity-70 animate-pulse"></div>

                {/* PLANET */}
                <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-pink-300 via-pink-500 to-fuchsia-700 shadow-[0_0_120px_rgba(236,72,153,0.45)] overflow-hidden flex items-center justify-center">
                  {/* PLANET TEXTURE */}
                  <div className="absolute top-6 sm:top-10 left-6 sm:left-10 w-16 sm:w-28 h-16 sm:h-28 rounded-full bg-white/20 blur-3xl"></div>

                  <div className="absolute bottom-6 sm:bottom-10 right-6 sm:right-10 w-20 sm:w-32 h-20 sm:h-32 rounded-full bg-black/20 blur-3xl"></div>

                  {/* CENTER ICON */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white blur-3xl opacity-30"></div>

                    <MoonStar className="relative w-20 sm:w-32 lg:w-44 h-20 sm:h-32 lg:h-44 text-white animate-pulse" />
                  </div>
                </div>

                {/* FLOATING MINI CARDS */}
                <div className="hidden lg:block absolute top-10 -left-20 bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 animate-bounce [animation-duration:4s]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-pink-500/20 text-pink-300 flex items-center justify-center">
                      <Heart className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="text-white/50 text-sm">
                        Represents
                      </p>

                      <h3 className="font-bold text-xl">
                        Love
                      </h3>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block absolute bottom-10 -right-20 bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-5 animate-bounce [animation-duration:5s]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-fuchsia-500/20 text-fuchsia-300 flex items-center justify-center">
                      <Gem className="w-7 h-7" />
                    </div>

                    <div>
                      <p className="text-white/50 text-sm">
                        Controls
                      </p>

                      <h3 className="font-bold text-xl">
                        Luxury
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= BENTO SECTION ================= */}
      <section className="py-12 md:py-20 lg:py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* BIG CARD */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#1b0d1f] to-[#2d102c] border border-pink-500/10 rounded-[24px] sm:rounded-[45px] p-6 sm:p-10 relative overflow-hidden group hover:-translate-y-3 duration-500">
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white flex items-center justify-center shadow-2xl">
                  <Crown className="w-8 h-8 sm:w-10 sm:h-10" />
                </div>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mt-6 sm:mt-10 leading-[1.3] sm:leading-[1.4]">
                  सौंदर्य और आकर्षण
                </h2>

                <p className="text-white/70 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl">
                  बलवान शुक्र जातक के चारों ओर एक चुंबकीय आकर्षण पैदा करता है, जिससे जीवन में असीमित सुख-सुविधाएं, ऐश्वर्य, और प्रगाढ़ प्रेम संबंधों की प्राप्ति होती है।
                </p>

                <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">
                  {[
                    "प्रेम",
                    "विलासिता",
                    "रचनात्मकता",
                    "सौंदर्य",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="px-4 sm:px-5 py-2 sm:py-3 rounded-xl sm:rounded-2xl bg-white/5 border border-white/10 text-pink-200 text-sm sm:text-base"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDE CARDS */}
            <div className="space-y-6 sm:space-y-8">
              {[
                {
                  icon: <Diamond className="w-7 h-7 sm:w-8 sm:h-8" />,
                  title: "भौतिक ऐश्वर्य",
                  desc: "आलीशान भवन, लग्जरी वाहन और सर्वोच्च आर्थिक संपन्नता के द्वार खोलता है।",
                },
                {
                  icon: <Music2 className="w-7 h-7 sm:w-8 sm:h-8" />,
                  title: "कलात्मक निपुणता",
                  desc: "मीडिया, सिनेमा, फैशन डिज़ाइन और गायन के क्षेत्र में असाधारण प्रसिद्धि दिलाता है।",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[24px] sm:rounded-[35px] p-6 sm:p-8 hover:bg-white/10 hover:-translate-y-2 duration-300"
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white flex items-center justify-center shadow-xl">
                    {item.icon}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-black mt-6 sm:mt-8">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-base sm:text-lg leading-7 sm:leading-8 mt-4 sm:mt-5">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MANTRA SECTION ================= */}
      <section className="py-12 md:py-20 lg:py-28 relative overflow-hidden">
        {/* BG */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#22091f] via-[#3a1033] to-[#180816]"></div>

        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center">
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full bg-pink-500/10 border border-pink-500/20 backdrop-blur-xl">
              <Stars className="w-5 h-5 text-pink-300" />

              <span className="uppercase tracking-[4px] text-sm text-pink-200">
                Shukra Remedies
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 sm:mt-10 leading-[1.3] sm:leading-[1.4]">
              Sacred Beej Mantra
            </h2>

            {/* MANTRA BOX */}
            <div className="mt-10 sm:mt-14 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-600 blur-[80px] opacity-40"></div>

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[24px] sm:rounded-[45px] p-6 sm:p-14">
                <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 flex items-center justify-center mx-auto shadow-[0_20px_70px_rgba(236,72,153,0.35)]">
                  <Flower2 className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
                </div>

                <p className="text-pink-100 text-xl sm:text-3xl lg:text-5xl font-bold leading-relaxed mt-6 sm:mt-10">
                  ॐ द्रां द्रीं द्रौं सः शुक्राय नमः
                </p>

                <p className="text-white/70 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                  Chanting this powerful Beej Mantra with a Sphatik (Crystal) rosary on Fridays completely eradicates poverty and aligns your aura with divine prosperity.
                </p>

                <button className="w-full sm:w-auto mt-8 sm:mt-10 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:scale-105 duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl flex items-center justify-center mx-auto">
                  Start Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-12 md:py-20 lg:py-28 bg-[#07040b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[24px] sm:rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-2xl p-6 sm:p-12 lg:p-16">
            {/* Glow */}
            <div className="absolute top-0 left-0 w-40 sm:w-72 h-40 sm:h-72 bg-pink-500/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 text-center">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white flex items-center justify-center mx-auto shadow-[0_20px_60px_rgba(236,72,153,0.35)]">
                <HeartHandshake className="w-10 h-10 sm:w-14 sm:h-14" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mt-6 sm:mt-10 leading-[1.3] sm:leading-[1.4]">
                विशेषज्ञ
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400 py-2">
                  ज्योतिषीय परामर्श
                </span>
              </h2>

              <p className="text-white/70 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                अपनी जन्म कुंडली में शुक्र ग्रह की सटीक स्थिति को समझें। सच्चे प्रेम, अटूट सुख-समृद्धि और दांपत्य जीवन की बाधाओं को दूर करने के लिए आज ही हमारे अनुभवी ज्योतिषियों से मार्गदर्शन प्राप्त करें।
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-8 sm:mt-12">
                <button className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:scale-105 duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl flex items-center justify-center">
                  परामर्श बुक करें
                </button>

                <button className="w-full sm:w-auto border border-white/10 bg-white/5 hover:bg-white hover:text-[#120611] duration-300 text-white px-8 py-4 rounded-2xl font-semibold flex items-center justify-center">
                  अधिक जानें
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}