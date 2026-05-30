import React from "react";
import Navbar from "../../../COMMON/Navbar";
import ProductDetailSection from "../../../components/ProductDetailSection";

export async function generateMetadata({ params }) {
  const { categorySlug, productSlug } = await params;

  try {
    const response = await fetch(
      `https://admin.bajrangastro.com/api/gemstones/${categorySlug}/${productSlug}`,
    );
    const data = await response.json();
    const product = data.product || data.data || data;

    return {
      title: `${product.name || "Product Details"} | Bajrang Astro`,
      description:
        product.meta_description ||
        product.description?.replace(/<[^>]*>/g, "").slice(0, 160) ||
        "View detailed information about our gemstones.",
    };
  } catch (error) {
    return {
      title: "Product Details | Bajrang Astro",
      description: "View detailed information about our gemstones.",
    };
  }
}

export default async function ProductDetailPage({ params }) {
  const { categorySlug, productSlug } = await params;
  let product = null;
  let error = null;

  try {
    const response = await fetch(
      `https://admin.bajrangastro.com/api/gemstones/${categorySlug}/${productSlug}`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      },
    );

    if (!response.ok) {
      throw new Error("Product not found");
    }

    const data = await response.json();
    product = data.product || data.data || data;
  } catch (err) {
    console.error("Error fetching product:", err);
    error = err.message;
  }

  if (!product) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="max-w-7xl mx-auto px-20 py-20 text-center">
          <h1 className="text-3xl font-bold text-gray-800">
            Product Not Found
          </h1>
          <p className="mt-4 text-gray-600">
            The product you are looking for might have been moved or deleted.
          </p>
        </div>
      </main>
    );
  }

  return (
    <main
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(140.3% 104.29% at 10% 20%, rgba(254, 212, 136, 0.15) 0%, #F8F9FA 90%)",
      }}
    >
      <Navbar />
      <ProductDetailSection product={product} />
    </main>
  );
}
