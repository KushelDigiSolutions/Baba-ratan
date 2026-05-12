"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "./AuthContext";

const WishlistContext = createContext();
const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? "https://bajrangastro.kdscrm.com/api";

export const WishlistProvider = ({ children }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { user } = useAuth();

  const fetchWishlist = async () => {
    if (!user?.token) return;
    setIsLoading(true);
    try {
      const response = await fetch(`${apiBase}/wishlist`, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();

      // Adjust based on the actual response where status might be missing
      const items = data.data || data.wishlist || (Array.isArray(data) ? data : []);
      setWishlistItems(items);
    } catch (error) {
      console.error("Failed to fetch wishlist", error);
    } finally {
      setIsLoading(false);
    }
  };

  const addToWishlist = async (productId) => {
    if (!user?.token) {
      alert("Please login to add items to your wishlist.");
      return;
    }
    try {
      const response = await fetch(`${apiBase}/wishlist/add`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({ product_id: productId }),
      });
      const data = await response.json();
      if (data.status || response.ok) {
        await fetchWishlist(); // Refresh wishlist
        return true;
      } else {
        alert(data.message || "Failed to add to wishlist.");
        return false;
      }
    } catch (error) {
      console.error("Error adding to wishlist", error);
      return false;
    }
  };

  const removeFromWishlist = async (wishlistId) => {
    if (!user?.token) return;
    try {
      const response = await fetch(`${apiBase}/wishlist/remove/${wishlistId}`, {
        method: "DELETE", // The user provided a GET-like URL, but let's check if it's POST/DELETE. Usually it's GET or DELETE.
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      const data = await response.json();
      if (data.status || response.ok) {
        await fetchWishlist();
        return true;
      }
      return false;
    } catch (error) {
      console.error("Error removing from wishlist", error);
      return false;
    }
  };

  useEffect(() => {
    if (user?.token) {
      fetchWishlist();
    } else {
      setWishlistItems([]);
    }
  }, [user]);

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        isLoading,
        addToWishlist,
        removeFromWishlist,
        fetchWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
};
