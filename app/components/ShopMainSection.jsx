"use client";
import React, { useState } from "react";
import ShopProductCard from "./ShopProductCard";
import ShopPagination from "./ShopPagination";
import MobileSlider from "./MobileSlider";
import { FiArrowRight } from "react-icons/fi";

const ShopMainSection = ({ selectedFilters = { Purpose: '', Planet: '', Gemstone: '' } }) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const apiBase = "https://bajrangastro.kdscrm.com/api";
  const imageBase = "https://bajrangastro.kdscrm.com/";

  const fetchProducts = async (page) => {
    setIsLoading(true);
    setError(null);
    try {
      // Best practice: appending page to URL
      const response = await fetch(`${apiBase}/all/products?page=${page}`);
      if (!response.ok) throw new Error("Failed to fetch products");

      const json = await response.json();
      if (json.status && json.data) {
        setProducts(json.data.data || []);
        setPagination(json.data);
      } else {
        throw new Error(json.message || "Invalid API response");
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  React.useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const mapProductData = (item) => {
    if (!item) return null;
    return {
      id: item.id,
      name: item.name,
      slug: `${item.category.slug}/${item.slug}`,
      gemstone: item.category?.name || "Gemstone",
      planet: item.brand?.name || "",
      purpose: item.category?.name || "",
      isCertified: item.featured === 1,
      tags: [item.category?.name, item.brand?.name].filter(Boolean),
      image: item.main_image
        ? (item.main_image.startsWith("http") ? item.main_image : `${imageBase}${item.main_image}`)
        : "https://via.placeholder.com/400",
      description: item.short_description || item.name,
      price: parseFloat(item.price) || 0,
      imageBg: "bg-[#F6F1EA]", // Default
    };
  };

  React.useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Filter logic (Applying client-side filter on current page products)
  const filteredProducts = products.filter(item => {
    const product = mapProductData(item);
    const matchesPurpose = !selectedFilters.Purpose || product.purpose.toLowerCase().includes(selectedFilters.Purpose.toLowerCase());
    const matchesPlanet = !selectedFilters.Planet || product.planet.toLowerCase().includes(selectedFilters.Planet.toLowerCase());
    const matchesGemstone = !selectedFilters.Gemstone || product.gemstone.toLowerCase().includes(selectedFilters.Gemstone.toLowerCase());
    return matchesPurpose && matchesPlanet && matchesGemstone;
  });

  const totalPages = pagination?.last_page || 1;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section
      className="pt-10"
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-30">

        {/* 🔥 Top Featured Grid */}
        {!isLoading && filteredProducts.length >= 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-6 mb-7 items-start">
            <div className="md:-mt-4">
              <ShopProductCard product={mapProductData(filteredProducts[0])} showArrow={true} />
            </div>
            <div className="md:mt-0 lg:mt-19">
              <ShopProductCard product={mapProductData(filteredProducts[1])} />
            </div>
          </div>
        )}

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
              Get a personalised gemstone recommendation from <span className="font-bold text-white">Vishal Verma</span>, based on your Janam Kundli analysis and planetary positions, for career, health, marriage, and financial growth.
            </p>
            <a href="https://wa.me/917042600873" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#B05B48] rounded-xl font-semibold text-sm md:text-base ">
              Free Chat Now
              <span> <img src="https://res.cloudinary.com/daup99ghe/image/upload/v1776765056/Get_Expert_Recommendation_dbbu4y.png" alt="arrow" className="w-4 h-4 object-contain" />



              </span>
            </a>
          </div>
        </div>

        {/* 🛍️ Bottom Catalog Grid */}
        <div className="max-w-[1400px] mx-auto  pb-20">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start min-h-[400px]">
              {[1, 2, 3].map((i) => (
                <div key={i} className="animate-pulse bg-white rounded-[30px] h-[600px]" />
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-12 md:py-16 lg:py-20 bg-white/50 rounded-[30px] border border-dashed border-red-300">
              <h3 className="text-2xl font-[500] text-red-500">Error loading products.</h3>
              <p className="text-gray-500 mt-2">{error}</p>
            </div>
          ) : filteredProducts.length === 0 ? (
            <div className="text-center py-12 md:py-16 lg:py-20 bg-white/50 rounded-[30px] border border-dashed border-gray-300">
              <h3 className="text-2xl font-[500] text-gray-400">No products found matching these filters.</h3>
              <p className="text-gray-400 mt-2">Try selecting a different category or gemstone.</p>
            </div>
          ) : isMobile ? (
            <div className="md:hidden">
              <MobileSlider items={filteredProducts.map(mapProductData)} />
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start min-h-[800px]">
                {(filteredProducts.length > 2 ? filteredProducts.slice(2) : filteredProducts).map((item, index) => {
                  const mappedProduct = mapProductData(item);
                  const isMiddle = index % 3 === 1;
                  return (
                    <div
                      key={mappedProduct.id}
                      className={`transition-all duration-700 ${isMiddle ? 'lg:mt-14' : 'mt-0'}`}
                    >
                      <ShopProductCard product={mappedProduct} />
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