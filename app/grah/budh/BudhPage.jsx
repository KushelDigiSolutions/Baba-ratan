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
import { motion } from "framer-motion";

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

        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16 lg:py-24 relative z-10 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl">
                <div className="w-2 h-2 rounded-full bg-lime-300" />

                <span className="text-white text-sm tracking-[3px] uppercase">
                  नवग्रह • बुध देव
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white leading-tight mt-8">
                बुध <span className="text-lime-300">ग्रह</span>
              </h1>

              <p className="text-white/85 text-lg lg:text-xl leading-9 mt-8 max-w-2xl mx-auto lg:mx-0">
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
              <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-12">
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
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full bg-gradient-to-br from-lime-300 via-[#22c55e] to-[#0b5d45] shadow-[0_0_120px_rgba(34,197,94,0.5)] flex items-center justify-center"
              >
                <div className="absolute inset-[-20px] rounded-full border border-white/20"></div>

                <div className="absolute inset-[-45px] rounded-full border border-white/10"></div>

                <Brain className="w-28 h-28 sm:w-40 sm:h-40 text-white" />
              </motion.div>

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
      <section className="py-12 lg:py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* IMAGE */}
            <div className="relative">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#138f66] to-[#22c55e] rotate-6"></div>

              <img
                src="https://images.unsplash.com/photo-1502134249126-9f3755a50d78?q=80&w=1200&auto=format&fit=crop"
                alt="budh"
                className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[320px] sm:h-[480px] lg:h-[650px] w-full"
              />
            </div>

            {/* CONTENT */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-[#138f66] uppercase tracking-[4px] font-semibold">
                About Lord Budh
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-tight mt-6">
                Mercury: Planet of Intellect
              </h2>
              {/* FEATURES */}
              <div className="grid sm:grid-cols-2 gap-6 mt-10">
                {[
                  "Mastery over complex astrological and mathematical calculations",
                  "Exceptional flair for writing, journalism, and mass media",
                  "Flawless diplomatic negotiation and conflict resolution skills",
                  "Lightning-fast adaptability to new software and technologies",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-2xl p-6 border border-[#d5f5df] flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-[#ecfff3] text-[#138f66] flex items-center justify-center shadow-sm">
                      <Star className="w-7 h-7" />
                    </div>

                    <h3 className="font-semibold text-lg text-[#0b5d45] mt-5">{item}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-12 lg:py-20 bg-gradient-to-b from-[#f5fff8] to-[#dcffe8]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#138f66] uppercase tracking-[4px] font-extrabold">
              सकारात्मक परिणाम
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3] text-[#0b5d45]">
              मजबूत बुध के अद्भुत लाभ
            </h2>
            <p className="text-gray-700 text-lg leading-9 mt-6 font-medium">
              जब आपकी जन्म पत्रिका में बुध शुभ और बलवान होता है, तो वह आपके तार्किक कौशल और संवाद शैली को निखारकर जीवन के हर मोड़ पर शानदार अवसर प्रदान करता है।
            </p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
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
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-[30px] p-8 hover:-translate-y-2 duration-300 flex flex-col items-center text-center sm:items-start sm:text-left shadow-sm border border-[#d5f5df]">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#22c55e] to-[#138f66] text-white flex items-center justify-center shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold text-[#0b5d45] mt-6">{item.title}</h3>
                <p className="text-gray-600 leading-7 mt-4">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WEAK BUDH */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#138f66] uppercase tracking-[4px] font-extrabold">
                Signs of Budh Dosha
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0b5d45] mt-5 leading-tight">
                Negative Impacts of a Weak Mercury
              </h2>

              <p className="text-gray-700 leading-8 text-lg mt-6">
                A debilitated or afflicted Mercury in the horoscope can severely limit your cognitive potential, causing communication barriers and financial instability.
              </p>

              <div className="space-y-5 mt-10">
                {[
                  "Chronic memory lapses and extreme difficulty in focusing",
                  "Severe speech stuttering or constant verbal miscommunication",
                  "Frequent business losses and failed mathematical calculations",
                  "Skin allergies, nervous disorders, and high anxiety levels",
                  "Strained relationships with maternal uncles or sisters",
                  "Loss of analytical reasoning and poor decision-making skills",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex flex-col sm:flex-row items-center sm:items-start gap-5 bg-[#f5fff8] border border-[#d5f5df] rounded-2xl p-5 text-center sm:text-left shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#138f66] text-white flex items-center justify-center font-bold shrink-0 shadow-sm">
                      {i + 1}
                    </div>

                    <p className="text-lg font-bold text-[#0b5d45]">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?q=80&w=1200&auto=format&fit=crop"
                alt="weak budh"
                className="rounded-[35px] shadow-2xl h-[320px] sm:h-[480px] lg:h-[650px] object-cover w-full border border-[#d5f5df]/30"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-12 lg:py-20 bg-gradient-to-br from-[#f5fff8] via-[#e8fff0] to-[#d5f5df] border-t border-b border-[#138f66]/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <span className="text-[#0b5d45] uppercase tracking-[4px] font-extrabold">
              ज्योतिषीय उपाय
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b5d45] mt-5 leading-[1.3] md:leading-[1.4]">
              बुध ग्रह को बलवान करने के अचूक तरीके
            </h2>

            <p className="text-[#1c2b22] leading-8 max-w-3xl mx-auto text-lg mt-6 font-medium">
              वैदिक ज्योतिष में बुध के अशुभ प्रभावों को दूर करने और इसके शुभ फलों को प्राप्त करने के लिए अत्यंत प्रभावशाली उपाय और अनुष्ठान बताए गए हैं।
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mt-16">
            {[
              {
                title: "विष्णु सहस्रनाम पाठ",
                desc: "प्रतिदिन या प्रत्येक बुधवार को विष्णु सहस्रनाम का पाठ करने से बुद्धि तीव्र होती है और वाणी दोष दूर होता है।",
              },
              {
                title: "गाय को हरी घास",
                desc: "बुधवार के दिन गाय को ताजी हरी घास या पालक खिलाने से व्यापारिक घाटा दूर होता है और धन लाभ होता है।",
              },
              {
                title: "कांसे का धारण",
                desc: "दाहिने हाथ में सिद्ध किया हुआ कांसे का कड़ा धारण करने से मस्तिष्क की नसें मजबूत होती हैं और एकाग्रता बढ़ती है।",
              },
              {
                title: "कन्याओं की सेवा",
                desc: "छोटी कन्याओं के चरण स्पर्श कर उनका आशीर्वाद लेना और उन्हें हरी वस्तुएं दान करना सर्वोत्तम बुध उपाय है।",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/95 border border-[#d5f5df] rounded-[30px] p-8 text-[#0b5d45] flex flex-col items-center text-center sm:items-start sm:text-left shadow-md"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#138f66] text-white flex items-center justify-center shadow-md">
                  <Sparkles className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold mt-6">{item.title}</h3>

                <p className="leading-7 text-gray-600 mt-4 font-medium">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-[35px] p-8 mt-12 text-center shadow-xl border border-[#d5f5df]">
            <h3 className="text-3xl font-extrabold text-[#0b5d45]">
              बुध बीज मंत्र
            </h3>

            <p className="text-[#138f66] text-2xl sm:text-3xl font-extrabold mt-6 tracking-wide drop-shadow-sm">
              ॐ ब्रां ब्रीं ब्रौं सः बुधाय नमः
            </p>

            <p className="text-gray-700 leading-8 mt-5 text-lg max-w-2xl mx-auto font-medium">
              बुधवार के दिन इस पवित्र मंत्र का 108 बार जाप करने से व्यापार में उन्नति, तेज बुद्धि और उत्तम स्वास्थ्य प्राप्त होता है।
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#f5fff8]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] p-10 text-center border border-[#d5f5df] shadow-lg">
            <div className="w-24 h-24 rounded-full bg-gradient-to-r from-[#138f66] to-[#22c55e] text-white flex items-center justify-center mx-auto shadow-lg">
              <HeartHandshake className="w-12 h-12" />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#0b5d45] mt-8 leading-tight">
              Personalized Astrological Guidance
            </h2>

            <p className="text-gray-700 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Want to deeply analyze the position of Mercury in your Kundli and discover highly effective remedies? Book a personalized session with our renowned Vedic experts.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a href="tel:+917042600873" className="bg-[#138f66] hover:bg-[#0f7553] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-lg shadow-green-500/20 cursor-pointer">
                Book Consultation
              </a>

              <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="border border-[#138f66]/50 text-[#138f66] hover:bg-[#138f66] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center gap-2 cursor-pointer shadow-sm">
                Book Digital Call <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#22c55e] to-[#138f66] text-white flex items-center justify-center mx-auto shadow-2xl">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center mx-auto">
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
      </section>
    </div>
  );
}