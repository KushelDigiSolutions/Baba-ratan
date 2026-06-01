import VastuConsulting from './VastuConsulting'

export const metadata = {
  title: " Vastu Consulting for Home & Office | Bajrang Astro",
  description:
    "Expert Vastu consulting for home, office & factory by Vishal Verma. Trusted Vastu consultant in Meerut, Noida & Delhi NCR. Book a site visit now",
  alternates: {
    canonical: "/vastu-consulting",
  },
};

const page = () => {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: " Vastu Consulting for Home & Office | Bajrang Astro",
    description:
      "Expert Vastu consulting for home, office & factory by Vishal Verma. Trusted Vastu consultant in Meerut, Noida & Delhi NCR. Book a site visit now",
    url: "https://bajrangastro.com/vastu-consulting",
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
    serviceType: "Vastu Consulting",
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(softwareSchema),
        }}
      />
      <VastuConsulting />
    </>
  )
}

export default page
