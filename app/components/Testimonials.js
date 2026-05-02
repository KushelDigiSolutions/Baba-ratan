"use client";
import Image from "next/image";

const testimonials = [
    {
        name: "Richa Agarwal",
        username: "Verified Client",
        text: "I was struggling with career decisions for years. After my Janam Kundli analysis at Bajrang Astro, everything became clear. Best decision I ever made.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Tushar Koushik",
        username: "Business Owner",
        text: "Got my office Vastu in Noida. Within 3 months, business picked up noticeably. Highly recommend Bajrang Astro to every business owner.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Swapnil Arora",
        username: "Verified Client",
        text: "Palm reading session was so accurate it gave me goosebumps. Pandit ji told things about my past that nobody else could have known.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Rohit Kumar",
        username: "Home Owner",
        text: "Home Vastu correction changed the entire atmosphere of our house. Family fights reduced completely. Feeling so much peace now.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Kavish Jain",
        username: "Factory Owner",
        text: "Consulted for factory Vastu in Meerut. Production issues resolved within weeks. Truly life-changing guidance from Bajrang Astro.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Neeraj Kumar",
        username: "Verified Client",
        text: "Very honest astrologer. No fake promises, no fear tactics just clear, practical guidance. My Kundli reading was 100% accurate.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Mohit Monga",
        username: "Shop Owner",
        text: "I was sceptical at first but the Vastu consultation for my shop in Ghaziabad completely turned my business around. Sales doubled in 2 months.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Manish Chandel",
        username: "Entrepreneur",
        text: "Bajrang Astro's palm reading helped me understand my strengths and the right time to start my own business. Worth every rupee.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
    {
        name: "Amit Agarwal",
        username: "Verified Client",
        text: "Got Kundli matching done before my marriage. Pandit ji explained everything in simple language. Very trustworthy and knowledgeable.",
        avatar: "https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073281/Vertical_container_ww4wdc.png",
    },
];

export default function Testimonials() {
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
    return (
        <div className="min-w-[320px] max-w-[320px] bg-white rounded-xl p-5 shadow-sm">
            {/* Header */}
            <div className="flex items-center gap-3">
                <Image
                    src={data.avatar}
                    alt="avatar"
                    width={42}
                    height={42}
                    className="rounded-full"
                />
                <div>
                    <div className="flex items-center gap-1">
                        <p className="text-sm font-semibold text-[#E57661]">
                            {data.name}
                        </p>
                        <span className="text-[#E57661] text-xs"><img src="https://res.cloudinary.com/dd9tagtiw/image/upload/v1767073615/Vertical_container_1_giyzdn.png" alt="verified" width={15} height={15} /></span>
                    </div>
                    <p className="text-xs text-gray-500">{data.username}</p>
                </div>
            </div>

            {/* Content */}
            <p className="mt-4 text-sm text-gray-600 leading-relaxed">
                {data.text}
            </p>
        </div>
    );
}
