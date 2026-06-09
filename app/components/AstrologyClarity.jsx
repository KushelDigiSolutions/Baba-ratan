'use client';

import React from 'react';

const AstrologyClarity = () => {
    const cards = [
        {
            title: "Stuck in Career?",
            content: "Your Janam Kundli reveals the exact planetary reason behind your career blockage. Vishal Verma, trusted astrologer in Delhi NCR, helps you find the right direction and the right time to act.",
            icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781000015/Best_Vastu_Consultant_in_Meerut_Bajrang_Astro_icon_zapt7f.png",
        },
        {
            title: "Confused in Love?",
            content: "Whether it is a delayed marriage or a troubled relationship, Kundli matching and Vedic astrology consultation by Bajrang Astro gives you honest clarity about your love life and compatibility.",
            icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781000015/Vastu_Shastra_Expert_India_Vishal_Verma_Bajrang_Astro_icon_jlkmxu.png",
        },
        {
            title: "Financial Doubt?",
            content: "Your birth chart holds the key to your wealth timing. Get accurate Janam Kundli analysis from the best astrologer in India to know exactly when and where to invest for maximum growth.",
            icon: "https://res.cloudinary.com/dlzxiy0tl/image/upload/v1781000015/Vastu_Consulting_for_Business_India_Bajrang_Astro_icon_p9cms7.png",
        }
    ];

    return (
        <section className="w-full py-15 px-[9%] bg-[#F3F3F3]">
            <div className="max-w-[1720px] mx-auto px-[20px] xl:px-[90px]">
                <h2 className="text-4xl md:text-4xl lg:text-5xl text-[#2D2D2D] font-[400] text-center mb-15 leading-tight">
                    The answers you have been looking for
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {cards.map((card, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-[32px] p-10 flex flex-col items-center lg:items-start text-center lg:text-left transition-transform "
                        >
                            <div className="mb-8 w-7 h-7 mx-auto lg:mx-0">
                                <img src={card.icon} alt={card.title+"-icon-best astrologer bajrang astro vishal verma"} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-xl font-[500] text-[#2D2D2D] mb-3">
                                {card.title}
                            </h3>
                            <p className="text-[17px] text-[#4A4A4A] leading-relaxed mb-5">
                                {card.content}
                            </p>
                            <div className="w-16 h-1 bg-[#E57661] rounded-full mt-auto mx-auto lg:mx-0"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AstrologyClarity;
