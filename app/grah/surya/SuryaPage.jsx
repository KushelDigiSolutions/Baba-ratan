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
      <section className="relative bg-[#c96e67]  py-24 lg:py-32">
        <div className="absolute inset-0 opacity-10 bg-[url('/stars.png')] bg-cover"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="bg-white/20 text-white border border-white/20 px-5 py-2 rounded-full text-sm tracking-wide">
                Navgrah • Surya Grah
              </span>

              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight mt-7">
                Surya Grah
              </h1>

              <p className="text-xl text-white/90 leading-9 mt-8 max-w-2xl">
                Surya Grah ko sabhi grahon ka raja mana jata hai. Yeh
                confidence, leadership, success, authority aur positive energy
                ka pratik hota hai.
              </p>

              <div className="flex flex-wrap gap-5 mt-10">
                <button className="bg-white text-[#c96e67] px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300">
                  Explore Remedies
                </button>

                <button className="border border-white text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white hover:text-[#c96e67] duration-300">
                  Talk to Astrologer
                </button>
              </div>

              <div className="grid grid-cols-3 gap-5 mt-12">
                {[
                  { label: "Element", value: "Fire" },
                  { label: "Day", value: "Sunday" },
                  { label: "Gemstone", value: "Ruby" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-5 text-center"
                  >
                    <p className="text-white/70 text-sm">{item.label}</p>
                    <h3 className="text-white font-bold text-xl mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative flex justify-center items-center min-h-[520px]">
  {/* Background Glow */}
  <div className="absolute w-[420px] h-[420px] rounded-full bg-yellow-400/20 blur-3xl"></div>

  {/* Outer Orbit */}
  <div className="absolute w-[520px] h-[520px] rounded-full border border-white/20 animate-[spin_30s_linear_infinite]"></div>

  {/* Middle Orbit */}
  <div className="absolute w-[420px] h-[420px] rounded-full border border-white/10"></div>

  {/* Small Floating Planets */}
  <div className="absolute top-16 right-12 w-14 h-14 rounded-full bg-gradient-to-br from-orange-300 to-yellow-500 shadow-[0_0_30px_rgba(255,190,60,0.6)] animate-pulse"></div>

  <div className="absolute bottom-20 left-10 w-10 h-10 rounded-full bg-gradient-to-br from-red-300 to-orange-500 shadow-[0_0_20px_rgba(255,120,60,0.5)] animate-bounce"></div>

  {/* Main Sun */}
  <div className="relative z-10">
    {/* Pulse Glow */}
    <div className="absolute inset-0 rounded-full bg-yellow-300/30 blur-2xl scale-125 animate-pulse"></div>

    {/* Sun Body */}
    <div className="relative w-[320px] h-[320px] rounded-full bg-gradient-to-br from-yellow-300 via-orange-400 to-orange-600 shadow-[0_0_140px_rgba(255,190,60,0.75)] border border-white/20 flex items-center justify-center overflow-hidden">
      
      {/* Inner Ring */}
      <div className="absolute inset-5 rounded-full border border-white/10"></div>

      {/* Shine Effect */}
      <div className="absolute top-10 left-14 w-28 h-28 bg-white/20 blur-2xl rounded-full"></div>

      {/* Rotating Light Ring */}
      <div className="absolute inset-0 rounded-full border-2 border-transparent border-white animate-spin"></div>

      <Sun className="w-40 h-40 text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
    </div>
  </div>

  {/* Floating Glass Card */}
  <div className="absolute bottom-6  z-50 right-0 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-5 py-4 shadow-2xl">
    <p className="text-white/60 text-sm">Surya Energy</p>
    <h3 className="text-white font-semibold text-lg mt-1">
      Power & Leadership
    </h3>
  </div>
</div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt="surya"
                className="rounded-[35px] shadow-2xl h-[600px] object-cover w-full"
              />
            </div>

            <div>
              <span className="text-[#c96e67] font-semibold uppercase tracking-[4px]">
                About Surya
              </span>

              <h2 className="text-5xl font-bold mt-5 leading-tight">
                Surya Grah Ka Importance
              </h2>

              <p className="text-gray-600 leading-8 text-lg mt-8">
                Astrology me Surya Grah personality, confidence aur success ko
                represent karta hai. Kundli me strong Surya insaan ko powerful
                leadership aur respect deta hai.
              </p>

              <p className="text-gray-600 leading-8 text-lg mt-5">
                Agar Surya weak ho to confidence issues, career struggles aur
                authority problems dekhne ko mil sakti hai.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Leadership Power",
                  "Government Success",
                  "Career Growth",
                  "Positive Energy",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6  border-[#f4d6d0]"
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
      <section className="py-24 bg-gradient-to-b from-[#fff7f5] to-[#ffe9e3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
              Surya Effects
            </span>

            <h2 className="text-5xl font-bold mt-5">
              Surya Grah Ke Positive Effects
            </h2>

            <p className="text-gray-600 leading-8 mt-6 text-lg">
              Strong Surya life me success, confidence aur powerful personality
              lata hai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Leadership",
                desc: "Leadership qualities aur authority ko strong karta hai.",
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Career Growth",
                desc: "Career me promotion aur success dilata hai.",
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "Confidence",
                desc: "Self-confidence aur motivation ko increase karta hai.",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Health",
                desc: "Energy aur physical strength ko improve karta hai.",
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
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
                Weak Surya
              </span>

              <h2 className="text-5xl font-bold mt-5 leading-tight">
                Weak Surya Ke Lakshan
              </h2>

              <div className="space-y-5 mt-10">
                {[
                  "Confidence ki kami",
                  "Government related issues",
                  "Career growth me problems",
                  "Health aur energy low rehna",
                  "Father relationship issues",
                  "Respect aur authority me kami",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-5 bg-[#fff5f2] border border-[#f5d7d1] rounded-2xl p-5"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c96e67] text-white flex items-center justify-center font-bold">
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
      <section className="py-24 bg-gradient-to-r from-[#c96e67] to-[#de8d67]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-white/80 uppercase tracking-[4px] font-semibold">
              Surya Remedies
            </span>

            <h2 className="text-5xl font-bold text-white mt-5">
              Surya Grah Ko Strong Kaise Kare
            </h2>

            <p className="text-white/90 leading-8 max-w-3xl mx-auto text-lg mt-6">
              Astrology me Surya ko strong karne ke liye kuch powerful remedies
              aur spiritual practices batayi gayi hai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "Surya Mantra",
                desc: "Daily Surya mantra jaap karna beneficial hota hai.",
              },
              {
                title: "Surya Arghya",
                desc: "Subah Surya ko jal chadhana shubh mana jata hai.",
              },
              {
                title: "Ruby Stone",
                desc: "Ruby gemstone Surya ko strong karta hai.",
              },
              {
                title: "Sunday Fast",
                desc: "Sunday vrat positive energy aur blessings deta hai.",
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

          <div className="bg-white rounded-[35px] p-10 mt-20 text-center shadow-2xl">
            <h3 className="text-3xl font-bold">
              Surya Beej Mantra
            </h3>

            <p className="text-[#c96e67] text-2xl font-semibold mt-6">
              ॐ ह्रां ह्रीं ह्रौं सः सूर्याय नमः
            </p>

            <p className="text-gray-600 leading-8 mt-5 text-lg">
              Roz subah 108 baar is mantra ka jaap karna Surya Grah ko strong
              banane me helpful mana jata hai.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fff7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px]  p-12 text-center">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#c96e67] to-[#de8d67] text-white flex items-center justify-center mx-auto shadow-xl">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-5xl font-bold mt-8 leading-tight">
              Personalized Surya Consultation
            </h2>

            <p className="text-gray-600 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Apni kundli me Surya ki position aur uske effects ko samajhne ke
              liye expert astrologer se consultation le sakte hai.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <button className="bg-[#c96e67] hover:bg-[#b85d57] text-white px-8 py-4 rounded-2xl font-semibold duration-300">
                Book Consultation
              </button>

              <button className="border border-[#c96e67] text-[#c96e67] hover:bg-[#c96e67] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2">
                Learn More <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}