"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiCompass,
} from "react-icons/fi";

const traits = [
  "साहसी",
  "आशावादी",
  "स्वतंत्र",
  "बुद्धिमान",
  "दार्शनिक",
  "सत्यवादी",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Yellow & Golden",
  },
  {
    title: "Lucky Number",
    value: "3",
  },
  {
    title: "Ruling Planet",
    value: "Jupiter",
  },
  {
    title: "Lucky Day",
    value: "Thursday",
  },
];

const faqData = [
  {
    question: "धनु राशि के जातकों का मुख्य स्वभाव कैसा होता है?",
    answer:
      "धनु राशि के जातक स्वभाव से बेहद साहसी, आशावादी, स्वतंत्र विचारों वाले और ज्ञान के खोजी होते हैं। वे जीवन को एक उत्सव के रूप में जीते हैं और नई संस्कृतियों, यात्राओं व उच्च दर्शन को जानने के लिए हमेशा उत्सुक रहते हैं।",
  },
  {
    question: "धनु राशि का स्वामी ग्रह कौन सा है और इसका क्या महत्व है?",
    answer:
      "धनु राशि के स्वामी देवगुरु बृहस्पति हैं, जो ज्ञान, धर्म, संचित पुण्य, वृद्धि, संतान और भाग्य के मुख्य कारक माने जाते हैं।",
  },
  {
    question: "धनु राशि के लोगों के लिए कौन सा करियर क्षेत्र सबसे उपयुक्त माना गया है?",
    answer:
      "अध्यापन, उच्च शिक्षा, परामर्श (Consulting), कानून व वकालत, पर्यटन (Travel & Tourism), खेलकूद और स्वतंत्र व्यापार के क्षेत्रों में ये जातक अत्यधिक सफलता व धन प्राप्त करते हैं।",
  },
];

const SagittariusPage = () => {
  return (
    <div className="w-full bg-[#fffdf8] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#5b21b6] via-[#7c3aed] to-[#a78bfa] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-purple-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Sagittarius Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Sagittarius Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ede9fe] mt-3">
              धनु राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Sagittarius, the visionary and adventure-seeking Fire sign ruled by the planet of wisdom and luck, Jupiter. Symbolized by the archer, Sagittarius natives possess a philosophical mind, unshakeable optimism, absolute truthfulness, and a burning passion to explore the deep mysteries of the universe.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#7c3aed] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#7c3aed] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Online_Astrology_Consultation_India_Bajrang_Astro_sagittarius_zodiac_oa78ki.png" alt="Sagittarius Dhanu Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
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
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1400&auto=format&fit=crop"
              alt="Sagittarius Rashi Personality Traits India — Vishal Verma"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#e9d5ff]">
              <h3 className="text-[#e57661] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#4c1d95] mt-2">
                अग्नि 🔥
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#e57661] font-semibold uppercase tracking-wider text-sm sm:text-base">
              धनु राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4c1d95] mt-4 leading-[1.3] sm:leading-tight">
              धनु राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              धनु राशि के जातक स्वभाव से बेहद साहसी, आशावादी, स्वतंत्र विचारों वाले और ज्ञान के खोजी होते हैं। वे जीवन को एक उत्सव के रूप में जीते हैं और नई संस्कृतियों, यात्राओं व उच्च दर्शन को जानने के लिए हमेशा उत्सुक रहते हैं।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              देवगुरु बृहस्पति के प्रबल प्रभाव के कारण, उनके पास अद्भुत विवेक, धार्मिक प्रवृत्ति और दूसरों का सही मार्गदर्शन करने की जन्मजात क्षमता होती है। वे हमेशा सत्य और निष्पक्षता का पक्ष लेते हैं, जिससे उन्हें समाज में एक आदरणीय गुरु का स्थान मिलता है।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#f6efff] border border-[#e9d5ff] text-[#6d28d9] font-medium text-sm sm:text-base"
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
            Sagittarius Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4c1d95] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Sagittarius
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fcfaff] border border-[#e9d5ff] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#e57661] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#4c1d95] mt-3 sm:mt-5">
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
            धनु राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4c1d95] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का दार्शनिक विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f6efff] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#4c1d95]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              धनु राशि के लोग प्रेम में अत्यधिक वफादार, हंसमुख और वैचारिक स्वतंत्रता पसंद करने वाले साथी होते हैं। वे अपने रिश्ते में घुटन नापसंद करते हैं और एक सच्चे मित्र की तरह जीवन यात्रा तय करते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f6efff] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#4c1d95]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              ये जातक अध्यापन, उच्च शिक्षा, परामर्श (Consulting), कानून व वकालत, पर्यटन (Travel & Tourism), खेलकूद और स्वतंत्र व्यापार के क्षेत्रों में अत्यधिक सफलता व धन प्राप्त करते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#f6efff] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#4c1d95]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              शारीरिक रूप से मजबूत होने पर भी इन्हें जांघों, कूल्हों व लीवर से जुड़े रोगों तथा अत्यधिक मीठा या वसायुक्त भोजन खाने से बचना चाहिए। नियमित सैर और योग इनके लिए परम आवश्यक हैं।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#6d28d9] to-[#a855f7]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/10 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiCompass />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              धनु राशि और ज्ञान की खोज
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              धनु राशि के लोग जीवन के गहरे दार्शनिक सत्यों को जानने के लिए हमेशा तत्पर रहते हैं। उनकी सकारात्मक सोच और अदम्य साहसी दृष्टिकोण उन्हें विपरीत समय में भी कभी विचलित नहीं होने देता, जिससे वे एक सच्चे मार्गदर्शक सिद्ध होते हैं।
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
              src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?q=80&w=1400&auto=format&fit=crop"
              alt="Sagittarius Rashi Health Predictions India — Bajrang Astro"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/20 text-sm sm:text-base">
              Jupiter Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#fffdf8]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#f6efff] flex items-center justify-center text-[#e57661] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4c1d95] mt-8 leading-[1.3] sm:leading-tight">
            Today's Sagittarius Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today the auspicious Jovian transits flood your consciousness with profound wisdom and expansive luck, Sagittarius. Jupiter blesses your learning and spiritual sectors, making it an exceptional day to initiate academic projects, philosophical debates, or investment blueprints. Pursue the ultimate truth fearlessly.
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

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4c1d95] mt-4 leading-[1.3] sm:leading-tight">
            धनु राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#e9d5ff] p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#4c1d95]">
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
        <div className="bg-[#f6efff] border border-[#e9d5ff] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#e57661] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#4c1d95] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Sagittarius Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Expand your financial wisdom, relationship depth, and spiritual power. Connect with our elite Vedic specialists today for customized Kundli predictions and remedies.
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

export default SagittariusPage;