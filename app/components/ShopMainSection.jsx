"use client";
import React, { useState } from "react";
import ShopProductCard from "./ShopProductCard";
import ShopPagination from "./ShopPagination";
import MobileSlider from "./MobileSlider";
import { FiArrowRight } from "react-icons/fi";

const BASE_GEMSTONES = [
  {
    id: 1,
    name: "Ruby / Manik",
    gemstone: "Ruby (Manik)",
    planet: "Sun",
    purpose: "Success",
    isCertified: true,
    tags: ["Wealth", "Success"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776751680/Ruby_Manik_xhvk84.png",
    description: "Align with the Sun's vigor to command authority and professional prosperity.",
    price: 1250,
    imageBg: "bg-[#F6F1EA]",
  },
  {
    id: 2,
    name: "Blue Sapphire / Neelam",
    gemstone: "Blue Sapphire (Neelam)",
    planet: "Saturn",
    purpose: "Wealth and Fortune",
    isCertified: false,
    tags: ["Discipline"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776751679/Blue_Sapphire_Neelam_ovbhn5.png",
    description: "The gem of Saturn, bringing focus and rapid karmic alignment for serious spiritual seekers.",
    price: 890,
    imageBg: "bg-black",
  },
  {
    id: 3,
    name: "Emerald / Panna",
    gemstone: "Emerald (Panna)",
    planet: "Mercury",
    purpose: "Career",
    isCertified: true,
    tags: ["Wisdom"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776753945/Emerald_Panna_oqa6uw.png",
    description: "Harness Mercury's sharp intellect and communication power for business success.",
    price: 1020,
    imageBg: "bg-[#E8F3F1]",
  },
  {
    id: 4,
    name: "Yellow Sapphire / Pukhraj",
    gemstone: "Yellow Sapphire",
    planet: "Jupiter",
    purpose: "Wealth and Fortune",
    isCertified: true,
    tags: ["Prosperity"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776753944/Yellow_Sapphire_Pukhraj_ddkt9o.png",
    description: "Jupiter's stone for fortune, abundance, and marital bliss. A symbol of royal grace.",
    price: 1550,
    imageBg: "bg-[#FDF7E7]",
  },
  {
    id: 5,
    name: "Pearl / Moti",
    gemstone: "Pearl (Moti)",
    planet: "Moon",
    purpose: "Health",
    isCertified: false,
    tags: ["Peace"],
    image: "https://res.cloudinary.com/daup99ghe/image/upload/v1776753943/Pearl_Moti_zeplzm.png",
    description: "Moon's calm energy for emotional balance and mental clarity in stressful times.",
    price: 450,
    imageBg: "bg-[#F7F8FA]",
  },
];

// Generating 36 dummy items for multi-page demo
const ALL_GEMSTONES = Array.from({ length: 36 }).map((_, index) => {
  const base = BASE_GEMSTONES[index % BASE_GEMSTONES.length];
  return {
    ...base,
    id: index + 1,
    isCertified: false, // Certified tag only for featured items
    name: base.name,
  };
});

const ITEMS_PER_PAGE = 6;

const ShopMainSection = ({ selectedFilters = { Purpose: '', Planet: '', Gemstone: '' } }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter logic
  const filteredProducts = ALL_GEMSTONES.filter(product => {
    const matchesPurpose = !selectedFilters.Purpose || product.purpose === selectedFilters.Purpose;
    const matchesPlanet = !selectedFilters.Planet || product.planet === selectedFilters.Planet;
    const matchesGemstone = !selectedFilters.Gemstone || product.gemstone === selectedFilters.Gemstone;
    return matchesPurpose && matchesPlanet && matchesGemstone;
  });

  const totalPages = Math.ceil(filteredProducts.length / ITEMS_PER_PAGE);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilters]);

  // Get current page items
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentItems = filteredProducts.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section
      className="pt-10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-30">

        {/* 🔥 Top Featured Grid - 2 columns at 768px, custom split at lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-6 mb-7 items-start">
          <div className="md:-mt-4">
            <ShopProductCard product={BASE_GEMSTONES[0]} showArrow={true} />
          </div>
          <div className="md:mt-0 lg:mt-19">
            <ShopProductCard product={BASE_GEMSTONES[1]} />
          </div>
        </div>

        {/* 💎 CTA SECTION - Not sure which gemstone... */}
        <div className="relative overflow-hidden rounded-[30px] bg-[#B05B48] px-5 py-6 md:px-20 md:py-10  mb-14  flex items-center">
          <div className="absolute inset-0 z-0">
            <img
              src="https://res.cloudinary.com/daup99ghe/image/upload/v1776752917/Not_sure_which_gemstone_is_right_for_you_lj1lqz.png"
              alt="glow"
              className="w-full h-full object-cover opacity-160"
            />
          </div>
          <div className="absolute inset-0 bg-[#B05B48]/90 z-0" />

          <div className="relative z-10 max-w-3xl">
            <h2 className="text-2xl md:text-3xl font-[600] text-white mb-5 leading-tight">
              Not sure which gemstone is right for your Kundli?
            </h2>
            <p className="text-white/80 text-md md:text-lg mb-8 leading-relaxed">
              Get a personalised gemstone recommendation from <span className="font-bold text-white">Pandit Vishal Johari</span>, based on your Janam Kundli analysis and planetary positions, for career, health, marriage, and financial growth.
            </p>
            <a href="https://wa.me/918595046368" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#B05B48] rounded-xl font-semibold text-sm md:text-base ">
              Free Chat Now
              <span> <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1776765056/Get_Expert_Recommendation_dbbu4y.png" alt="arrow" className="w-4 h-4 object-contain" />



              </span>
            </a>
          </div>
        </div>

        {/* 🛍️ Bottom Catalog Grid */}
        <div className="max-w-[1400px] mx-auto  pb-20">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-20 bg-white/50 rounded-[30px] border border-dashed border-gray-300">
              <h3 className="text-2xl font-[500] text-gray-400">No products found matching these filters.</h3>
              <p className="text-gray-400 mt-2">Try selecting a different category or gemstone.</p>
            </div>
          ) : isMobile ? (
            <div className="md:hidden">
              <MobileSlider items={filteredProducts} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start min-h-[800px]">
                {currentItems.map((item, index) => {
                  const isMiddle = index % 3 === 1;
                  return (
                    <div
                      key={item.id}
                      className={`transition-all duration-700 ${isMiddle ? 'lg:mt-14' : 'mt-0'}`}
                    >
                      <ShopProductCard product={item} />
                    </div>
                  );
                })}
              </div>

              {totalPages > 1 && (
                <ShopPagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={handlePageChange}
                />
              )}
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default ShopMainSection;