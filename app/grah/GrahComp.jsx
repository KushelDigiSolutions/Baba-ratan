"use client";

import React from "react";
import {
  Sun,
  Moon,
  Flame,
  Star,
  Sparkles,
  Orbit,
  Shield,
  Gem,
  Heart,
  Crown,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const grahData = [
  {
    name: "Surya Grah (Sun)",
    link: "/grah/surya",
    icon: <Sun className="w-8 h-8" />,
    color: "from-orange-400 to-red-400",
    about:
      "Surya, the cosmic king, governs soul vitality, immense authority, and unparalleled career growth in Vedic astrology.",
    effects: [
      "Ignites unshakeable self-confidence",
      "Attracts prestigious leadership roles",
      "Guarantees rapid career advancement",
      "Enhances physical and mental vitality",
    ],
    mantra: "Om Hraam Hreem Hraum Sah Suryaya Namah",
  },
  {
    name: "Chandra Grah (Moon)",
    link: "/grah/chandra",
    icon: <Moon className="w-8 h-8" />,
    color: "from-slate-300 to-blue-200",
    about:
      "The Moon signifies emotional intelligence, deep inner peace, and boundless creativity, guiding your subconscious mind.",
    effects: [
      "Restores profound mental tranquility",
      "Cultivates deep emotional harmony",
      "Strengthens interpersonal relationships",
      "Unleashes powerful creative potential",
    ],
    mantra: "Om Shraam Shreem Shraum Sah Chandraya Namah",
  },
  {
    name: "Mangal Grah (Mars)",
    link: "/grah/mangal",
    icon: <Flame className="w-8 h-8" />,
    color: "from-red-500 to-orange-400",
    about:
      "Mars embodies fierce courage, boundless physical energy, and the unyielding willpower to conquer all life obstacles.",
    effects: [
      "Fosters fearless decision-making",
      "Boosts stamina and athletic drive",
      "Ensures victory in legal disputes",
      "Resolves complex property matters",
    ],
    mantra: "Om Kraam Kreem Kraum Sah Bhaumaya Namah",
  },
  {
    name: "Budh Grah (Mercury)",
    link: "/grah/budh",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-green-400 to-emerald-500",
    about:
      "Mercury represents intellectual brilliance, exceptional communication, and strategic acumen in commerce and trading.",
    effects: [
      "Sharpens analytical and logical skills",
      "Enhances eloquence and public speaking",
      "Drives massive business profitability",
      "Accelerates learning and academics",
    ],
    mantra: "Om Braam Breem Braum Sah Budhaya Namah",
  },
  {
    name: "Guru Grah (Jupiter)",
    link: "/grah/guru",
    icon: <Crown className="w-8 h-8" />,
    color: "from-yellow-400 to-orange-300",
    about:
      "Jupiter is the grand benefactor of wisdom, divine grace, spiritual expansion, and boundless prosperity.",
    effects: [
      "Attracts immense wealth and fortune",
      "Blesses with profound wisdom",
      "Ensures a harmonious married life",
      "Protects against negative energies",
    ],
    mantra: "Om Graam Greem Graum Sah Gurave Namah",
  },
  {
    name: "Shukra Grah (Venus)",
    link: "/grah/shukra",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-400 to-rose-400",
    about:
      "Venus radiates the energies of supreme luxury, artistic beauty, material comforts, and eternal romantic bliss.",
    effects: [
      "Draws passionate romantic love",
      "Manifests high-end material wealth",
      "Elevates artistic and creative talents",
      "Ensures luxurious living standards",
    ],
    mantra: "Om Draam Dreem Draum Sah Shukraya Namah",
  },
  {
    name: "Shani Grah (Saturn)",
    link: "/grah/shani",
    icon: <Shield className="w-8 h-8" />,
    color: "from-gray-700 to-slate-800",
    about:
      "Saturn is the ultimate karmic judge, instilling iron-clad discipline, immense patience, and long-lasting achievements.",
    effects: [
      "Rewards unwavering hard work",
      "Builds enduring life stability",
      "Teaches profound spiritual lessons",
      "Nullifies past negative karmic debts",
    ],
    mantra: "Om Praam Preem Praum Sah Shanaye Namah",
  },
  {
    name: "Rahu Grah (North Node)",
    link: "/grah/rahu",
    icon: <Orbit className="w-8 h-8" />,
    color: "from-gray-500 to-zinc-700",
    about:
      "Rahu fuels insatiable ambition, sudden material gains, and massive technological or foreign success.",
    effects: [
      "Unlocks lucrative foreign opportunities",
      "Triggers sudden wealth accumulation",
      "Enhances technological proficiency",
      "Fuels massive worldly ambitions",
    ],
    mantra: "Om Bhraam Bhreem Bhraum Sah Rahave Namah",
  },
  {
    name: "Ketu Grah (South Node)",
    link: "/grah/ketu",
    icon: <Gem className="w-8 h-8" />,
    color: "from-zinc-400 to-stone-500",
    about:
      "Ketu represents deep spiritual liberation, mystical intuition, and detachment from worldly illusions.",
    effects: [
      "Accelerates spiritual awakening",
      "Enhances profound intuition",
      "Removes deep-seated hidden fears",
      "Guides towards ultimate Moksha",
    ],
    mantra: "Om Sraam Sreem Sraum Sah Ketave Namah",
  },
];

export default function GrahPage() {
  return (
    <div className="bg-[#fff7f5] text-[#3a2a2a] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-12 lg:py-20 px-4 md:px-10 lg:px-20 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="text-white flex flex-col items-center text-center lg:items-start lg:text-left">
            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 inline-block text-sm mb-6 font-semibold">
              Vedic Astrological Guidance
            </span>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Unlock Celestial Wisdom
            </h1>

            <h2 className="text-3xl md:text-4xl font-semibold text-yellow-300 mt-2">
              The 9 Cosmic Influences
            </h2>

            <p className="mt-6 text-lg md:text-xl leading-9 text-gray-300 max-w-2xl mx-auto lg:mx-0">
              Embark on a profound spiritual journey by discovering how the Navagrahas—the nine divine planetary forces—shape every aspect of your existence, from immense wealth to profound inner peace.
            </p>

            <div className="flex flex-wrap gap-5 mt-8">
              <button 
                onClick={() => {
                  document.getElementById("grah-knowledge-base")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition cursor-pointer"
              >
                Discover Planets
              </button>

              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition inline-block text-center font-semibold"
              >
                Consult Expert
              </a>
            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[480px] md:h-[480px] max-w-full rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[90px] sm:text-[120px] md:text-[180px]">
                🪐
              </div>

              {/* Orbit Dots */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl animate-bounce">
                ☀️
              </div>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl">
                🌙
              </div>

              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl animate-pulse">
                🔥
              </div>

              <div className="absolute right-10 top-1/2 -translate-y-1/2 text-2xl sm:text-3xl">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                alt="astrology"
                className="rounded-3xl shadow-2xl h-[450px] object-cover w-full"
              />
            </div>

            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <span className="text-[#c96e67] font-semibold uppercase tracking-widest">
                ग्रहों का रहस्य
              </span>

              <h2 className="text-4xl font-bold mt-4 leading-[1.3]">
                नवग्रह का हमारे जीवन में क्या महत्व है?
              </h2>

              <p className="text-gray-600 leading-8 mt-6 text-lg">
                सनातन वैदिक ज्योतिष में नवग्रहों की भूमिका अत्यंत महत्वपूर्ण है। ये नौ दिव्य ग्रह आपकी किस्मत, व्यापार, दांपत्य जीवन और स्वास्थ्य की दिशा तय करते हैं।
              </p>

              <p className="text-gray-600 leading-8 mt-4 text-lg">
                जब कोई ग्रह शुभ अवस्था में होता है, तो वह व्यक्ति को अपार सफलता दिलाता है। इसके विपरीत, नीच या अशुभ ग्रह जीवन में कई परेशानियां और रुकावटें पैदा करते हैं, जिनका ज्योतिषीय समाधान आवश्यक है।
              </p>

              <div className="grid grid-cols-2 gap-5 mt-6">
                <div className="bg-white p-6 border border-[#f5d5cf] rounded-2xl shadow-sm">
                  <h3 className="text-3xl font-bold text-[#c96e67]">9</h3>
                  <p className="text-gray-600 mt-2">प्रमुख ग्रह</p>
                </div>

                <div className="bg-white p-6 border border-[#f5d5cf] rounded-2xl shadow-sm">
                  <h3 className="text-3xl font-bold text-[#c96e67]">12</h3>
                  <p className="text-gray-600 mt-2">राशियों पर प्रभाव</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRAH CARDS */}
      <section id="grah-knowledge-base" className="py-12 lg:py-20 bg-gradient-to-b from-[#fff7f5] to-[#ffe8e3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
              Cosmic Energies
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-4">
              Navagraha Knowledge Base
            </h2>

            <p className="text-gray-600 leading-8 mt-4 text-lg">
              Each celestial body emits powerful vibrations that directly influence your fate. Gain deeper insights into the distinct traits and divine benefits of all nine planetary forces.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">
            {grahData.map((grah, index) => (
              <Link href={grah.link}
                key={index}
                className="group bg-white rounded-[30px] p-8 shadow-sm hover:shadow-xl duration-300 border border-[#f5d5cf] flex flex-col h-full hover:-translate-y-2 cursor-pointer items-center text-center md:items-start md:text-left"
              >
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${grah.color} text-white flex items-center justify-center shadow-md shrink-0`}
                >
                  {grah.icon}
                </div>

                <h3 className="text-3xl font-bold mt-6">{grah.name}</h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {grah.about}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-3">
                    Astrological Benefits
                  </h4>

                  <ul className="space-y-3">
                    {grah.effects.map((effect, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c96e67] mt-2 shrink-0"></div>
                        <span className="text-gray-700">{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto pt-6">
                  <div className="p-4 rounded-2xl bg-[#fff5f2] border border-[#f7d8d0]">
                    <p className="text-sm text-[#c96e67] font-semibold">
                      Beej Mantra
                    </p>

                    <p className="mt-2 font-medium">{grah.mantra}</p>
                  </div>

                  <button className="mt-6 flex items-center justify-center md:justify-start gap-2 text-[#c96e67] font-semibold group-hover:gap-4 duration-300 cursor-pointer">
                    Learn More <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOSH SECTION */}
      <section className="py-12 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
              <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
                अशुभ ग्रहों का प्रभाव
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-[1.3]">
                ग्रह दोष क्या है और इसके लक्षण?
              </h2>

              <p className="text-gray-600 leading-8 mt-6 text-lg">
                ज्योतिष के अनुसार, जब जन्म चक्र में कोई ग्रह कमजोर, वक्री या शत्रु राशि में होता है, तो वह अशुभ फल देने लगता है। इस अवस्था को 'ग्रह दोष' कहा जाता है, जो जीवन में निरंतर बाधाओं का कारण बनता है।
              </p>

              <div className="space-y-4 mt-6">
                {[
                  "व्यापार में घाटा और नौकरी में बार-बार रुकावट",
                  "विवाह में अत्यधिक विलंब और पारिवारिक विवाद",
                  "अचानक धन का नुकसान और बढ़ता हुआ कर्ज",
                  "मानसिक अशांति और अज्ञात शारीरिक बीमारियां",
                  "मित्रों और सगे-संबंधियों से बिना कारण मतभेद",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#fff5f2] p-4 rounded-2xl border border-[#f7d8d0]"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#c96e67] text-white flex items-center justify-center font-bold shrink-0">
                      {i + 1}
                    </div>

                    <p className="text-base font-medium text-left">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt="grah dosh"
                className="rounded-[40px] shadow-2xl object-cover h-[550px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section className="py-12 lg:py-20 bg-gradient-to-r from-[#c96e67] to-[#d98982]">
        <div className="max-w-6xl mx-auto px-6 text-center text-white">
          <span className="text-white/80 uppercase tracking-[4px] font-semibold">
            Spiritual Healing
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4">
            Potent Astrological Remedies
          </h2>

          <p className="text-white/90 max-w-3xl mx-auto leading-8 text-lg mt-6">
            Discover deeply powerful and authentic Vedic methods to eliminate severe Graha Doshas, calm malefic planets, and harmonize your life's cosmic energy.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {[
              "Sacred Mantras",
              "Gemstone Therapy",
              "Vedic Yagyas",
              "Acts of Charity",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-6 text-center"
              >
                <div className="w-14 h-14 rounded-2xl bg-white text-[#c96e67] flex items-center justify-center mx-auto shadow-md animate-pulse">
                  <Star className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mt-6">
                  {item}
                </h3>

                <p className="text-white/85 leading-7 mt-4 text-sm">
                  Performing these sacred rituals under expert guidance ensures a blessed and prosperous future.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 lg:py-20 bg-[#fff7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl p-10 text-center border border-[#f5d7d1]">
            <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
              व्यक्तिगत मार्गदर्शन
            </span>

            <h2 className="text-4xl font-bold mt-4 leading-[1.3]">
              अनुभवी ज्योतिषियों से बात करें
            </h2>

            <p className="text-gray-600 leading-8 text-lg mt-4 max-w-3xl mx-auto">
              क्या आप जानना चाहते हैं कि कौन सा ग्रह आपको सफलता दिला सकता है? अभी हमारे ज्योतिष विशेषज्ञों से जुड़ें और अपने जीवन की हर समस्या का अचूक और प्रामाणिक समाधान पाएं।
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-8">
              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c96e67] hover:bg-[#b85d57] text-white px-8 py-4 rounded-2xl font-semibold duration-300 inline-block text-center shadow-md cursor-pointer"
              >
                अपॉइंटमेंट फिक्स करें
              </a>

              <button className="border border-[#c96e67] text-[#c96e67] hover:bg-[#c96e67] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300 cursor-pointer">
                अधिक जानकारी
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}