"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiUsers,
} from "react-icons/fi";

const traits = [
  "न्यायप्रिय",
  "संतुलित",
  "आकर्षक",
  "मिलनसार",
  "शांतिप्रिय",
  "कूटनीतिक",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "White & Royal Blue",
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
    question: "तुला राशि के लोगों का मुख्य स्वभाव कैसा होता है?",
    answer:
      "तुला राशि के जातक स्वभाव से बेहद आकर्षक, मिलनसार, न्यायप्रिय और शांति पसंद होते हैं। वे अपने जीवन में संतुलन (Balance) और सद्भाव बनाए रखने के लिए पूर्णतः प्रतिबद्ध रहते हैं। वे विवादों से दूर रहकर शांतिपूर्ण वातावरण का निर्माण करना पसंद करते हैं।",
  },
  {
    question: "तुला राशि का स्वामी ग्रह कौन सा है और इसका क्या प्रभाव है?",
    answer:
      "शुक्र ग्रह से गहराई से प्रभावित होने के कारण, तुला राशि के लोगों में कला, संगीत, सौंदर्य और भौतिक सुख-सुविधाओं के प्रति स्वाभाविक लगाव होता है। उनकी निष्पक्षता और संतुलित निर्णय क्षमता उन्हें जीवन के हर क्षेत्र में एक लोकप्रिय और आदरणीय व्यक्तित्व प्रदान करती है।",
  },
  {
    question: "तुला राशि के जातकों के लिए कौन सा करियर क्षेत्र सबसे बेहतर है?",
    answer:
      "ये जातक कलात्मक और न्यायप्रिय कार्यों में श्रेष्ठ होते हैं। फैशन व इंटीरियर डिजाइनिंग, वकालत, जनसंपर्क (PR), मीडिया, सौंदर्य प्रसाधन व्यवसाय और लक्जरी उद्योग में ये शीर्ष स्थान पाते हैं।",
  },
];

const LibraPage = () => {
  return (
    <div className="w-full bg-[#fffcfd] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#ec4899] via-[#f43f5e] to-[#fda4af] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#fff1f2] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Libra Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Libra Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ffeef2] mt-3">
              तुला राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Libra, the elegant and harmonious Air sign ruled by the planet of beauty and love, Venus. Symbolized by the scales, Libra natives embody divine balance, profound diplomacy, refined taste, and a passionate heart committed to absolute justice and relational peace.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#f43f5e] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#f43f5e] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780579019/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_libra_zodiac_rw6gjf.png" alt="Libra Tula Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
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
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop"
              alt="Tula Rashi Career Predictions India — Bajrang Astro"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#f5d5e6]">
              <h3 className="text-[#e57661] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#6b1f49] mt-2">
                वायु 🌬️
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
              तुला राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#6b1f49] mt-4 leading-[1.3] sm:leading-tight">
              तुला राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              तुला राशि के जातक स्वभाव से बेहद आकर्षक, मिलनसार, न्यायप्रिय और शांति पसंद होते हैं। वे अपने जीवन में संतुलन (Balance) और सद्भाव बनाए रखने के लिए पूर्णतः प्रतिबद्ध रहते हैं। वे विवादों से दूर रहकर शांतिपूर्ण वातावरण का निर्माण करना पसंद करते हैं।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              शुक्र ग्रह से गहराई से प्रभावित होने के कारण, तुला राशि के लोगों में कला, संगीत, सौंदर्य और भौतिक सुख-सुविधाओं के प्रति स्वाभाविक लगाव होता है। उनकी निष्पक्षता और संतुलित निर्णय क्षमता उन्हें जीवन के हर क्षेत्र में एक लोकप्रिय और आदरणीय व्यक्तित्व प्रदान करती है।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#fff0f7] border border-[#f5d5e6] text-[#b1447f] font-medium text-sm sm:text-base"
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
            Libra Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#6b1f49] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Libra
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff8fb] border border-[#f5d5e6] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#e57661] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#6b1f49] mt-3 sm:mt-5">
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
            तुला राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#6b1f49] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का संपूर्ण विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff0f7] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#6b1f49]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              तुला राशि के लोग प्रेम में सबसे प्यारे, रोमांटिक और वफादार साथी साबित होते हैं। वे अपने संबंधों में समानता, मधुरता, शांति और पार्टनर के साथ संपूर्ण भावनात्मक तालमेल पसंद करते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff0f7] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#6b1f49]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              ये जातक कलात्मक और न्यायप्रिय कार्यों में श्रेष्ठ होते हैं। फैशन व इंटीरियर डिजाइनिंग, वकालत, जनसंपर्क (PR), मीडिया, सौंदर्य प्रसाधन व्यवसाय और लक्जरी उद्योग में ये शीर्ष स्थान पाते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff0f7] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#6b1f49]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              शारीरिक रूप से स्वस्थ होने पर भी इन्हें गुर्दे (Kidneys), पीठ के निचले हिस्से में दर्द और अत्यधिक मानसिक असमंजस या तनाव से बचना चाहिए। नियमित ध्यान और पर्याप्त जल का सेवन इनके लिए उत्तम है।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#d16ba5] to-[#f3a7cf]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/20 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiUsers />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              तुला राशि और संतुलन की शक्ति
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              तुला राशि के जातक किसी भी विपरीत परिस्थिति में दोनों पक्षों के बीच न्यायपूर्ण और शांतिपूर्ण समझौता कराने में माहिर होते हैं। उनकी यह अद्भुत कूटनीतिक (Diplomatic) क्षमता, निष्पक्षता और दयालुता उन्हें समाज में अत्यंत सम्मानित बनाती है।
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
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop"
              alt="Libra Rashi Health Predictions India — Bajrang Astro"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/20 text-sm sm:text-base">
              Venus Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#fffafb]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#fff0f7] flex items-center justify-center text-[#e57661] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#6b1f49] mt-8 leading-[1.3] sm:leading-tight">
            Today's Libra Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today brings beautiful Venusian alignments that enrich your love and social sectors, Libra. Harmonious lunar transits foster deeply cooperative conversations, solving older disputes effortlessly. Trust your elegant diplomacy, embrace artistic pursuits, and balance your financial investments.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#e57661] text-white font-semibold hover:scale-105 transition">
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

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#6b1f49] mt-4 leading-[1.3] sm:leading-tight">
            तुला राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#f5d5e6] p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#6b1f49]">
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
        <div className="bg-[#fff0f7] border border-[#f5d5e6] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#e57661] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#6b1f49] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Libra Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Attract complete beauty, love, and financial harmony into your cosmic path. Connect with our elite Vedic astrologers today for personalized compatibility and transit analysis.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#e57661] text-white font-semibold hover:bg-[#c35b46] transition inline-block text-center"
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

export default LibraPage;