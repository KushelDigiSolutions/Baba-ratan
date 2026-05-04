"use client";
import React, { useState } from 'react';
import Navbar from '../COMMON/Navbar';
import ShopHeaderSection from '../components/ShopHeaderSection';
import ShopMainSection from '../components/ShopMainSection';
import Footer from '../COMMON/Footer';

export default function ShopComponent() {
    const [selectedFilters, setSelectedFilters] = useState({
        Purpose: '',
        Planet: '',
        Gemstone: ''
    });

    return (
        <>
            <Navbar />
            <main className="min-h-screen relative overflow-hidden" style={{ background: 'radial-gradient(140.3% 104.29% at 10% 20%, rgba(254, 212, 136, 0.15) 0%, #F8F9FA 90%)' }}>
                {/* 🌊 Decorative Background Element */}
                <div className="absolute top-50 left-0 w-[300px] h-full pointer-events-none z-0 ">
                    <img
                        src="https://res.cloudinary.com/daup99ghe/image/upload/v1776839457/Abstract_Energy_Waves_Background_Elements_u7kkn7.png"
                        alt="Background Waves"
                        className="w-full h-auto object-contain"
                    />
                </div>
                <div className="absolute top-260 right-0 w-[290px] h-full pointer-events-none z-0 ">
                    <img
                        src="https://res.cloudinary.com/daup99ghe/image/upload/v1776839457/Background_Blur_iwds7s.png"
                        alt="Background Waves"
                        className="w-full h-auto object-contain"
                    />
                </div>

                <div className="relative z-10">
                    <ShopHeaderSection
                        selectedFilters={selectedFilters}
                        setSelectedFilters={setSelectedFilters}
                    />
                    <ShopMainSection
                        selectedFilters={selectedFilters}
                    />
                    <Footer />
                </div>
            </main>
        </>
    );
}
