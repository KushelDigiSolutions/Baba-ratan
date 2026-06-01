import React from 'react';
import CartSection from '../components/CartSection';

export const metadata = {
    title: 'Your Shopping Cart | Bajrang Astro ',
    description: 'Review your selected gemstones & astrology services at Bajrang Astro. Complete your order & book your consultation with Vishal Verma today',
    alternates: {
        canonical: '/cart',
    },
};

export default function CartPage() {
    return (
        <CartSection />
    );
}
