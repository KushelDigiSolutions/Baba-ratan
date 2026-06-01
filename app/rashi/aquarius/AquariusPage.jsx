"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiZap,
} from "react-icons/fi";

const traits = [
  "बुद्धिमान",
  "नवीन",
  "मानवतावादी",
  "स्वतंत्र",
  "तार्किक",
  "परोपकारी",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Electric Blue & Grey",
  },
  {
    title: "Lucky Number",
    value: "8",
  },
  {
    title: "Ruling Planet",
    value: "Saturn & Uranus",
  },
  {
    title: "Lucky Day",
    value: "Saturday",
  },
];

const faqData = [
  {
    question: "कुंभ राशि के जातकों का स्वभाव कैसा होता है?",
    answer:
      "कुंभ राशि के जातक स्वभाव से अत्यंत बुद्धिमान, नवीन विचारों से युक्त और मानवतावादी दृष्टिकोण रखने वाले होते हैं। वे पारंपरिक रूढ़ियों व सीमाओं से परे जाकर सोचना और समाज में सकारात्मक सुधार लाना बेहद पसंद करते हैं।",
  },
  {
    question: "कुंभ राशि का स्वामी ग्रह कौन सा है और इसका क्या प्रभाव है?",
    answer:
      "शनि देव के प्रभाव से शासित होने के कारण, कुंभ राशि के लोगों में एक गहरा दार्शनिक चिंतन और गजब की तार्किक शक्ति होती है। वे अपनी स्वतंत्रता से कभी भी समझौता नहीं करते और हमेशा भविष्योन्मुखी (Futuristic) योजनाओं पर काम करते हैं।",
  },
  {
    question: "कुंभ राशि के जातकों के लिए कौन सा करियर सर्वोत्तम माना गया है?",
    answer:
      "अपनी तीक्ष्ण आविष्कारशील बुद्धि के बल पर ये जातक आईटी व सॉफ्टवेयर, वैज्ञानिक अनुसंधान, अंतरिक्ष विज्ञान, विमानन (Aviation), समाज सुधारक संगठनों, मीडिया और लेखन क्षेत्रों में सर्वोच्च मुकाम पाते हैं।",
  },
];

const AquariusPage = () => {
  return (
    <div className="w-full bg-[#f7fcff] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#0e7490] via-[#0891b2] to-[#22d3ee] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-cyan-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Aquarius Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Aquarius Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#cffafe] mt-3">
              कुंभ राशि  Aquarius
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Aquarius, the innovative and humanitarian Air sign ruled by Saturn and Uranus. Symbolized by the water bearer, Aquarius natives possess a brilliant intellect, out-of-the-box thinking, unshakeable freedom, and a passionate soul dedicated to positive global transformation.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0891b2] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#0891b2] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1780054791/Aquarius_image__hztu1r.png" alt="Aquarius Kumbh Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Aquarius Rashi Personality Traits India — Vishal Verma"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-cyan-100">
              <h3 className="text-[#0f4c81] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#0b3559] mt-2">
                वायु 🌬️
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#0f4c81] font-semibold uppercase tracking-wider text-sm sm:text-base">
              कुंभ राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0b3559] mt-4 leading-[1.3] sm:leading-tight">
              कुंभ राशि का विशिष्ट व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              कुंभ राशि के जातक स्वभाव से अत्यंत बुद्धिमान, नवीन विचारों से युक्त और मानवतावादी दृष्टिकोण रखने वाले होते हैं। वे पारंपरिक रूढ़ियों व सीमाओं से परे जाकर सोचना और समाज में सकारात्मक सुधार लाना बेहद पसंद करते हैं।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              शनि देव के प्रभाव से शासित होने के कारण, कुंभ राशि के लोगों में एक गहरा दार्शनिक चिंतन और गजब की तार्किक शक्ति होती है। वे अपनी स्वतंत्रता से कभी भी समझौता नहीं करते और हमेशा भविष्योन्मुखी (Futuristic) योजनाओं पर काम करते हैं।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#eef9ff] border border-cyan-100 text-[#0f4c81] font-medium text-sm sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCKY SECTION - English */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0f4c81] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Aquarius Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0b3559] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Aquarius
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8fdff] border border-cyan-100 rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#0f4c81] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#0b3559] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0f4c81] font-semibold uppercase tracking-wider text-sm sm:text-base">
            कुंभ राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0b3559] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का भविष्योन्मुखी विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0b3559]">
              प्रेम और वैवाहिक संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              कुंभ राशि के जातक प्रेम संबंधों में अत्यंत वफादार, सहयोगात्मक और मानसिक अनुकूलता को प्राथमिकता देने वाले साथी होते हैं। वे रिश्ते में एक-दूसरे के व्यक्तिगत स्थान (Space) और स्वतंत्रता का पूरा सम्मान करते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0b3559]">
              करियर और आर्थिक संपन्नता
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              अपनी तीक्ष्ण आविष्कारशील बुद्धि के बल पर ये जातक आईटी व सॉफ्टवेयर, वैज्ञानिक अनुसंधान, अंतरिक्ष विज्ञान, विमानन (Aviation), समाज सुधारक संगठनों, मीडिया और लेखन क्षेत्रों में सर्वोच्च मुकाम पाते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#0b3559]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              मानसिक रूप से निरंतर सक्रिय रहने के कारण इन्हें अनिद्रा, तंत्रिका तंत्र (Nervous System) की कमजोरी और टखनों (Ankles) में रक्त संचार संबंधी विकारों से बचना चाहिए। पर्याप्त ध्यान और गहरी नींद इनके लिए संजीवनी है।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#0f4c81] to-[#38bdf8]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/10 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiZap />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              कुंभ राशि और सामाजिक क्रांति
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              कुंभ राशि के लोग अपनी लीक से हटकर सोचने (Out-of-the-box thinking) की क्षमता के लिए जाने जाते हैं। उनका उदार हृदय और विश्व कल्याण की भावना उन्हें समाज में एक महान समाज सुधारक और पथ-प्रदर्शक के रूप में स्थापित करती है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f4c81] font-semibold hover:scale-105 transition text-center"
            >
              Explore Compatibility
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Aquarius Rashi Health Predictions India — Bajrang Astro"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/10 text-sm sm:text-base">
              Uranus Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#f7fcff]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#eef9ff] flex items-center justify-center text-[#0f4c81] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0b3559] mt-8 leading-[1.3] sm:leading-tight">
            Today's Aquarius Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today the expansive air trines activate your genius house, Aquarius. With Saturn offering structural backing in your identity sector, it is a magnificent time to pitch startup paradigms, code revolutionary systems, or organize humanitarian networks. Stand tall in your unique individuality.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0f4c81] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0f4c81] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#0b3559] mt-4 leading-[1.3] sm:leading-tight">
            कुंभ राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-cyan-100 p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#0b3559]">
                {item.question}
              </h3>

              <p className="text-gray-600 leading-7 mt-4 sm:mt-5 text-base sm:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - English */}
      <section className="pt-4 pb-10 sm:pb-16 px-4 md:px-10 lg:px-20">
        <div className="bg-[#eef9ff] border border-cyan-100 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[100px] sm:text-[180px] text-[#0f4c81]">
              ♒
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#0f4c81] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#0b3559] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Aquarius Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Unleash your unique genius and design your futuristic path to abundance. Connect with our elite Vedic masters today for customized Kundli and remedy plans.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0f4c81] text-white font-semibold hover:bg-[#0b3559] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#0f4c81] text-[#0f4c81] font-semibold hover:bg-[#0f4c81] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AquariusPage;