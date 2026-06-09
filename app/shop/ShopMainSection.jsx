"use client";
import React, { useState, useEffect } from "react";
import ShopProductCard from "./ShopProductCard";
import ShopPagination from "./ShopPagination";
import MobileSlider from "./MobileSlider";

const ShopMainSection = ({
  selectedFilters = { Purpose: "", Planet: "", Gemstone: "" },
}) => {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  const apiBase = "https://admin.bajrangastro.com/api";
  const imageBase = "https://admin.bajrangastro.com/";

  const fetchProducts = async (page) => {
    setIsLoading(true);
    setError(null);
    try {
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

  useEffect(() => {
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
        ? item.main_image.startsWith("http")
          ? item.main_image
          : `${imageBase}${item.main_image}`
        : "https://via.placeholder.com/400",
      description: item.short_description || item.name,
      price: parseFloat(item.price) || 0,
      imageBg: "bg-[#F6F1EA]",
    };
  };

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const filteredProducts = products.filter((item) => {
    const product = mapProductData(item);
    const matchesPurpose =
      !selectedFilters.Purpose ||
      product.purpose
        .toLowerCase()
        .includes(selectedFilters.Purpose.toLowerCase());
    const matchesPlanet =
      !selectedFilters.Planet ||
      product.planet
        .toLowerCase()
        .includes(selectedFilters.Planet.toLowerCase());
    const matchesGemstone =
      !selectedFilters.Gemstone ||
      product.gemstone
        .toLowerCase()
        .includes(selectedFilters.Gemstone.toLowerCase());
    return matchesPurpose && matchesPlanet && matchesGemstone;
  });

  const totalPages = pagination?.last_page || 1;

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="pt-10">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-30">
        {!isLoading && filteredProducts.length >= 2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr] gap-10 md:gap-6 mb-7 items-start">
            <div className="md:-mt-4">
              <ShopProductCard
                product={mapProductData(filteredProducts[0])}
                showArrow={true}
              />
            </div>
            <div className="md:mt-0 lg:mt-19">
              <ShopProductCard product={mapProductData(filteredProducts[1])} />
            </div>
          </div>
        )}
        <div className="relative overflow-hidden rounded-[30px] bg-[#B05B48] px-5 py-6 md:px-20 md:py-10 mb-14 flex items-center">
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
              Get a personalised gemstone recommendation from{" "}
              <span className="font-bold text-white">Vishal Verma</span>, based
              on your Janam Kundli analysis and planetary positions, for career,
              health, marriage, and financial growth.
            </p>
            <a
              href="https://wa.me/917042600873"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#B05B48] rounded-xl font-semibold text-sm md:text-base"
            >
              Free Chat Now
              <span>
                <img
                  src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781003103/Energised_Gemstones_Online_India_Vishal_Verma_icon_jbmzvb.png"
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopMainSection;
