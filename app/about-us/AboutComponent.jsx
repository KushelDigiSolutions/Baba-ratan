"use client"

import Footer from "../COMMON/Footer"
import Navbar from "../COMMON/Navbar"
import FaQ from "../components/FaQ"
import AboutEigth from "./about-component/AboutEigth"
import AboutFifth from "./about-component/AboutFifth"
import AboutFourth from "./about-component/AboutFourth"
import AboutHero from "./about-component/AboutHero"
import AboutSecond from "./about-component/AboutSecond"
import AboutSeventh from "./about-component/AboutSeventh"
import AboutSixth from "./about-component/AboutSixth"
import AboutThird from "./about-component/AboutThird"

const AboutComponent = () => {
  const faqData = [
    {
      question: "Who is Vishal Verma and why is he the best astrologer in India?",
      answer:
        "Vishal Verma is the founder of Bajrang Astro, one of the best astrologers in India with 15+ years of experience in Janam Kundli analysis, Vedic astrology consultation, and palm reading, trusted by 1000+ clients across India.",
    },
    {
      question: "What makes Bajrang Astro different from other astrology services?",
      answer:
        "At Bajrang Astro, every Vedic astrology consultation is 100% honest, personalised, and practical, with no fear tactics, no unnecessary remedies. Vishal Verma gives you real answers based on your exact Janam Kundli and life situation.",
    },
    {
      question: "Do you provide online astrology services across India?",
      answer:
        "Yes, Bajrang Astro provides online astrology services pan-India including accurate Janam Kundli online, hast rekha reading, and Kundli matching via WhatsApp and video call from anywhere in India or abroad.",
    },
    {
      question: "Can I get a free consultation with Vishal Verma?",
      answer:
        "Yes, you can connect with Vishal Verma for a free initial chat discuss your problem and get guidance on the right Vedic astrology or Vastu consulting service for your specific situation.",
    },
  ];
  return (
    <>
      <Navbar />
      <AboutHero />
      <AboutSecond />
      <AboutThird />
      <AboutFourth />
      <AboutFifth />
      <AboutSixth />
      <AboutSeventh />
      <AboutEigth />
      <FaQ data={faqData} />
      <Footer />

    </>
  )
}

export default AboutComponent
