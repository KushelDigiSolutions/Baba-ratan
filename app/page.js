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
  title: "Bajrang Astro | Best Astrologer in India – Vishal Verma",
  description:
    "Get accurate Janam Kundli analysis, palm reading & Vastu consulting from Vishal Verma. Best astrologer in India. Call now for free consultation.",
  alternates: {
    canonical: "/",
  },
};

const jsonLd = [
  {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ProfessionalService"],
    "@id": "https://www.bajrangastro.com/#business",
    "name": "Bajrang Astro",
    "alternateName": "Bajrangi Ratan Kendra",
    "description": "India's trusted destination for authentic Vedic astrology consultation, accurate Janam Kundli analysis, Vastu Shastra guidance, and certified gemstones by Vishal Verma.",
    "url": "https://www.bajrangastro.com",
    "logo": "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
    "image": "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
    "telephone": "+917042600873",
    "email": "bajrangastroofficial@gmail.com",
    "foundingDate": "2009",
    "priceRange": "₹₹",
    "currenciesAccepted": "INR",
    "paymentAccepted": "Cash, Online Transfer, UPI",
    "address": [
      {
        "@type": "PostalAddress",
        "streetAddress": "172-A, Bhargav Market, Sadar Bazaar",
        "addressLocality": "Meerut Cantt",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "250001",
        "addressCountry": "IN"
      },
      {
        "@type": "PostalAddress",
        "streetAddress": "247/1, Rohta Road, opposite Star Public School, Tej Vihar, Fazalpur",
        "addressLocality": "Meerut",
        "addressRegion": "Uttar Pradesh",
        "postalCode": "250002",
        "addressCountry": "IN"
      }
    ],
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.9845,
      "longitude": 77.7064
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "City",
        "name": "Delhi"
      },
      {
        "@type": "City",
        "name": "Noida"
      },
      {
        "@type": "City",
        "name": "Meerut"
      },
      {
        "@type": "City",
        "name" : "Ghaziabad"
      },
      {
        "@type": "AdministrativeArea",
        "name": "Delhi NCR"
      }
    ],
    "serviceType": [
      "Best Astrology Consultation",
      "Janam Kundli Analysis",
      "Palm Reading",
      "Hast Rekha",
      "Vastu Consulting",
      "Kundli Matching",
      "Gemstone Consultation",
      "Daily Horoscope",
      "Numerology",
      "Tarot Reading"
    ],
    "sameAs": [
      "https://www.facebook.com/bajrangastro/",
      "https://www.instagram.com/bajrangastro/",
      "https://www.youtube.com/@bajrangiratankendra",
      "https://www.linkedin.com/company/bajrang-astro/"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        "opens": "12:00",
        "closes": "20:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Astrology & Vastu Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Janam Kundli Analysis",
            "description": "Deep, accurate reading of your birth chart to understand career, health, relationships, and life path.",
            "url": "https://www.bajrangastro.com/astrology-consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Kundli Matching",
            "description": "Marriage compatibility analysis between two people based on their birth charts.",
            "url": "https://www.bajrangastro.com/astrology-consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Palm Reading (Hast Rekha)",
            "description": "Expert hand line analysis for career, marriage, wealth, and life timeline insights.",
            "url": "https://www.bajrangastro.com/astrology-consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vastu Consulting",
            "description": "Home, office, and factory Vastu analysis and corrections using the five elements of nature.",
            "url": "https://www.bajrangastro.com/vastu-consulting"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Gemstone Consultation",
            "description": "Certified natural gemstone recommendations and energised spiritual products for aura enhancement.",
            "url": "https://www.bajrangastro.com/shop"
          }
        }
      ]
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://www.bajrangastro.com/#vishal-verma",
    "name": "Vishal Verma",
    "jobTitle": "Vedic Astrologer & Vastu Consultant",
    "description": "Best astrologer in India with 15+ years of experience in Janam Kundli analysis, Palm Reading, and Vastu consulting.",
    "worksFor": {
      "@id": "https://www.bajrangastro.com/#business"
    },
    "url": "https://www.bajrangastro.com/about-us",
    "sameAs": [
      "https://www.instagram.com/bajrangastro/",
      "https://www.facebook.com/bajrangastro/"
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.bajrangastro.com/#website",
    "url": "https://www.bajrangastro.com",
    "name": "Bajrang Astro",
    "description": "Best Astrologer in India – Vishal Verma. Janam Kundli, Palm Reading & Vastu Consulting.",
    "publisher": {
      "@id": "https://www.bajrangastro.com/#business"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.bajrangastro.com/?s={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "url": "https://www.bajrangastro.com/#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Who is the best astrologer in India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vishal Verma of Bajrang Astro is one of the most trusted astrologers in India, known for accurate Janam Kundli analysis, expert Palm Reading, and practical Vastu consulting across India."
        }
      },
      {
        "@type": "Question",
        "name": "How can Vastu consulting help my home or business?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vishal Verma identifies hidden Vastu doshas in your space and provides simple, practical corrections without demolition to bring growth, peace, and positive energy back into your life."
        }
      },
      {
        "@type": "Question",
        "name": "Do you provide services across India?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Bajrang Astro provides both online and offline services across India. Kundli analysis and Palm Reading are available via WhatsApp and video call. Vastu site visits are available across Delhi NCR."
        }
      },
      {
        "@type": "Question",
        "name": "Can I get a free consultation with Vishal Verma?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, you can connect with Vishal Verma for a free initial chat on WhatsApp or phone call to discuss your problem and understand which service is right for you."
        }
      },
      {
        "@type": "Question",
        "name": "Is Vedic Astrology accurate and scientifically valid?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Vedic Astrology is a thousands-of-years-old planetary science practiced across India and globally. Vishal Verma uses precise birth chart calculations to give accurate, honest predictions — not guesswork."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Navgrah – Nine Planets in Vedic Astrology",
    "url": "https://www.bajrangastro.com/grah",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "item": { "@type": "WebPage", "name": "Surya (Sun)", "url": "https://www.bajrangastro.com/grah/surya", "description": "Represents power, confidence & leadership." } },
      { "@type": "ListItem", "position": 2, "item": { "@type": "WebPage", "name": "Chandra (Moon)", "url": "https://www.bajrangastro.com/grah/chandra", "description": "Controls emotions, mind & peace." } },
      { "@type": "ListItem", "position": 3, "item": { "@type": "WebPage", "name": "Mangal (Mars)", "url": "https://www.bajrangastro.com/grah/mangal", "description": "Symbol of courage, strength & energy." } },
      { "@type": "ListItem", "position": 4, "item": { "@type": "WebPage", "name": "Budh (Mercury)", "url": "https://www.bajrangastro.com/grah/budh", "description": "Represents intelligence & communication." } },
      { "@type": "ListItem", "position": 5, "item": { "@type": "WebPage", "name": "Guru (Jupiter)", "url": "https://www.bajrangastro.com/grah/guru", "description": "Planet of wisdom, growth & spirituality." } },
      { "@type": "ListItem", "position": 6, "item": { "@type": "WebPage", "name": "Shukra (Venus)", "url": "https://www.bajrangastro.com/grah/shukra", "description": "Represents love, luxury & beauty." } },
      { "@type": "ListItem", "position": 7, "item": { "@type": "WebPage", "name": "Shani (Saturn)", "url": "https://www.bajrangastro.com/grah/shani", "description": "Planet of discipline, karma & justice." } },
      { "@type": "ListItem", "position": 8, "item": { "@type": "WebPage", "name": "Rahu", "url": "https://www.bajrangastro.com/grah/rahu", "description": "Represents illusion, desire & ambition." } },
      { "@type": "ListItem", "position": 9, "item": { "@type": "WebPage", "name": "Ketu", "url": "https://www.bajrangastro.com/grah/ketu", "description": "Symbol of spirituality & detachment." } }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "12 Rashi – Zodiac Signs in Vedic Astrology",
    "url": "https://www.bajrangastro.com/rashi",
    "itemListElement": [
      { "@type": "ListItem", "position": 1,  "item": { "@type": "WebPage", "name": "Aries (Mesh)",            "url": "https://www.bajrangastro.com/rashi/aries" } },
      { "@type": "ListItem", "position": 2,  "item": { "@type": "WebPage", "name": "Taurus (Vrishabha)",      "url": "https://www.bajrangastro.com/rashi/taurus" } },
      { "@type": "ListItem", "position": 3,  "item": { "@type": "WebPage", "name": "Gemini (Mithun)",         "url": "https://www.bajrangastro.com/rashi/gemini" } },
      { "@type": "ListItem", "position": 4,  "item": { "@type": "WebPage", "name": "Cancer (Karka)",          "url": "https://www.bajrangastro.com/rashi/cancer" } },
      { "@type": "ListItem", "position": 5,  "item": { "@type": "WebPage", "name": "Leo (Singh)",             "url": "https://www.bajrangastro.com/rashi/leo" } },
      { "@type": "ListItem", "position": 6,  "item": { "@type": "WebPage", "name": "Virgo (Kanya)",           "url": "https://www.bajrangastro.com/rashi/virgo" } },
      { "@type": "ListItem", "position": 7,  "item": { "@type": "WebPage", "name": "Libra (Tula)",            "url": "https://www.bajrangastro.com/rashi/libra" } },
      { "@type": "ListItem", "position": 8,  "item": { "@type": "WebPage", "name": "Scorpio (Vrishchik)",     "url": "https://www.bajrangastro.com/rashi/scorpio" } },
      { "@type": "ListItem", "position": 9,  "item": { "@type": "WebPage", "name": "Sagittarius (Dhanu)",     "url": "https://www.bajrangastro.com/rashi/sagittarius" } },
      { "@type": "ListItem", "position": 10, "item": { "@type": "WebPage", "name": "Capricorn (Makar)",       "url": "https://www.bajrangastro.com/rashi/capricorn" } },
      { "@type": "ListItem", "position": 11, "item": { "@type": "WebPage", "name": "Aquarius (Kumbh)",        "url": "https://www.bajrangastro.com/rashi/aquarius" } },
      { "@type": "ListItem", "position": 12, "item": { "@type": "WebPage", "name": "Pisces (Meen)",           "url": "https://www.bajrangastro.com/rashi/pisces" } }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home",               "item": "https://www.bajrangastro.com/" },
      { "@type": "ListItem", "position": 2, "name": "Vastu Consulting",   "item": "https://www.bajrangastro.com/vastu-consulting" },
      { "@type": "ListItem", "position": 3, "name": "Astrology Services", "item": "https://www.bajrangastro.com/astrology-consulting" },
      { "@type": "ListItem", "position": 4, "name": "Shop",               "item": "https://www.bajrangastro.com/shop" },
      { "@type": "ListItem", "position": 5, "name": "Grah",               "item": "https://www.bajrangastro.com/grah" },
      { "@type": "ListItem", "position": 6, "name": "Rashi",              "item": "https://www.bajrangastro.com/rashi" },
      { "@type": "ListItem", "position": 7, "name": "Contact",            "item": "https://www.bajrangastro.com/contact" }
    ]
  }
];

export default function Home() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Bajrang Astro | Best Astrologer in India – Vishal Verma",
    description:
      "Get accurate Janam Kundli analysis, palm reading & Vastu consulting from Vishal Verma. Best astrologer in India. Call now for free consultation.",
    url: "https://www.bajrangastro.com/",
    image:
      "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
    telephone: "+917042600873",
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
        "Vishal Verma of Bajrang Astro is one of the most trusted astrologers in India, known for accurate Janam Kundli analysis, expert Palm Reading, and practical Vastu consulting across India.",
    },
    {
      question: "How can Vastu consulting help my home or business?",
      answer:
        "Vishal Verma identifies hidden Vastu doshas in your space and gives simple, practical corrections without demolition to bring growth, peace, and positive energy back into your life.",
    },
    {
      question: "Do you provide services across India?",
      answer:
        "Yes, Bajrang Astro provides both online and offline services across India. Kundli analysis and Palm Reading are available via WhatsApp and video call. Vastu site visits are available across Delhi NCR.",
    },
    {
      question: "Can I get a free consultation with Vishal Verma?",
      answer:
        "Yes, you can connect with Vishal Verma for a free initial chat on WhatsApp or call to discuss your problem and understand which service is right for you.",
    },
    {
      question: "Is Vedic Astrology accurate and scientifically valid?",
      answer:
        "Vedic Astrology is a thousands-of-years-old planetary science practiced across India and globally. Vishal Verma uses precise birth chart calculations to give accurate, honest predictions not guesswork.",
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
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
      {/* <TrustedProducts /> */}
      <Testimonials />
      <FaQ data={faqData} />
      <Footer />
    </div>
  );
}
