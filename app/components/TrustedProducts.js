"use client";

import { useState, useEffect } from "react";
import "./TrustedProducts.css";
import { FiHeart } from "react-icons/fi";
import { GiCheckMark } from "react-icons/gi";
import Link from "next/link";
import { useCategory } from "../context/CategoryContext";
import { useWishlist } from "../context/WishlistContext";

const apiBase =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://bajrangastro.kdscrm.com/api";

export default function TrustedProducts() {
  const {
    categories,
    products,
    activeCategory,
    categoriesLoading,
    productsLoading,
    categoriesError,
    productsError,
    handleCategoryChange,
  } = useCategory();

  const { wishlistItems, addToWishlist, removeFromWishlist } = useWishlist();

  const handleTabClick = (category) => {
    handleCategoryChange(category);
  };

  const isInWishlist = (productId) => {
    return wishlistItems.some(item =>
      item.product_id === productId || item.product?.id === productId
    );
  };

  const handleWishlistClick = async (e, productId) => {
    e.preventDefault();
    e.stopPropagation();

    if (isInWishlist(productId)) {
      // If already in wishlist, remove it
      if (window.confirm("Remove this item from your wishlist?")) {
        await removeFromWishlist(productId);
      }
      return;
    }

    // Otherwise, add it
    const success = await addToWishlist(productId);
    if (success) {
      alert("Added to wishlist!");
    }
  };

  return (
    <section className="trusted-section">
      {/* HEADER */}
      <div className="trusted-header">
        <p className="small-title">Buy Gemstones Online</p>
        <h6>100% Certified & Energised Delivered Across India</h6>
      </div>

      {/* TABS */}
      <div className="tab-container">
        <div className="tabs">
          {categoriesLoading ? (
            <div className="loading">Loading categories...</div>
          ) : categoriesError ? (
            <div className="error">
              Error loading categories: {categoriesError}
            </div>
          ) : (
            categories.map((category) => (
              <button
                key={category.id || category.slug}
                className={`tab ${activeCategory?.id === category.id ? "active" : ""}`}
                onClick={() => handleTabClick(category)}
              >
                {category.name}
              </button>
            ))
          )}
        </div>
      </div>

      {/* PRODUCTS */}
      <div className="product-grid">
        {productsLoading ? (
          <div className="loading">Loading products...</div>
        ) : productsError ? (
          <div className="error">Error loading products: {productsError}</div>
        ) : products.length > 0 ? (
          products.map((product) => (
            <Link href={`/gemstones/${activeCategory.slug}/${product.slug}`} className="product-card" key={product.id}>
              {product.sold && <span className="badge sold">Sold Out</span>}
              <div
                className="wishlist-container"
                onClick={(e) => handleWishlistClick(e, product.id)}
              >
                <FiHeart
                  className={`wishlist ${isInWishlist(product.id) ? "active" : ""}`}
                  style={{
                    fill: isInWishlist(product.id) ? "#de7a63" : "none",
                    color: isInWishlist(product.id) ? "#de7a63" : "inherit"
                  }}
                />
              </div>

              <img
                src={
                  product.main_image || product.image
                    ? `${product.main_image || product.image}`
                    : "https://res.cloudinary.com/dd9tagtiw/image/upload/v1766821528/Emerald-PNG-Image-File_1_rkoyhz.png"
                }
                alt={product.name || product.title}
              />

              <h6 className="py-[5px]">{product.name || product.title}</h6>
              <p className="py-[5px]">
                Origin: {product.origin || product.country_of_origin || "India"}
              </p>
              <strong className="py-[5px]">
                ₹ {product.price || product.price_range || "Contact for price"}
              </strong>

              <Link
                href={`/gemstones/${activeCategory.slug}/${product.slug}`}
                className="view-details bg-[#e28771] px-[10px] py-[5px] rounded-[4px]"
              >
                View Details
              </Link>
            </Link>
          ))
        ) : (
          <div className="no-products">
            No products available for this category
          </div>
        )}
      </div>

      {/* FOOTER */}
      <div className="trusted-footer">
        <div className="benefits">
          <span className="benefit-item">
            <GiCheckMark className="benefit-icon" />
            Improves Communication
          </span>

          <span className="benefit-item">
            <GiCheckMark className="benefit-icon" />
            Personality & Charisma
          </span>

          <span className="benefit-item">
            <GiCheckMark className="benefit-icon" />
            Business Growth
          </span>
        </div>
        <Link href="/shop">
          <button className="view-all">View All</button>
        </Link>
      </div>
    </section>
  );
}
