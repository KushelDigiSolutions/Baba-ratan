import { blogs } from "../data";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const blog = blogs.find(b => b.slug === resolvedParams?.slug);

  if (!blog) {
    return {
      title: "Blog Not Found | Bajrang Astro",
    };
  }

  return {
    title: blog.metaTitle || blog.title,
    description: blog.metaDescription || blog.shortDescription,
    alternates: {
      canonical: `https://www.bajrangastro.com/blog/${resolvedParams.slug}`,
    },
    openGraph: {
      title: blog.metaTitle || blog.title,
      description: blog.metaDescription || blog.shortDescription,
      images: [blog.heroImage],
    }
  };
}

export default async function BlogLayout({ children, params }) {
  const resolvedParams = await params;
  const blog = blogs.find(b => b.slug === resolvedParams?.slug);

  if (!blog) return children;

  const schemaData = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": blog.title,
      "description": blog.metaDescription || blog.shortDescription,
      "image": blog.heroImage,
      "author": {
        "@type": "Person",
        "name": blog.author
      },
      "publisher": {
        "@type": "Organization",
        "name": "Bajrang Astro",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.bajrangastro.com/logo.png"
        }
      },
      "datePublished": "2026-06-12",
      "dateModified": "2026-06-12",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": `https://www.bajrangastro.com/blog/${blog.slug}`
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": blog.faqData && blog.faqData.length > 0 ? blog.faqData.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      })) : []
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.bajrangastro.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.bajrangastro.com/blog"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": blog.title,
          "item": `https://www.bajrangastro.com/blog/${blog.slug}`
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": blog.author,
      "jobTitle": "Vedic Astrologer",
      "worksFor": {
        "@type": "Organization",
        "name": "Bajrang Astro"
      },
      "url": "https://www.bajrangastro.com",
      "sameAs": [
        "https://www.facebook.com/bajrangastro/",
        "https://www.instagram.com/bajrangastro/",
        "https://www.youtube.com/@bajrangiratankendra"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "Bajrang Astro",
      "url": "https://www.bajrangastro.com",
      "logo": "https://www.bajrangastro.com/logo.png",
      "sameAs": [
        "https://www.facebook.com/bajrangastro/",
        "https://www.instagram.com/bajrangastro/",
        "https://www.youtube.com/@bajrangiratankendra"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": blog.metaTitle || blog.title,
      "description": blog.metaDescription || blog.shortDescription,
      "url": `https://www.bajrangastro.com/blog/${blog.slug}`
    }
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />
      {children}
    </>
  );
}
