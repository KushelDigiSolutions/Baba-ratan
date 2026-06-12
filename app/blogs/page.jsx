"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../COMMON/Navbar";
import Footer from "../COMMON/Footer";
import { blogs } from "./data";

export default function BlogListing() {
  return (
    <>
      <Navbar />
      <div className="bg-[#fcf8f5] min-h-screen pb-20 pt-[80px] md:pt-[100px] font-sans">
        <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12">
          
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] mb-4">
              Our <span className="text-[#E57661]">Blogs</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Read the latest articles about astrology, vastu shastra, kundli matching, and spiritual guidance.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8">
            {blogs.map((blog, index) => (
              <Link href={`/blogs/${blog.slug}`} key={index} className="w-full md:w-[calc(50%-2rem)] lg:w-[calc(33.33%-2rem)] max-w-[400px] bg-white rounded-xl shadow-sm border border-[#f0e6e1] overflow-hidden hover:shadow-lg transition-all duration-300 group flex flex-col">
                <div className="w-full overflow-hidden border-b border-[#f0e6e1] bg-[#fffcf8]">
                  <img 
                    src={blog.thumbImage} 
                    alt={blog.title} 
                    className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-[#E57661] font-semibold mb-2">{blog.date}</p>
                  <h3 className="text-[19px] font-bold text-[#2D2D2D] mb-3 group-hover:text-[#E57661] transition-colors leading-tight">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] mb-6 flex-grow leading-relaxed">
                    {blog.shortDescription}
                  </p>
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <span className="inline-block text-[#E57661] font-bold uppercase text-xs tracking-wider group-hover:translate-x-1 transition-transform">
                      Read More &rarr;
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
}
