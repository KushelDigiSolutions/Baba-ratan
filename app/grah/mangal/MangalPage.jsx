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
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";

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

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-yellow-300"></div>

                <span className="text-white text-sm tracking-[3px] uppercase">
                  Navgrah • Divine Commander
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] mt-8">
                Mangal <span className="text-yellow-300">Grah</span>
              </h1>

              <p className="text-white/85 text-lg lg:text-xl leading-9 mt-8 max-w-2xl mx-auto lg:mx-0">
                Mars (Mangal Dev) stands as the cosmic commander of power, fire, and determination. Far from being just an aggressive influence, a benefic Mars blesses you with unshakeable courage, supreme executive authority, and an extraordinary drive to conquer every professional milestone.
              </p>

              {/* INFO */}
              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-10 w-full max-w-md">
                {[
                  { label: "तत्व", value: "अग्नि" },
                  { label: "दिन", value: "मंगलवार" },
                  { label: "रत्न", value: "मूंगा" },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white/95 border border-red-200 rounded-2xl p-2 sm:p-5 text-center shadow-sm"
                  >
                    <p className="text-red-600 text-xs sm:text-sm font-semibold">{item.label}</p>
                    <h3 className="text-red-900 font-bold text-sm sm:text-base md:text-xl mt-2">
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-wrap gap-4 sm:gap-5 mt-12">
                <a href="#remedies-section" className="w-full sm:w-auto">
                  <button className="w-full bg-white cursor-pointer hover:scale-105 duration-300 text-[#b83232] px-8 py-4 rounded-2xl font-semibold shadow-2xl">
                    Explore Remedies
                  </button>
                </a>

                <a href="tel:+917042600873" className="w-full sm:w-auto">
                  <button className="w-full border cursor-pointer border-white/30 text-white hover:bg-white hover:text-[#b83232] duration-300 px-8 py-4 rounded-2xl font-semibold">
                    Talk To Astrologer
                  </button>
                </a>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative flex justify-center">
              {/* ORBITS */}
              <div className="absolute w-[320px] h-[320px] sm:w-[450px] sm:h-[450px] md:w-[550px] md:h-[550px] lg:w-[620px] lg:h-[620px] rounded-full border border-white/10 animate-spin"></div>

              <div className="absolute w-[260px] h-[260px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[470px] lg:h-[470px] rounded-full border border-white/10"></div>

              <div className="absolute w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[320px] md:h-[320px] lg:w-[340px] lg:h-[340px] rounded-full border border-white/10"></div>

              {/* PLANET */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-br from-orange-300 via-[#ff6b35] to-[#b83232] shadow-[0_0_120px_rgba(255,94,58,0.5)] flex items-center justify-center"
              >
                <div className="absolute inset-[-10px] sm:inset-[-20px] rounded-full border border-white/20"></div>

                <div className="absolute inset-[-25px] sm:inset-[-45px] rounded-full border border-white/10"></div>

                <Flame className="w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 text-white" />
              </motion.div>

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
      <section className="py-12 md:py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* IMAGE */}
            <div className="relative mb-10 lg:mb-0">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#b83232] to-[#ff7b54] rotate-6"></div>

              <img
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop"
                alt="Mangal Mars Planet Vedic Astrology India — Bajrang Astro"
                className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[320px] sm:h-[480px] lg:h-[650px] w-full"
              />
            </div>

            {/* CONTENT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#b83232] uppercase tracking-[4px] font-extrabold">
                About Lord Mangal
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-5 text-[#7a1f1f] leading-tight">
                Mars: Planet of Valour & Courage
              </h2>

              <p className="text-gray-700 leading-8 text-lg mt-8">
                In Vedic astrology, Mars (Mangal Dev) stands as the commander of the planetary cabinet. He represents supreme masculine energy, unyielding willpower, land, and sibling connections. A benefically placed Mars blesses the native with fearless leadership, absolute success in property, and victory over all rivals.
              </p>

              <p className="text-gray-700 leading-8 text-lg mt-5 font-medium">
                An afflicted Mars can trigger aggressive outbursts and debt issues, making the native prone to Manglik Dosha. Resolving Mars afflictions restores domestic stability and brings absolute inner strength.
              </p>

              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Absolute Victory over Hidden Enemies and Rivals",
                  "Immense Fortune in Real Estate and Land Ownership",
                  "Surgical Precision, Engineering and Tactical Mastery",
                  "Dynamic Command, Willpower and Executive Authority",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-slate-50 rounded-2xl p-6 border border-[#f4d7d2] flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#fff0eb] text-[#b83232] flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-[#7a1f1f] mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-12 md:py-20 lg:py-28 bg-gradient-to-b from-[#fff7f5] to-[#ffe8df]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#b83232] uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-[#7a1f1f]">
              मजबूत मंगल के चमत्कारी लाभ
            </h2>

            <p className="text-gray-700 text-lg leading-9 mt-6 font-medium">
              जब आपकी जन्म पत्रिका में मंगल देव शुभ और बलवान होते हैं, तो वे जातक को अदम्य साहस, असाधारण शारीरिक सहनशक्ति और प्रशासनिक वर्चस्व प्रदान करते हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: "वित्तीय साहस",
                desc: "साहसिक निर्णय लेने, पुराने कर्जों को चुकाने और स्थायी वित्तीय स्वतंत्रता प्राप्त करने की शक्ति प्रदान करता है।",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "तकनीकी और चिकित्सा",
                desc: "शल्य चिकित्सा (सर्जरी), इंजीनियरिंग और सैन्य/सुरक्षा क्षेत्रों में असाधारण सफलता दिलाता है।",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "भूमि व संपत्ति लाभ",
                desc: "रियल एस्टेट, भू-संपत्ति के क्रय-विक्रय और संपत्ति संबंधी विवादों में शानदार विजय दिलाता है।",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "दांपत्य सामंजस्य",
                desc: "उग्र ऊर्जा को सुरक्षात्मक स्नेह में बदलकर वैवाहिक और पारिवारिक संबंधों में मधुरता स्थापित करता है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-[#f4d7d2]"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#ff7b54] to-[#b83232] text-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-[#7a1f1f] mt-6">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK MANGAL */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#b83232] uppercase tracking-[4px] font-extrabold">
                Signs of Mangal Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#7a1f1f] mt-5 leading-tight">
                Negative Impacts of a Weak Mars
              </h2>

              <p className="text-gray-700 leading-8 text-lg mt-6">
                A debilitated or afflicted Mars in the horoscope can severely destabilize your physical energy, causing uncontrollable anger and strained relationships.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Uncontrollable rage, frequent violent outbursts, and high impatience",
                  "Chronic blood-related disorders, high blood pressure, and frequent injuries",
                  "Severe financial debts, bankruptcy, and failed real estate investments",
                  "Intense marital discord, separation, or severe Manglik Dosha impacts",
                  "Lack of physical stamina, persistent lethargy, and courage deficit",
                  "Continuous legal disputes, property litigation, and sibling conflicts",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#fff7f5] border border-[#f4d7d2] rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#b83232] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-[#7a1f1f]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop"
                alt="Weak Mangal Remedies India — Vishal Verma"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-[#f4d7d2]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#fff7f5] via-[#ffe8df] to-[#f4d7d2] border-t border-b border-[#b83232]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#7a1f1f] uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#7a1f1f] mt-5 leading-[1.3] md:leading-[1.4]">
              मंगल ग्रह को बलवान करने के अचूक तरीके
            </h2>

            <p className="text-[#3d2421] leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              वैदिक ज्योतिष में मंगल के क्रूर प्रभाव या मांगलिक दोष को शांत कर उनकी शुभ ऊर्जा को आकर्षित करने के लिए शास्त्रों में अचूक व परम कल्याणकारी विधान बताए गए हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "मसूर दाल का दान",
                desc: "प्रत्येक मंगलवार को लाल मसूर की दाल, तांबा और गुड़ का दान करना अत्यंत कल्याणकारी माना गया है।",
              },
              {
                title: "ऋणमोचक मंगल पाठ",
                desc: "मंगलवार के दिन ऋणमोचक मंगल स्तोत्र का पाठ करने से आर्थिक बाधाएं और कर्ज शीघ्र ही समाप्त होते हैं।",
              },
              {
                title: "हनुमान उपासना",
                desc: "प्रतिदिन या प्रत्येक मंगलवार को हनुमान चालीसा या बजरंग बाण का पाठ करने से सभी अमंगल दूर होते हैं।",
              },
              {
                title: "तांबे का धारण",
                desc: "दाहिने हाथ की कलाई में सिद्ध किया हुआ तांबे का कड़ा या अनामिका में तांबे का छल्ला धारण करने से मंगल दोष घटता है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/95 border border-[#f4d7d2] rounded-[30px] p-8 text-[#7a1f1f] flex flex-col items-center text-center sm:items-start sm:text-left shadow-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#b83232] text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="leading-7 text-gray-600 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[35px] p-8 mt-12 text-center shadow-xl border border-[#f4d7d2]">
            <h3 className="text-3xl font-extrabold text-[#7a1f1f]">
              मंगल बीज मंत्र
            </h3>

            <p className="text-[#b83232] text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ क्रां क्रीं क्रौं सः भौमाय नमः
            </p>

            <p className="text-gray-700 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              मंगलवार के दिन इस महामंत्र का 108 बार जाप करने से जीवन की समस्त विपत्तियां और मांगलिक बाधाएं तुरंत समाप्त हो जाती हैं।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#fff7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-10 text-center border border-[#f4d7d2] shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#ff7b54] to-[#b83232] text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#7a1f1f] mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-700 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of Mars in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="tel:+917042600873" className="bg-[#b83232] hover:bg-[#992525] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-red-500/20 cursor-pointer">
                Book Consultation
              </a>

              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="border border-[#b83232]/50 text-[#b83232] hover:bg-[#b83232] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                Book Digital Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}