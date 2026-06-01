import React from 'react';
import CartSection from '../components/CartSection';

export const metadata = {
    title: 'My Bag | Bajrang Astro Website',
    description: 'Review your selected gemstones before checkout.',
    alternates: {
        canonical: '/cart',
    },
};

export default function CartPage() {
    return (
        <CartSection />
    );
}
