"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiSun,
  FiTrendingUp,
} from "react-icons/fi";

const traits = [
  "अनुशासित",
  "परिश्रमी",
  "व्यावहारिक",
  "महत्वाकांक्षी",
  "धैर्यवान",
  "वफादार",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Black & Dark Blue",
  },
  {
    title: "Lucky Number",
    value: "8",
  },
  {
    title: "Ruling Planet",
    value: "Saturn",
  },
  {
    title: "Lucky Day",
    value: "Saturday",
  },
];

const faqData = [
  {
    question: "मकर राशि के जातकों का मुख्य स्वभाव कैसा होता है?",
    answer:
      "मकर राशि के जातक स्वभाव से बेहद अनुशासित, परिश्रमी, व्यावहारिक और अत्यधिक महत्वाकांक्षी होते हैं। वे जीवन में किसी भी प्रकार की जल्दबाजी के बजाय धैर्य, निरंतरता और कड़ी मेहनत से स्थायी सफलता प्राप्त करने में विश्वास रखते हैं।",
  },
  {
    question: "मकर राशि का स्वामी ग्रह कौन सा है और इसका क्या प्रभाव है?",
    answer:
      "कर्मफल दाता शनिदेव के प्रबल प्रभाव के कारण, उनमें जिम्मेदारी की गहरी भावना, परिपक्वता और गजब का सांगठनिक (Organizational) कौशल पाया जाता है। वे बिना थके अपने लक्ष्यों की ओर अग्रसर रहते हैं, जिससे वे जीवन के उत्तरार्ध में महान ऊंचाइयां और सुख-समृद्धि अर्जित करते हैं।",
  },
  {
    question: "मकर राशि के लोगों के लिए कौन सा करियर क्षेत्र सबसे उपयुक्त माना गया है?",
    answer:
      "ये जातक कॉर्पोरेट प्रशासन, वित्त व सीए, स्वतंत्र उद्योग, वकालत, सिविल इंजीनियरिंग और प्रशासनिक सेवाओं में सर्वश्रेष्ठ प्रदर्शन करते हैं। समय के साथ इनका धन लगातार संचित होता है।",
  },
];

const CapricornPage = () => {
  return (
    <div className="w-full bg-[#faf9f7] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#1f2937] via-[#374151] to-[#4b5563] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-gray-600 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-medium mb-6">
              Capricorn Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Capricorn Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#d1d5db] mt-3">
              मकर राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Capricorn, the disciplined and determined Earth sign ruled by the planet of karma and time, Saturn. Symbolized by the sea-goat, Capricorn natives possess unyielding perseverance, stellar administrative intellect, absolute realism, and a silent power that steadily scales the highest peaks of success.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#1f2937] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#1f2937] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Bajrang_Astro_Best_Astrologer_in_India_by_Vishal_Verma_capricorn_zodiac_s9hln7.png" alt="Capricorn Makar Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
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
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781072511/Capricorn_Makar_Rashi_Vedic_Astrology_India_Bajrang_Astro_cdthjr.avif"
              alt="Makar Rashi Career Predictions India — Bajrang Astro"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-white shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200">
              <h3 className="text-[#374151] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-[#111827] mt-2">
                पृथ्वी 🌍
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#374151] font-semibold uppercase tracking-wider text-sm sm:text-base">
              मकर राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#111827] mt-4 leading-[1.3] sm:leading-tight">
              मकर राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              मकर राशि के जातक स्वभाव से बेहद अनुशासित, परिश्रमी, व्यावहारिक और अत्यधिक महत्वाकांक्षी होते हैं। वे जीवन में किसी भी प्रकार की जल्दबाजी के बजाय धैर्य, निरंतरता और कड़ी मेहनत से स्थायी सफलता प्राप्त करने में विश्वास रखते हैं।
            </p>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              कर्मफल दाता शनिदेव के प्रबल प्रभाव के कारण, उनमें जिम्मेदारी की गहरी भावना, परिपक्वता और गजब का सांगठनिक (Organizational) कौशल पाया जाता है। वे बिना थके अपने लक्ष्यों की ओर अग्रसर रहते हैं, जिससे वे जीवन के उत्तरार्ध में महान ऊंचाइयां और सुख-समृद्धि अर्जित करते हैं।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-gray-100 border border-gray-200 text-[#374151] font-medium text-sm sm:text-base"
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
          <span className="text-[#374151] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Capricorn Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#111827] mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Capricorn
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fafafa] border border-gray-200 rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#374151] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#111827] mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#374151] font-semibold uppercase tracking-wider text-sm sm:text-base">
            मकर राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#111827] mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का संपूर्ण विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              मकर राशि के लोग प्रेम में अत्यधिक गंभीर, वफादार और पूरी तरह से विश्वसनीय साथी होते हैं। वे सतही और अस्थाई संबंधों को नापसंद करते हैं और अपने साथी के प्रति सदैव जिम्मेदार रहते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              ये जातक कॉर्पोरेट प्रशासन, वित्त व सीए, स्वतंत्र उद्योग, वकालत, सिविल इंजीनियरिंग और प्रशासनिक सेवाओं में सर्वश्रेष्ठ प्रदर्शन करते हैं। समय के साथ इनका धन लगातार संचित होता है।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-white rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4 text-base sm:text-lg">
              अत्यधिक कार्यभार के कारण इन्हें घुटनों (Knees), जोड़ों में दर्द, हड्डियों की कमजोरी और त्वचा संबंधी समस्याओं से बचना चाहिए। नियमित व्यायाम, पोषक आहार और पर्याप्त विश्राम इनके लिए हितकारी हैं।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#1f2937] to-[#4b5563]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/10 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiTrendingUp />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              मकर राशि और कर्म की शक्ति
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              मकर राशि के लोग अपने दृढ़ संकल्प, आत्म-नियंत्रण और शांत स्वभाव के लिए जाने जाते हैं। उनकी बिना विचलित हुए लगातार अपने लक्ष्य की ओर बढ़ते रहने की शक्ति उन्हें समाज में एक अत्यंत सफल और कुशल निर्माता साबित करती है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#1f2937] font-semibold hover:scale-105 transition text-center"
            >
              Explore Compatibility
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781072512/Capricorn_Rashi_Personality_Traits_India_Vishal_Verma_mmrqcu.avif"
              alt="Capricorn Rashi Health Predictions India — Bajrang Astro"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/20 text-sm sm:text-base">
              Saturn Energy ✨
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#faf9f7]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-gray-100 flex items-center justify-center text-[#374151] text-4xl sm:text-5xl shadow-xl">
            <FiSun />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#111827] mt-8 leading-[1.3] sm:leading-tight">
            Today's Capricorn Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-600 mt-6 max-w-3xl mx-auto">
            Today the structured Saturnian energies provide exceptional focus and administrative control, Capricorn. Saturn aligning with your legacy house unlocks long-overdue professional achievements and rewards your persistent efforts. Maintain your realistic overview, streamline your budget, and execute your long-term strategies.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#374151] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#374151] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#111827] mt-4 leading-[1.3] sm:leading-tight">
            मकर राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[24px] sm:rounded-[30px] border border-gray-200 p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#111827]">
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
        <div className="bg-gray-100 border border-gray-200 rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#374151] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#111827] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Capricorn Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-9">
              Build an unshakeable foundation for your financial, relationship, and career future. Connect with our elite Vedic specialists today for Saturn remedies and Kundli analysis.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#374151] text-white font-semibold hover:bg-[#1f2937] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#374151] text-[#374151] font-semibold hover:bg-[#374151] hover:text-white transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CapricornPage;