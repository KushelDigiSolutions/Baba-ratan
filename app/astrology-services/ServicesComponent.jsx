"use client"
import React from 'react'
import AstrologySteps from './AstrologySteps'
import AstralSection from './AstralSection'
import Testimonials from '../components/Testimonials'
import FaQ from '../components/FaQ'
import Navbar from '../COMMON/Navbar'
import Footer from '../COMMON/Footer'
import AstrologyServicesHero from '../components/AstrologyServicesHero'
import AstrologyClarity from '../components/AstrologyClarity'
import DigitalBirthChart from '../components/DigitalBirthChart'

const ServicesComponent = () => {
  const faqData = [
    {
      question: "Who is the best astrologer in India for Janam Kundli analysis?",
      answer:
        "Vishal Verma of Bajrang Astro is one of the best astrologers in India, known for accurate Janam Kundli analysis, honest Vedic astrology consultation, and practical remedies that create real change in people's lives.",
    },
    {
      question: "How can Vedic astrology consultation help my career and marriage?",
      answer:
        "A detailed Janam Kundli analysis by Vishal Verma reveals the exact planetary reasons behind career blockages and delayed marriage, and gives you the right timing and remedies to overcome them through expert online astrology services.",
    },
    {
      question: "Do you provide astrology services in Noida, Delhi NCR and Gurgaon?",
      answer:
        "Yes, Bajrang Astro provides Vedic astrology consultation across Delhi NCR, Noida, Gurgaon, Ghaziabad, and Meerut, both in-person and online via WhatsApp and video call. Palm reading in Delhi and Kundli analysis in Noida are available on same-day appointments.",
    },
    {
      question: "Can I get a free astrology consultation with the best astrologer in India?",
      answer:
        "Yes, you can connect with Vishal Verma at Bajrang Astro for a free initial chat on WhatsApp or call discuss your problem and get guidance on accurate Janam Kundli online or hast rekha reading right away.",
    },
  ];
  return (
    <div>
      <Navbar />
      <AstrologyServicesHero />
      <AstrologyClarity />
      <DigitalBirthChart />
      <AstrologySteps />
      <AstralSection />
      <Testimonials />

      <FaQ data={faqData} />
      <Footer />

    </div>
  )
}

export default ServicesComponent
