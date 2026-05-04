import Image from "next/image";
import Navbar from "./COMMON/Navbar";
import HeroSection from "./components/HeroSection";
import TrustedProducts from "./components/TrustedProducts";
import TrustBadges from "./components/TrustBadges";
import GemBanner from "./components/GemBanner";
import GemPurpose from "./components/GemPurpose";
import BestSelling from "./components/BestSelling";
import GemServiceCards from "./components/GemServiceCards";
import SemiPreciousSlider from "./components/SemiPreciousSlider";
import ShopByPrice from "./components/ShopByPrice";
import Testimonials from "./components/Testimonials";
import FAQSection from "./components/FAQSection";
import HeroNewSection from "./components/HeroNewSection";
import HomeSecond from "./components/HomeSecond";
import HomeThird from "./components/HomeThird";
import HomeFourth from "./components/HomeFourth";
import HomeFifth from "./components/HomeFifth";
import HomeSixth from "./components/HomeSixth";
import HomeSeventh from "./components/HomeSeventh";
import HomeEigth from "./components/HomeEigth";
import HomeNinth from "./components/HomeNinth";
import HomeTenth from "./components/HomeTenth";
import HomeEleventh from "./components/HomeEleventh";
import FaQ from "./components/FaQ";
import Footer from "./COMMON/Footer";

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
      {/* <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            To get started, edit the page.js file.
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Looking for a starting point or more instructions? Head over to{" "}
            <a
              href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Templates
            </a>{" "}
            or the{" "}
            <a
              href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              className="font-medium text-zinc-950 dark:text-zinc-50"
            >
              Learning
            </a>{" "}
            center.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-5 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] md:w-[158px]"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={16}
              height={16}
            />
            Deploy Now
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-5 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Documentation
          </a>
        </div>
      </main> */}
      <Navbar />
      <HeroNewSection/>
      <HomeSecond/>
      <HomeThird/>
      <HomeFourth/>
      <HomeFifth/>
      <HomeSixth/>
      <HomeSeventh/>
      <HomeEigth/>
      <HomeNinth/>
      <HomeTenth/>
      <HomeEleventh/>
     
      {/* <GemBanner /> */}
      <TrustedProducts />
      {/* <HeroSection /> */}

      {/* <TrustBadges /> */}

       {/* <GemPurpose />
      <BestSelling />
      <ShopByPrice />
      <GemServiceCards />
      <SemiPreciousSlider /> */}
      <Testimonials /> 
       <FaQ data={faqData}/>
       <Footer/>
      {/* <FAQSection /> */}
    </div>
  );
}
