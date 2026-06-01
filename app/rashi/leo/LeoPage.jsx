"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiSun,
  FiArrowRight,
  FiAward,
} from "react-icons/fi";

const traits = [
  "आत्मविश्वासी",
  "निडर",
  "रचनात्मक",
  "नेतृत्वकर्ता",
  "ऊर्जावान",
  "उदार हृदय",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Gold & Orange",
  },
  {
    title: "Lucky Number",
    value: "1",
  },
  {
    title: "Ruling Planet",
    value: "Sun",
  },
  {
    title: "Lucky Day",
    value: "Sunday",
  },
];

const faqData = [
  {
    question: "सिंह राशि के जातकों का मुख्य स्वभाव कैसा होता है?",
    answer:
      "सिंह राशि के जातक स्वभाव से अत्यंत आत्मविश्वासी, साहसी, स्वाभिमानी, महत्वाकांक्षी और दूसरों की मदद करने वाले उदार हृदय व्यक्ति होते हैं।",
  },
  {
    question: "सिंह राशि का स्वामी ग्रह कौन सा है और इसका क्या प्रभाव है?",
    answer:
      "सिंह राशि का स्वामी ग्रह स्वयं सूर्य देव हैं, जो तेज, आरोग्य, नेतृत्व क्षमता, आत्मविश्वास, पिता और मान-सम्मान के प्रमुख कारक माने जाते हैं।",
  },
  {
    question: "सिंह राशि के लोगों के लिए कौन सा करियर सबसे उत्तम माना गया है?",
    answer:
      "उच्च सरकारी व प्रशासनिक सेवाएं, राजनीति, फिल्म व अभिनय उद्योग, स्वतंत्र व्यापार, और नेतृत्व वाली प्रबंधन भूमिकाएं इनके लिए सर्वोत्तम हैं।",
  },
];

const LeoPage = () => {
  return (
    <div className="w-full bg-[#fffaf5] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#d97706] via-[#f59e0b] to-[#fbbf24] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-yellow-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Leo Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Leo Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#fff0c7] mt-3">
              सिंह राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Leo, the regal and majestic fire sign ruled by the solar center of our universe, the Sun. Symbolized by the lion, Leo natives possess a natural kingly aura, unshakeable self-confidence, magnanimous generosity, and an unstoppable drive to lead, inspire, and conquer.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#d97706] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#d97706] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1780053953/Leo_image__vkwou3.png" alt="Leo Simha Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
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
              alt="Simha Rashi Career Predictions India — Bajrang Astro"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#fde7ba]">
              <h3 className="text-[#d97706] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#7c4300] mt-2">
                अग्नि 🔥
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#d97706] font-semibold uppercase tracking-wider text-sm sm:text-base">
              सिंह राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#7c4300] mt-4 leading-[1.3] sm:leading-tight">
              सिंह राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              सिंह राशि के जातक स्वभाव से अत्यंत साहसी, आत्मविश्वासी, स्वाभिमानी और राजसी प्रवृत्ति के होते हैं। वे किसी भी सामाजिक या व्यावसायिक मंच पर अपनी मजबूत उपस्थिति दर्ज कराने से कभी पीछे नहीं हटते। उनका तेज, ओजस्वी व्यक्तित्व और नेतृत्व करने की जन्मजात क्षमता लोगों को उनकी ओर अनायास ही आकर्षित कर लेती है।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              सूर्य देव के प्रबल प्रभाव के कारण, सिंह राशि के लोग जीवन में हमेशा सकारात्मक ऊर्जा, उदारता और गर्मजोशी से भरे रहते हैं। वे अपने मान-सम्मान को सबसे ऊपर रखते हैं और अपने संकल्प व दूरदर्शी दृष्टिकोण के बल पर जीवन में बड़ी से बड़ी सफलताएं व उच्च पद प्राप्त करते हैं।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#fff5dd] border border-[#f5dfab] text-[#b16d07] font-medium text-sm sm:text-base"
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
          <span className="text-[#d97706] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Leo Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#7c4300] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Leo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffaf0] border border-[#fde7ba] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#d97706] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#7c4300] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#d97706] font-semibold uppercase tracking-wider text-sm sm:text-base">
            सिंह राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#7c4300] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का संपूर्ण विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff5dd] flex items-center justify-center text-[#d97706] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#7c4300]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              सिंह राशि के लोग प्रेम में बेहद वफादार, उदार और उत्साही साथी होते हैं। वे अपने पार्टनर को विशेष महसूस कराना पसंद करते हैं और रिश्तों में पूरे सम्मान व वफादारी की अपेक्षा रखते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff5dd] flex items-center justify-center text-[#d97706] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#7c4300]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              सूर्य के प्रबल प्रभाव के कारण ये जातक उच्च प्रशासनिक पदों, राजनीति, अभिनय, रंगमंच, स्वतंत्र व्यवसाय प्रबंधन और बड़े उद्योगों का संचालन करने में शीर्ष सफलता व ख्याति अर्जित करते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff5dd] flex items-center justify-center text-[#d97706] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#7c4300]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              शारीरिक रूप से ओजस्वी होने पर भी इन्हें हृदय, पीठ दर्द और अत्यधिक मानसिक तनाव या क्रोध से बचना चाहिए। नियमित योग, ध्यान और संतुलित दिनचर्या इनके जीवन को निरोगी बनाए रखती है।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#d97706] to-[#fbbf24]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/20 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiAward />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              सिंह राशि और नेतृत्व का सामर्थ्य
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              सिंह राशि के जातक जन्मजात मार्गदर्शक और प्रेरणास्रोत होते हैं। उनका अदम्य आत्मविश्वास, दयालु हृदय और संकट की घड़ी में निडर बने रहने की क्षमता उन्हें समाज में एक बेहतरीन राजा, लीडर और सच्चा रक्षक बनाती है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#d97706] font-semibold hover:scale-105 transition text-center"
            >
              Explore Compatibility
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1400&auto=format&fit=crop"
              alt="Simha Rashi Finance Predictions India — Vishal Verma"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/20 text-sm sm:text-base">
              Sun Energy ☀
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#fffaf5]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#fff1d1] flex items-center justify-center text-[#d97706] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#7c4300] mt-8 leading-[1.3] sm:leading-tight">
            Today's Leo Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today the radiant solar vibrations inject magnificent vitality and creative power for Leo natives. The Sun aligns perfectly with your reputation sector, paving the way for immediate professional acclaim and executive success. Step into the spotlight, trust your royal instincts, and lead with absolute authority.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#d97706] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#d97706] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#7c4300] mt-4 leading-[1.3] sm:leading-tight">
            सिंह राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#fde7ba] p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#7c4300]">
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
        <div className="bg-[#fff5dd] border border-[#fde7ba] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[100px] sm:text-[180px] text-[#d97706]">
              ♌
            </div>
          </div>

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#d97706] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#7c4300] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Leo Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Align your life with the majestic paths of the cosmos. Connect with our elite Vedic advisors today for absolute clarity on your Kundli, career house, and planetary remedies.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#d97706] text-white font-semibold hover:bg-[#b96500] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#d97706] text-[#d97706] font-semibold hover:bg-[#d97706] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LeoPage;