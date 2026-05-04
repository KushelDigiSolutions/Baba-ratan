"use client";
import React from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { FiTrash2, FiMinus, FiPlus, FiArrowLeft, FiShoppingBag } from 'react-icons/fi';
import Navbar from '../COMMON/Navbar';
import Footer from '../COMMON/Footer';

const CartSection = () => {
    const { cart, removeFromCart, updateQuantity, cartCount } = useCart();

    const subtotal = cart.reduce((total, item) => total + (item.price * item.quantity), 0);
    const shipping = subtotal > 99 ? 0 : 15;
    const total = subtotal + shipping;

    const fontStyle = { fontFamily: "'GT Walsheim Trial', sans-serif" };

    return (
        <div className="bg-[#F8F9FA] min-h-screen flex flex-col" style={fontStyle}>
            <Navbar />
            
            <main className="flex-grow max-w-7xl w-full mx-auto px-5 md:px-10 py-10 md:py-16">
                <div className="flex items-center gap-2 mb-8">
                    <Link href="/shop" className="text-[#E57661] hover:underline flex items-center gap-1 text-sm md:text-base">
                        <FiArrowLeft /> Back to Shop
                    </Link>
                </div>

                <h1 className="text-3xl md:text-4xl font-bold text-[#303030] mb-10 flex items-center gap-3">
                    My Bag <span className="text-[#E57661] text-xl">({cartCount} items)</span>
                </h1>

                {cart.length === 0 ? (
                    <div className="bg-white rounded-3xl p-12 text-center shadow-sm border border-gray-100 flex flex-col items-center gap-6">
                        <div className="w-20 h-20 bg-orange-50 rounded-full flex items-center justify-center text-[#E57661]">
                            <FiShoppingBag size={40} />
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold text-[#303030] mb-2">Your bag is empty</h2>
                            <p className="text-gray-500">Looks like you haven't added any gemstones yet.</p>
                        </div>
                        <Link href="/shop" className="bg-[#E57661] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#d96552] transition shadow-lg shadow-orange-100">
                            Explore Gemstones
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-10 items-start">
                        {/* Cart Items List */}
                        <div className="space-y-6">
                            {cart.map((item) => (
                                <div key={item.id} className="bg-white rounded-2xl p-4 md:p-6 shadow-sm border border-gray-100 flex gap-4 md:gap-6 items-center">
                                    <div className={`w-24 h-24 md:w-32 md:h-32 rounded-xl overflow-hidden flex-shrink-0 ${item.imageBg || 'bg-[#F6F1EA]'}`}>
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>

                                    <div className="flex-grow">
                                        <div className="flex justify-between items-start mb-2">
                                            <div>
                                                <h3 className="text-lg md:text-xl font-bold text-[#303030]">{item.name}</h3>
                                                <p className="text-sm text-gray-500 line-clamp-1">{item.subtitle || item.description}</p>
                                            </div>
                                            <button 
                                                onClick={() => removeFromCart(item.id)}
                                                className="text-gray-400 hover:text-red-500 transition-colors p-1"
                                            >
                                                <FiTrash2 size={20} />
                                            </button>
                                        </div>

                                        <div className="flex justify-between items-end mt-4">
                                            <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden h-10">
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                                    className="w-10 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition"
                                                >
                                                    <FiMinus size={14} />
                                                </button>
                                                <span className="w-10 flex items-center justify-center font-bold text-[#303030] text-sm">
                                                    {item.quantity}
                                                </span>
                                                <button 
                                                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                                    className="w-10 flex items-center justify-center hover:bg-gray-50 text-gray-600 transition"
                                                >
                                                    <FiPlus size={14} />
                                                </button>
                                            </div>

                                            <div className="text-lg md:text-xl font-bold text-[#E57661]">
                                                ${(item.price * item.quantity).toFixed(2)}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Order Summary */}
                        <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 sticky top-24">
                            <h2 className="text-2xl font-bold text-[#303030] mb-6">Order Summary</h2>
                            
                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between text-gray-600">
                                    <span>Subtotal</span>
                                    <span className="font-medium text-[#303030]">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-gray-600">
                                    <span>Shipping</span>
                                    <span className="font-medium text-[#303030]">
                                        {shipping === 0 ? <span className="text-green-600">Free</span> : `$${shipping.toFixed(2)}`}
                                    </span>
                                </div>
                                {shipping > 0 && (
                                    <p className="text-[12px] text-orange-600 bg-orange-50 p-2 rounded-lg">
                                        Add ${(100 - subtotal).toFixed(2)} more for FREE shipping!
                                    </p>
                                )}
                                <div className="border-t border-gray-100 pt-4 flex justify-between">
                                    <span className="text-lg font-bold text-[#303030]">Total</span>
                                    <span className="text-2xl font-bold text-[#E57661]">${total.toFixed(2)}</span>
                                </div>
                            </div>

                            <button className="w-full bg-[#303030] text-white py-4 rounded-2xl font-bold hover:bg-black transition shadow-xl mb-4 uppercase tracking-widest text-sm">
                                Proceed to Checkout
                            </button>
                            
                            <div className="flex items-center justify-center gap-4 opacity-50 grayscale">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg" className="h-4" alt="Visa" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg" className="h-6" alt="Mastercard" />
                                <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" className="h-4" alt="Paypal" />
                            </div>
                        </div>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default CartSection;
