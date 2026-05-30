"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const CategoryContext = createContext();

const apiBase =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://admin.bajrangastro.com/api";

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [categoriesLoading, setCategoriesLoading] = useState(false);
  const [productsLoading, setProductsLoading] = useState(false);
  const [categoriesError, setCategoriesError] = useState(null);
  const [productsError, setProductsError] = useState(null);

  // Fetch all categories
  const fetchCategories = async () => {
    try {
      setCategoriesLoading(true);
      setCategoriesError(null);
      const response = await fetch(`${apiBase}/categories`);

      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }

      const data = await response.json();
      const categoriesData = Array.isArray(data) ? data : data.data || [];
      setCategories(categoriesData);

      // Set first category as active if available
      if (categoriesData.length > 0) {
        setActiveCategory(categoriesData[0]);
      }
    } catch (err) {
      setCategoriesError(err.message);
      console.error("Error fetching categories:", err);
    } finally {
      setCategoriesLoading(false);
    }
  };

  // Fetch products for a specific category
  const fetchProductsByCategory = async (categorySlug) => {
    if (!categorySlug) return;
    try {
      setProductsLoading(true);
      setProductsError(null);
      const response = await fetch(`${apiBase}/gemstones/${categorySlug}`);

      if (!response.ok) {
        setProductsError(`Failed to fetch products for ${categorySlug}`);
        return;
      }

      const data = await response.json();
      const productsData = Array.isArray(data)
        ? data
        : data.products || data.data || [];
      setProducts(productsData);
    } catch (err) {
      setProductsError(err.message);
      console.error("Error fetching products:", err);
    } finally {
      setProductsLoading(false);
    }
  };

  // Handle category change
  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    const slug =
      category.slug ||
      category.name
        ?.toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^a-z0-9-]/g, "");
    fetchProductsByCategory(slug);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  useEffect(() => {
    if (activeCategory) {
      const slug =
        activeCategory.slug ||
        activeCategory.name
          ?.toLowerCase()
          .replace(/\s+/g, "-")
          .replace(/[^a-z0-9-]/g, "");
      fetchProductsByCategory(slug);
    }
  }, [activeCategory]);

  return (
    <CategoryContext.Provider
      value={{
        categories,
        products,
        activeCategory,
        categoriesLoading,
        productsLoading,
        categoriesError,
        productsError,
        handleCategoryChange,
        fetchCategories,
        fetchProductsByCategory,
      }}
    >
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  const context = useContext(CategoryContext);
  if (!context) {
    throw new Error("useCategory must be used within a CategoryProvider");
  }
  return context;
};
