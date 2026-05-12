"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        if (typeof window === "undefined") return [];
        const savedCart = localStorage.getItem('cart');
        try {
            return savedCart ? JSON.parse(savedCart) : [];
        } catch (e) {
            return [];
        }
    });
    const [cartSummary, setCartSummary] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { user } = useAuth();
    const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? "https://bajrangastro.kdscrm.com/api";

    const fetchCart = async () => {
        if (!user?.token) return;
        setIsLoading(true);
        try {
            const response = await fetch(`${apiBase}/cart`, {
                headers: {
                    Accept: "application/json",
                    Authorization: `Bearer ${user.token}`,
                },
            });
            const data = await response.json();
            
            // Handle different API response structures (wrapped in 'cart', 'data', or root object)
            const cartData = data.cart || data.data || (data.items ? data : null);

            if (cartData) {
                const items = cartData.items || [];
                
                // Save summary info
                setCartSummary({
                    sub_total: cartData.sub_total,
                    tax_amount: cartData.tax_amount,
                    shipping_amount: cartData.shipping_amount,
                    grand_total: cartData.grand_total,
                    currency: cartData.currency
                });

                const formattedCart = items.map(item => ({
                    ...item.product,
                    id: item.product_id, // Ensure id is product_id for compatibility
                    quantity: item.quantity,
                    price: item.price,
                    total: item.total,
                    cartItemId: item.id
                }));
                setCart(formattedCart);
            }
        } catch (error) {
            console.error("Failed to fetch cart", error);
        } finally {
            setIsLoading(false);
        }
    };

    // Load cart from API if logged in
    useEffect(() => {
        if (user?.token) {
            fetchCart();
        }
    }, [user]);

    // Save guest cart to localStorage on change
    useEffect(() => {
        if (!user) {
            localStorage.setItem('cart', JSON.stringify(cart));
        }
    }, [cart, user]);

    const addToCart = async (product, quantity = 1, showBagAlert = false) => {
        const qtyToAdd = Number(quantity) || 1;
        const productId = Number(product.id || product.product_id);

        // Local Update
        setCart(prevCart => {
            const existingItem = prevCart.find(item => Number(item.id) === productId);
            if (existingItem) {
                return prevCart.map(item =>
                    Number(item.id) === productId
                        ? { ...item, quantity: item.quantity + qtyToAdd }
                        : item
                );
            }
            return [...prevCart, { ...product, id: productId, quantity: qtyToAdd }];
        });

        if (showBagAlert) {
            alert("Product added to your bag successfully!");
        }

        // Backend Sync
        if (user?.token) {
            try {
                const response = await fetch(`${apiBase}/cart/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify({
                        product_id: productId,
                        quantity: qtyToAdd
                    })
                });
                if (response.ok) {
                    await fetchCart(); // Refresh to get exact totals from backend
                }
            } catch (error) {
                console.error("Cart sync error:", error);
            }
        }
    };

    const removeFromCart = (productId) => {
        setCart(prevCart => prevCart.filter(item => item.id !== productId));
    };

    const updateQuantity = async (productId, quantity) => {
        const targetId = Number(productId);
        const currentQty = getItemQuantity(targetId);
        const diff = Number(quantity) - currentQty;

        if (quantity < 1) {
            removeFromCart(targetId);
            return;
        }

        // Local Update
        setCart(prevCart =>
            prevCart.map(item =>
                Number(item.id) === targetId ? { ...item, quantity: Number(quantity) } : item
            )
        );

        // Backend Sync
        if (user?.token && diff !== 0) {
            try {
                // If diff > 0, we add the difference. If diff < 0, it depends on API support.
                // Assuming cart/add with positive/negative quantity works or we just refresh.
                await fetch(`${apiBase}/cart/add`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json",
                        Authorization: `Bearer ${user.token}`,
                    },
                    body: JSON.stringify({
                        product_id: targetId,
                        quantity: diff // Sending the difference to increment/decrement
                    })
                });
                await fetchCart();
            } catch (error) {
                console.error("Update quantity sync error:", error);
            }
        }
    };

    const getItemQuantity = (productId) => {
        const item = cart.find(item => item.id === productId);
        return item ? item.quantity : 0;
    };

    const clearCart = () => {
        setCart([]);
    };

    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, cartSummary, isLoading, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, getItemQuantity, fetchCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
