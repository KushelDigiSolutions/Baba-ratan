"use client";
import Image from "next/image";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function VastuEigth() {
    const [selected, setSelected] = useState("Home / Flat");

    const [open, setOpen] = useState(false);

    const options = ["Home / Flat", "Office", "Factory", "Shop / Showroom", "Plot / Land"];
    return (
        <section className="w-full flex justify-center px-4 py-10 bg-[#FFFFFF]">
            <div className="w-full max-w-7xl bg-[#e9e9e9] rounded-[40px] overflow-hidden grid grid-cols-1 lg:grid-cols-2">


                <div className="p-6 sm:p-10 md:py-14 md:px-20 flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h5 className="text-2xl sm:text-3xl md:text-[40px] font-semibold text-[#222] mb-8 w-full">
                        Book Your Vastu Consultation
                    </h5>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 w-full text-left">
                        <div>
                            <label className="text-xs font-[600] tracking-widest text-[#78716C] uppercase mb-2 block">
                                First Name
                            </label>
                            <input
                                type="text"
                                placeholder="Arya"
                                className="w-full bg-white rounded-xl px-4 py-3 outline-none"
                            />
                        </div>

                        <div>
                            <label className="text-xs font-[600] tracking-widest text-[#78716C] uppercase mb-2 block">
                                Email
                            </label>
                            <input
                                type="email"
                                placeholder="hello@vastu.com"
                                className="w-full bg-white rounded-xl px-4 py-3 outline-none"
                            />
                        </div>
                    </div>

                    <div className="mb-6 relative w-full text-left">
                        <label className="text-xs font-[600] tracking-widest text-[#78716C] uppercase mb-2 block">
                            Property Type
                        </label>

                        <div
                            onClick={() => setOpen(!open)}
                            className="w-full bg-white rounded-xl px-4 py-3 flex justify-between items-center cursor-pointer"
                        >
                            <span>{selected}</span>
                            <FiChevronDown
                                className={`text-xl transition-transform ${open ? "rotate-180" : ""
                                    }`}
                            />
                        </div>

                        {open && (
                            <div className="absolute left-0 mt-2 w-full bg-white rounded-xl shadow-lg z-50 overflow-hidden">
                                {options.map((item, index) => (
                                    <div
                                        key={index}
                                        onClick={() => {
                                            setSelected(item);
                                            setOpen(false);
                                        }}
                                        className="px-4 py-3 hover:bg-gray-100 cursor-pointer text-sm"
                                    >
                                        {item}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    <div className="mb-8 w-full text-left">
                        <label className="text-xs font-[600] tracking-widest text-[#78716C] uppercase mb-2 block">
                            Message
                        </label>
                        <textarea
                            rows={4}
                            placeholder="Tell us about the problems you are facing in your space..."
                            className="w-full bg-white rounded-xl px-4 py-3 outline-none resize-none"
                        />
                    </div>

                    <button className="w-full cursor-pointer bg-[#7a5a1f] text-white py-4 rounded-xl text-sm sm:text-base font-medium shadow-md hover:opacity-90 transition">
                        Request Free Consultation
                    </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="relative h-[300px] md:h-auto">
                    <Image
                        src="https://res.cloudinary.com/dlzxiy0tl/image/upload/v1780999123/Office_Vastu_Consultant_Noida_Delhi_NCR_Bajrang_Astro_pzx72b.png"
                        alt="Vastu Consulting for Business India — Bajrang Astro"
                        fill
                        className="object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-[#775A1933]"></div>
                </div>

            </div>
        </section>
    );
}