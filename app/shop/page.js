import ShopComponent from './ShopComponent';

export const metadata = {
  title: "Buy Certified Gemstones Online India | Bajrang Astro",
  description:
    "Shop 100% certified, energised gemstones recommended by Pandit Vishal Johari. Natural Ruby, Emerald, Neelam & more. Kundli-based gemstone advice. Order now.",
  alternates: {
    canonical: "/shop",
  },
};

export default function ShopPage() {
  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "Store",
    name: "Buy Certified Gemstones Online India | Bajrang Astro",
    description:
      "Shop 100% certified, energised gemstones recommended by Pandit Vishal Johari. Natural Ruby, Emerald, Neelam & more. Kundli-based gemstone advice. Order now.",
    url: "https://bajrangastro.com/shop",
    image:
      "https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Certified Gemstones",
    },
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
      <ShopComponent />
    </>
  );
}
