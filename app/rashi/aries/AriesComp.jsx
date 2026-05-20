"use client";

import React from "react";
import {
  FiStar,
  FiHeart,
  FiBriefcase,
  FiSmile,
  FiSun,
  FiArrowRight,
} from "react-icons/fi";

const traits = [
  "आत्मविश्वासी",
  "ऊर्जावान",
  "नेतृत्वकर्ता",
  "उत्साही",
  "वीर",
  "स्वतंत्र",
];

const luckyThings = [
  { label: "Lucky Color", value: "Deep Red" },
  { label: "Lucky Number", value: "9" },
  { label: "Lucky Day", value: "Tuesday" },
  { label: "Ruling Planet", value: "Mars" },
  { label: "Element", value: "Fire" },
  { label: "Compatible Signs", value: "Leo, Sagittarius" },
];

const faqData = [
  {
    q: "मेष राशि के जातक मुख्य रूप से किस स्वभाव के लिए जाने जाते हैं?",
    a: "मेष राशि के लोग अपने अदम्य साहस, असाधारण नेतृत्व क्षमता, अटूट आत्मविश्वास और स्वतंत्र विचारों के लिए जाने जाते हैं।",
  },
  {
    q: "मेष राशि का स्वामी ग्रह कौन सा है?",
    a: "मेष राशि का स्वामी ग्रह मंगल है, जो शक्ति, पराक्रम, गतिशीलता और जीवन शक्ति का प्रतिनिधित्व करता है।",
  },
  {
    q: "मेष राशि के जातकों के लिए कौन सा करियर क्षेत्र सबसे उत्तम है?",
    a: "सेना, पुलिस, रक्षा सेवाएं, प्रबंधन, खेलकूद, प्रशासनिक सेवाएं और नए स्टार्टअप की शुरुआत करना इनके लिए सर्वोत्तम है।",
  },
];

const AriesRashiPage = () => {
  return (
    <div className="w-full bg-[#fff8f5] overflow-hidden">
      {/* HERO SECTION - English */}
      <section className="relative py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-br from-[#d96d55] to-[#b85645]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
          {/* Left */}
          <div className="text-white text-center lg:text-left">
            <span className="inline-block px-4 py-1 rounded-full bg-white/20 text-xs sm:text-sm font-medium mb-5">
              Zodiac Sign Details
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.2] sm:leading-tight">
              Aries Rashi <br className="hidden sm:block" />
              <span className="text-[#ffe0d7]">(मेष राशि)</span>
            </h1>

            <p className="mt-4 sm:mt-6 text-base sm:text-lg leading-7 sm:leading-8 text-white/90 max-w-2xl mx-auto lg:mx-0">
              Aries, the very first sign of the zodiac wheel, is ruled by the fiery planet Mars. Symbolized by the ram, Aries natives embody unyielding courage, absolute determination, and a fierce pioneering spirit that drives them to lead and conquer all challenges.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-6 sm:mt-8 justify-center lg:justify-start">
              <button className="w-full sm:w-auto px-7 py-3 rounded-full bg-white text-[#d96d55] font-semibold hover:scale-105 transition">
                Read Horoscope
              </button>

              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-7 py-3 rounded-full border border-white text-white hover:bg-white hover:text-[#d96d55] transition inline-block text-center"
              >
                Talk To Astrologer
              </a>
            </div>
          </div>

          {/* Right */}
          <div className="flex justify-center order-first lg:order-last">
            <div className="relative">
              <div className="w-[220px] h-[220px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                <div className="text-[90px] sm:text-[140px] md:text-[180px] text-white">
                  ♈
                </div>
              </div>

              {/* Floating Glow */}
              <div className="absolute -top-5 -left-5 w-20 h-20 bg-white/20 rounded-full blur-2xl" />
              <div className="absolute bottom-0 right-0 w-24 h-24 bg-yellow-300/20 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT SECTION - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
          {/* Image */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1516575150278-77136aed6920?q=80&w=1400&auto=format&fit=crop"
              alt="Aries"
              className="w-full rounded-[24px] sm:rounded-[30px] shadow-xl object-cover h-[300px] sm:h-[450px]"
            />
          </div>

          {/* Content */}
          <div className="mt-6 lg:mt-0 flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="text-[#d96d55] font-semibold uppercase tracking-wider text-sm sm:text-base">
              मेष राशि के बारे में
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4e2723] mt-3 leading-[1.3] sm:leading-tight">
              मेष राशि के जातकों का व्यक्तित्व
            </h2>

            <p className="text-gray-600 mt-6 leading-8 text-lg">
              मेष राशि के जातक स्वभाव से अत्यंत साहसी, निडर और ऊर्जा से भरपूर होते हैं। वे किसी भी नए कार्य या उद्यम की शुरुआत करने से कभी पीछे नहीं हटते और हमेशा अग्रणी भूमिका निभाते हैं। उनका यह मजबूत आत्मविश्वास दूसरों को भी प्रेरित करता है।
            </p>

            <p className="text-gray-600 mt-4 leading-8 text-lg">
              वे जीवन में नई चुनौतियों, रोमांच और प्रतिस्पर्धा को बहुत पसंद करते हैं। मेष राशि के लोग स्वभाव से सीधे और बेहद ईमानदार होते हैं, हालांकि जल्दबाजी में लिए गए निर्णयों के कारण कभी-कभी इनके व्यवहार में अधीरता या गुस्सा भी देखा जा सकता है।
            </p>

            {/* Traits */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-3 sm:gap-4 mt-6 sm:mt-8">
              {traits.map((item, index) => (
                <div
                  key={index}
                  className="px-4 sm:px-5 py-2 sm:py-3 rounded-full bg-[#fff1ec] border border-[#f4cfc4] text-[#a14f40] font-medium text-sm sm:text-base"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LUCKY THINGS - English */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20 bg-white">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider text-sm sm:text-base">
            Astrology Details
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4e2723] mt-3 leading-[1.3] sm:leading-tight">
            Lucky Things For Aries
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {luckyThings.map((item, index) => (
            <div
              key={index}
              className="bg-[#fff7f4] border border-[#f3d8d0] rounded-2xl sm:rounded-3xl p-5 sm:p-7 hover:shadow-xl transition flex flex-col items-center text-center sm:items-start sm:text-left"
            >
              <h3 className="text-[#d96d55] text-sm sm:text-lg font-semibold">
                {item.label}
              </h3>

              <p className="text-xl sm:text-3xl font-bold text-[#4e2723] mt-2 sm:mt-3">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LIFE SECTIONS - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider text-sm sm:text-base">
            मेष राशि के प्रमुख प्रभाव क्षेत्र
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4e2723] mt-3 leading-[1.3] sm:leading-tight">
            प्रेम, करियर और स्वास्थ्य का विश्लेषण
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Love */}
          <div className="bg-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <FiHeart className="text-[#d96d55] text-4xl sm:text-5xl mb-4 sm:mb-6" />

            <h3 className="text-xl sm:text-2xl font-bold text-[#4e2723]">
              प्रेम और संबंध
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              मेष राशि के लोग प्रेम संबंधों में अत्यधिक जुनूनी और वफादार साथी साबित होते हैं। वे अपने रिश्तों में पूरी ईमानदारी की उम्मीद करते हैं और हमेशा उत्साह व जीवंतता बनाए रखते हैं।
            </p>
          </div>

          {/* Career */}
          <div className="bg-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <FiBriefcase className="text-[#d96d55] text-4xl sm:text-5xl mb-4 sm:mb-6" />

            <h3 className="text-xl sm:text-2xl font-bold text-[#4e2723]">
              करियर और वित्त
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              मेष राशि के जातक प्रशासनिक सेवाओं, नए व्यापारिक उपक्रमों, खेलकूद, सेना और रक्षा के क्षेत्रों में सर्वोत्तम प्रदर्शन करते हैं। इनके साहसिक निर्णय इन्हें तेजी से ऊंचाइयों पर ले जाते हैं।
            </p>
          </div>

          {/* Health */}
          <div className="bg-white rounded-[24px] sm:rounded-[30px] p-6 sm:p-8 shadow-md hover:shadow-2xl transition flex flex-col items-center text-center lg:items-start lg:text-left">
            <FiSmile className="text-[#d96d55] text-4xl sm:text-5xl mb-4 sm:mb-6" />

            <h3 className="text-xl sm:text-2xl font-bold text-[#4e2723]">
              स्वास्थ्य और कल्याण
            </h3>

            <p className="text-gray-600 leading-7 mt-4">
              शारीरिक रूप से ये जातक काफी सक्रिय होते हैं, लेकिन इन्हें अत्यधिक मानसिक तनाव और गुस्से से बचना चाहिए। योग, नियमित ध्यान और पर्याप्त नींद इनके मानसिक स्वास्थ्य को संतुलित रखती है।
            </p>
          </div>
        </div>
      </section>

      {/* DAILY HOROSCOPE - English */}
      <section className="py-12 sm:py-12 lg:py-20 px-4 md:px-10 lg:px-20 bg-gradient-to-r from-[#d96d55] to-[#b85645]">
        <div className="max-w-5xl mx-auto text-center text-white">
          <FiSun className="mx-auto text-4xl sm:text-6xl mb-4 sm:mb-6" />

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
            Today's Aries Horoscope
          </h2>

          <p className="mt-4 sm:mt-8 text-base sm:text-lg leading-7 sm:leading-8 text-white/90">
            Today brings highly dynamic cosmic vibrations for Aries natives. The alignment of your ruling planet Mars ignites your professional sector, welcoming new business ventures and rapid growth. Stay focused, trust your instincts, avoid minor verbal clashes, and channel your robust energy into complete productivity.
          </p>

          <button className="w-full sm:w-auto mt-6 sm:mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-[#d96d55] font-semibold hover:scale-105 transition">
            Read Full Horoscope
            <FiArrowRight />
          </button>
        </div>
      </section>

      {/* FAQ - Hindi */}
      <section className="py-12 lg:py-16 px-4 md:px-10 lg:px-20">
        <div className="text-center mb-10 sm:mb-14">
          <span className="text-[#d96d55] font-semibold uppercase tracking-wider text-sm sm:text-base">
            अक्सर पूछे जाने वाले प्रश्न
          </span>

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4e2723] mt-3 leading-[1.3] sm:leading-tight">
            मेष राशि से जुड़े मुख्य प्रश्न
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#f0d5cd] rounded-2xl sm:rounded-3xl p-5 sm:p-7 text-center md:text-left flex flex-col items-center md:items-start"
            >
              <h3 className="text-lg sm:text-xl font-bold text-[#4e2723]">
                {item.q}
              </h3>

              <p className="text-gray-600 mt-4 leading-7">
                {item.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA - English */}
      <section className="pt-4 pb-10 sm:pb-16 px-4 md:px-10 lg:px-20">
        <div className="bg-[#fff1ec] border border-[#f3d3c9] rounded-[24px] sm:rounded-[36px] md:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 text-center">
          <FiStar className="mx-auto text-4xl sm:text-6xl text-[#d96d55] mb-4 sm:mb-6" />

          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#4e2723] leading-[1.2] sm:leading-tight">
            Get Personal Astrology Guidance
          </h2>

          <p className="max-w-3xl mx-auto mt-4 sm:mt-6 text-gray-600 text-base sm:text-lg leading-7 sm:leading-8">
            Connect with our elite Vedic astrologers to unlock authentic Janam Kundli analysis, career transitions, relationship compatibility scores, and powerful Vedic remedies.
          </p>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-5 mt-6 sm:mt-10">
            <a 
              href="https://calendly.com/bajrangastroofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#d96d55] text-white font-semibold hover:bg-[#bf573f] transition inline-block text-center"
            >
              Book Consultation
            </a>

            <button className="w-full sm:w-auto px-8 py-4 rounded-full border border-[#d96d55] text-[#d96d55] font-semibold hover:bg-[#d96d55] hover:text-white transition">
              Chat On WhatsApp
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AriesRashiPage;