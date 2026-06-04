
import ServicesComponent from './ServicesComponent';

export const metadata = {
  title: "Expert Astrologer in NCR, India | Bajrang Astro",
  description:
    "Expert Vedic astrology consultation, Janam Kundli analysis & palm reading by Pandit Vishal Verma. Best astrologer in NCR, India. Book your session today",
  alternates: {
    canonical: "/astrology-consulting",
  },
};

export default function AstrologyServicesPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Expert Astrologer in NCR, India | Bajrang Astro",
    description:
      "Expert Vedic astrology consultation, Janam Kundli analysis & palm reading by Pandit Vishal Verma. Best astrologer in NCR, India. Book your session today",
    url: "https://www.bajrangastro.com/astrology-consulting",
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
