"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiFeather,
} from "react-icons/fi";

const traits = [
  "संवेदनशील",
  "दयालु",
  "कल्पनाशील",
  "आध्यात्मिक",
  "कलात्मक",
  "निस्वार्थी",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Yellow & Sea Green",
  },
  {
    title: "Lucky Number",
    value: "3",
  },
  {
    title: "Ruling Planet",
    value: "Jupiter & Neptune",
  },
  {
    title: "Lucky Day",
    value: "Thursday",
  },
];

const faqData = [
  {
    question: "मीन राशि के जातकों का स्वभाव कैसा होता है?",
    answer:
      "मीन राशि के जातक स्वभाव से बेहद संवेदनशील, दयालु, कल्पनाशील और आध्यात्मिक होते हैं। वे दूसरों के सुख-दुख को गहराई से महसूस करते हैं और निस्वार्थ भाव से सबकी सेवा व सहायता करने के लिए हमेशा तत्पर रहते हैं।",
  },
  {
    question: "मीन राशि का स्वामी ग्रह कौन सा है और इसका क्या महत्व है?",
    answer:
      "देवगुरु बृहस्पति और नेपच्यून के प्रबल प्रभाव से उनमें गजब की रचनात्मकता, संगीत व कला के प्रति अनन्य प्रेम और असाधारण अंतर्ज्ञान (Intuition) पाया जाता है। वे भौतिक संसार से ऊपर उठकर आत्मिक और आध्यात्मिक शांति की तलाश में रहते हैं।",
  },
  {
    question: "मीन राशि के जातकों के लिए कौन सा करियर क्षेत्र सबसे उपयुक्त माना गया है?",
    answer:
      "संगीत, कला, अभिनय, चिकित्सा, योग व हीलिंग (Alternative Healing), काउंसलिंग, संपादन व स्वतंत्र लेखन और अध्यात्म के क्षेत्रों में ये जातक असाधारण सफलता व ख्याति प्राप्त करते हैं।",
  },
];

const PiscesPage = () => {
  return (
    <div className="w-full bg-[#f8fdff] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#0d9488] via-[#0f766e] to-[#2dd4bf] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-teal-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Pisces Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Pisces Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ccfbf1] mt-3">
              मीन राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Pisces, the mystical and deeply compassionate Water sign ruled by benevolent Jupiter and spiritual Neptune. Symbolized by two fishes swimming in opposite directions, Pisces natives possess a beautiful soul of divine empathy, artistic genius, powerful intuition, and a heart committed to healing the world.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#0f766e] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#0f766e] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1780054887/Pisces_image__fkbuc7.png" alt="Pisces Meen Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
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
              alt="Pisces Rashi Personality Traits India — Vishal Verma"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-teal-100">
              <h3 className="text-[#0f766e] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#115e59] mt-2">
                जल 🌊
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#0f766e] font-semibold uppercase tracking-wider text-sm sm:text-base">
              मीन राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#115e59] mt-4 leading-[1.3] sm:leading-tight">
              मीन राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              मीन राशि के जातक स्वभाव से बेहद संवेदनशील, दयालु, कल्पनाशील और आध्यात्मिक होते हैं। वे दूसरों के सुख-दुख को गहराई से महसूस करते हैं और निस्वार्थ भाव से सबकी सेवा व सहायता करने के लिए हमेशा तत्पर रहते हैं।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              देवगुरु बृहस्पति और नेपच्यून के प्रबल प्रभाव से उनमें गजब की रचनात्मकता, संगीत व कला के प्रति अनन्य प्रेम और असाधारण अंतर्ज्ञान (Intuition) पाया जाता है। वे भौतिक संसार से ऊपर उठकर आत्मिक और आध्यात्मिक शांति की तलाश में रहते हैं।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#effffd] border border-teal-100 text-[#0f766e] font-medium text-sm sm:text-base"
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
          <span className="text-[#0f766e] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Pisces Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#115e59] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Pisces
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8fffe] border border-teal-100 rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#0f766e] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#115e59] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0f766e] font-semibold uppercase tracking-wider text-sm sm:text-base">
            मीन राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#115e59] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का आध्यात्मिक विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#effffd] flex items-center justify-center text-[#0f766e] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#115e59]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              मीन राशि के लोग प्रेम में सबसे अधिक समर्पित, भावुक, निस्वार्थ और रोमांटिक साथी साबित होते हैं। वे अपने रिश्तों में गहरी आत्मिक आत्मीयता, संपूर्ण वफादारी और अटूट विश्वास चाहते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#effffd] flex items-center justify-center text-[#0f766e] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#115e59]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              ये जातक संगीत, कला, अभिनय, चिकित्सा, योग व हीलिंग (Alternative Healing), काउंसलिंग, संपादन व स्वतंत्र लेखन और अध्यात्म के क्षेत्रों में असाधारण सफलता व ख्याति प्राप्त करते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#effffd] flex items-center justify-center text-[#0f766e] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#115e59]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              अत्यधिक संवेदनशील स्वभाव के कारण इन्हें मानसिक तनाव, चिंता, तलवों व पैरों से जुड़े दर्द और शरीर में तरल पदार्थों के असंतुलन से बचना चाहिए। योग, ध्यान और संगीत इनके लिए सर्वोत्तम औषधि हैं।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#0f766e] to-[#14b8a6]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/10 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiFeather />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              मीन राशि और आत्मिक ऊर्जा
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              मीन राशि के लोग अपनी परम शांत आभा, दूसरों को तुरंत क्षमा करने की अनूठी क्षमता और परम संतोष के लिए जाने जाते हैं। उनकी यह आध्यात्मिक गहराई और सहानुभूतिपूर्ण दृष्टिकोण उन्हें समाज में अत्यंत आदरणीय बनाता है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#0f766e] font-semibold hover:scale-105 transition text-center"
            >
              Explore Compatibility
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Pisces Rashi Health Predictions India — Bajrang Astro"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/10 text-sm sm:text-base">
              Neptune Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#f8fdff]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#effffd] flex items-center justify-center text-[#0f766e] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#115e59] mt-8 leading-[1.3] sm:leading-tight">
            Today's Pisces Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today the celestial waters align perfectly to heighten your intuitive perception and spiritual receptivity, Pisces. Jupiter's golden aura shines upon your career and dreams houses, inspiring you to channel your creative imagination into highly successful projects. Meditate, trust the cosmic flow, and manifest your desires.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#0f766e] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#0f766e] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#115e59] mt-4 leading-[1.3] sm:leading-tight">
            मीन राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-teal-100 p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#115e59]">
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
        <div className="bg-[#effffd] border border-teal-100 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[100px] sm:text-[180px] text-[#0f766e]">
              ♓
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#0f766e] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#115e59] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Pisces Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Dive deep into your spiritual blueprint and discover your divine career and love path. Connect with our elite Vedic specialists today for customized Janam Kundli analysis.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0f766e] text-white font-semibold hover:bg-[#115e59] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#0f766e] text-[#0f766e] font-semibold hover:bg-[#0f766e] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PiscesPage;