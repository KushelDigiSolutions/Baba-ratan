import React from 'react'
import AboutComponent from './AboutComponent'

export const metadata = {
    title: "About Bajrang Astro | Trusted Astrologer in India",
    description:
        "Bajrang Astro, India's trusted name in Vedic astrology, Janam Kundli analysis & Vastu consulting. 1000+ happy clients across India. Know our story today.",
    alternates: {
        canonical: "/about-us",
    },
};

const page = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "About Bajrang Astro | Trusted Astrologer in India",
    description:
      "Bajrang Astro, India's trusted name in Vedic astrology, Janam Kundli analysis & Vastu consulting. 1000+ happy clients across India. Know our story today.",
    url: "https://bajrangastro.com/about-us",
    image:
      "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
    publisher: {
      "@type": "Organization",
      name: "Bajrang Astro",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
      },
    },
  };
    return (
        <>
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(softwareSchema),
              }}
            />
            <AboutComponent />
        </>
    )
}

export default page
