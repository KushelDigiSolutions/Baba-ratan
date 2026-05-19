// app/grah/ketu/page.jsx

import {
    ArrowRight,
    Phone,
    Sparkles,
    Orbit,
    Flame,
    Shield,
    Stars,
    MoonStar,
    BadgeCheck,
} from "lucide-react";

export default function KetuGrahPage() {
    return (
        <div className="bg-[#04010a] text-white overflow-hidden">
            {/* HERO SECTION */}
            <section className="relative flex items-center px-6 lg:px-20 py-12 md:py-16 lg:py-20">
                {/* Background */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#2a0b42_0%,#100018_45%,#030005_100%)]"></div>

                {/* Stars Texture */}
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>

                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
                    {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <span className="px-5 py-2 rounded-full border border-violet-500 text-sm tracking-[4px] uppercase bg-violet-500/10">
                            Navgrah • Ketu Dev
                        </span>

                        <h1 className="text-4xl sm:text-5xl md:text-8xl font-black leading-[1.1] sm:leading-tight mt-8">
                            <span className="text-white">Ketu</span> {" "}


                            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-500 text-transparent bg-clip-text py-2">
                                Grah
                            </span>
                        </h1>

                        <p className="text-gray-300 text-lg leading-9 mt-8 max-w-2xl mx-auto lg:mx-0">
                            Ketu is the shadow planet of absolute spiritual enlightenment, karmic detachment, and profound mysticism. A strong Ketu grants the ultimate 'Moksha', highly accurate psychic intuition, and incredible success in deep research and occult sciences.
                        </p>

                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-5 mt-10">
                            <button className="w-full sm:w-auto justify-center bg-gradient-to-r cursor-pointer from-violet-600 to-fuchsia-600 px-8 py-4 rounded-2xl font-semibold flex items-center gap-3 hover:scale-105 transition">
                                Explore Remedies
                                <ArrowRight size={20} />
                            </button>

                            <a href="tel:+917042600873" className="w-full sm:w-auto">
                                <button className="w-full justify-center border cursor-pointer border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 rounded-2xl font-semibold hover:bg-white/10 transition flex items-center">
                                    Talk To Astrologer
                                </button>
                            </a>

                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative flex justify-center mt-10 lg:mt-0">
                        {/* Glow */}
                        <div className="absolute w-[320px] sm:w-[450px] h-[320px] sm:h-[450px] bg-violet-600 blur-[140px] opacity-35 rounded-full"></div>

                        {/* Planet */}
                        <div className="relative flex items-center justify-center">

                            {/* MYSTIC GLOW */}
                            <div className="absolute w-44 h-44 sm:w-60 sm:h-60 rounded-full bg-fuchsia-500/20 blur-3xl animate-pulse" />

                            {/* OUTER ENERGY RING */}
                            <div className="absolute w-[220px] sm:w-72 h-[220px] sm:h-72 rounded-full border border-fuchsia-400/20 animate-spin [animation-duration:14s]" />

                            <div className="absolute w-[260px] sm:w-[380px] h-[260px] sm:h-[380px] rounded-full border border-cyan-400/10 animate-[spin_18s_linear_infinite_reverse]" />

                            {/* MAIN ICON */}
                            <Sparkles className="w-20 sm:w-44 h-20 sm:h-44 text-fuchsia-100 opacity-90 drop-shadow-[0_0_35px_rgba(217,70,239,0.8)]" />

                            {/* CENTER ENERGY CORE */}
                            <div className="absolute w-6 sm:w-10 h-6 sm:h-10 rounded-full bg-gradient-to-br from-fuchsia-200 to-cyan-300 shadow-[0_0_30px_rgba(236,72,153,0.9)]" />

                            {/* FLOATING PARTICLES */}
                            <div className="absolute top-10 left-10 sm:left-16 w-2 h-2 bg-fuchsia-300 rounded-full animate-ping" />
                            <div className="absolute bottom-10 sm:bottom-16 right-10 sm:right-14 w-3 h-3 bg-cyan-300 rounded-full animate-pulse" />
                            <div className="absolute top-1/2 right-6 sm:right-8 w-2 h-2 bg-white rounded-full animate-ping" />
                        </div>

                        {/* Floating Cards */}
                        <div className="absolute top-10 left-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
                            <p className="text-sm text-gray-300">Represents</p>
                            <h4 className="font-bold text-xl">Spirituality</h4>
                        </div>

                        <div className="absolute bottom-10 right-0 bg-white/10 backdrop-blur-lg border border-white/10 rounded-2xl p-4 hidden md:block">
                            <p className="text-sm text-gray-300">Controls</p>
                            <h4 className="font-bold text-xl">Moksha</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* EFFECTS SECTION */}
            <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-20">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
                        बलवान केतु के प्रभाव
                    </h2>

                    <p className="text-gray-400 mt-4 sm:mt-5 max-w-2xl mx-auto lg:mx-0 mx-auto text-base sm:text-lg">
                        अनुकूल स्थिति में होने पर केतु जातक को सांसारिक मोह-माया से मुक्त कर, आत्मा को उसकी सर्वोच्च चेतना तक ले जाता है।
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[
                        {
                            icon: Sparkles,
                            title: "कर्मों से मुक्ति",
                            desc: "कष्टदायक पूर्व जन्म के बंधनों को पूरी तरह से काट देता है और आत्मा को सांसारिक चक्रों से मुक्त करता है।",
                        },
                        {
                            icon: Shield,
                            title: "गूढ़ विद्याओं का ज्ञाता",
                            desc: "तंत्र-मंत्र, ज्योतिष, और गहरे ध्यान की अवस्थाओं में जातक को असाधारण सिद्धियां प्राप्त होती हैं।",
                        },
                        {
                            icon: Stars,
                            title: "सटीक विश्लेषण क्षमता",
                            desc: "बेहतरीन सर्जन, शोधकर्ता (Researcher) और तकनीकी विश्लेषक (Analyst) बनाता है, जो बिना चूक के काम करते हैं।",
                        },
                        {
                            icon: Flame,
                            title: "परम वैराग्य",
                            desc: "नकारात्मक रिश्तों और दिखावटी इच्छाओं से मन की रक्षा कर असीम मानसिक शांति स्थापित करता है।",
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-[24px] sm:rounded-3xl p-6 sm:p-8 hover:bg-white/10 transition"
                        >
                            <item.icon className="w-10 h-10 sm:w-12 sm:h-12 text-violet-400 mb-4 sm:mb-6" />

                            <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                                {item.title}
                            </h3>

                            <p className="text-gray-400 text-sm sm:text-base leading-7">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {/* REMEDIES SECTION */}
            <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-20 bg-white/[0.03]">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* LEFT */}
            <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
                            Remedies For <br className="block sm:hidden" />
                            <span className="text-violet-400 py-2 inline-block"> Ketu Dosha</span>
                        </h2>

                        <p className="text-gray-400 mt-4 sm:mt-6 text-base sm:text-lg leading-8">
                            Ancient Vedic scriptures prescribe highly effective and miraculous rituals to pacify an afflicted Ketu and clear mental illusions.
                        </p>

                        <div className="space-y-4 sm:space-y-5 mt-8 sm:mt-10">
                            {[
                                "Worship Lord Ganesha daily with pure devotion, offer Durva grass, and recite the Ganapati Atharvashirsha.",
                                "Regularly feed and take care of street dogs (especially multi-colored ones) with milk and proper meals.",
                                "Donate multi-colored blankets to the underprivileged or temple priests during the cold winter months.",
                                "Wear an energized Cat's Eye (Lehsuniya) gemstone on the middle finger after consulting a qualified Vedic astrologer.",
                            ].map((text, i) => (
                                <div
                                    key={i}
                                    className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5"
                                >
                                    <div className="w-10 h-10 rounded-full bg-violet-500 flex items-center justify-center font-bold shrink-0">
                                        {i + 1}
                                    </div>

                                    <p className="text-gray-200 text-sm sm:text-base leading-6 sm:leading-7">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="relative mt-10 lg:mt-0">
                        <div className="absolute inset-0 bg-violet-600 blur-[120px] opacity-30 rounded-full"></div>

                        <div className="relative bg-gradient-to-br from-[#14041d] to-[#090010] border border-violet-500/20 rounded-[24px] sm:rounded-[40px] p-6 sm:p-10">
                            <BadgeCheck className="w-16 h-16 sm:w-20 sm:h-20 text-violet-400 mb-6 sm:mb-8" />

                            <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-5">
                                Ketu Mahadasha
                            </h3>

                            <p className="text-gray-400 text-base sm:text-lg leading-8">
                                The 7-year Mahadasha of Ketu brings sudden, massive life transformations. It deliberately disconnects you from superficial attachments to trigger profound self-discovery and spiritual awakening.
                            </p>

                            <button className="w-full sm:w-auto justify-center mt-6 sm:mt-8 cursor-pointer bg-violet-600 px-7 py-4 rounded-2xl font-semibold hover:bg-violet-700 transition flex items-center">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* INFLUENCE SECTION */}
            <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-20">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] sm:leading-tight">
                        केतु के मुख्य प्रभाव क्षेत्र
                    </h2>

                    <p className="text-gray-400 mt-4 sm:mt-5 text-base sm:text-lg">
                        आधुनिक युग में केतु मुख्य रूप से इन विशेष क्षेत्रों को नियंत्रित करता है।
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {[
                        "तंत्र एवं रहस्यमयी विद्या",
                        "विदेशी निर्यात व व्यापार",
                        "सॉफ्टवेयर और प्रोग्रामिंग",
                        "गहरी समाधि और ध्यान",
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border border-violet-500/20 bg-white/5 rounded-[24px] sm:rounded-3xl p-6 sm:p-8 text-center hover:-translate-y-2 transition duration-300"
                        >
                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-violet-500/20 border border-violet-500 mx-auto flex items-center justify-center text-xl sm:text-2xl font-bold text-violet-400">
                                {index + 1}
                            </div>

                            <h3 className="text-xl sm:text-2xl font-semibold mt-5 sm:mt-6">
                                {item}
                            </h3>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-12 md:py-20 lg:py-28 px-6 lg:px-20">
                <div className="bg-gradient-to-r from-violet-600 to-fuchsia-700 rounded-[24px] sm:rounded-[36px] md:rounded-[40px] p-6 sm:p-10 md:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between text-center lg:text-left justify-between gap-8 sm:gap-10">
                    <div className="text-center lg:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-[1.3] sm:leading-tight text-white">
                            Need Ketu Grah Guidance?
                        </h2>

                        <p className="mt-4 sm:mt-6 text-base sm:text-lg text-white/80 max-w-2xl mx-auto lg:mx-0 mx-auto lg:mx-0">
                            Talk with expert astrologers and get personalized remedies,
                            gemstone suggestions and Ketu dosha solutions.
                        </p>
                    </div>

                    <a href="tel:+917042600873" className="w-full lg:w-auto">
                        <button className="w-full lg:w-auto justify-center bg-white cursor-pointer text-black px-8 py-4 sm:py-5 rounded-2xl font-bold flex items-center gap-3 hover:scale-105 transition">
                            <Phone />
                            Consult Now
                        </button>
                    </a>
                </div>
            </section>
        </div>
    );
}