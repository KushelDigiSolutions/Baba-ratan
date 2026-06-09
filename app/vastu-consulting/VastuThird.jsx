'use client'
import Image from "next/image";

const VastuThird = () => {
  return (
    <div className="max-w-[1720px] mx-auto bg-[#F3F3F3] py-6 xl:py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl md:mx-10 xl:mx-auto">

        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[750px] ">
          <Image
            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780994529/Vastu_Shastra_Expert_India_Vishal_Verma_Bajrang_Astro_fvqqfu.webp"
            alt="Home Vastu Consulting Expert India — Bajrang Astro"
            fill
            className="object-contain xl:object-cover"
            priority
          />
        </div>

        <div className="relative w-full h-[400px] sm:h-[400px] md:h-[750px]">
          <Image
            src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780994528/Vastu_Consulting_for_Business_India_Bajrang_Astro_xvuxbd.webp"
            alt="Home Vastu Consulting Expert India — Bajrang Astro"
            fill
            className="object-contain xl:object-cover"
          />
        </div>

      </div>
    </div>
  );
};

export default VastuThird