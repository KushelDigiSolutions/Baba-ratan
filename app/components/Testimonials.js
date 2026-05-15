"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

const apiBase = process.env.NEXT_PUBLIC_API_BASE ?? "https://bajrangastro.kdscrm.com/api";

export default function Testimonials() {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch(`${apiBase}/testimonials`);
                const result = await response.json();
                if (result.success) {
                    setTestimonials(result.data);
                }
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    if (loading) {
        return (
            <section className="py-10 text-center">
                <p>Loading testimonials...</p>
            </section>
        );
    }

    if (testimonials.length === 0) {
        return null; // Or show nothing
    }

    return (
        <section
            className="py-10 overflow-hidden max-w-[1720px] mx-auto"
            style={{
                background:
                    "linear-gradient(180deg, rgba(229, 118, 97, 0.5) 0%, rgba(229, 118, 97, 0.2) 20%, rgba(229, 118, 97, 0.2) 20%, rgba(229, 118, 97, 0.2) 93.96%)",
            }}
        >
            {/* Heading */}
            <div className="text-center mb-14">
                <h2 className="text-4xl font-semibold text-[#E57661]">
                    What Our Happy Clients Say
                </h2>
                <p className="mt-2 text-lg text-gray-600">
                    Real people, real results, hear from those who trusted <span className="font-semibold text-black">Bajrang Astro</span>
                </p>
            </div>

            {/* TOP SLIDER (LEFT → RIGHT) */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 w-max animate-scroll-ltr">
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <TestimonialCard key={`top-${i}`} data={item} />
                    ))}
                </div>
            </div>

            {/* GAP */}
            <div className="h-10" />

            {/* BOTTOM SLIDER (RIGHT → LEFT) */}
            <div className="relative w-full overflow-hidden">
                <div className="flex gap-6 w-max animate-scroll-rtl">
                    {[...testimonials, ...testimonials].map((item, i) => (
                        <TestimonialCard key={`bottom-${i}`} data={item} />
                    ))}
                </div>
            </div>

            {/* ANIMATIONS */}
            <style jsx>{`
        @keyframes scroll-ltr {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0%);
          }
        }

        @keyframes scroll-rtl {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-ltr {
          animation: scroll-ltr 50s linear infinite;
        }

        .animate-scroll-rtl {
          animation: scroll-rtl 50s linear infinite;
        }
      `}</style>
        </section>
    );
}

/* CARD COMPONENT */
function TestimonialCard({ data }) {
    const imageUrl = data.image 
        ? (data.image.startsWith("http") ? data.image : `${apiBase.replace("/api", "")}/${data.image}`)
        : "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png";


    return (
        <div className="min-w-[320px] max-w-[320px] bg-white rounded-xl p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Image
                    src={imageUrl}
                    alt={data.name}
                    width={42}
                    height={42}
                    className="rounded-full object-cover aspect-square"
                />
                <div>
                    <div className="flex items-center gap-1">
                        <p className="text-sm font-semibold text-[#E57661]">
                            {data.name}
                        </p>
                        <span className="text-[#E57661] text-xs"><img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073615/Vertical_container_1_giyzdn.png" alt="verified" width={15} height={15} /></span>
                    </div>
                    <p className="text-xs text-gray-500">{data.designation}</p>
                </div>
            </div>

            {/* Content */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {data.message}
            </p>
        </div>
    );
}
