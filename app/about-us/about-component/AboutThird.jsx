"use client";

import Image from "next/image";

export default function AboutThird() {
  const data = [
    {
      title: "Mission",
      desc: "To provide honest, accurate, and practical Vedic astrology consultation, Janam Kundli analysis, and Vastu consulting, helping every individual and family across India live a life of clarity, peace, and prosperity.",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776500045/Mission_nldevz.png",
      bg: "bg-[#FFFFFF]",
      text: "text-[#303030]",
      linkColor: "text-[#E57661]",
      btnText: "Call Now",
    },
    {
      title: "Vision",
      desc: "To become India's most trusted name in online astrology services and Vastu Shastra, where every person, from any corner of the world, can access the best astrologer in India, Pandit Vishal Johari, with ease.",
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776500045/Vision_bqc7zo.png",
      bg: "bg-[#E57661]",
      text: "text-white",
      linkColor: "text-white",
      btnText: "Explore More",
    },
  ];

  return (
    <section className="max-w-[1720px] mx-auto px-4 md:px-10 lg:px-20 py-10 md:py-16 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${item.bg} ${item.text} rounded-2xl p-6 md:p-14 flex flex-col justify-between `}
          >
            {/* Top Content */}
            <div>
              {/* Icon */}
              <div className="mb-10">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={30}
                  height={30}
                />
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-3xl font-[500] mb-10">
                {item.title}
              </h2>

              {/* Description */}
              <p className="text-[18px] md:text-[20px] leading-relaxed max-w-md">
                {item.desc}
              </p>
            </div>

            {/* Bottom Link */}
            <div className="mt-10">
              <a
                href={item.btnText === "Call Now" ? "tel:+918595046368" : "#"}
                className={`flex items-center cursor-pointer gap-2 text-sm md:text-base font-medium ${item.linkColor} group`}
              >
                {item.btnText}
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
