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
import { link } from "framer-motion/client";
import Link from "next/link";

const grahData = [
  {
    name: "Surya Grah",
    link: "/grah/surya",
    icon: <Sun className="w-8 h-8" />,
    color: "from-orange-400 to-red-400",
    about:
      "Surya grah ko sabhi grahon ka raja mana jata hai. Yeh leadership, confidence, energy aur success ka pratik hota hai.",
    effects: [
      "Atmavishwas badhata hai",
      "Career growth deta hai",
      "Authority aur leadership deta hai",
      "Health aur energy ko strong karta hai",
    ],
    mantra: "Om Hraam Hreem Hraum Sah Suryaya Namah",
  },
  {
    name: "Chandra Grah",
    link: "/grah/chandra",
    icon: <Moon className="w-8 h-8" />,
    color: "from-slate-300 to-blue-200",
    about:
      "Chandra man aur emotions ka grah hai. Yeh shanti, creativity aur mental balance ko control karta hai.",
    effects: [
      "Mind ko calm karta hai",
      "Emotional balance deta hai",
      "Relationship ko improve karta hai",
      "Creative thinking badhata hai",
    ],
    mantra: "Om Shraam Shreem Shraum Sah Chandraya Namah",
  },
  {
    name: "Mangal Grah",
    link: "/grah/mangal",
    icon: <Flame className="w-8 h-8" />,
    color: "from-red-500 to-orange-400",
    about:
      "Mangal shakti, courage aur determination ka pratik mana jata hai. Yeh confidence aur action ko strong karta hai.",
    effects: [
      "Courage badhata hai",
      "Decision making strong karta hai",
      "Property aur land se sambandhit fayda",
      "Competition me jeet dilata hai",
    ],
    mantra: "Om Kraam Kreem Kraum Sah Bhaumaya Namah",
  },
  {
    name: "Budh Grah",
    link: "/grah/budh",
    icon: <Sparkles className="w-8 h-8" />,
    color: "from-green-400 to-emerald-500",
    about:
      "Budh intelligence, communication aur business ka grah hai. Yeh logical thinking aur communication skills ko improve karta hai.",
    effects: [
      "Communication improve hota hai",
      "Business growth deta hai",
      "Intelligence strong karta hai",
      "Learning ability badhata hai",
    ],
    mantra: "Om Braam Breem Braum Sah Budhaya Namah",
  },
  {
    name: "Guru Grah",
    link: "/grah/guru",
    icon: <Crown className="w-8 h-8" />,
    color: "from-yellow-400 to-orange-300",
    about:
      "Guru grah knowledge, wisdom aur spirituality ka pratik hai. Yeh education aur success me madad karta hai.",
    effects: [
      "Knowledge aur wisdom deta hai",
      "Education me success",
      "Marriage life improve karta hai",
      "Financial stability deta hai",
    ],
    mantra: "Om Graam Greem Graum Sah Gurave Namah",
  },
  {
    name: "Shukra Grah",
    link: "/grah/shukra",
    icon: <Heart className="w-8 h-8" />,
    color: "from-pink-400 to-rose-400",
    about:
      "Shukra love, luxury aur beauty ka grah mana jata hai. Yeh relationships aur comfort ko improve karta hai.",
    effects: [
      "Love life improve hoti hai",
      "Luxury aur comfort deta hai",
      "Art aur creativity badhata hai",
      "Marriage life strong karta hai",
    ],
    mantra: "Om Draam Dreem Draum Sah Shukraya Namah",
  },
  {
    name: "Shani Grah",
    link: "/grah/shani",
    icon: <Shield className="w-8 h-8" />,
    color: "from-gray-700 to-slate-800",
    about:
      "Shani discipline, karma aur hard work ka grah hai. Yeh insaan ko patience aur maturity sikhata hai.",
    effects: [
      "Discipline deta hai",
      "Hard work ka result deta hai",
      "Patience strong karta hai",
      "Life me stability lata hai",
    ],
    mantra: "Om Praam Preem Praum Sah Shanaye Namah",
  },
  {
    name: "Rahu Grah",
    link: "/grah/rahu",
    icon: <Orbit className="w-8 h-8" />,
    color: "from-purple-500 to-indigo-500",
    about:
      "Rahu illusion aur sudden success ka grah hai. Yeh foreign opportunities aur modern technology se juda hota hai.",
    effects: [
      "Foreign opportunities deta hai",
      "Technology aur media me growth",
      "Sudden fame deta hai",
      "Risk taking power badhata hai",
    ],
    mantra: "Om Bhraam Bhreem Bhraum Sah Rahave Namah",
  },
  {
    name: "Ketu Grah",
    link: "/grah/ketu",
    icon: <Gem className="w-8 h-8" />,
    color: "from-cyan-400 to-sky-500",
    about:
      "Ketu spirituality aur moksha ka grah hai. Yeh inner peace aur spiritual growth ko strong karta hai.",
    effects: [
      "Spiritual growth deta hai",
      "Meditation power strong karta hai",
      "Inner peace deta hai",
      "Negative energy dur karta hai",
    ],
    mantra: "Om Sraam Sreem Sraum Sah Ketave Namah",
  },
];

export default function GrahPage() {
  return (
    <div className="bg-[#fff7f5] text-[#3a2a2a] overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative py-20 md:py-28 px-4 md:px-10 lg:px-20 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#111827] to-[#1e293b]">
        {/* Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-96 h-96 bg-yellow-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT */}
          <div className="text-white">
            <span className="px-5 py-2 rounded-full bg-white/10 border border-white/10 inline-block text-sm mb-6">
              Navgrah Astrology
            </span>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Navgrah
            </h1>

            <h2 className="text-3xl md:text-5xl font-semibold text-yellow-300 mt-3">
              नवग्रह ज्ञान
            </h2>

            <p className="mt-8 text-lg md:text-xl leading-9 text-gray-300 max-w-2xl">
              In Vedic astrology, Navgrah are the nine powerful celestial
              energies that influence human life, destiny, emotions, career,
              relationships, health, and spiritual growth.
            </p>

            <div className="flex flex-wrap gap-5 mt-10">
              <button className="px-8 py-4 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition">
                Explore Grah
              </button>

              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full border border-white text-white hover:bg-white hover:text-black transition inline-block text-center"
              >
                Talk To Astrologer
              </a>

            </div>
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative w-[320px] h-[320px] md:w-[520px] md:h-[520px] rounded-full bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20 animate-spin [animation-duration:40s]" />

              <div className="text-[120px] md:text-[200px]">
                🪐
              </div>

              {/* Orbit Dots */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 text-3xl">
                ☀️
              </div>

              <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-3xl">
                🌙
              </div>

              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-3xl">
                🔥
              </div>

              <div className="absolute right-10 top-1/2 -translate-y-1/2 text-3xl">
                ✨
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <img
                src="https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop"
                alt="astrology"
                className="rounded-3xl shadow-2xl h-[500px] object-cover w-full"
              />
            </div>

            <div>
              <span className="text-[#c96e67] font-semibold uppercase tracking-widest">
                About Navgrah
              </span>

              <h2 className="text-4xl font-bold mt-4 leading-tight">
                Navgrah Kya Hote Hai?
              </h2>

              <p className="text-gray-600 leading-8 mt-6 text-lg">
                Vedic astrology me Navgrah ka bahut bada importance hota hai.
                Har grah insaan ki life ke alag-alag aspects ko control karta
                hai jaise career, health, marriage, education aur finance.
              </p>

              <p className="text-gray-600 leading-8 mt-4 text-lg">
                Kundli me kisi bhi grah ki strong ya weak position aapki life
                par direct impact dalti hai. Isi liye grah dosh aur unke upay
                astrology me important mane jate hai.
              </p>

              <div className="grid grid-cols-2 gap-5 mt-8">
                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-3xl font-bold text-[#c96e67]">9</h3>
                  <p className="text-gray-600 mt-2">Main Grah</p>
                </div>

                <div className="bg-white p-6 rounded-2xl shadow-md">
                  <h3 className="text-3xl font-bold text-[#c96e67]">12</h3>
                  <p className="text-gray-600 mt-2">Rashi Connection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRAH CARDS */}
      <section className="py-20 bg-gradient-to-b from-[#fff7f5] to-[#ffe8e3]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
              Navgrah Details
            </span>

            <h2 className="text-5xl font-bold mt-4">
              Sabhi Grah Ki Complete Information
            </h2>

            <p className="text-gray-600 leading-8 mt-5 text-lg">
              Har grah ka apna ek alag importance aur energy hoti hai jo insaan
              ki life ko influence karti hai.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
            {grahData.map((grah, index) => (
              <Link href={grah.link}
                key={index}
                className="group bg-white rounded-[30px] p-8 shadow-lg hover:-translate-y-2 duration-300 border border-[#f5d5cf]"
              >
                <div
                  className={`w-20 h-20 rounded-3xl bg-gradient-to-r ${grah.color} text-white flex items-center justify-center shadow-lg`}
                >
                  {grah.icon}
                </div>

                <h3 className="text-3xl font-bold mt-6">{grah.name}</h3>

                <p className="text-gray-600 leading-7 mt-4">
                  {grah.about}
                </p>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-3">
                    Grah Ke Prabhav
                  </h4>

                  <ul className="space-y-3">
                    {grah.effects.map((effect, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-[#c96e67] mt-2"></div>
                        <span className="text-gray-700">{effect}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 p-4 rounded-2xl bg-[#fff5f2] border border-[#f7d8d0]">
                  <p className="text-sm text-[#c96e67] font-semibold">
                    Beej Mantra
                  </p>

                  <p className="mt-2 font-medium">{grah.mantra}</p>
                </div>

                <button className="mt-8 flex items-center gap-2 text-[#c96e67] font-semibold group-hover:gap-4 duration-300">
                  Learn More <ArrowRight className="w-5 h-5" />
                </button>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* DOSH SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
                Grah Dosh
              </span>

              <h2 className="text-5xl font-bold mt-4 leading-tight">
                Grah Dosh Kya Hota Hai?
              </h2>

              <p className="text-gray-600 leading-8 mt-6 text-lg">
                Jab kundli me koi grah weak position me hota hai ya negative
                effect deta hai tab use grah dosh kaha jata hai.
              </p>

              <div className="space-y-5 mt-8">
                {[
                  "Career me problems",
                  "Marriage delay",
                  "Financial issues",
                  "Mental stress aur health problems",
                  "Relationship conflicts",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-4 bg-[#fff5f2] p-5 rounded-2xl"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#c96e67] text-white flex items-center justify-center font-bold">
                      {i + 1}
                    </div>

                    <p className="text-lg font-medium">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop"
                alt="grah dosh"
                className="rounded-[40px] shadow-2xl object-cover h-[650px] w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* REMEDIES */}
      <section className="py-24 bg-gradient-to-r from-[#c96e67] to-[#d98982]">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="text-white/80 uppercase tracking-[4px] font-semibold">
            Astrology Remedies
          </span>

          <h2 className="text-5xl font-bold text-white mt-5">
            Grah Shanti Ke Powerful Upay
          </h2>

          <p className="text-white/90 max-w-3xl mx-auto leading-8 text-lg mt-6">
            Astrology me grah dosh ko kam karne ke liye alag-alag remedies aur
            spiritual upay bataye gaye hai.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
            {[
              "Mantra Jaap",
              "Gemstone Wearing",
              "Puja & Havan",
              "Donation & Charity",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8"
              >
                <div className="w-16 h-16 rounded-2xl bg-white text-[#c96e67] flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mt-6">
                  {item}
                </h3>

                <p className="text-white/80 leading-7 mt-4">
                  Proper astrology guidance ke according remedies karne se
                  positive results milte hai.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#fff7f5]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-white rounded-[40px] shadow-2xl p-12 text-center border border-[#f5d7d1]">
            <span className="text-[#c96e67] uppercase tracking-[4px] font-semibold">
              Astrology Consultation
            </span>

            <h2 className="text-5xl font-bold mt-5 leading-tight">
              Expert Astrologer Se Guidance Le
            </h2>

            <p className="text-gray-600 leading-8 text-lg mt-6 max-w-3xl mx-auto">
              Agar aap apni kundli, grah dosh ya future ke bare me detailed
              guidance chahte hai to expert astrologer se consultation le
              sakte hai.
            </p>

            <div className="flex flex-wrap justify-center gap-5 mt-10">
              <a 
                href="https://calendly.com/bajrangastroofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c96e67] hover:bg-[#b85d57] text-white px-8 py-4 rounded-2xl font-semibold duration-300 inline-block text-center"
              >
                Book Consultation
              </a>


              <button className="border border-[#c96e67] text-[#c96e67] hover:bg-[#c96e67] hover:text-white px-8 py-4 rounded-2xl font-semibold duration-300">
                Contact Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}