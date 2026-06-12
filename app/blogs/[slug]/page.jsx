"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import FaQ from "../../components/FaQ";
import Navbar from "../../COMMON/Navbar";
import Footer from "../../COMMON/Footer";
import { blogs } from "../data";
import BlogConsultationForm from "./BlogConsultationForm";

export default function BlogDetail({ params }) {
  const unwrappedParams = React.use(params);
  
  const blog = blogs.find(b => b.slug === unwrappedParams?.slug);

  if (!blog) {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex items-center justify-center pt-20 bg-[#fcf8f5]">
                <p className="text-xl font-medium text-[#E57661]">Blog not found!</p>
            </div>
            <Footer />
        </>
    )
  }

  return (
    <>
    <Navbar />
    <div className="bg-[#fcf8f5] min-h-screen pb-12 pt-[60px] md:pt-[80px] font-sans">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8 xl:px-12 flex flex-col lg:flex-row gap-8">
        
        {/* MAIN CONTENT (LEFT) */}
        <div className="w-full lg:w-[70%] bg-white rounded-xl shadow-sm border border-[#f0e6e1] overflow-hidden">
          
          {/* Hero Image Section */}
          <div className="relative w-full border-b border-[#f0e6e1] overflow-hidden bg-[#fffcf8]">
            <img 
              src={blog.heroImage} 
              alt={blog.title}
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="p-6 md:p-10">
            {/* Title & Date */}
            <div className="mb-8 border-b border-gray-100 pb-6">
              <h1 className="text-2xl md:text-4xl font-semibold text-[#2D2D2D] leading-tight mb-3">
                {blog.title}
              </h1>
              <p className="text-sm text-gray-500 font-medium">{blog.date} • By {blog.author}</p>
            </div>

            {/* Book Now Banner */}
            <div className="bg-gradient-to-r from-[#fff9f0] to-[#fff0e0] border border-[#f5e3cc] p-6 rounded-lg flex flex-col md:flex-row justify-between items-center gap-4 mb-10 shadow-sm">
               <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <p className="text-[#E57661] font-bold text-lg tracking-wide">TALK TO OUR EXPERT ASTROLOGER</p>
                  <p className="text-[#2D2D2D] text-sm md:text-base font-medium mt-1">Get precise career guidance based on your Kundli.</p>
               </div>
               <a href="tel:+917042600873" className="bg-[#E57661] text-white px-8 py-3 rounded-md font-semibold hover:bg-[#d46550] transition-colors whitespace-nowrap shadow-md inline-block text-center">
                  CALL NOW
               </a>
            </div>

            {/* Content Body */}
            <div className="prose max-w-none text-[#2D2D2D] text-base md:text-[17px] leading-relaxed space-y-6">
              {blog.content.map((block, index) => {
                  if (block.type === 'paragraph') {
                      return <p key={index} dangerouslySetInnerHTML={{ __html: block.text }}></p>
                  } else if (block.type === 'heading') {
                      return <h2 key={index} className="text-xl md:text-[26px] font-semibold text-[#E57661] mt-10 mb-4" dangerouslySetInnerHTML={{ __html: block.text }}></h2>
                  } else if (block.type === 'subheading') {
                      return <h3 key={index} className="text-lg md:text-xl font-bold text-[#2D2D2D] mt-8 mb-2" dangerouslySetInnerHTML={{ __html: block.text }}></h3>
                  } else if (block.type === 'list') {
                      return (
                          <ul key={index} className="list-disc pl-6 space-y-3 mt-4 text-[#4a4a4a]">
                              {block.items.map((item, i) => <li key={i}>{item}</li>)}
                          </ul>
                      )
                  } else if (block.type === 'image') {
                      return (
                          <div key={index} className="my-10 rounded-xl overflow-hidden shadow-md">
                            <img src={block.url} alt={block.alt} className="w-full h-auto object-cover max-h-[400px]" />
                          </div>
                      )
                  }
                  return null;
              })}
            </div>
          </div>
          
          {/* FAQ Section */}
          {blog.faqData && blog.faqData.length > 0 && (
              <div className="border-t border-[#f0e6e1] bg-white pb-8">
                 <FaQ data={blog.faqData} />
              </div>
          )}

        </div>

        {/* SIDEBAR (RIGHT) */}
        <div className="w-full lg:w-[30%] flex flex-col gap-8 relative">
          
          {/* Follow Us (Normal Scroll) */}
          <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f0e6e1]">
            <h3 className="text-[20px] font-semibold text-[#2D2D2D] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#E57661]">
              Follow Us
            </h3>
            <div className="flex gap-4 mt-6">
              <a href="https://www.facebook.com/bajrangastro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                <FaFacebookF className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={28} />
              </a>
              <a href="https://www.linkedin.com/company/bajrang-astro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                <FaLinkedinIn className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={28} />
              </a>
              <a href="https://www.youtube.com/@bajrangiratankendra" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                <FaYoutube className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={28} />
              </a>
              <a href="https://www.instagram.com/bajrangastro/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center transition hover:scale-110">
                <FaInstagram className="text-[#E57661] hover:text-[#D1644F] transition-colors" size={28} />
              </a>
            </div>
          </div>

          {/* Sticky Container for Form and Latest Posts */}
          <div className="sticky top-[145px] flex flex-col gap-8 pb-8">
            
            {/* Quick Consultation Form */}
            <BlogConsultationForm />

            {/* Latest Posts */}
            <div className="bg-white p-6 rounded-xl shadow-sm border border-[#f0e6e1]">
              <h3 className="text-[20px] font-semibold text-[#2D2D2D] mb-4 relative pb-2 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-12 after:h-[2px] after:bg-[#E57661]">
                Latest Posts
              </h3>
              <div className="mt-6 space-y-5">
                {blogs.slice(0, 3).map((b, i) => (
                    <Link href={`/blogs/${b.slug}`} key={i} className={`flex gap-4 group cursor-pointer ${i !== 2 ? 'border-b border-gray-100 pb-4' : ''}`}>
                      <div className="w-[85px] h-[75px] rounded-md overflow-hidden flex-shrink-0">
                        <img src={b.thumbImage} alt={b.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <div className="flex flex-col justify-center">
                        <h4 className={`text-[14px] leading-tight transition-colors ${b.slug === blog.slug ? 'font-semibold text-[#E57661] group-hover:underline' : 'font-medium text-[#2D2D2D] group-hover:text-[#E57661]'}`}>
                          {b.title.length > 40 ? b.title.substring(0, 40) + "..." : b.title}
                        </h4>
                        <p className="text-[12px] text-gray-500 mt-1.5 font-medium">{b.date}</p>
                      </div>
                    </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
    <Footer />
    </>
  );
}
