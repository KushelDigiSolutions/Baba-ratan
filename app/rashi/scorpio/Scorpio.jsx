"use client";

import React from "react";
import {
  FiHeart,
  FiStar,
  FiBriefcase,
  FiActivity,
  FiArrowRight,
  FiZap,
  FiMoon,
} from "react-icons/fi";

const traits = [
  "साहसी",
  "रहस्यमयी",
  "दृढ़निश्चयी",
  "अंतर्ज्ञानी",
  "वफादार",
  "तीव्र",
];

const luckyThings = [
  {
    title: "Lucky Color",
    value: "Deep Red & Maroon",
  },
  {
    title: "Lucky Number",
    value: "9",
  },
  {
    title: "Ruling Planet",
    value: "Mars & Pluto",
  },
  {
    title: "Lucky Day",
    value: "Tuesday",
  },
];

const faqData = [
  {
    question: "वृश्चिक राशि के जातकों का व्यक्तित्व कैसा होता है?",
    answer:
      "वृश्चिक राशि के जातक स्वभाव से बेहद साहसी, रहस्यमयी, दृढ़ निश्चयी और भावनात्मक रूप से शक्तिशाली होते हैं। वे अपने आत्मसम्मान, निजता और वफादारी से कभी समझौता नहीं करते। उनकी तीव्र इच्छाशक्ति और असाधारण अंतर्ज्ञान (Intuition) उन्हें किसी भी कठिन परिस्थिति से विजयी होकर निकलने में मदद करता है।",
  },
  {
    question: "वृश्चिक राशि का स्वामी ग्रह कौन सा है और इसका क्या प्रभाव है?",
    answer:
      "मंगल और प्लूटो ग्रह के प्रबल प्रभाव के कारण, वृश्चिक राशि के लोगों में गजब की चुंबकीय शक्ति और नेतृत्व क्षमता पाई जाती है। वे सतही बातों को नापसंद करते हैं और जीवन, अध्यात्म व विज्ञान के गहरे सत्यों को जानने के लिए हमेशा उत्सुक रहते हैं।",
  },
  {
    question: "वृश्चिक राशि के जातकों के लिए कौन सा करियर सबसे उत्तम माना गया है?",
    answer:
      "ये जातक शोध, विज्ञान, पुलिस व सेना, गुप्तचर विभाग, शल्य चिकित्सा (सर्जरी), जटिल व्यावसायिक प्रबंधन और स्वतंत्र वित्तीय निवेश के क्षेत्रों में असाधारण रूप से सफल होते हैं।",
  },
];

const ScorpioPage = () => {
  return (
    <div className="w-full bg-[#140c11] text-gray-200 overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#2b1220] via-[#4a102c] to-[#7a183d] overflow-hidden">
        {/* Glow */}
        <div className="absolute inset-0 opacity-15">
          <div className="absolute top-10 left-10 w-80 h-80 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-950 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-5 py-2 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-sm font-medium mb-6">
              Scorpio Zodiac Sign
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Scorpio Rashi
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-[#ff8cb3] mt-3">
              वृश्चिक राशि
            </h2>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Scorpio, the profound and magnetically intense Water sign ruled by dynamic Mars and transformative Pluto. Symbolized by the scorpion, Scorpio natives possess unyielding willpower, deep emotional power, razor-sharp intuition, and an invincible courage that conquers all life transits.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-8 py-4 rounded-full bg-white text-[#7a183d] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#7a183d] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] max-w-full rounded-full overflow-hidden flex items-center justify-center shadow-2xl">
              <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Best_Astrologer_in_Delhi_NCR_Bajrang_Astro_Vishal_Johari_scorpio_zodiac_dufegc.png" alt="Scorpio Vrishchik Rashi Vedic Astrology India — Bajrang Astro" className="w-full h-full object-cover scale-[1.18]" style={{ clipPath: "circle(42.5%)" }} />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-[#140c11]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Scorpio Rashi Personality Traits India — Vishal Verma"
              className="w-full h-[300px] sm:h-[450px] md:h-[550px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-[#1e141a] shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#4a102c]">
              <h3 className="text-[#ff6b9a] font-semibold text-sm sm:text-base">
                तत्व
              </h3>

              <p className="text-2xl sm:text-3xl font-bold text-white mt-2">
                जल 🌊
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider text-sm sm:text-base">
              वृश्चिक राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mt-4 leading-[1.3] sm:leading-tight">
              वृश्चिक राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-350 text-base sm:text-lg leading-7 sm:leading-9 mt-6">
              वृश्चिक राशि के जातक स्वभाव से बेहद साहसी, रहस्यमयी, दृढ़ निश्चयी और भावनात्मक रूप से शक्तिशाली होते हैं। वे अपने आत्मसम्मान, निजता और वफादारी से कभी समझौता नहीं करते। उनकी तीव्र इच्छाशक्ति और असाधारण अंतर्ज्ञान (Intuition) उन्हें किसी भी कठिन परिस्थिति से विजयी होकर निकलने में मदद करता है।
            </p>

            <p className="text-gray-355 text-base sm:text-lg leading-7 sm:leading-9 mt-4">
              मंगल और प्लूटो ग्रह के प्रबल प्रभाव के कारण, वृश्चिक राशि के लोगों में गजब की चुंबकीय शक्ति और नेतृत्व क्षमता पाई जाती. वे सतही बातों को नापसंद करते हैं और जीवन, अध्यात्म व विज्ञान के गहरे सत्यों को जानने के लिए हमेशा उत्सुक रहते हैं।
            </p>

            {/* TRAITS */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#2b1620] border border-[#4a102c] text-[#ff8cb3] font-medium text-sm sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCKY SECTION - English */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-[#140c11] border-t border-[#2b1620]">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Scorpio Astrology
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mt-4 leading-[1.3] sm:leading-tight">
            Lucky Things For Scorpio
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-7">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1117] border border-[#4a102c] rounded-[24px] sm:rounded-[35px] p-5 sm:p-8 hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#ff6b9a] text-base sm:text-lg font-semibold">
                {item.title}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-white mt-3 sm:mt-5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LOVE CAREER HEALTH - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-[#140c11]">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider text-sm sm:text-base">
            वृश्चिक राशि के प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mt-4 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का गहन विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* LOVE */}
          <div className="bg-[#1a1117] rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 border border-[#4a102c] hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiHeart />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-300 leading-7 mt-4 text-base sm:text-lg">
              वृश्चिक राशि के लोग प्रेम में अत्यधिक जुनूनी, वफादार और गंभीर साथी होते हैं। वे सतही रिश्तों को बिल्कुल नापसंद करते हैं और अपने जीवनसाथी के साथ अत्यंत गहरी भावनात्मक व आत्मिक आत्मीयता चाहते हैं।
            </p>
          </div>

          {/* CAREER */}
          <div className="bg-[#1a1117] rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 border border-[#4a102c] hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiBriefcase />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              करियर और वित्त
            </h3>

            <p className="text-gray-300 leading-7 mt-4 text-base sm:text-lg">
              ये जातक शोध, विज्ञान, पुलिस व सेना, गुप्तचर विभाग, शल्य चिकित्सा (सर्जरी), जटिल व्यावसायिक प्रबंधन और स्वतंत्र वित्तीय निवेश के क्षेत्रों में असाधारण रूप से सफल होते हैं।
            </p>
          </div>

          {/* HEALTH */}
          <div className="bg-[#1a1117] rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 border border-[#4a102c] hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-3xl sm:text-4xl mb-4 sm:mb-6">
              <FiActivity />
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-white">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-300 leading-7 mt-4 text-base sm:text-lg">
              भावनात्मक रूप से अत्यधिक संवेदनशील और तीव्र होने के कारण इन्हें मानसिक तनाव, गुप्त अंगों से संबंधित विकारों और अत्यधिक क्रोध से बचना चाहिए। ध्यान व प्राणायाम इनके लिए जीवनदायिनी हैं।
            </p>
          </div>
        </div>
      </section>

      {/* SPECIAL SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#4a102c] to-[#7a183d]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-14 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left flex flex-col items-center lg:items-start">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto lg:mx-0 rounded-full bg-white/10 flex items-center justify-center text-4xl sm:text-5xl backdrop-blur-md">
              <FiZap />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-6 leading-[1.3] sm:leading-tight">
              वृश्चिक राशि और आंतरिक शक्ति
            </h2>

            <p className="text-base sm:text-lg leading-7 sm:leading-8 text-white/90 mt-6 max-w-2xl mx-auto lg:mx-0">
              वृश्चिक राशि के जातक अपनी रहस्यमयी आभा, चुंबकीय आकर्षण और तीव्र एकाग्रता के लिए जाने जाते हैं। उनकी किसी भी कठिन रहस्य को सुलझाने की क्षमता और अदम्य साहस उन्हें समाज में एक अत्यंत प्रभावशाली व निडर लीडर साबित करता है।
            </p>

            <a
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#7a183d] font-semibold hover:scale-105 transition text-center"
            >
              अनुकूलता की जांच करें
              <FiArrowRight />
            </a>
          </div>

          {/* RIGHT */}
          <div className="relative order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1400&auto=format&fit=crop"
              alt="Vrishchik Rashi Remedies India — Vishal Verma Bajrang Astro"
              className="w-full h-[250px] sm:h-[350px] md:h-[450px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />

            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl px-4 py-2 sm:px-5 sm:py-3 text-white border border-white/10 text-sm sm:text-base">
              Pluto Energy 🔥
            </div>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-[#0f0a12]">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-20 h-20 sm:w-28 sm:h-28 mx-auto rounded-full bg-[#2b1620] flex items-center justify-center text-[#ff6b9a] text-4xl sm:text-5xl shadow-xl">
            <FiMoon />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mt-8 leading-[1.3] sm:leading-tight">
            Today's Scorpio Horoscope
          </h2>

          <p className="text-base sm:text-lg leading-7 sm:leading-8 text-gray-300 mt-6 max-w-3xl mx-auto">
            Today brings extraordinary Plutonian transformational forces that boost your personal magnetism and intuition, Scorpio. Mars charges your ambition house, inspiring you to conquer difficult corporate negotiations and execute financial breakthroughs. Trust your deep gut instincts and conquer all challenges.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#7a183d] text-white font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-[#140c11]">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#ff6b9a] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mt-4 leading-[1.3] sm:leading-tight">
            वृश्चिक राशि से जुड़े महत्वपूर्ण प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-[#1a1117] rounded-[24px] sm:rounded-[30px] border border-[#4a102c] p-5 sm:p-8 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-white">
                {item.question}
              </h3>

              <p className="text-gray-350 leading-7 mt-4 sm:mt-5 text-base sm:text-lg">
                {item.answer}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - English */}
      <section className="pt-4 pb-10 sm:pb-16 px-4 md:px-10 lg:px-20 bg-[#140c11]">
        <div className="bg-[#1a1117] border border-[#4a102c] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          

          <div className="relative z-10">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#7a183d] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold text-white mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Get Personalized Scorpio Guidance
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-300 text-base sm:text-lg leading-7 sm:leading-9">
              Tap into your profound spiritual power and transform your astrological destiny. Connect with our elite Vedic advisors today for customized remedial and career advice.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#7a183d] text-white font-semibold hover:bg-[#5c0f2d] transition inline-block text-center"
              >
                Book Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#ff6b9a] text-[#ff6b9a] font-semibold hover:bg-[#ff6b9a] hover:text-black transition">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ScorpioPage;