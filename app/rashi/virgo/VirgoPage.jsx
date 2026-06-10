"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiCheckCircle,
} from "react-icons/fi";

const traits = [
  "बुद्धिमान",
  "अनुशासित",
  "व्यावहारिक",
  "सहानुभूतिशील",
  "जिज्ञासु",
  "परिश्रमी",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Green",
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
    question: "कन्या राशि के लोगों का स्वभाव कैसा होता है?",
    answer:
      "कन्या राशि के जातक स्वभाव से बेहद अनुशासित, व्यावहारिक, बुद्धिमान और सूक्ष्म विश्लेषण करने वाले होते हैं। वे अपने जीवन और कार्यस्थल में संगठन, स्वच्छता, अनुशासन और समस्याओं का बेहद कुशल व तार्किक समाधान ढूंढने को सर्वोच्च प्राथमिकता देते हैं।",
  },
  {
    question: "कन्या राशि का स्वामी ग्रह कौन सा है और इसका क्या प्रभाव है?",
    answer:
      "बुध ग्रह से गहराई से प्रभावित होने के कारण, कन्या राशि के लोगों में उत्कृष्ट बौद्धिक और संचार क्षमता पाई जाती है। उनकी पूर्णतावादी (Perfectionist) दृष्टिकोण उन्हें हर कार्य को उच्चतम मानकों पर करने की प्रेरणा देता है, जिससे वे अपने करियर में महान ऊंचाइयां छूते हैं।",
  },
  {
    question: "कन्या राशि के जातकों के लिए कौन सा करियर सबसे उत्तम माना गया है?",
    answer:
      "ये जातक उत्कृष्ट शोधकर्ता, चिकित्सक, वित्तीय विश्लेषक और प्रबंधक बनते हैं। बारीक विवरणों पर ध्यान देने की इनकी क्षमता इन्हें कॉर्पोरेट जगत और तकनीकी क्षेत्रों में तेजी से सफलता दिलाती है।",
  },
];

const VirgoPage = () => {
  return (
    <div className="w-full bg-[#fffdfa] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#059669] via-[#10b981] to-[#34d399] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-green-100 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Virgo Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Virgo Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#d1fae5] mt-3">
              कन्या राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Virgo, the analytical and meticulous Earth sign ruled by the planet of intellect, Mercury. Symbolized by the virgin, Virgo natives possess an incredibly precise mind, unshakeable work ethic, compassionate heart, and a brilliant capacity to organize, improve, and heal the world around them.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#10b981] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#10b981] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578442/Vedic_Astrology_Services_India_Bajrang_Astro_virgo_zodiac_r3kzjt.png" alt="Virgo Kanya Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
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
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781073424/Virgo_Kanya_Rashi_Vedic_Astrology_India_Bajrang_Astro_ji0j9m.avif"
              alt="Kanya Rashi Career Predictions India — Bajrang Astro"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#d8ead3]">
              <h3 className="text-[#5b8c51] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#305228] mt-2">
                पृथ्वी 🌍
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#5b8c51] font-semibold uppercase tracking-wider text-sm sm:text-base">
              कन्या राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#305228] mt-4 leading-[1.3] sm:leading-tight">
              कन्या राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              कन्या राशि के जातक स्वभाव से बेहद अनुशासित, व्यावहारिक, बुद्धिमान और सूक्ष्म विश्लेषण करने वाले होते हैं। वे अपने जीवन और कार्यस्थल में संगठन, स्वच्छता, अनुशासन और समस्याओं का बेहद कुशल व तार्किक समाधान ढूंढने को सर्वोच्च प्राथमिकता देते हैं।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              बुध ग्रह से गहराई से प्रभावित होने के कारण, कन्या राशि के लोगों में उत्कृष्ट बौद्धिक और संचार क्षमता पाई जाती है। उनकी पूर्णतावादी (Perfectionist) दृष्टिकोण उन्हें हर कार्य को उच्चतम मानकों पर करने की प्रेरणा देता है, जिससे वे अपने करियर में महान ऊंचाइयां छूते हैं।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#eef8eb] border border-[#d8ead3] text-[#4f7c46] font-medium text-sm sm:text-base"
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
          <span className="text-[#5b8c51] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Virgo Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#305228] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Virgo
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#f8fcf7] border border-[#d8ead3] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#5b8c51] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#305228] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#5b8c51] font-semibold uppercase tracking-wider text-sm sm:text-base">
            कन्या राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#305228] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का सूक्ष्म विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-3xl sm:text-4xl mb-4 sm:mb-6 shrink-0 mx-auto lg:mx-0">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#305228]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              कन्या राशि के जातक प्रेम संबंधों में अत्यधिक वफादार, सहायक और समर्पित साथी साबित होते हैं। वे अपने साथी से पूर्ण ईमानदारी, गहरे बौद्धिक तालमेल और जीवन में स्थिरता की अपेक्षा रखते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-3xl sm:text-4xl mb-4 sm:mb-6 shrink-0 mx-auto lg:mx-0">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#305228]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              ये जातक उत्कृष्ट शोधकर्ता, चिकित्सक, वित्तीय विश्लेषक और प्रबंधक बनते हैं। बारीक विवरणों पर ध्यान देने की इनकी क्षमता इन्हें कॉर्पोरेट जगत और तकनीकी क्षेत्रों में तेजी से सफलता दिलाती है।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-3xl sm:text-4xl mb-4 sm:mb-6 shrink-0 mx-auto lg:mx-0">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#305228]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              अत्यधिक मानसिक तनाव लेने और लगातार काम करने के कारण इन्हें पाचन तंत्र विकार और चिंता की समस्या हो सकती है। संतुलित पोषण, योग और नियमित ध्यान इनके लिए जीवनदायिनी है।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#5b8c51] to-[#74a96a]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/20 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiCheckCircle />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              कन्या राशि और पूर्णता का दृष्टिकोण
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              कन्या राशि के जातक हर छोटी से छोटी बारीक बात पर ध्यान देने के लिए जाने जाते हैं। उनका यही अनुशासित स्वभाव, त्रुटिरहित दृष्टिकोण और कार्यों के प्रति पूर्ण समर्पण उन्हें अपने जीवन और कार्यस्थल में असाधारण रूप से सफल बनाता है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#5b8c51] font-semibold hover:scale-105 transition text-center"
            >
              Explore Compatibility
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781073425/Virgo_Rashi_Personality_Traits_India_Vishal_Verma_wr2ywo.avif"
              alt="Kanya Rashi Finance Predictions India — Vishal Verma"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/20 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/20 text-sm sm:text-base">
              Mercury Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#fafcf7]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#eef8eb] flex items-center justify-center text-[#5b8c51] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#305228] mt-8 leading-[1.3] sm:leading-tight">
            Today's Virgo Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today the stabilizing earth energies boost your logical planning and structural efficiency, Virgo. Mercury's transit illuminates your financial and workspace houses, triggering positive career transitions and highly intellectual problem-solving. Step into your organized zone and execute your plans with precision.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#5b8c51] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#5b8c51] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#305228] mt-4 leading-[1.3] sm:leading-tight">
            कन्या राशि से जुड़े कुछ महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-[#d8ead3] p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#305228]">
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
        <div className="bg-[#eef8eb] border border-[#d8ead3] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#5b8c51] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#305228] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Virgo Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Direct your path towards absolute clarity and structural success. Connect with our elite Vedic specialists today for customized Kundli and remedial plans.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#5b8c51] text-white font-semibold hover:bg-[#476d3f] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#5b8c51] text-[#5b8c51] font-semibold hover:bg-[#5b8c51] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VirgoPage;