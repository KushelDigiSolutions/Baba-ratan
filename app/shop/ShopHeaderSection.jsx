"use client";
import React, { useState, useEffect } from "react";
import { FiChevronDown } from "react-icons/fi";

const ShopHeaderSection = ({ selectedFilters, setSelectedFilters }) => {
  const [selectedCategory, setSelectedCategory] = useState('All Gems');
  const [certifiedOnly, setCertifiedOnly] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownOptions = {
    Purpose: ['Health', 'Career', 'Wealth and Fortune', 'Education', 'Relationships'],
    Planet: ['Sun', 'Moon', 'Mars', 'Mercury', 'Jupiter', 'Venus', 'Saturn', 'Rahu', 'Ketu'],
    Gemstone: ['Blue Sapphire (Neelam)', 'Cats Eye', 'Emerald (Panna)', 'Hessonite (Gomed)', 'Pearl (Moti)', 'Ruby (Manik)', 'Ruby Coral (Moonga)', 'White Sapphire']
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.dropdown-container')) setActiveDropdown(null);
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const handleSelectOption = (filter, option) => {
    setSelectedFilters(prev => ({ ...prev, [filter]: option }));
    setSelectedCategory(filter);
    setActiveDropdown(null);
  };

  return (
    <section className="relative w-full pt-16 pb-20">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full opacity-40">
          <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-orange-100 blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-yellow-50 blur-[100px]"></div>
        </div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-[500] text-[#2D2D2D] mb-4 tracking-[-0.03em] leading-[1.1]">
          Find the Right Gemstone <br /> for Your <span className="text-[#E57661] tracking-[-0.02em] font-[400]">Kundli</span>
        </h1>
        <p className="max-w-3xl mx-auto text-[#303030] text-sm sm:text-base md:text-lg leading-relaxed mb-10 md:mb-20 opacity-90">
          100% certified, naturally sourced gemstones, personally recommended by <span className="font-semibold text-black">Vishal Verma</span> at <span className="font-semibold text-black">Bajrang Astro</span> based on your <span className="font-semibold text-black">Janam Kundli</span> and planetary positions for maximum positive impact.
        </p>
        <div className="max-w-5xl mx-auto bg-white rounded-lg border border-gray-200 p-3 lg:p-1 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left gap-4 lg:gap-3">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 w-full lg:w-auto">
            <div className="flex-shrink-0 flex bg-[#F5F5F5] p-0.5 rounded-2xl">
              <button onClick={() => { setSelectedCategory('All Gems'); setSelectedFilters({ Purpose: '', Planet: '', Gemstone: '' }); }} className={`px-4 md:px-6 py-1.5 rounded-xl text-sm md:text-base font-[400] flex items-center gap-2 ${selectedCategory === 'All Gems' ? 'bg-[#E57661] text-white' : 'text-[#666666]'}`}>
                <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781002349/Buy_Certified_Gemstones_Online_India_Bajrang_Astro_icon_wb13mu.png" alt="AI" className="w-4 h-3 md:w-5 md:h-3 object-contain" />
                <span className="whitespace-nowrap">All Gems</span>
              </button>
            </div>
            {Object.keys(dropdownOptions).map((filter) => (
              <div key={filter} className="relative dropdown-container">
                <button onClick={() => setActiveDropdown(activeDropdown === filter ? null : filter)} className={`flex-shrink-0 flex items-center gap-2 px-4 md:px-5 py-1.5 md:py-1 rounded-lg border border-gray-200 bg-white text-sm md:text-base font-[400] transition-all hover:border-[#E57661] ${activeDropdown === filter || selectedFilters[filter] ? 'border-[#E57661] text-[#E57661] bg-orange-50/30' : 'text-[#444444]'}`}>
                  <span className="whitespace-nowrap">{selectedFilters[filter] || filter}</span>
                  <FiChevronDown className={`text-gray-400 transition-transform duration-300 ${activeDropdown === filter ? 'rotate-180' : ''}`} />
                </button>
                {activeDropdown === filter && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-[999] py-2 transition-all">
                    {dropdownOptions[filter].map((option) => (
                      <button key={option} className={`w-full text-left px-4 py-2 text-sm transition-colors ${selectedFilters[filter] === option ? 'bg-orange-50 text-[#E57661] font-medium' : 'text-[#444444] hover:bg-gray-50'}`} onClick={() => handleSelectOption(filter, option)}>{option}</button>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-4 md:gap-6 w-full lg:w-auto pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={certifiedOnly} onChange={() => setCertifiedOnly(!certifiedOnly)} className="w-4 h-4 accent-[#E57661] border border-gray-300 rounded-sm" />
              <span className="text-sm md:text-base font-[400] text-[#444444] whitespace-nowrap">Certified Only</span>
            </label>
            <div className="h-5 w-[1px] bg-gray-200 hidden lg:block"></div>
            <button className="flex items-center gap-2 text-[#E57661] font-[400] text-sm md:text-base">
              <span className="whitespace-nowrap">Best Selling</span>
              <img src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781002446/Natural_Ruby_Manik_Gemstone_India_Bajrang_Astro_icon_dv6jzz.png" alt="Best Selling" className="w-4 h-3 md:w-5 md:h-3 object-contain" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopHeaderSection;
