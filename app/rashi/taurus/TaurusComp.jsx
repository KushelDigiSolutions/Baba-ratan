"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiSun,
  FiArrowRight,
} from "react-icons/fi";

const traits = [
  "वफादार",
  "भरोसेमंद",
  "धैर्यवान",
  "व्यावहारिक",
  "ऐश्वर्य प्रेमी",
  "दृढ़ निश्चयी",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Green & Pink",
  },
  {
    title: "Lucky Number",
    value: "6",
  },
  {
    title: "Ruling Planet",
    value: "Venus",
  },
  {
    title: "Lucky Day",
    value: "Friday",
  },
];

const faqData = [
  {
    question: "वृषभ राशि के जातक किस प्रकार के व्यक्तित्व के होते हैं?",
    answer:
      "वृषभ राशि के जातक अत्यंत शांत, वफादार, व्यावहारिक, परिश्रमी और भावनात्मक रूप से बहुत मजबूत माने जाते हैं।",
  },
  {
    question: "वृषभ राशि का स्वामी ग्रह कौन सा है और इसका क्या महत्व है?",
    answer:
      "वृषभ राशि का स्वामी ग्रह शुक्र है, जो सुख-समृद्धि, कला, सौंदर्य, प्रेम और भौतिक ऐश्वर्य का प्रतिनिधित्व करता है।",
  },
  {
    question: "वृषभ राशि के जातकों के लिए कौन सा करियर क्षेत्र सर्वोत्तम है?",
    answer:
      "वित्त, बैंकिंग, रियल एस्टेट, आभूषण व्यवसाय, कला, फैशन डिजाइनिंग और रचनात्मक उद्योग इनके लिए अत्यधिक अनुकूल होते हैं।",
  },
];

const TaurusPage = () => {
  return (
    <div className="w-full bg-[#fffaf7] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#e57661] via-[#e57661] to-[#e57661] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-full h-full opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-200 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 backdrop-blur-md text-sm font-medium mb-6 border border-white/20">
              Taurus Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Taurus Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ffe8d7] mt-3">
              वृषभ राशि ♉
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Taurus, the steadfast earth sign ruled by the planet of beauty and opulence, Venus. Represented by the bull, Taurus natives exhibit unshakeable loyalty, patient determination, and an innate appreciation for luxury, art, and the finer comforts of life.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#e57661] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#e57661] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:30s]" />

              <div className="text-[90px] sm:text-[140px] md:text-[180px] text-white drop-shadow-2xl">
                ♉
              </div>

              <div className="absolute top-12 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-10 text-white text-3xl">
                ☾
              </div>
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
              src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1400&auto=format&fit=crop"
              alt="Taurus"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#f0d7cc]">
              <h3 className="text-[#e57661] font-semibold">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#4d2b20] mt-2">
                पृथ्वी 🌍
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
              वृषभ राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4d2b20] mt-4 leading-[1.3] sm:leading-tight">
              वृषभ राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              वृषभ राशि के जातक स्वभाव से बेहद व्यावहारिक, भरोसेमंद और भावनात्मक रूप से स्थिर होते हैं। वे अपने जीवन में शांति, सुरक्षा और स्थिरता को सर्वोच्च प्राथमिकता देते हैं और व्यर्थ के विवादों से हमेशा दूर रहते हैं। उनकी मजबूत इच्छाशक्ति उन्हें अपने सबसे कठिन लक्ष्यों को हासिल करने में मदद करती है।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              शुक्र ग्रह से प्रभावित होने के कारण, वृषभ राशि के लोग कला, सौंदर्य, भोजन, प्रेम और भौतिक सुख-सुविधाओं की तरफ स्वाभाविक रूप से आकर्षित होते हैं। वे अपने और अपने परिवार के लिए एक समृद्ध व खुशहाल जीवन का निर्माण करना पसंद करते हैं।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#fff1ea] border border-[#f1d4c6] text-[#a45c3f] font-medium text-sm sm:text-base"
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
          <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Taurus Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4d2b20] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Taurus
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff8f4] border border-[#f0d7cc] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#e57661] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#4d2b20] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
            वृषभ राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4d2b20] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का संपूर्ण विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#4d2b20]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              वृषभ राशि के लोग प्रेम में अत्यधिक समर्पित, वफादार और स्थायी साथी होते हैं। वे जल्दबाजी में कोई रिश्ता नहीं बनाते, लेकिन एक बार जुड़ने के बाद अंत तक साथ निभाते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#4d2b20]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              ये जातक उत्कृष्ट वित्तीय रणनीतिकार होते हैं। वे रियल एस्टेट, banking, व्यापार, आभूषण निर्माण और लक्जरी वस्तुओं के क्षेत्र में अद्वितीय सफलता और स्थिर आर्थिक लाभ प्राप्त करते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff1ea] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#4d2b20]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              शारीरिक रूप से बलिष्ठ होने पर भी इन्हें आलस्य, गले के संक्रमण और तनाव में अत्यधिक भोजन करने की आदत से बचना चाहिए। नियमित व्यायाम और योग इनके स्वास्थ्य को दुरुस्त रखता है।
            </p>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#e57661] to-[#e57661]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="w-24 h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-4xl sm:text-5xl mb-4 sm:mb-6 backdrop-blur-md">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
            Today's Taurus Horoscope
          </h2>

          <p className="mt-4 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/90">
            Today brings highly stabilizing earth energies for Taurus natives. The transition of your ruling planet Venus blesses your wealth and family houses, unlocking unexpected financial gains and peaceful home vibes. Maintain your deliberate pace, trust your logical planning, and avoid rushing into impulsive commitments.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#e57661] font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4d2b20] mt-4 leading-[1.3] sm:leading-tight">
            वृषभ राशि से जुड़े कुछ महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#f1d7ca] p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#4d2b20]">
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
        <div className="bg-[#fff1ea] border border-[#f0d7cc] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[100px] sm:text-[180px] text-[#e57661]">
              ♉
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#e57661] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4d2b20] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Taurus Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Unveil what the planetary transits mean for your career, relationship stability, and financial future. Consult our expert Vedic astrologers today.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#e57661] text-white font-semibold hover:bg-[#c9634e] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#e57661] text-[#e57661] font-semibold hover:bg-[#e57661] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TaurusPage;