'use client';

import React from 'react';

const AstrologyClarity = () => {
    const cards = [
        {
            title: "Stuck in Career?",
            content: "Your Janam Kundli reveals the exact planetary reason behind your career blockage. Pandit Vishal Johari, trusted astrologer in Delhi NCR, helps you find the right direction and the right time to act.",
            icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1776922588/Stuck_in_Career_iorplc.png",
        },
        {
            title: "Confused in Love?",
            content: "Whether it is a delayed marriage or a troubled relationship, Kundli matching and Vedic astrology consultation by Bajrang Astro gives you honest clarity about your love life and compatibility.",
            icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1776922587/Confused_in_Love_rz3iqn.png",
        },
        {
            title: "Financial Doubt?",
            content: "Your birth chart holds the key to your wealth timing. Get accurate Janam Kundli analysis from the best astrologer in India to know exactly when and where to invest for maximum growth.",
            icon: "https://res.cloudinary.com/daup99ghe/image/upload/v1776922587/Financial_Doubt_j35dse.png",
        }
    ];

    return (
        <section className="w-full py-15 px-[9%] bg-[#F3F3F3]">
            <div className="max-w-[1400px] mx-auto">
                <h2 className="text-4xl md:text-4xl lg:text-5xl text-[#2D2D2D] font-[400] text-center mb-15 leading-tight">
                    The answers you have been looking for
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div 
                            key={index} 
                            className="bg-white rounded-[32px] p-10 flex flex-col items-start transition-transform "
                        >
                            <div className="mb-8 w-7 h-7">
                                <img src={card.icon} alt={card.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-[500] text-[#2D2D2D] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-5">
                                {card.content}
                            </p>
                            <div className="w-16 h-1 bg-[#E57661] rounded-full mt-auto"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AstrologyClarity;
