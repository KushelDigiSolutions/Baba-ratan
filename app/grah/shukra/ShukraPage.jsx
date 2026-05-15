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
          <div className="grid lg:grid-cols-2 gap-20 min-h-screen items-center py-20">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-3 rounded-full border border-pink-500/20 bg-pink-500/10 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-pink-400 animate-ping"></div>

                <span className="uppercase tracking-[4px] text-sm text-pink-200">
                  Navgrah • Shukra Dev
                </span>
              </div>

              <h1 className="mt-10 text-6xl sm:text-7xl lg:text-[120px] font-black leading-none">
                <span className="block text-white">
                  Shukra
                </span>

                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-fuchsia-400 to-purple-400">
                  Grah
                </span>
              </h1>

              <p className="mt-10 text-lg sm:text-xl leading-9 text-white/70 max-w-2xl">
                Shukra Grah beauty, luxury, romance aur attraction ka
                planet mana jata hai. Strong Shukra life me charm,
                luxury aur loving relationships lekar aata hai.
              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-12">
                <button className="group relative overflow-hidden px-8 py-4 rounded-2xl font-semibold">
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-600"></div>

                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.35),transparent)] -translate-x-full group-hover:translate-x-full"></div>

                  <span className="relative flex items-center gap-3">
                    Explore Remedies
                    <ArrowRight className="w-5 h-5" />
                  </span>
                </button>

                <button className="border border-white/10 bg-white/5 backdrop-blur-xl hover:bg-white hover:text-[#120611] duration-300 px-8 py-4 rounded-2xl font-semibold">
                  Talk To Astrologer
                </button>
              </div>

              {/* FLOATING INFO */}
              <div className="grid grid-cols-3 gap-5 mt-16">
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
                    className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-3xl p-5 hover:-translate-y-2 duration-300"
                  >
                    <p className="text-pink-200/60 text-sm">
                      {item.title}
                    </p>

                    <h3 className="text-xl font-bold mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              {/* OUTER RING */}
              <div className="absolute w-[500px] h-[500px] rounded-full border border-pink-500/10 animate-spin [animation-duration:25s]"></div>

              <div className="absolute w-[380px] h-[380px] rounded-full border border-fuchsia-500/10 animate-spin [animation-duration:18s]"></div>

              {/* PLANET */}
              <div className="relative w-[300px] sm:w-[430px] h-[300px] sm:h-[430px]">
                {/* GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500 via-fuchsia-500 to-purple-600 rounded-full blur-[70px] opacity-70 animate-pulse"></div>

                {/* PLANET */}
                <div className="relative z-10 w-full h-full rounded-full bg-gradient-to-br from-pink-300 via-pink-500 to-fuchsia-700 shadow-[0_0_120px_rgba(236,72,153,0.45)] overflow-hidden flex items-center justify-center">
                  {/* PLANET TEXTURE */}
                  <div className="absolute top-10 left-10 w-28 h-28 rounded-full bg-white/20 blur-3xl"></div>

                  <div className="absolute bottom-10 right-10 w-32 h-32 rounded-full bg-black/20 blur-3xl"></div>

                  {/* CENTER ICON */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-white blur-3xl opacity-30"></div>

                    <MoonStar className="relative w-32 sm:w-44 h-32 sm:h-44 text-white animate-pulse" />
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
      <section className="py-28 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* BIG CARD */}
            <div className="lg:col-span-2 bg-gradient-to-br from-[#1b0d1f] to-[#2d102c] border border-pink-500/10 rounded-[45px] p-10 relative overflow-hidden group hover:-translate-y-3 duration-500">
              <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/10 rounded-full blur-[100px]"></div>

              <div className="relative z-10">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white flex items-center justify-center shadow-2xl">
                  <Crown className="w-10 h-10" />
                </div>

                <h2 className="text-5xl font-black mt-10 leading-tight">
                  Beauty & Attraction
                </h2>

                <p className="text-white/70 text-lg leading-9 mt-8 max-w-3xl">
                  Strong Shukra insaan ko attractive personality,
                  luxury lifestyle aur romantic nature deta hai.
                </p>

                <div className="flex flex-wrap gap-4 mt-10">
                  {[
                    "Romance",
                    "Luxury",
                    "Creativity",
                    "Fashion",
                  ].map((tag, i) => (
                    <div
                      key={i}
                      className="px-5 py-3 rounded-2xl bg-white/5 border border-white/10 text-pink-200"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* SIDE CARDS */}
            <div className="space-y-8">
              {[
                {
                  icon: <Diamond className="w-8 h-8" />,
                  title: "Luxury Life",
                },
                {
                  icon: <Music2 className="w-8 h-8" />,
                  title: "Arts & Music",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[35px] p-8 hover:bg-white/10 hover:-translate-y-2 duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white flex items-center justify-center shadow-xl">
                    {item.icon}
                  </div>

                  <h3 className="text-3xl font-black mt-8">
                    {item.title}
                  </h3>

                  <p className="text-white/60 text-lg leading-8 mt-5">
                    Shukra creativity aur luxury ko enhance karta hai.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= MANTRA SECTION ================= */}
      <section className="py-28 relative overflow-hidden">
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

            <h2 className="text-5xl lg:text-6xl font-black mt-10 leading-tight">
              Shukra Beej Mantra
            </h2>

            {/* MANTRA BOX */}
            <div className="mt-14 relative">
              <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-fuchsia-600 blur-[80px] opacity-40"></div>

              <div className="relative bg-white/5 border border-white/10 backdrop-blur-2xl rounded-[45px] p-10 sm:p-14">
                <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 flex items-center justify-center mx-auto shadow-[0_20px_70px_rgba(236,72,153,0.35)]">
                  <Flower2 className="w-14 h-14 text-white" />
                </div>

                <p className="text-pink-100 text-3xl sm:text-5xl font-bold leading-relaxed mt-10">
                  ॐ द्रां द्रीं द्रौं सः शुक्राय नमः
                </p>

                <p className="text-white/70 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                  Roz subah Shukra mantra ka jaap aur Friday ko
                  white cheeze donate karna beneficial mana jata hai.
                </p>

                <button className="mt-10 bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:scale-105 duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl">
                  Start Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-28 bg-[#07040b]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="relative overflow-hidden rounded-[50px] border border-white/10 bg-white/5 backdrop-blur-2xl p-12 lg:p-16">
            {/* Glow */}
            <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-[100px]"></div>

            <div className="relative z-10 text-center">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-pink-500 to-fuchsia-600 text-white flex items-center justify-center mx-auto shadow-[0_20px_60px_rgba(236,72,153,0.35)]">
                <HeartHandshake className="w-14 h-14" />
              </div>

              <h2 className="text-5xl lg:text-6xl font-black mt-10 leading-tight">
                Personalized
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-fuchsia-400">
                  Shukra Consultation
                </span>
              </h2>

              <p className="text-white/70 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Apni kundli me Shukra ki position aur uske effects ko
                samajhne ke liye expert astrologer se consultation le.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-12">
                <button className="bg-gradient-to-r from-pink-500 to-fuchsia-600 hover:scale-105 duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl">
                  Book Consultation
                </button>

                <button className="border border-white/10 bg-white/5 hover:bg-white hover:text-[#120611] duration-300 text-white px-8 py-4 rounded-2xl font-semibold">
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