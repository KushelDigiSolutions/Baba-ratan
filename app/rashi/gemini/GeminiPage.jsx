"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiSun,
  FiArrowRight,
  FiMessageCircle,
} from "react-icons/fi";

const traits = [
  "बुद्धिमान",
  "वाक्पटु",
  "रचनात्मक",
  "ऊर्जावान",
  "जिज्ञासु",
  "मिलनसार",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Bright Yellow",
  },
  {
    title: "Lucky Number",
    value: "5",
  },
  {
    title: "Ruling Planet",
    value: "Mercury",
  },
  {
    title: "Lucky Day",
    value: "Wednesday",
  },
];

const faqData = [
  {
    question: "मिथुन राशि के लोगों का स्वभाव कैसा होता है?",
    answer:
      "मिथुन राशि के जातक अत्यंत बुद्धिमान, मिलनसार, वाक्पटु और जीवन में हमेशा कुछ नया सीखने के लिए खोजी प्रवृत्ति के होते हैं।",
  },
  {
    question: "मिथुन राशि का स्वामी ग्रह कौन सा है और इसका क्या प्रभाव है?",
    answer:
      "मिथुन राशि का स्वामी ग्रह बुध है, जो तीक्ष्ण बुद्धि, उत्कृष्ट वाणी, संचार कौशल, हास्य-विनोद और तार्किक क्षमता का कारक माना जाता है।",
  },
  {
    question: "मिथुन राशि के जातकों के लिए कौन सा करियर सबसे उत्तम माना गया है?",
    answer:
      "मीडिया, पत्रकारिता, लेखन, मार्केटिंग, जनसंपर्क (PR), शिक्षण, सॉफ्टवेयर तकनीक और व्यापार इनके लिए सर्वोत्तम माने गए हैं।",
  },
];

const GeminiPage = () => {
  return (
    <div className="w-full bg-[#fffdf8] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-16 md:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#e57661] via-[#e57661] to-[#f4d37a] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-yellow-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Gemini Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Gemini Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#fff6d8] mt-3">
              मिथुन राशि ♊
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Gemini, the dynamic air sign ruled by the planet of intellect and communication, Mercury. Symbolized by the twins, Gemini natives embody a brilliant dual nature—combining unmatched curiosity, rapid learning abilities, and an eloquent voice that connects minds.
            </p>

            <div className="flex flex-wrap gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
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
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[90px] sm:text-[140px] md:text-[180px] text-white drop-shadow-2xl">
                ♊
              </div>

              <div className="absolute top-14 right-10 text-white text-4xl">
                ✦
              </div>

              <div className="absolute bottom-14 left-12 text-white text-4xl">
                ☾
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Hindi */}
      <section className="py-10 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400&auto=format&fit=crop"
              alt="Gemini"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#f4e0ae]">
              <h3 className="text-[#e57661] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#5b3b07] mt-2">
                वायु 🌬️
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0">
            <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
              मिथुन राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#5b3b07] mt-4 leading-[1.3] sm:leading-tight">
              मिथुन राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              मिथुन राशि के जातक स्वभाव से अत्यधिक जिज्ञासु, बुद्धिमान और बहुमुखी प्रतिभा के धनी होते हैं। वे नई चीजों को जानने, सामाजिक गतिविधियों में भाग लेने और विविध विषयों पर गहन चर्चा करने के लिए हमेशा उत्सुक रहते हैं। उनकी तीव्र सोच और मिलनसार स्वभाव उन्हें दूसरों से बिल्कुल अलग और लोकप्रिय बनाता है।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              बुध ग्रह के प्रबल प्रभाव के कारण, मिथुन राशि के लोग उत्कृष्ट वक्ता और विचारक होते हैं। वे अत्यधिक ऊर्जावान, रचनात्मक और उन सभी क्षेत्रों में असाधारण रूप से सफल होते हैं जिनमें बौद्धिक कार्य, संचार, नेटवर्किंग और निरंतर सीखने की आवश्यकता होती है।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#fff6dd] border border-[#f2dfab] text-[#a06b11] font-medium text-sm sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCKY SECTION - English */}
      <section className="py-10 md:py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Gemini Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#5b3b07] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Gemini
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffaf0] border border-[#f3e3ba] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2"
            >
              <h3 className="text-[#e57661] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#5b3b07] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-10 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
            मिथुन राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#5b3b07] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का संपूर्ण विश्लेषण
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff5d9] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#5b3b07]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              मिथुन राशि के लोग प्रेम में बहुत रोमांटिक, हंसमुख और वैचारिक स्वतंत्रता पसंद करने वाले होते हैं। वे अपने पार्टनर के साथ गहरी बातचीत और मानसिक अनुकूलता को बहुत महत्व देते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff5d9] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#5b3b07]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              बुध ग्रह के प्रभाव से ये जातक मीडिया, विज्ञापन, लेखन, जनसंपर्क (PR), तकनीकी क्षेत्रों, शिक्षण और व्यावसायिक मध्यस्थता में असाधारण सफलता और प्रचुर धन प्राप्त करते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff5d9] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#5b3b07]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              अत्यधिक मानसिक सक्रियता और ओवरथिंकिंग के कारण इन्हें मानसिक अशांति या अनिद्रा (Insomnia) हो सकती. गहरी सांस लेने वाले व्यायाम, ध्यान और पर्याप्त नींद इनके स्वास्थ्य के लिए अत्यंत आवश्यक हैं।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi/English */}
      <section className="py-10 md:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#e57661] to-[#e57661]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/20 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiMessageCircle />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              मिथुन राशि और उत्कृष्ट संचार कला
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              मिथुन राशि के जातक स्वभाव से महान संचारक होते हैं जो लोगों के साथ बहुत आसानी से संवाद स्थापित कर लेते हैं। उनकी अद्भुत रचनात्मकता और त्वरित वाक्पटुता उन्हें अपने विचारों को बेहद स्पष्ट और प्रभावशाली तरीके से प्रस्तुत करने में सक्षम बनाती है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#e57661] font-semibold hover:scale-105 transition text-center"
            >
              Explore Compatibility
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1400&auto=format&fit=crop"
              alt="Gemini Communication"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/20 text-sm sm:text-base">
              Mercury Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-16 md:py-20 px-4 md:px-10 lg:px-20 bg-[#fffdf8]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#fff4d3] flex items-center justify-center text-[#e57661] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#e57661] mt-8 leading-[1.3] sm:leading-tight">
            Today's Gemini Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today brings highly expressive and intellect-boosting lunar energies for Gemini natives. Mercury's auspicious alignment with your sign stimulates your creativity house, driving you to initiate successful dialogues and secure new lucrative deals. Trust your quick wit, remain adaptable, and avoid unnecessary mental clutter.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#e57661] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-10 md:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#5b3b07] mt-4 leading-[1.3] sm:leading-tight">
            मिथुन राशि से जुड़े कुछ महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#f1e2b7] p-5 sm:p-8"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#5b3b07]">
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
        <div className="bg-[#fff7df] border border-[#f2dfab] rounded-[30px] sm:rounded-[45px] p-6 sm:p-10 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[100px] sm:text-[180px] text-[#e57661]">
              ♊
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#e57661] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#5b3b07] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Gemini Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Unlock deep insights into your astrological roadmap. Connect with our premier Vedic experts today for comprehensive Kundli, marriage compatibility, and transit solutions.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#e57661] text-white font-semibold hover:bg-[#cf5f49] transition inline-block text-center"
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

export default GeminiPage;