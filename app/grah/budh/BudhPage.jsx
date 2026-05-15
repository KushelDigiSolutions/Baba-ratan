"use client";

import React from "react";
import {
  Brain,
  Sparkles,
  ArrowRight,
  BookOpen,
  Gem,
  ShieldCheck,
  MessageCircle,
  GraduationCap,
  HeartHandshake,
  Star,
  Orbit,
} from "lucide-react";

export default function BudhGrahPage() {
  return (
    <div className="bg-[#f5fff8] text-[#1c2b22] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-[#0b5d45] via-[#138f66] to-[#22c55e]">
        {/* Glow */}
        <div className="absolute top-[-120px] right-[-120px] w-[450px] h-[450px] rounded-full bg-green-300/20 blur-[120px]" />

        <div className="absolute bottom-[-120px] left-[-120px] w-[450px] h-[450px] rounded-full bg-emerald-400/20 blur-[120px]" />

        {/* Grid */}
        <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div>
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-lime-300" />

                <span className="text-white text-sm tracking-[3px] uppercase">
                  Navgrah • Budh Dev
                </span>
              </div>

              <h1 className="text-6xl lg:text-8xl font-black text-white leading-none mt-8">
                Budh
                <span className="block text-lime-300">Grah</span>
              </h1>

              <p className="text-white/85 text-lg lg:text-xl leading-9 mt-8 max-w-2xl">
                Budh Grah intelligence, communication, learning aur
                business skills ka pratik mana jata hai. Strong Budh
                insaan ko smart thinking aur sharp mind deta hai.
              </p>

              {/* INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
                {[
                  {
                    label: "Element",
                    value: "Earth",
                  },
                  {
                    label: "Day",
                    value: "Wednesday",
                  },
                  {
                    label: "Gemstone",
                    value: "Emerald",
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
                <button className="bg-white hover:scale-105 duration-300 text-[#138f66] px-8 py-4 rounded-2xl font-semibold shadow-2xl">
                  Explore Remedies
                </button>
              
                          <a href="tel:+917042600087">
                              <button className="border cursor-pointer border-white/30 text-white hover:bg-white hover:text-[#138f66] duration-300 px-8 py-4 rounded-2xl font-semibold">
                  Talk To Astrologer
                </button>
                          </a>
              
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              {/* ORBITS */}
              <div className="absolute w-[620px] h-[620px] rounded-full border border-white/10 animate-spin"></div>

              <div className="absolute w-[470px] h-[470px] rounded-full border border-white/10"></div>

              <div className="absolute w-[340px] h-[340px] rounded-full border border-white/10"></div>

              {/* PLANET */}
              <div className="relative z-10 w-[320px] h-[320px] rounded-full bg-gradient-to-br from-lime-300 via-[#22c55e] to-[#0b5d45] shadow-[0_0_120px_rgba(34,197,94,0.5)] flex items-center justify-center">
                <div className="absolute inset-[-20px] rounded-full border border-white/20"></div>

                <div className="absolute inset-[-45px] rounded-full border border-white/10"></div>

                <Brain className="w-40 h-40 text-white" />
              </div>

              {/* FLOAT CARD */}
              <div className="hidden lg:flex absolute top-10 right-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 items-center gap-4 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-lime-300 text-[#138f66] flex items-center justify-center">
                  <MessageCircle className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-white/60 text-sm">
                    Represents
                  </p>

                  <h3 className="text-white font-bold text-lg">
                    Communication
                  </h3>
                </div>
              </div>

              <div className="hidden lg:flex absolute bottom-10 left-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 items-center gap-4 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-green-300 text-[#138f66] flex items-center justify-center">
                  <BookOpen className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-white/60 text-sm">
                    Controls
                  </p>

                  <h3 className="text-white font-bold text-lg">
                    Intelligence
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
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#138f66] to-[#22c55e] rotate-6"></div>

              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="budh"
                className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[650px] w-full"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-[#138f66] uppercase tracking-[4px] font-semibold">
                About Budh Grah
              </span>

              <h2 className="text-5xl lg:text-6xl font-black leading-tight mt-6">
                Intelligence Aur Communication Ka Grah
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                Budh Grah learning ability, communication skills aur
                analytical thinking ko represent karta hai.
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                Strong Budh insaan ko smart decision making aur
                business success deta hai.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  "Communication skills improve karta hai",
                  "Business aur trading me success deta hai",
                  "Sharp mind aur intelligence increase karta hai",
                  "Education aur learning power strong karta hai",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl border border-[#d5f5df] shadow-md p-6 flex gap-5 hover:-translate-y-1 duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#ecfff3] text-[#138f66] flex items-center justify-center shrink-0">
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
      <section className="py-28 bg-gradient-to-b from-[#f5fff8] to-[#dcffe8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#138f66] uppercase tracking-[4px] font-semibold">
              Positive Effects
            </span>

            <h2 className="text-5xl lg:text-6xl font-black mt-6">
              Strong Budh Ke Benefits
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-6">
              Strong Budh communication aur intelligence ko improve
              karta hai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {[
              {
                icon: <GraduationCap className="w-8 h-8" />,
                title: "Education",
                desc: "Learning aur memory power strong karta hai.",
              },
              {
                icon: <MessageCircle className="w-8 h-8" />,
                title: "Communication",
                desc: "Speaking aur communication improve karta hai.",
              },
              {
                icon: <ShieldCheck className="w-8 h-8" />,
                title: "Logic",
                desc: "Decision making aur logical thinking strong karta hai.",
              },
              {
                icon: <Orbit className="w-8 h-8" />,
                title: "Business",
                desc: "Business aur trading me growth deta hai.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[35px] p-8 border border-[#d5f5df] shadow-lg hover:-translate-y-3 duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#22c55e] to-[#138f66] text-white flex items-center justify-center shadow-xl">
                  {item.icon}
                </div>

                <h3 className="text-3xl font-bold mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-8 text-lg mt-5">
                  {item.desc}
                </p>

                <button className="flex items-center gap-2 text-[#138f66] font-semibold mt-8 group-hover:gap-4 duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section className="py-28 bg-[#0c1f18] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-lime-300 uppercase tracking-[4px] font-semibold">
              Budh Remedies
            </span>

            <h2 className="text-5xl lg:text-6xl font-black text-white mt-6">
              Budh Ko Strong Kaise Kare
            </h2>

            <p className="text-white/70 text-lg leading-9 mt-6">
              Astrology me Budh Grah ko strong karne ke liye kuch
              powerful remedies batayi gayi hai.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {[
              {
                title: "Budh Mantra",
                desc: "Daily Budh mantra jaap beneficial hota hai.",
              },
              {
                title: "Emerald Stone",
                desc: "Panna gemstone Budh ko strong karta hai.",
              },
              {
                title: "Wednesday Fast",
                desc: "Budhwar vrat positive energy deta hai.",
              },
              {
                title: "Green Donation",
                desc: "Hari cheeze donate karna shubh mana jata hai.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 hover:bg-white/10 hover:-translate-y-2 duration-300"
              >
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-lime-300 to-[#22c55e] text-[#138f66] flex items-center justify-center shadow-xl">
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
          <div className="mt-24 bg-gradient-to-r from-[#138f66] to-[#22c55e] rounded-[45px] p-14 lg:p-16 shadow-2xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                <Gem className="w-14 h-14 text-white" />
              </div>

              <h3 className="text-4xl lg:text-5xl font-black text-white mt-10">
                Budh Beej Mantra
              </h3>

              <p className="text-lime-200 text-3xl lg:text-4xl font-bold mt-8 leading-relaxed">
                ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः
              </p>

              <p className="text-white/85 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Roz Budh mantra ka jaap aur Budhwar ko green color
                use karna beneficial mana jata hai.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 bg-[#f5fff8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-[#d5f5df] rounded-[45px] shadow-2xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#22c55e] to-[#138f66] text-white flex items-center justify-center mx-auto shadow-2xl">
                <HeartHandshake className="w-14 h-14" />
              </div>

              <h2 className="text-5xl lg:text-6xl font-black mt-10 leading-tight">
                Personalized
                <span className="block text-[#138f66]">
                  Budh Consultation
                </span>
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Apni kundli me Budh ki position aur uske effects ko
                samajhne ke liye expert astrologer se consultation le.
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-12">
             <a
  href="tel:+917042600873"
  className="inline-block"
>
  <button className="bg-[#138f66] cursor-pointer hover:bg-[#0f7553] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl">
    Book Consultation
  </button>
</a>

                <button className="border border-[#138f66] text-[#138f66] hover:bg-[#138f66] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2">
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