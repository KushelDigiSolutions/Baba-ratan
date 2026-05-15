import Image from "next/image";
import { Headset } from "lucide-react";


export default function AboutSixth() {
  return (
    <section className="bg-white xl:py-5 py-10 px-4 md:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto grid xl:grid-cols-2 gap-12 items-center">

        {/* LEFT CONTENT */}
        <div>
          <p className="text-sm tracking-widest text-[#E57661] font-semibold mb-4">
            WHY BAJRANG ASTRO
          </p>

          <h4 className="text-4xl md:text-5xl font-[400] text-[#0D1C32] mb-6">
            Why Choose Us
          </h4>

          <p className="text-[#303030] text-[19px] leading-relaxed mb-10 max-w-xl">
            Vishal Verma blends ancient Vedic astrology with honest, modern guidance, creating accurate Kundli readings and real life solutions that align with your unique birth chart.
          </p>

          {/* FEATURES */}
          <div className="grid sm:grid-cols-2 gap-8">

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#E57661] px-4  py-3 rounded-[10px]">
                <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776508591/LIVE_INSIGHT_2_p8ccls.png" alt="LIVE_INSIGHT_2" width={18} height={18} />
              </div>
              <div>
                <h4 className="font-[500] text-xl text-[#0D1C32]">
                  Experienced Astrologer
                </h4>
                <p className="text-[#303030] text-[16px] max-w-[260px]">
                  15+ years of expertise in Janam Kundli analysis, palm reading in Delhi, and Vastu consulting across India.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#E57661]   px-5  py-4 rounded-[10px] shrink-0">
                <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776508590/LIVE_INSIGHT_3_gkmaaa.png" alt="LIVE_INSIGHT_3" width={13} height={13} />
              </div>
              <div>
                <h4 className="font-[500] text-xl  text-[#0D1C32]">
                  Practical Solutions
                </h4>
                <p className="text-[#303030] text-[16px] max-w-[260px]">
                  Clear, actionable remedies based on your Janam Kundli are designed for real life, not just theory.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#E57661] px-4 py-3 rounded-[10px] shrink-0">
                <Headset className="text-white" size={24} />

              </div>
              <div className="max-w-[260px]">
                <h4 className="font-[500] whitespace-nowrap text-xl text-[#0D1C32]">
                  Personalised Consultation
                </h4>
                <p className="text-[#303030] text-[16px] ">
                  Every session tailored to your exact birth details and life situation.
                </p>
              </div>
            </div>

            {/* ITEM */}
            <div className="flex gap-4 items-start">
              <div className="bg-[#E57661] px-4 py-[17px]  rounded-[10px] shrink-0">
                <Image src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776508591/LIVE_INSIGHT_5_psc8th.png" alt="LIVE_INSIGHT_5" width={20} height={20} />
              </div>
              <div>
                <h5 className="font-[500] text-xl text-[#0D1C32]">
                  Proven Results
                </h5>
                <p className="text-[#303030] text-[16px] max-w-[260px]">
                  1000+ lives transformed through online astrology services across India.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE CARDS */}

        <div className="flex justify-center items-center h-full">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] xl:translate-y-10">
            <Image
              src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776751668/Why_Choose_Us_we5rmo.png"
              alt="Why_Choose_Us_"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
