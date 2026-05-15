
import ServicesComponent from './ServicesComponent';

export const metadata = {
  title: "Trusted Vedic Astrology in India | Bajrang Astro",
  description:
    "Get trusted Vedic astrology in India consultation & accurate Janam Kundli analysis from Vishal Verma at Bajrang Astro, an expert astrologer in India. Book now",
  alternates: {
    canonical: "/astrology-services",
  },
};

export default function AstrologyServicesPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Trusted Vedic Astrology in India | Bajrang Astro",
    description:
      "Get trusted Vedic astrology in India consultation & accurate Janam Kundli analysis from Vishal Verma at Bajrang Astro, an expert astrologer in India. Book now",
    url: "https://bajrangastro.com/astrology-services",
    image:
      "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
    provider: {
      "@type": "Organization",
      name: "Bajrang Astro",
      logo: {
        "@type": "ImageObject",
        url: "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
      },
    },
    areaServed: "India",
    serviceType: "Vedic Astrology",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <ServicesComponent />
    </>
  );
}
