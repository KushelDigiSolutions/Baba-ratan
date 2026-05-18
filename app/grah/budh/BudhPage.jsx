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
                  नवग्रह • बुध देव
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight mt-8">
                बुध <span className="text-lime-300">ग्रह</span>
              </h1>

              <p className="text-white/85 text-lg lg:text-xl leading-9 mt-8 max-w-2xl">
                वैदिक ज्योतिष में बुध (Mercury) को बुद्धि, तार्किक क्षमता और व्यापार का प्रबल कारक माना गया है। मजबूत बुध आपकी कुशाग्रता, वाणी की मिठास और करियर में अभूतपूर्व सफलता का मार्ग प्रशस्त करता है।
              </p>

              {/* INFO */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-12">
                {[
                  {
                    label: "तत्व",
                    value: "पृथ्वी",
                  },
                  {
                    label: "दिन",
                    value: "बुधवार",
                  },
                  {
                    label: "रत्न",
                    value: "पन्ना",
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
                  उपाय खोजें
                </button>

                <a href="tel:+917042600873">
                  <button className="border cursor-pointer border-white/30 text-white hover:bg-white hover:text-[#138f66] duration-300 px-8 py-4 rounded-2xl font-semibold">
                    परामर्श लें
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
                    कारक
                  </p>

                  <h3 className="text-white font-bold text-lg">
                    वाणी
                  </h3>
                </div>
              </div>

              <div className="hidden lg:flex absolute bottom-10 left-0 bg-white/10 border border-white/20 backdrop-blur-xl rounded-3xl p-5 items-center gap-4 shadow-2xl">
                <div className="w-14 h-14 rounded-2xl bg-green-300 text-[#138f66] flex items-center justify-center">
                  <BookOpen className="w-7 h-7" />
                </div>

                <div>
                  <p className="text-white/60 text-sm">
                    प्रदाता
                  </p>

                  <h3 className="text-white font-bold text-lg">
                    बुद्धि
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                About Lord Budh
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight mt-6">
                Mercury: Planet of Intellect
              </h2>
              <p className="text-gray-600 text-lg leading-9 mt-8">
                In astrological science, Mercury stands as the ultimate symbol of logic, cognitive brilliance, and exceptional communication skills.
              </p>
              <p className="text-gray-600 text-lg leading-9 mt-6">
                A powerfully placed Mercury in your horoscope endows you with an incredibly sharp mind, making you a master of quick decision-making and profitable business ventures.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  "Mastery over complex astrological and mathematical calculations",
                  "Exceptional flair for writing, journalism, and mass media",
                  "Flawless diplomatic negotiation and conflict resolution skills",
                  "Lightning-fast adaptability to new software and technologies",
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
      <section className="py-16 md:py-20 bg-gradient-to-b from-[#f5fff8] to-[#dcffe8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#138f66] uppercase tracking-[4px] font-semibold">
              सकारात्मक परिणाम
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3]">
              मजबूत बुध के अद्भुत लाभ
            </h2>
            <p className="text-gray-600 text-lg leading-9 mt-6">
              जब आपकी जन्म पत्रिका में बुध शुभ और बलवान होता है, तो वह आपके तार्किक कौशल और संवाद शैली को निखारकर जीवन के हर मोड़ पर शानदार अवसर प्रदान करता है।
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {
              [
                {
                  icon: <GraduationCap className="w-8 h-8" />, 
                  title: "अतुलनीय वाक्पटुता", 
                  desc: "अपनी वाणी के प्रभाव से सभा को सम्मोहित करने और कठिन बहसों को जीतने की कला मिलती है।",
                },
                {
                  icon: <MessageCircle className="w-8 h-8" />, 
                  title: "वित्तीय प्रबंधन", 
                  desc: "शेयर बाजार, चार्टर्ड अकाउंटेंसी और बैंकिंग में सटीक विश्लेषण कर भारी मुनाफा कमाने का गुण।",
                },
                {
                  icon: <ShieldCheck className="w-8 h-8" />, 
                  title: "हास्य और आकर्षण", 
                  desc: "जातक के भीतर एक अद्भुत हास्यबोध विकसित होता है जो उसे अत्यंत लोकप्रिय बनाता है।",
                },
                {
                  icon: <Orbit className="w-8 h-8" />, 
                  title: "तंत्रिका तंत्र की मजबूती", 
                  desc: "मानसिक तनाव से मुक्ति मिलती है और स्नायु तंत्र (Nervous System) पूर्ण रूप से स्वस्थ रहता है।",
                },
              ].map((item, index) => (
                <div key={index} className="group bg-white rounded-[35px] p-8 border border-[#d5f5df] shadow-lg hover:-translate-y-3 duration-300">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-[#22c55e] to-[#138f66] text-white flex items-center justify-center shadow-xl">
                    {item.icon}
                  </div>
                  <h3 className="text-3xl font-bold mt-8">{item.title}</h3>
                  <p className="text-gray-600 leading-8 text-lg mt-5">{item.desc}</p>
                  <button className="flex items-center gap-2 text-[#138f66] font-semibold mt-8 group-hover:gap-4 duration-300">
                    अधिक जानें <ArrowRight className="w-5 h-5" />
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
              Astrological Remedies
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mt-6 leading-[1.3]">
              How to Strengthen Weak Mercury
            </h2>
            <p className="text-white/70 text-lg leading-9 mt-6">
              To overcome the adverse effects of an afflicted Mercury and harness its highly auspicious energies, Vedic astrology prescribes profound spiritual remedies.
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-20">
            {[
              {
                title: "Feeding Parrots & Cows",
                desc: "Regularly feeding green grass to cows or keeping bird feeders actively attracts Mercury's blessings.",
              },
              {
                title: "Vishnu Sahasranama",
                desc: "Chanting the Vishnu Sahasranama on Wednesdays profoundly heals deep-seated cognitive and speech issues.",
              },
              {
                title: "Tulsi Worship",
                desc: "Planting and offering water to a Tulsi plant daily purifies your immediate aura and strengthens logic.",
              },
              {
                title: "Wearing Bronze",
                desc: "Adorning a pure bronze ring on the little finger helps stabilize a fluctuating, restless mind.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[35px] p-8 hover:bg-white/10 hover:-translate-y-2 duration-300">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-lime-300 to-[#22c55e] text-[#138f66] flex items-center justify-center shadow-xl">
                  <Sparkles className="w-9 h-9" />
                </div>
                <h3 className="text-white text-3xl font-bold mt-8">{item.title}</h3>
                <p className="text-white/60 leading-8 text-lg mt-5">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 bg-gradient-to-r from-[#138f66] to-[#22c55e] rounded-[45px] p-10 lg:p-14 shadow-2xl text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                <Gem className="w-14 h-14 text-white" />
              </div>
              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mt-10">
                Budh Beej Mantra
              </h3>
              <p className="text-lime-200 text-xl sm:text-2xl lg:text-4xl font-bold mt-8 leading-relaxed">
                ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः
              </p>
              <p className="text-white/85 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                Reciting this divine mantra significantly improves speech disorders, sharpens intellect, and attracts immense financial prosperity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-[#f5fff8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-[#d5f5df] rounded-[45px] shadow-2xl p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="relative z-10">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-[#22c55e] to-[#138f66] text-white flex items-center justify-center mx-auto shadow-2xl">
                <HeartHandshake className="w-14 h-14" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mt-10 leading-[1.3]">
                व्यक्तिगत <span className="text-[#138f66]">मार्गदर्शन</span>
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8 max-w-3xl mx-auto">
                क्या आप जानना चाहते हैं कि आपकी कुंडली में बुध की स्थिति आपके करियर और व्यापार को कैसे प्रभावित कर रही है? आज ही हमारे विशेषज्ञ ज्योतिषियों से व्यक्तिगत सलाह लें।
              </p>

              <div className="flex flex-wrap justify-center gap-5 mt-12">
                <a
                  href="tel:+917042600873"
                  className="inline-block"
                >
                  <button className="bg-[#138f66] cursor-pointer hover:bg-[#0f7553] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl">
                    अपॉइंटमेंट बुक करें
                  </button>
                </a>

                <button className="border border-[#138f66] text-[#138f66] hover:bg-[#138f66] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2">
                  अधिक जानकारी देखें <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}