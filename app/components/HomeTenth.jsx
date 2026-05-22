"use client";
import Image from "next/image";

export default function HomeTenth() {
  const cards = [
    {
      title: "Janam Kundli Analysis ",
      desc: (
        <>
          Get a deep, accurate reading of your <span className="font-semibold text-black">birth chart</span> to understand your career, health, relationships, and life path.
        </>
      ),

      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431898/Astro_Reading_wybndz.png",
    },
    {
      title: "Kundli Matching ",
      desc: (
        <>
          Check <span className="font-semibold text-black">marriage compatibility</span> between two people based on their birth charts — before taking the biggest decision of your life.
        </>
      ),

      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431898/Compatibility_pylzmh.png",
    },
    {
      title: "Daily Horoscope",
      desc: (
        <>
          Know what the <span className="font-semibold text-black">planets have planned</span> for you today in career, love, health, and finances, and make smarter decisions.
        </>
      ),
      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431897/Horoscope_qfgoit.png",
    },
    {
      title: "Palm Reading ",
      desc: (
        <>
          Your hands reveal your future. Get an expert <span className="font-semibold text-black">Hast Rekha analysis</span> for career, marriage, wealth, and life timeline.
        </>
      ),

      icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776431897/Personal_Gems_eeho4j.png",
    },
  ];

  return (
    <section className="bg-[#FDFDFD] max-w-[1720px] mx-auto py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-[60%_40%] gap-12 items-center ">

        {/* LEFT SIDE (CARDS) */}
        <div className=" grid sm:grid-cols-2 gap-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-[#E57661] p-9 flex flex-col gap-4 h-full  transition"
            >

              <div className="w-16 h-16 relative mx-auto md:mx-0">
                <Image
                  src={card.icon}
                  alt={card.title}
                  fill
                  className="object-contain"
                />
              </div>


              <h6 className=" text-[22px] md:text-[32px] font-medium text-[#303030] text-center md:text-left">
                {card.title}
              </h6>

              <p className="text-[#5A5A5A] text-[17px] md:text-[20px] leading-relaxed text-center md:text-left">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* RIGHT SIDE (IMAGE) */}

        <div className="flex justify-center xl:justify-start mt-10 xl:mt-0">
          <Image
            src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776431899/There_are_many_variations_of_passages_of_Lorem_Ipsum_available_but_the_majority_yqmjyr.png"
            alt="astro"
            width={480}
            height={480}
            priority
            className="w-full max-w-[480px] h-auto object-contain"
          />
        </div>

      </div>
    </section>
  );
}


