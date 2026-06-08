"use client";

import React from "react";
import {
  FiStar,
  FiHeart,
  FiBriefcase,
  FiActivity,
  FiSun,
  FiMoon,
  FiArrowRight,
} from "react-icons/fi";
import RashiSection from "./RashiSection";

const horoscopeCards = [
  {
    title: "प्रेम और वैवाहिक संबंध",
    icon: <FiHeart />,
    desc: "चंद्र देव के गोचर के अनुसार अपने संबंधों की प्रगाढ़ता, आपसी तालमेल, रोमांस और प्रेम जीवन का संपूर्ण विश्लेषण प्राप्त करें।",
  },
  {
    title: "करियर और आर्थिक संपन्नता",
    icon: <FiBriefcase />,
    desc: "नौकरी, व्यापार, नए स्टार्टअप, उन्नति के अवसरों और आर्थिक समृद्धि के लिए ग्रहों के गोचर की सटीक समय-सीमा जानें।",
  },
  {
    title: "स्वास्थ्य और शारीरिक ऊर्जा",
    icon: <FiActivity />,
    desc: "शारीरिक कल्याण, ऊर्जा के संतुलन, योग व प्राणायाम के लाभ और ग्रहों के दुष्प्रभावों को दूर कर अपनी आभा को संरेखित करें।",
  },
];

const faqData = [
  {
    q: "वैदिक ज्योतिष में चंद्र राशि का क्या महत्व है?",
    a: "वैदिक ज्योतिष में चंद्र राशि (Moon Sign) को सबसे महत्वपूर्ण माना जाता है क्योंकि चंद्रमा हमारे मन, भावनाओं, सोचने की क्षमता और आंतरिक मानसिक स्वास्थ्य का सीधा प्रतिनिधित्व करता है।",
  },
  {
    q: "क्या चंद्र राशि और सूर्य राशि (Sun Sign) में कोई अंतर है?",
    a: "हाँ, सूर्य राशि आपकी बाहरी छवि, अहंकार और आत्मा के बल को दर्शाती है, जबकि चंद्र राशि आपके गहरे आंतरिक स्वभाव, भावनाओं, प्रतिक्रियाओं और संपूर्ण भाग्य को नियंत्रित करती है।",
  },
  {
    q: "हम अपनी सही जन्म राशि की पहचान कैसे कर सकते हैं?",
    a: "अपनी सही राशि जानने के लिए आपको अपने जन्म की सटीक तारीख, समय और जन्म स्थान की आवश्यकता होती है, जिसके आधार पर चंद्र देव की तत्कालीन नक्षत्र स्थिति का निर्धारण किया जाता है।",
  },
];

const RashiDetailsPage = () => {
  return (
    <div className="w-full bg-[#fffcfb] overflow-hidden">
      {/* HERO SECTION - 100% English */}
      <section className="relative py-12 md:py-20 lg:py-24 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#e07a63] via-[#e57661] to-[#cf624b] overflow-hidden">
        {/* Decorative Stars & Moons */}
        <div className="absolute top-0 left-0 w-full h-full opacity-15 pointer-events-none">
          <div className="absolute top-10 left-10 text-[120px] sm:text-[180px] text-white">✦</div>
          <div className="absolute bottom-5 right-6 sm:right-12 text-[140px] sm:text-[200px] text-white">☾</div>
          <div className="absolute top-1/2 left-1/3 text-3xl sm:text-4xl text-white">✦</div>
        </div>

        <div className="relative z-10 max-w-[1720px] mx-auto px-[20px] xl:px-[90px] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* LEFT */}
          <div className="text-white text-center lg:text-left mt-8 lg:mt-0">
            <span className="inline-block px-5 py-2 rounded-full bg-white/20 border border-white/20 backdrop-blur-md text-sm font-semibold tracking-wider mb-6">
              Vedic Astrology & Cosmic Blueprint
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-[1.2] sm:leading-tight">
              Discover Your <br className="hidden sm:block" />
              Zodiac Rashi
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 text-white/90 max-w-2xl mx-auto lg:mx-0">
              In Vedic astrology, your Rashi (Moon Sign) is the sacred filter through which your consciousness interacts with the universe. Your Rashi governs your mind, emotional patterns, behavioral instincts, and destiny. Explore the profound profiles of the 12 cosmic signs to align your path with the supreme vibrations of your ruling planets.
            </p>

            <div className="flex flex-wrap gap-4 sm:gap-5 mt-8 justify-center lg:justify-start">
              <button 
                onClick={() => {
                  document.getElementById("explore-rashi-section")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full bg-white text-[#e57661] font-bold hover:scale-105 transition shadow-lg cursor-pointer"
              >
                Explore 12 Rashis
              </button>

              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto text-center px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-[#e57661] transition inline-block font-bold"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[500px] md:h-[500px] max-w-full rounded-full border border-white/30 bg-white/10 backdrop-blur-xl flex items-center justify-center shadow-2xl">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:50s]" />
              
              <div className="grid grid-cols-4 gap-3 sm:gap-6 p-4 sm:p-8 relative z-10">
                {[
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578897/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_aries_rashi_bklszt.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_taurus_zodiac_fbwdtv.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Palm_Reading_Expert_India_Vishal_Verma_Bajrang_Astro_gemini_zodiac_il9bgr.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578894/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_cancer_zodiac_jg8umo.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578442/Vishal_Verma_Trusted_Astrologer_in_Meerut_Noida_Ghaziabad_leo_zodiac_wdtoho.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578442/Vedic_Astrology_Services_India_Bajrang_Astro_virgo_zodiac_r3kzjt.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780579019/Vastu_Consulting_for_Home_and_Office_India_Bajrang_Astro_libra_zodiac_rw6gjf.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Best_Astrologer_in_Delhi_NCR_Bajrang_Astro_Vishal_Johari_scorpio_zodiac_dufegc.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Online_Astrology_Consultation_India_Bajrang_Astro_sagittarius_zodiac_oa78ki.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578315/Bajrang_Astro_Best_Astrologer_in_India_by_Vishal_Verma_capricorn_zodiac_s9hln7.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578893/Trusted_Vedic_Astrology_Consultation_India_Bajrang_Astro_aquarius_zodiac_ggukcr.png",
  "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780578321/Janam_Kundli_Analysis_by_Best_Astrologer_in_India_pisces_zodiac_hvsbhh.png"
].map((imgUrl, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 sm:w-14 sm:h-14 md:w-18 md:h-18 rounded-full flex items-center justify-center hover:scale-115 transition duration-300 shadow-md cursor-pointer overflow-hidden bg-white/20"
                  >
                    <img 
                      src={imgUrl} 
                      alt="12 Rashi Zodiac Signs Vedic Astrology India — Bajrang Astro" 
                      className="w-full h-full object-cover scale-[1.18]" 
                      style={{ clipPath: "circle(42.5%)" }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT RASHI - 100% Hindi */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 bg-white">
        <div className="max-w-[1720px] mx-auto px-[20px] xl:px-[90px] grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1400&auto=format&fit=crop"
              alt="Rashi Chart Predictions India — Vishal Verma"
              className="w-full h-[350px] sm:h-[500px] object-cover rounded-[30px] sm:rounded-[40px] shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 sm:-bottom-8 sm:-right-8 bg-[#fff1ec] shadow-2xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-[#f1d6cf]">
              <h3 className="text-[#e57661] font-semibold text-sm sm:text-base">
                ज्योतिष आधार
              </h3>
              <p className="text-2xl sm:text-3xl font-bold text-[#5b2d2a] mt-1 sm:mt-2">
                चंद्रमा 🌙
              </p>
            </div>
          </div>

          {/* CONTENT */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#e57661] font-bold uppercase tracking-wider text-sm sm:text-base">
              वैदिक ज्योतिष में राशि का महत्व और प्रभाव
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5b2d2a] mt-4 leading-[1.3] sm:leading-tight">
              जन्म राशि और आपके जीवन की दिशा
            </h2>

            <p className="text-gray-650 text-lg leading-8 mt-6">
              वैदिक ज्योतिष शास्त्र में राशि (विशेषकर चंद्र राशि) को मनुष्य के जीवन का सबसे महत्वपूर्ण आधार माना गया है। जन्म के समय चंद्रमा जिस नक्षत्र और राशि में स्थित होता है, उसे ही व्यक्ति की जन्म राशि कहा जाता है। यह राशि जातक की मानसिक स्थिति, सोचने का तरीका, स्वभाव, भावनाएं और भाग्य का निर्धारण करती है।
            </p>

            <p className="text-gray-650 text-lg leading-8 mt-4">
              12 राशियां मिलकर संपूर्ण ब्रह्मांडीय चक्र का निर्माण करती हैं और मनुष्य के भूत, वर्तमान व भविष्य को संचालित करती हैं। जब आप अपनी सही राशि और उसके स्वामी ग्रह को समझ लेते हैं, तो आप ब्रह्मांडीय ऊर्जाओं के साथ तालमेल बिठाकर जीवन में अपार सफलता प्राप्त कर सकते हैं।
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-[#fffcfb] border border-[#f1d6cf] rounded-3xl p-6 shadow-sm flex flex-col items-center text-center sm:items-start sm:text-left">
                <FiSun className="text-4xl text-[#e57661]" />
                <h3 className="text-xl font-bold text-[#5b2d2a] mt-4">
                  ग्रहों का दिव्य प्रभाव
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  प्रत्येक राशि का एक स्वामी ग्रह होता है, जो उस राशि के जातकों के जीवन में ऊर्जा, गुण और भाग्य को नियंत्रित करता है।
                </p>
              </div>

              <div className="bg-[#fffcfb] border border-[#f1d6cf] rounded-3xl p-6 shadow-sm flex flex-col items-center text-center sm:items-start sm:text-left">
                <FiMoon className="text-4xl text-[#e57661]" />
                <h3 className="text-xl font-bold text-[#5b2d2a] mt-4">
                  मन और भावनात्मक आधार
                </h3>
                <p className="text-gray-600 mt-3 leading-7">
                  चंद्रमा मन का कारक है, इसलिए आपकी राशि आपके दृष्टिकोण, आंतरिक विचारों और भावनात्मक प्रतिक्रियाओं को आकार देती है।
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RASHI GRID SECTION - 100% English */}
      <div id="explore-rashi-section">
        <RashiSection />
      </div>

      {/* HOROSCOPE INSIGHTS SECTION - 100% Hindi */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 bg-white">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[#e57661] font-bold uppercase tracking-wider text-sm sm:text-base">
            राशिफल भविष्यवाणियां
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5b2d2a] mt-4 leading-[1.3] sm:leading-tight">
            राशिफल और ग्रहों का सटीक प्रभाव
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-[1720px] mx-auto px-[20px] xl:px-[90px]">
          {horoscopeCards.map((item, index) => (
            <div
              key={index}
              className="bg-[#fffcfb] border border-[#f1d6cf] rounded-[24px] sm:rounded-[35px] p-6 sm:p-9 shadow-sm hover:shadow-2xl transition hover:-translate-y-2 flex flex-col items-center text-center md:items-start md:text-left"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#fff1ec] flex items-center justify-center text-[#e57661] text-3xl sm:text-4xl shadow-md">
                {item.icon}
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-[#5b2d2a] mt-5 sm:mt-6">
                {item.title}
              </h3>

              <p className="text-gray-650 leading-8 mt-4">
                {item.desc}
              </p>

              <button className="mt-6 inline-flex items-center justify-center md:justify-start gap-2 text-[#e57661] font-bold hover:gap-3 transition cursor-pointer">
                विस्तार से पढ़ें
                <FiArrowRight />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* DAILY HOROSCOPE SECTION - 100% English */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#e07a63] to-[#cf624b]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-white/20 flex items-center justify-center text-3xl sm:text-5xl mb-4 sm:mb-6 backdrop-blur-md">
            <FiStar />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
            Daily Horoscope & Planetary Transits
          </h2>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl leading-8 sm:leading-9 text-white/90">
            Planetary alignments shift continuously, directly impacting your thoughts, opportunities, and daily events. The Moon's constant transit through different zodiac houses brings daily fluctuations in luck, mental state, and focus. Use our daily horoscope predictions to align with auspicious timings and Vedic remedies.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-8 px-8 py-4 rounded-full bg-white text-[#e57661] font-bold hover:scale-105 transition shadow-2xl cursor-pointer">
            Read Today's Horoscope
          </button>
        </div>
      </section>

      {/* FAQ - 100% Hindi */}
      <section className="py-12 md:py-16 lg:py-20 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-[#e57661] font-bold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#5b2d2a] mt-4 leading-[1.3] sm:leading-tight">
            राशि चक्र से जुड़े महत्वपूर्ण प्रश्नोत्तर
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-5 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f1d6cf] rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 shadow-sm text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-[#5b2d2a]">
                {item.q}
              </h3>

              <p className="text-gray-650 leading-8 mt-4">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - 100% English */}
      <section className="pt-4 pb-10 sm:pb-16 px-4 md:px-10 lg:px-20">
        <div className="bg-[#fff1ec] border border-[#f1d6cf] rounded-[30px] sm:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
            <div className="absolute top-4 sm:top-10 left-4 sm:left-10 text-[100px] sm:text-[200px] text-[#e57661]">✦</div>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto">
            <div className="w-16 h-16 sm:w-24 sm:h-24 mx-auto rounded-full bg-[#e57661] text-white flex items-center justify-center text-3xl sm:text-5xl shadow-2xl">
              <FiStar />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#5b2d2a] mt-6 sm:mt-8 leading-[1.2] sm:leading-tight">
              Unlock Your Ultimate Cosmic Blueprint
            </h2>

            <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-650 text-base sm:text-lg md:text-xl leading-8 sm:leading-9">
              Don't let cosmic alignment go unnoticed. Consult our legendary Vedic advisors today for absolute clarity on your Kundli, planetary transits, gemstone remedies, and customized lifestyle path.
            </p>

            <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-8">
              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#e57661] text-white font-bold hover:bg-[#cf624b] transition shadow-lg inline-block text-center cursor-pointer"
              >
                Book Expert Consultation
              </a>

              <button className="w-full sm:w-auto px-8 py-4 rounded-full border-2 border-[#e57661] text-[#e57661] font-bold hover:bg-[#e57661] hover:text-white transition cursor-pointer text-center">
                Chat On WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RashiDetailsPage;