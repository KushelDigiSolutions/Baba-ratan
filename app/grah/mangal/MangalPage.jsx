"use client";

import React from "react";
import {
  Flame,
  Shield,
  Sword,
  Sparkles,
  Crown,
  ArrowRight,
  HeartHandshake,
  Gem,
  Activity,
  Star,
} from "lucide-react";

export default function MangalGrahPage() {
  return (
    <div className="bg-[#fff7f5] text-[#2d1f1f] overflow-hidden">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#7a1f1f] via-[#b83232] to-[#e25822]">
        {/* GLOW */}
        <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full bg-orange-400/20 blur-[120px]"></div>

        <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] rounded-full bg-red-500/20 blur-[120px]"></div>

        {/* DOT GRID */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]"></div>

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>

                <span className="text-white text-sm tracking-[3px] uppercase">
                  Navgrah • Mangal Dev
                </span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none mt-8">
                Mangal
                <span className="block text-yellow-300">Grah</span>
              </h1>

              <p className="text-white/85 text-lg lg:text-xl leading-9 mt-8 max-w-2xl">
                Mangal Grah astrology me courage, energy, confidence aur
                action ka pratik mana jata hai. Strong Mangal insaan ko
                fearless, energetic aur powerful personality deta hai.
              </p>

              {/* INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
                {[
                  {
                    label: "Element",
                    value: "Fire",
                  },
                  {
                    label: "Day",
                    value: "Tuesday",
                  },
                  {
                    label: "Gemstone",
                    value: "Red Coral",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-6 text-center hover:-translate-y-2 duration-300"
                  >
                    <p className="text-white/60 text-sm">
                      {item.label}
                    </p>

                    <h3 className="text-white text-2xl font-bold mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-5 mt-12">
                <button className="bg-white hover:scale-105 duration-300 text-[#b83232] px-8 py-4 rounded-2xl font-semibold shadow-2xl">
                  Explore Remedies
                </button>

                <button className="border border-white/30 text-white hover:bg-white hover:text-[#b83232] duration-300 px-8 py-4 rounded-2xl font-semibold">
                  Talk To Astrologer
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              {/* ORBITS */}
              <div className="absolute w-[620px] h-[620px] rounded-full border border-white/10 animate-spin"></div>

              <div className="absolute w-[470px] h-[470px] rounded-full border border-white/10"></div>

              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/10"></div>

              {/* PLANET */}
              <div className="relative z-10 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-orange-300 via-[#ff6b35] to-[#b83232] shadow-[0_0_120px_rgba(255,94,58,0.5)] flex items-center justify-center">
                <div className="absolute inset-[-20px] rounded-full border border-white/20"></div>

                <div className="absolute inset-[-45px] rounded-full border border-white/10"></div>

                <Flame className="w-40 h-40 text-white" />
              </div>

              {/* FLOAT CARD */}
              <div className="hidden lg:flex absolute top-10 right-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 items-center gap-4 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-yellow-300 text-[#b83232] flex items-center justify-center">
                  <Sword className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-white/60 text-sm">
                    Represents
                  </p>

                  <h3 className="text-white font-bold text-lg">
                    Courage
                  </h3>
                </div>
              </div>

              <div className="hidden lg:flex absolute bottom-10 left-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 items-center gap-4 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-orange-300 text-[#b83232] flex items-center justify-center">
                  <Shield className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-white/60 text-sm">
                    Controls
                  </p>

                  <h3 className="text-white font-bold text-lg">
                    Strength
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#b83232] to-[#ff7b54] rotate-6"></div>

              <img
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop"
                alt="mangal"
                className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[650px] w-full"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-[#b83232] uppercase tracking-[4px] font-semibold">
                About Mangal Grah
              </span>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight mt-6">
                Energy Aur Power Ka Grah
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                Mangal Grah confidence, action aur determination ko
                represent karta hai. Strong Mangal insaan ko fearless,
                energetic aur powerful decision making ability deta hai.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                Weak Mangal anger issues, aggression aur relationship
                conflicts create kar sakta hai.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  "Confidence aur courage strong karta hai",
                  "Competition aur sports me success deta hai",
                  "Physical energy aur strength improve karta hai",
                  "Decision making aur action power badhata hai",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl border border-[#f4d7d2] shadow-md p-6 flex gap-5 hover:-translate-y-1 duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#fff0eb] text-[#b83232] flex items-center justify-center shrink-0">
                      <Star className="w-7 h-7" />
                    </div>

                    <p className="text-gray-700 text-lg leading-8">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-28 bg-gradient-to-b from-[#fff7f5] to-[#ffe8df]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#b83232] uppercase tracking-[4px] font-semibold">
              Positive Effects
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6">
              Strong Mangal Ke Benefits
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-6">
              Strong Mangal life me confidence, action aur success
              lata hai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Leadership",
                desc: "Leadership aur authority ko improve karta hai.",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Energy",
                desc: "Physical strength aur stamina badhata hai.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Protection",
                desc: "Fear aur negativity se protect karta hai.",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Success",
                desc: "Competition aur career me growth deta hai.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[35px] p-8 border border-[#f4d7d2] shadow-lg hover:-translate-y-3 duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#ff7b54] to-[#b83232] text-white flex items-center justify-center shadow-xl">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-lg mt-5">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-[#b83232] font-semibold mt-8 group-hover:gap-4 duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section className="py-28 bg-[#1d1212] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-yellow-300 uppercase tracking-[4px] font-semibold">
              Mangal Remedies
            </span>

            <h2 className="text-5xl lg:text-6xl font-black text-white mt-6">
              Mangal Ko Strong Kaise Kare
            </h2>

            <p className="text-white/70 text-lg leading-9 mt-6">
              Astrology me Mangal Grah ko strong karne ke liye
              powerful remedies aur spiritual practices batayi gayi hai.
            </p>
          </div>

          {/* REMEDY CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {[
              {
                title: "Hanuman Chalisa",
                desc: "Daily Hanuman Chalisa ka paath beneficial hota hai.",
              },
              {
                title: "Red Coral",
                desc: "Moonga gemstone Mangal ko strong karta hai.",
              },
              {
                title: "Tuesday Fast",
                desc: "Mangalwar vrat positive energy deta hai.",
              },
              {
                title: "Mantra Jaap",
                desc: "Mangal mantra ka jaap confidence badhata hai.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 hover:bg-white/10 hover:-translate-y-2 duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-yellow-300 to-[#ff7b54] text-[#b83232] flex items-center justify-center shadow-xl">
                  <Sparkles className="w-9 h-9" />
                </div>

                <h3 className="text-white text-3xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-8 text-lg mt-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* MANTRA */}
          <div className="mt-24 bg-gradient-to-r from-[#b83232] to-[#ff7b54] rounded-[45px] p-14 lg:p-16 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full bg-white/10"></div>

            <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-white/10"></div>

            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                <Gem className="w-14 h-14 text-white" />
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-white mt-10">
                Mangal Beej Mantra
              </h3>

              <p className="text-yellow-200 text-3xl lg:text-4xl font-bold mt-8 leading-relaxed">
                ॐ क्रां क्रीं क्रौं सः भौमाय नमः
              </p>

              <p className="text-white/85 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Roz Mangal mantra ka jaap karna aur Hanuman ji ki
                puja karna Mangal Grah ko strong banane ke liye
                shubh mana jata hai.
              </p>

              <button className="mt-10 bg-white text-[#b83232] px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300 shadow-2xl">
                Book Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#fff7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-[#f4d7d2] rounded-[45px] shadow-2xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#fff0eb] rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#ff7b54] to-[#b83232] text-white flex items-center justify-center mx-auto shadow-2xl">
                <HeartHandshake className="w-14 h-14" />
              </div>

              <h2 className="text-5xl lg:text-6xl font-black mt-10 leading-tight">
                Personalized
                <span className="block text-[#b83232]">
                  Mangal Consultation
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Apni kundli me Mangal ki position aur uske effects ko
                samajhne ke liye expert astrologer se personalized
                consultation le.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-12">
                <button className="bg-[#b83232] hover:bg-[#992525] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl">
                  Book Consultation
                </button>

                <button className="border border-[#b83232] text-[#b83232] hover:bg-[#b83232] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}