// app/grah/ketu/page.jsx
"use client";

import React from "react";
import {
  ArrowRight,
  Phone,
  Sparkles,
  Orbit,
  Flame,
  Shield,
  Stars,
  MoonStar,
  BadgeCheck,
  Star,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";

export default function KetuGrahPage() {
  return (
    <div className="bg-[#060608] text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative flex items-center px-6 lg:px-20 py-12 md:py-16 lg:py-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#3f3f46_0%,#18181b_45%,#09090b_100%)]"></div>

        {/* Stars Texture */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
          {/* LEFT */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-zinc-500 text-sm tracking-[4px] uppercase bg-zinc-500/10 text-zinc-200">
              <div className="w-2 h-2 rounded-full bg-zinc-400" />
              <span>Navgrah • Ketu Dev</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] sm:leading-tight mt-8">
              <span className="text-white">Ketu</span>{" "}
              <span className="bg-gradient-to-r from-zinc-400 via-stone-400 to-zinc-500 text-transparent bg-clip-text py-2">
                Grah
              </span>
            </h1>

            <p className="text-gray-300 text-lg leading-9 mt-8 max-w-2xl mx-auto lg:mx-0">
              Ketu is the shadow planet of absolute spiritual enlightenment, karmic detachment, and profound mysticism. A strong Ketu grants the ultimate 'Moksha', highly accurate psychic intuition, and incredible success in deep research and occult sciences.
            </p>

            <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 w-full max-w-md">
              {[
                { label: "तत्व", value: "अग्नि" },
                { label: "दिन", value: "मंगलवार" },
                { label: "रत्न", value: "लहसुनिया" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white/5 border border-zinc-500/30 rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                >
                  <p className="text-zinc-400 text-xs sm:text-sm font-semibold">{item.label}</p>
                  <h3 className="text-white font-bold text-sm sm:text-base md:text-xl mt-2">
                    {item.value}
                  </h3>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-8">
              <button className="w-full sm:w-auto justify-center bg-gradient-to-r cursor-pointer from-zinc-600 to-stone-700 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
                Explore Remedies
                <ArrowRight size={20} />
              </button>

              <a href="tel:+917042600873" className="w-full sm:w-auto">
                <button className="w-full justify-center border cursor-pointer border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition flex items-center">
                  Talk To Astrologer
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center mt-10 lg:mt-0">
            {/* Glow */}
            <div className="absolute w-[320px] sm:w-[450px] h-[320px] sm:h-[300px] lg:h-[450px] bg-zinc-600 blur-[140px] opacity-35 rounded-full"></div>

            {/* Planet */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative flex items-center justify-center"
            >
              {/* MYSTIC GLOW */}
              <div className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-stone-500/20 blur-3xl animate-pulse" />

              {/* OUTER ENERGY RING */}
              <div className="absolute w-[220px] sm:w-72 h-[220px] sm:h-72 rounded-full border border-stone-400/20 animate-spin [animation-duration:14s]" />

              <div className="absolute w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-zinc-500/10 animate-[spin_18s_linear_infinite_reverse]" />

              {/* MAIN ICON */}
              <Sparkles className="w-20 sm:w-44 h-20 sm:h-44 text-zinc-100 opacity-90 drop-shadow-[0_0_35px_rgba(113,113,122,0.8)]" />

              {/* CENTER ENERGY CORE */}
              <div className="absolute w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-gradient-to-br from-zinc-200 to-stone-400 shadow-[0_0_30px_rgba(113,113,122,0.9)]" />

              {/* FLOATING PARTICLES */}
              <div className="absolute top-10 left-10 sm:left-16 w-2 h-2 bg-zinc-300 rounded-full animate-ping" />
              <div className="absolute bottom-10 sm:bottom-16 right-10 sm:right-14 w-3 h-3 bg-stone-300 rounded-full animate-pulse" />
              <div className="absolute top-1/2 right-6 sm:right-8 w-2 h-2 bg-white rounded-full animate-ping" />
            </motion.div>

            {/* Floating Cards */}
            <div className="absolute top-10 left-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
              <p className="text-sm text-gray-300">Represents</p>
              <h4 className="font-bold text-xl">Spirituality</h4>
            </div>

            <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
              <p className="text-sm text-gray-300">Controls</p>
              <h4 className="font-bold text-xl">Moksha</h4>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-12 lg:py-20 bg-[#060608]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop"
                alt="Ketu Shadow Planet Vedic Astrology India — Bajrang Astro"
                className="rounded-[35px] shadow-2xl h-[300px] sm:h-[400px] lg:h-[600px] object-cover w-full border border-white/10"
              />
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-zinc-400 font-extrabold uppercase tracking-[4px]">
                About Lord Ketu
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-white leading-tight">
                The Cosmic Deliverer of Spiritual Liberation
              </h2>

              <p className="text-gray-300 leading-8 text-lg mt-8">
                Ketu is the shadow planet of absolute spiritual enlightenment, karmic detachment, and profound mysticism. A strong Ketu grants the ultimate 'Moksha', highly accurate psychic intuition, and incredible success in deep research and occult sciences.
              </p>

              <p className="text-gray-300 leading-8 text-lg mt-5 font-medium">
                Operating beyond the physical realm, Ketu detaches your consciousness from temporary worldly pursuits. This allows you to experience profound inner meditation, stoic wisdom, and true psychic vision.
              </p>

              <div className="grid sm:grid-cols-2 gap-6 mt-10 w-full">
                {[
                  "Profound Mastery over Astrological & Occult Sciences",
                  "Ultimate Karmic Release and Attainment of Moksha",
                  "Exceptional Sharp Intuition & Diagnostic Precision",
                  "Detachment from Toxic Bonds and Spiritual Awakening",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/5 rounded-2xl p-6 border border-white/10 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm hover:scale-[1.02] duration-300"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white/10 text-zinc-300 flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-gray-200 mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#060608] to-[#0d0e14]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-zinc-400 uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-white">
              मजबूत केतु के चमत्कारी लाभ
            </h2>

            <p className="text-gray-300 text-lg leading-9 mt-6 font-medium">
              जब जन्म कुंडली में अध्यात्म और वैराग्य के कारक केतु देव शुभ और बलवान होते हैं, तो वे जातक को सांसारिक बंधनों से मुक्त कर परम चेतना और अलौकिक अंतर्ज्ञान प्रदान करते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "अध्यात्म और वैराग्य",
                desc: "सांसारिक मोह-माया से विरक्त कर आत्मा को परमात्मा से जोड़ता है और आध्यात्मिक चेतना जागृत करता है।",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "गूढ़ विद्या का ज्ञान",
                desc: "तंत्र-मंत्र, ज्योतिष, हस्तरेखा और गहरे ध्यान की अवस्थाओं में जातक को असाधारण सिद्धियां दिलाता है।",
              },
              {
                icon: <Stars className="w-8 h-8" />,
                title: "तीक्ष्ण विश्लेषण बुद्धि",
                desc: "बेहतरीन सर्जन, वैज्ञानिक, शोधकर्ता (Researcher) और गहरे विश्लेषक बनाने में मदद करता है।",
              },
              {
                icon: <Flame className="w-8 h-8" />,
                title: "मानसिक स्वतंत्रता",
                desc: "दुनिया के दिखावटी और जहरीले रिश्तों से रक्षा कर मन को परम शांति और स्वतंत्रता प्रदान करता है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-white/10"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-zinc-600 to-stone-700 text-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-400 leading-7 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK KETU */}
      <section className="py-12 lg:py-20 bg-[#060608]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-zinc-400 uppercase tracking-[4px] font-extrabold">
                Signs of Ketu Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-5 leading-tight">
                Negative Impacts of a Weak Ketu
              </h2>

              <p className="text-gray-300 leading-8 text-lg mt-6">
                An afflicted or weak Ketu in the birth chart can trigger intense isolation, lack of direction, and mysterious physical ailments.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Intense feeling of loneliness, social isolation, and severe depression",
                  "Frequent confusion, sudden loss of concentration, and lack of goals",
                  "Mysterious skin allergies, joint pains, and undiagnosed diseases",
                  "Tendency to make wrong judgments and sudden trust betrayals",
                  "Strained relationships with maternal grandparents and siblings",
                  "Unexplained fears, disturbing nightmares, and absolute restlessness",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-white/5 border border-white/10 rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-zinc-500 text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-gray-200">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=1200&auto=format&fit=crop"
                alt="Weak Ketu Remedies India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-zinc-500/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#060608] via-[#0d0e14] to-[#060608] border-t border-b border-zinc-500/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-zinc-400 uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mt-5 leading-[1.3] md:leading-[1.4]">
              केतु देव को शांत करने के अचूक वैदिक उपाय
            </h2>

            <p className="text-gray-400 leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              केतु देव के प्रतिकूल प्रभावों को दूर करने और उनकी शुभ दृष्टि प्राप्त करने के लिए शास्त्रों में बहुत प्रभावी उपाय बताए गए हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "गणेश जी की पूजा",
                desc: "प्रतिदिन भगवान श्री गणेश की श्रद्धापूर्वक पूजा करें और उन्हें दूर्वा घास अर्पित करें।",
              },
              {
                title: "श्वान सेवा",
                desc: "गली के बेसहारा कुत्तों (विशेषकर चितकबरे) को नियमित रूप से दूध और भोजन खिलाएं।",
              },
              {
                title: "कंबल का दान",
                desc: "सर्दियों के दिनों में या शनिवार को किसी जरूरतमंद को दोरंगी (काले-सफेद) कंबल का दान करें।",
              },
              {
                title: "लहसुनिया रत्न",
                desc: "योग्य ज्योतिषी से सलाह लेकर मध्यमा उंगली में अभिमंत्रित लहसुनिया (Cat's Eye) रत्न धारण करें।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-[30px] p-8 text-gray-100 flex flex-col items-center text-center sm:items-start sm:text-left shadow-md backdrop-blur-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-zinc-500 text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6 text-white">{item.title}</h3>

                <p className="leading-7 text-gray-400 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white/5 rounded-[35px] p-8 mt-12 text-center shadow-xl border border-white/10 backdrop-blur-md">
            <h3 className="text-3xl font-extrabold text-white">
              केतु बीज मंत्र
            </h3>

            <p className="text-gray-300 text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ स्रां स्रीं स्रौं सः केतवे नमः
            </p>

            <p className="text-gray-100/70 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              शनिवार की संध्याकाल में इस महामंत्र का 108 बार जाप करने से सभी प्रकार के भ्रम, मानसिक रोग और केतु के दोष शांत होते हैं।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#060608]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white/5 backdrop-blur-md rounded-[40px] p-10 text-center border border-white/10 shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-zinc-600 to-stone-700 text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-300 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of Ketu in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="tel:+917042600873" className="bg-zinc-600 hover:bg-zinc-700 text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-zinc-600/20 cursor-pointer">
                Book Consultation
              </a>

              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="border border-zinc-500/50 text-gray-300 hover:bg-white hover:text-[#060608] px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                Book Digital Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
