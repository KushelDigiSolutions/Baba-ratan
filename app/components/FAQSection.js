"use client";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Who is the best astrologer in India?",
    answer: "Pandit Vishal Johari of Bajrang Astro is one of the most trusted astrologers in India, known for accurate Janam Kundli analysis, expert Palm Reading, and practical Vastu consulting across India.",
  },
  {
    question: "How can Vastu consulting help my home or business?",
    answer: "Pandit Vishal Johari identifies hidden Vastu doshas in your space and gives simple, practical corrections without demolition to bring growth, peace, and positive energy back into your life.",
  },
  {
    question: "Do you provide services across India?",
    answer: "Yes, Bajrang Astro provides both online and offline services across India. Kundli analysis and Palm Reading are available via WhatsApp and video call. Vastu site visits are available across Delhi NCR.",
  },
  {
    question: "Can I get a free consultation with Pandit Vishal Johari?",
    answer: "Yes, you can connect with Pandit Vishal Johari for a free initial chat on WhatsApp or call to discuss your problem and understand which service is right for you.",
  },
  {
    question: "Is Vedic Astrology accurate and scientifically valid?",
    answer: "Vedic Astrology is a thousands-of-years-old planetary science practiced across India and globally. Pandit Vishal Johari uses precise birth chart calculations to give accurate, honest predictions not guesswork.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <p className="text-sm font-semibold text-[#E57661] uppercase tracking-wide">
          FAQ
        </p>
        <h2 className="mt-2 text-3xl font-semibold text-[#E57661]">
          Most asked questions
        </h2>

        {/* FAQ List */}
        <div className="mt-10 space-y-2">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                {/* Question */}
                <button
                  onClick={() =>
                    setOpenIndex(isOpen ? null : index)
                  }
                  className="w-full flex justify-between items-center text-left"
                >
                  <span className="text-[16px] font-medium text-[#E57661]">
                    {faq.question}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#E57661]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#E57661]" />
                  )}
                </button>

                {/* Answer */}
                {isOpen && (
                  <p className="mt-4 text-sm text-gray-600 leading-relaxed max-w-3xl">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
