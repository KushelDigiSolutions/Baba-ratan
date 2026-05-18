// app/grah/mangal/MangalPage.jsx
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
                  Navgrah • Divine Commander
                </span>
              </div>

              <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black text-white leading-[1.1] mt-8">
                Mangal <span className="text-yellow-300">Grah</span>
              </h1>

              <p className="text-white/85 text-lg lg:text-xl leading-9 mt-8 max-w-2xl">
                Mars (Mangal Dev) stands as the cosmic commander of power, fire, and determination. Far from being just an aggressive influence, a benefic Mars blesses you with unshakeable courage, supreme executive authority, and an extraordinary drive to conquer every professional milestone.
              </p>

              {/* INFO */}
              <div className="grid grid-cols-3 gap-2 sm:gap-5 mt-12">
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
                    className="bg-white/10 border border-white/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-2 sm:p-6 text-center hover:-translate-y-2 duration-300"
                  >
                    <p className="text-white/60 text-xs sm:text-sm">
                      {item.label}
                    </p>

                    <h3 className="text-white text-sm sm:text-base md:text-2xl font-bold mt-1 sm:mt-2">
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
              <div className="relative z-10 w-[180px] h-[180px] sm:w-[260px] sm:h-[260px] lg:w-[320px] lg:h-[320px] rounded-full bg-gradient-to-br from-orange-300 via-[#ff6b35] to-[#b83232] shadow-[0_0_120px_rgba(255,94,58,0.5)] flex items-center justify-center">
                <div className="absolute inset-[-10px] sm:inset-[-20px] rounded-full border border-white/20"></div>

                <div className="absolute inset-[-25px] sm:inset-[-45px] rounded-full border border-white/10"></div>

                <Flame className="w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 text-white" />
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
      <section className="py-16 md:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* IMAGE */}
            <div className="relative mb-10 lg:mb-0">
              <div className="absolute inset-0 rounded-[40px] bg-gradient-to-r from-[#b83232] to-[#ff7b54] rotate-6"></div>

              <img
                src="https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?q=80&w=1200&auto=format&fit=crop"
                alt="mangal"
                className="relative z-10 rounded-[40px] shadow-2xl object-cover h-[320px] sm:h-[480px] lg:h-[650px] w-full"
              />
            </div>

            {/* CONTENT */}
            <div>
              <span className="text-[#b83232] uppercase tracking-[4px] font-semibold">
                About Mangal Grah
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black leading-[1.3] mt-6">
                अदम्य साहस और शौर्य के अधिष्ठाता
              </h2>

              <p className="text-gray-600 text-lg leading-9 mt-8">
                वैदिक ज्योतिष में मंगल देव को ग्रहों का सेनापति माना जाता है। वे पौरुष, इच्छाशक्ति, भूमि और असीम ऊर्जा के स्वामी हैं। कुंडली में मजबूत मंगल जातक को असाधारण नेतृत्व शक्ति, संकल्प बल और शत्रुओं पर विजय प्राप्त करने की शक्ति प्रदान करता है।
              </p>

              <p className="text-gray-600 text-lg leading-9 mt-6">
                कमजोर अथवा पीड़ित मंगल कुंडली में 'मांगलिक दोष' उत्पन्न करता, जिससे जातक के दांपत्य जीवन, विवाह और निजी संबंधों में गंभीर कलह, क्रोध और अशांति का सामना करना पड़ता है।
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mt-10">
                {[
                  {
                    title: "ऋण मुक्ति क्षमता",
                    desc: "मंगल की सकारात्मक ऊर्जा जातक को भारी कर्जों से मुक्ति दिलाकर आर्थिक स्वतंत्रता और स्थिरता प्रदान करती है।"
                  },
                  {
                    title: "तकनीकी कौशल",
                    desc: "इंजीनियरिंग, शल्य चिकित्सा (सर्जरी) और उन्नत प्रौद्योगिकी के क्षेत्र में जातक को अभूतपूर्व ख्याति और सफलता दिलाना।"
                  },
                  {
                    title: "मांगलिक प्रभाव",
                    desc: "मांगलिक योग के कारण वैवाहिक जीवन में आने वाली चुनौतियों को समझना और सही जीवनसाथी का चुनाव करना।"
                  },
                  {
                    title: "शत्रु शमन",
                    desc: "विरोधी पक्ष को परास्त करने और हर प्रकार के षड्यंत्र से सुरक्षित रखने की विशेष दैवीय शक्ति देना।"
                  }
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-2xl sm:rounded-3xl border border-[#f4d7d2] shadow-md p-4 sm:p-6 flex gap-4 sm:gap-5 hover:-translate-y-1 duration-300"
                  >
                    <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#fff0eb] text-[#b83232] flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 sm:w-7 sm:h-7" />
                    </div>

                    <div>
                      <h4 className="text-xl font-bold text-[#b83232]">{item.title}</h4>
                      <p className="text-gray-700 text-lg leading-8 mt-1">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EFFECTS */}
      <section className="py-16 md:py-28 bg-gradient-to-b from-[#fff7f5] to-[#ffe8df]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-[#b83232] uppercase tracking-[4px] font-semibold">
              Positive Effects
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black mt-6 leading-[1.3]">
              Strong Mangal Ke Benefits
            </h2>

            <p className="text-gray-600 text-lg leading-9 mt-6">
              When Mars is brilliantly positioned in your birth chart, it serves as a catalyst for spectacular victories, exceptional physical endurance, and dynamic authority.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-20">
            {[
              {
                icon: <Crown className="w-8 h-8" />,
                title: "Financial Courage",
                desc: "Empowers you to make bold investments, clear massive debts, and attain solid financial independence.",
              },
              {
                icon: <Activity className="w-8 h-8" />,
                title: "Surgical Precision",
                desc: "Bestows extraordinary analytical skills, making you highly successful in medicine, engineering, and tactical fields.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Property Gains",
                desc: "Attracts massive luck in real estate, land acquisition, and successful property dispute resolutions.",
              },
              {
                icon: <Sparkles className="w-8 h-8" />,
                title: "Marital Harmony",
                desc: "Resolves intense relationship conflicts by channeling raw aggressive energy into passionate, protective devotion.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-8 border border-[#f4d7d2] shadow-lg hover:-translate-y-3 duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#ff7b54] to-[#b83232] text-white flex items-center justify-center shadow-xl">
                  {item.icon}
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mt-6 sm:mt-8">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-7 sm:leading-8 text-base sm:text-lg mt-3 sm:mt-5">
                  {item.desc}
                </p>

                <a href="tel:+917042600873">
                  <button className="flex items-center gap-2 cursor-pointer text-[#b83232] font-semibold mt-6 sm:mt-8 group-hover:gap-4 duration-300">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section id="remedies-section" className="py-16 md:py-28 bg-[#1d1212] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <span className="text-yellow-300 uppercase tracking-[4px] font-semibold">
              Mangal Remedies
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-6xl font-black text-white mt-6 leading-[1.3]">
              Mangal Ko Strong Kaise Kare
            </h2>

            <p className="text-white/70 text-lg leading-9 mt-6">
              कुंडली में मंगल के क्रूर प्रभाव या मांगलिक दोष को शांत कर उनकी शुभ ऊर्जा को आकर्षित करने के लिए शास्त्रों में अचूक व परम कल्याणकारी विधान बताए गए हैं।
            </p>
          </div>

          {/* REMEDY CARDS */}
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-8 mt-10 sm:mt-20">
            {[
              {
                title: "मसूर दाल का दान",
                desc: "प्रत्येक मंगलवार को लाल मसूर की दाल और गुड़ का दान करना अत्यंत शुभ और मंगलकारी माना गया है।",
              },
              {
                title: "ऋणमोचक मंगल स्तोत्र",
                desc: "मंगलवार के दिन ऋणमोचक मंगल स्तोत्र का पाठ करने से आर्थिक बाधाएं और कर्ज शीघ्र ही समाप्त होते हैं।",
              },
              {
                title: "रक्त चंदन का लेप",
                desc: "प्रतिदिन स्नान के पश्चात मस्तक पर रक्त चंदन (लाल चंदन) का तिलक लगाने से क्रोध शांत होता है।",
              },
              {
                title: "तांबे का धारण",
                desc: "दाहिने हाथ की कलाई में सिद्ध किया हुआ तांबे का कड़ा या छल्ला धारण करने से मंगल दोष घटता है।",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[24px] sm:rounded-[35px] p-6 sm:p-8 hover:bg-white/10 hover:-translate-y-2 duration-300"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-yellow-300 to-[#ff7b54] text-[#b83232] flex items-center justify-center shadow-xl animate-pulse">
                  <Sparkles className="w-7 h-7 sm:w-9 sm:h-9" />
                </div>

                <h3 className="text-white text-2xl sm:text-3xl font-bold mt-6 sm:mt-8">
                  {item.title}
                </h3>

                <p className="text-white/60 leading-7 sm:leading-8 text-base sm:text-lg mt-3 sm:mt-5">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* MANTRA */}
          <div className="mt-12 sm:mt-24 bg-gradient-to-r from-[#b83232] to-[#ff7b54] rounded-[24px] sm:rounded-[45px] p-6 sm:p-14 lg:p-16 shadow-2xl text-center relative overflow-hidden">
            <div className="absolute top-[-80px] right-[-80px] w-[250px] h-[250px] rounded-full bg-white/10"></div>

            <div className="absolute bottom-[-80px] left-[-80px] w-[250px] h-[250px] rounded-full bg-white/10"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center mx-auto">
                <Gem className="w-10 h-10 sm:w-14 sm:h-14 text-white" />
              </div>

              <h3 className="text-2xl sm:text-3xl lg:text-5xl font-black text-white mt-6 sm:mt-10">
                Mangal Beej Mantra
              </h3>

              <p className="text-yellow-200 text-xl sm:text-2xl lg:text-4xl font-bold mt-6 sm:mt-8 leading-relaxed">
                ॐ क्रां क्रीं क्रौं सः भौमाय नमः
              </p>

              <p className="text-white/85 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                प्रतिदिन संध्याकाल में पूर्व दिशा की ओर मुख करके इस महामंत्र का श्रद्धापूर्वक 108 बार जाप करने से जीवन की समस्त विपत्तियां और मांगलिक बाधाएं तुरंत समाप्त हो जाती हैं।
              </p>

              <a href="tel:+917042600873" className="w-full sm:w-auto inline-block">
                <button className="w-full sm:w-auto mt-6 sm:mt-10 cursor-pointer bg-white text-[#b83232] px-8 py-4 rounded-2xl font-semibold hover:scale-105 duration-300 shadow-2xl">
                  Book Consultation
                </button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-28 bg-[#fff7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white border border-[#f4d7d2] rounded-[24px] sm:rounded-[45px] shadow-2xl p-6 sm:p-12 lg:p-16 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#fff0eb] rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-[#ff7b54] to-[#b83232] text-white flex items-center justify-center mx-auto shadow-2xl">
                <HeartHandshake className="w-10 h-10 sm:w-14 sm:h-14" />
              </div>

              <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mt-6 sm:mt-10 leading-[1.3]">
                Personalized Mangal Consultation
              </h2>

              <p className="text-gray-600 text-base sm:text-lg leading-8 sm:leading-9 mt-6 sm:mt-8 max-w-3xl mx-auto">
                Are you worried about the heavy obstacles of Manglik Dosha or Mars Mahadasha? Receive a highly precise, spiritually deep reading from India's elite Vedic scholars. Access custom, verified remedies to unlock your absolute power today.
              </p>

              <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-8 sm:mt-12">
                <a href="tel:+917042600873" className="w-full sm:w-auto">
                  <button className="w-full bg-[#b83232] cursor-pointer hover:bg-[#992525] text-white px-8 py-4 rounded-2xl font-semibold duration-300 shadow-xl flex items-center justify-center gap-3">
                    <Phone className="w-5 h-5" />
                    Book Consultation
                  </button>
                </a>

                <a href="https://calendly.com/bajrangastroofficial/30min" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
                  <button className="w-full border cursor-pointer border-[#b83232] text-[#b83232] hover:bg-[#b83232] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 flex items-center justify-center gap-2">
                    Book Digital Call
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}