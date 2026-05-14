import Footer from "./COMMON/Footer";
import Navbar from "./COMMON/Navbar";
import FaQ from "./components/FaQ";
import FreeAstrologyReadings from "./components/FreeAstrologyComp";
import HeroNewSection from "./components/HeroNewSection";
import HomeEigth from "./components/HomeEigth";
import HomeEleventh from "./components/HomeEleventh";
import HomeFifth from "./components/HomeFifth";
import HomeFourth from "./components/HomeFourth";
import HomeNinth from "./components/HomeNinth";
import HomeSecond from "./components/HomeSecond";
import HomeSeventh from "./components/HomeSeventh";
import HomeSixth from "./components/HomeSixth";
import HomeTenth from "./components/HomeTenth";
import HomeThird from "./components/HomeThird";
import GrahSection from "./components/RashiComp";
import RashiSection from "./components/RashiSection";
import Testimonials from "./components/Testimonials";
import TrustedProducts from "./components/TrustedProducts";

export const metadata = {
  title: "Bajrang Astro | Best Astrologer in India – Vishal Johari",
  description:
    "Get accurate Janam Kundli analysis, palm reading & Vastu consulting from Pandit Vishal Johari. Best astrologer in India. Call now for free consultation.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bajrang Astro | Best Astrologer in India – Vishal Johari",
    description:
      "Get accurate Janam Kundli analysis, palm reading & Vastu consulting from Pandit Vishal Johari. Best astrologer in India. Call now for free consultation.",
    url: "https://bajrangastro.com",
    image:
      "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
    telephone: "+918595046368",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Noida",
      addressRegion: "Uttar Pradesh",
      addressCountry: "IN",
    },
    priceRange: "Free Consultation",
    sameAs: [],
  };
  const faqData = [
    {
      question: "Who is the best astrologer in India?",
      answer:
        "Pandit Vishal Johari of Bajrang Astro is one of the most trusted astrologers in India, known for accurate Janam Kundli analysis, expert Palm Reading, and practical Vastu consulting across India.",
    },
    {
      question: "How can Vastu consulting help my home or business?",
      answer:
        "Pandit Vishal Johari identifies hidden Vastu doshas in your space and gives simple, practical corrections without demolition to bring growth, peace, and positive energy back into your life.",
    },
    {
      question: "Do you provide services across India?",
      answer:
        "Yes, Bajrang Astro provides both online and offline services across India. Kundli analysis and Palm Reading are available via WhatsApp and video call. Vastu site visits are available across Delhi NCR.",
    },
    {
      question: "Can I get a free consultation with Pandit Vishal Johari?",
      answer:
        "Yes, you can connect with Pandit Vishal Johari for a free initial chat on WhatsApp or call to discuss your problem and understand which service is right for you.",
    },
    {
      question: "Is Vedic Astrology accurate and scientifically valid?",
      answer:
        "Vedic Astrology is a thousands-of-years-old planetary science practiced across India and globally. Pandit Vishal Johari uses precise birth chart calculations to give accurate, honest predictions not guesswork.",
    },
  ];
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />

      <Navbar />
      <HeroNewSection />
      <RashiSection />
      <HomeFourth />
      <GrahSection />
      <FreeAstrologyReadings />
      <HomeSecond />
      <HomeThird />
      <HomeFifth />
      <HomeSixth />
      <HomeSeventh />
      <HomeEigth />
      <HomeNinth />
      <HomeTenth />
      <HomeEleventh />
      <TrustedProducts />
      <Testimonials />
      <FaQ data={faqData} />
      <Footer />
    </div>
  );
}
