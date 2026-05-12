"use client";

import React, { useState } from "react";
import {
  Heart,
  ShoppingBag,
  Trash2,
  Star,
  ArrowRight,
  ShoppingCart,
} from "lucide-react";
import { useWishlist } from "../context/WishlistContext";
import { useCart } from "../context/CartContext";
import Link from "next/link";
import { FiShoppingCart } from "react-icons/fi";

const WishlistPage = () => {
  const { wishlistItems, isLoading, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const apiBase = "https://bajrangastro.kdscrm.com";

  const removeItem = (id) => {
    if (window.confirm("Are you sure you want to remove this item from your wishlist?")) {
      removeFromWishlist(id);
    }
  };

  return (
    <div className="min-h-screen bg-[#fff7f5]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#d97869] to-[#bf6253] py-20 px-4 relative overflow-hidden">
        <div className="absolute w-72 h-72 bg-white/10 rounded-full blur-3xl top-0 left-0"></div>
        <div className="absolute w-80 h-80 bg-orange-300/10 rounded-full blur-3xl bottom-0 right-0"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <div className="flex justify-center mb-5">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20">
              <Heart size={36} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            My Wishlist
          </h1>

          <p className="max-w-2xl mx-auto text-white/80 text-lg leading-8">
            Save your favorite astrology and spiritual products to purchase
            later with ease.
          </p>
        </div>
      </div>

      {/* Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d97869]"></div>
            <p className="mt-4 text-gray-500 font-medium">Loading your wishlist...</p>
          </div>
        ) : wishlistItems.length > 0 ? (
          <>
            {/* Top Bar */}
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5 mb-10">
              <div>
                <h2 className="text-3xl font-bold text-[#222]">
                  Saved Products
                </h2>
                <p className="text-gray-500 mt-2">
                  {wishlistItems.length} items in your wishlist
                </p>
              </div>

              <Link
                href="/"
                className="bg-[#d97869] hover:bg-[#c86758] text-white px-6 py-3 rounded-full flex items-center gap-2 transition-all duration-300"
              >
                <ShoppingBag size={18} />
                Continue Shopping
              </Link>
            </div>

            {/* Products */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {wishlistItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-[30px] overflow-hidden border border-[#f2d7d1]   transition-all duration-500 group"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden">
                    <img
                      src={
                        item.product?.main_image || item.product?.image
                          ? ((item.product?.main_image || item.product?.image).startsWith('http')
                            ? (item.product?.main_image || item.product?.image)
                            : `${apiBase}/${item.product?.main_image || item.product?.image}`)
                          : "https://res.cloudinary.com/dd9tagtiw/image/upload/v1766821528/Emerald-PNG-Image-File_1_rkoyhz.png"
                      }
                      alt={item.product?.name || "Product"}
                      className="w-full h-[280px] object-cover group-hover:scale-110 transition-all duration-700"
                    />

                    <button
                      onClick={() => removeItem(item.product?.id)}
                      className="absolute top-4 right-4 w-11 h-11 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
                    >
                      <Trash2 size={18} />
                    </button>

                    <div className="absolute top-4 left-4 bg-[#d97869] text-white px-4 py-1 rounded-full text-sm font-medium">
                      {item.product?.category?.name || "Certified"}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-1 text-yellow-500 mb-3">
                      <Star size={16} fill="currentColor" />
                      <span className="text-sm font-medium text-gray-700">
                        {item.rating}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-[#222] mb-2 truncate">
                      {item.product?.name || "Gemstone Product"}
                    </h3>

                    <p className="text-[#d97869] text-2xl font-bold mb-6">
                      ₹ {item.product?.price || "Contact for Price"}
                    </p>

                    <div className="flex gap-3">
                      <button
                        onClick={() => addToCart(item.product, 1, true)}
                        className="flex-1 h-14 cursor-pointer rounded-2xl bg-[#d97869] hover:bg-[#c86758] text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300"
                      >
                        <FiShoppingCart size={18} />
                        Add to Cart
                      </button>

                      <Link
                        href={`/gemstones/${item.product?.category?.slug || 'shop'}/${item.product?.slug || item.product?.id}`}
                        className="w-14 h-14 rounded-2xl border border-[#ead0ca] flex items-center justify-center hover:bg-[#fff2ef] transition-all duration-300"
                      >
                        <ArrowRight
                          size={20}
                          className="text-[#d97869]"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty Wishlist */
          <div className="flex flex-col items-center justify-center text-center py-24">
            <div className="w-32 h-32 rounded-full bg-[#ffe9e4] flex items-center justify-center mb-8">
              <Heart size={50} className="text-[#d97869]" />
            </div>

            <h2 className="text-4xl font-bold text-[#222] mb-4">
              Your Wishlist is Empty
            </h2>

            <p className="text-gray-500 max-w-xl leading-8 mb-8">
              Explore our astrology and spiritual collection and save your
              favorite products here.
            </p>

            <Link
              href="/"
              className="bg-[#d97869] hover:bg-[#c86758] text-white px-8 py-4 rounded-full flex items-center gap-2 transition-all duration-300"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;