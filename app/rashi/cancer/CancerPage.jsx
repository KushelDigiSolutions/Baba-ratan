"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiMoon,
  FiArrowRight,
  FiHome,
} from "react-icons/fi";

const traits = [
  "भावुक",
  "देखभाल करने वाला",
  "वफादार",
  "सुरक्षात्मक",
  "अंतर्ज्ञानी",
  "संवेदनशील",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "White & Silver",
  },
  {
    title: "Lucky Number",
    value: "2",
  },
  {
    title: "Ruling Planet",
    value: "Moon",
  },
  {
    title: "Lucky Day",
    value: "Monday",
  },
];

const faqData = [
  {
    question: "कर्क राशि के लोगों का मुख्य स्वभाव कैसा होता है?",
    answer:
      "कर्क राशि के जातक अत्यंत संवेदनशील, परोपकारी, वफादार और अपने परिवार व प्रियजनों के प्रति गहराई से समर्पित होते हैं।",
  },
  {
    question: "कर्क राशि का स्वामी ग्रह कौन सा है और इसका क्या महत्व है?",
    answer:
      "कर्क राशि का स्वामी ग्रह चंद्रमा है, जो हमारे मन, भावनाओं, अंतर्ज्ञान, माता और आंतरिक सुख-शांति का प्रतिनिधित्व करता है।",
  },
  {
    question: "कर्क राशि के जातकों के लिए कौन सा करियर क्षेत्र सबसे बेहतर है?",
    answer:
      "चिकित्सा, नर्सिंग, मनोविज्ञान व परामर्श, शिक्षा, समाज सेवा, आतिथ्य उद्योग (Hospitality) और कला-डिजाइनिंग से जुड़े क्षेत्र इनके लिए सर्वोत्तम होते हैं।",
  },
];

const CancerPage = () => {
  return (
    <div className="w-full bg-[#fbfcff] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#5a6fcf] via-[#7487de] to-[#9aaaf0] overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-blue-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Cancer Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Cancer Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#e8edff] mt-3">
              कर्क राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Cancer, the deeply intuitive water sign ruled by the luminous Moon. Symbolized by the crab, Cancer natives possess a profoundly caring soul, powerful intuitive instincts, and a protective aura that guards their loved ones and fosters deep emotional bonds.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#5a6fcf] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#5a6fcf] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1780053754/Cancer_image_pt5jx3.png" alt="Cancer Kark Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
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
              src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1400&auto=format&fit=crop"
              alt="Cancer Rashi Personality Traits India — Vishal Verma"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#dce4ff]">
              <h3 className="text-[#5a6fcf] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#2f3c7c] mt-2">
                जल 🌊
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider text-sm sm:text-base">
              कर्क राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#2f3c7c] mt-4 leading-[1.3] sm:leading-tight">
              कर्क राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              कर्क राशि के जातक अत्यधिक संवेदनशील, सहानुभूति रखने वाले और गहरे अंतर्ज्ञान (Intuition) से संपन्न होते हैं। वे अपने प्रियजनों से बेहद लगाव रखते हैं और रिश्तों में भावनात्मक सुरक्षा, गहरे आपसी जुड़ाव व पारिवारिक मूल्यों को सर्वोच्च स्थान देते हैं।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              चंद्रमा से गहराई से प्रभावित होने के कारण, कर्क राशि के लोग अत्यंत स्नेही और दूसरों की परवाह करने वाले होते हैं। उनकी अद्भुत भावनात्मक बुद्धिमत्ता (Emotional Intelligence) उन्हें दूसरों की मनोस्थिति को बिना कहे समझने और उनका सहारा बनने में मदद करती है।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#eef2ff] border border-[#dce4ff] text-[#4d61bf] font-medium text-sm sm:text-base"
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
          <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Cancer Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#2f3c7c] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Cancer
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8faff] border border-[#dce4ff] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#5a6fcf] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#2f3c7c] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider text-sm sm:text-base">
            कर्क राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#2f3c7c] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का संपूर्ण विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#2f3c7c]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              कर्क राशि के जातक प्रेम संबंधों में अत्यधिक सुरक्षात्मक, वफादार और संवेदनशील साथी होते हैं। वे अपने पार्टनर से गहरी भावनात्मक आत्मीयता और सम्मान की आशा रखते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#2f3c7c]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              ये जातक उन करियर में सर्वश्रेष्ठ प्रदर्शन करते हैं जहां स्नेह और सहानुभूति की आवश्यकता होती है, जैसे चिकित्सा, परामर्श, शिक्षण, आतिथ्य सत्कार और रचनात्मक उद्योग।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#2f3c7c]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              भावनात्मक रूप से अति-संवेदनशील होने के कारण इन्हें पेट के विकार, चिंता और मूड स्विंग्स (Mood Swings) से बचना चाहिए। नियमित ध्यान और पर्याप्त जल का सेवन इनके लिए हितकारी है।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#5a6fcf] to-[#92a3ef]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/20 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiHome />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              कर्क राशि और भावनात्मक सुरक्षा
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              कर्क राशि के जातक पारिवारिक सुख, गृह शांति और स्थाई संबंधों को सर्वाधिक महत्व देते हैं। उनका यह सुरक्षात्मक और स्नेही स्वभाव उन्हें समाज में अत्यधिक विश्वसनीय, स्नेही और आदरणीय व्यक्तित्व प्रदान करता है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#5a6fcf] font-semibold hover:scale-105 transition text-center"
            >
              Explore Compatibility
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1400&auto=format&fit=crop"
              alt="Kark Rashi Finance Predictions India — Vishal Verma"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/20 text-sm sm:text-base">
              Moon Energy 🌙
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#fbfcff]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#eef2ff] flex items-center justify-center text-[#5a6fcf] text-4xl sm:text-5xl shadow-xl">
            <FiMoon />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#2f3c7c] mt-8 leading-[1.3] sm:leading-tight">
            Today's Cancer Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today the soothing lunar transits bring exceptional emotional clarity and restorative energy for Cancer natives. The Moon aligns harmoniously with your intuitive sector, highlighting home affairs and personal relationships. Trust your internal instincts, embrace self-care, and seek peaceful environments.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#5a6fcf] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#5a6fcf] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#2f3c7c] mt-4 leading-[1.3] sm:leading-tight">
            कर्क राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#dce4ff] p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#2f3c7c]">
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
        <div className="bg-[#eef2ff] border border-[#dce4ff] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[100px] sm:text-[180px] text-[#5a6fcf]">
              ♋
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#5a6fcf] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#2f3c7c] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Cancer Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Seek absolute emotional clarity and cosmic alignment. Connect with our elite Vedic specialists today for comprehensive Kundli reviews and astrological remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#5a6fcf] text-white font-semibold hover:bg-[#4358b6] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#5a6fcf] text-[#5a6fcf] font-semibold hover:bg-[#5a6fcf] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CancerPage;