import Image from "next/image";

export default function AboutSeventh() {
    const cards = [
        {
            title: "Understanding",
            desc: "Listening to your problems and identifying the root cause, whether it is a Janam Kundli blockage, Vastu dosh, or unfavourable planetary dasha.",
            icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776753211/Understanding_loeggv.png",
        },
        {
            title: "Detailed Analysis",
            desc: "Deep study of your birth chart, planetary positions, and dasha cycles using authentic Vedic astrology consultation methods.",
            icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776753211/Detailed_Analysis_t1u1xs.png",
        },
        {
            title: "Practical Solutions",
            desc: "Clear, actionable remedies, gemstones, mantras, or Vastu corrections tailored specifically to your Kundli and life situation.",
            icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776753211/Practical_Solutions_m9cakf.png",
        },
        {
            title: "Continuous Guidance",
            desc: "Ongoing WhatsApp support from Pandit Vishal Johari the best astrologer in India to ensure lasting positive results in your life.",
            icon: "https://res.cloudinary.com/dumjuhrob/image/upload/v1776753210/Continuous_Guidance_a5okxm.png",
        },
    ];

    return (
        <section className=" max-w-[1720px] mx-auto bg-[radial-gradient(113.61%_98.59%_at_20%_70%,#FDE0DC_0%,rgba(253,224,220,0)_40%),radial-gradient(106.8%_92.68%_at_70%_30%,#FFDEA5_0%,rgba(255,222,165,0)_40%)] py-10 px-4 md:px-10 xl:px-30">

            <div className="flex flex-col justify-center items-center text-center pt-5  pb-10 px-4">

                <p className="text-[#E57661] text-sm md:text-base tracking-[0.2em] font-semibold mb-4 uppercase">
                    PANDIT VISHAL JOHARI
                </p>

                <h5 className="text-3xl md:text-5xl font-[500] text-[#E57661] mb-5">
                    Our Approach
                </h5>

                <div className="text-[#303030] text-center w-full text-sm md:text-lg leading-relaxed">
                    <p className="max-w-[570px] mx-auto">
                        A simple, honest, and result-focused journey through Vedic astrology and Vastu Shastra to align your life with clarity and purpose.
                    </p>
                </div>

            </div>


            {/* TOP CARDS */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {cards.map((item, i) => (
                    <div
                        key={i}
                        className="bg-white/90 rounded-2xl p-6 text-center  transition"
                    >
                        <div className="bg-[#E57661] w-14 h-14 mx-auto flex items-center justify-center rounded-xl mb-5">
                            <Image src={item.icon} alt={item.title} width={26} height={26} />
                        </div>

                        <h5 className="text-2xl font-[500] mb-2">{item.title}</h5>
                        <p className="text-[16px] text-[#44474D]/90 max-w-[230px] mx-auto mb-8 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>

            {/* BOTTOM SECTION */}
            <div className="mt-10 grid lg:grid-cols-3 gap-6 items-stretch">

                {/* LEFT IMAGE CARD */}
                <div className="relative lg:col-span-2 rounded-2xl overflow-hidden">
                    <Image
                        src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776753213/Scientific_Spirituality_xzmetn.png"
                        alt="Scientific_Spirituality_"
                        width={800}
                        height={400}
                        className="w-full h-full md object-cover object-contain"
                    />

                    <div className=" absolute inset-0  p-6 flex flex-col justify-end">
                        <h5 className="text-white text-2xl md:text-3xl font-[400] mb-2">
                            Authentic Vedic Science
                        </h5>
                        <p className="text-[#FFFFFF] text-[16px] max-w-[400px]">
                            Our methodology bridges the gap between ancient Vedic laws and practical modern-day remedies.
                        </p>
                    </div>
                </div>

                <div className="bg-white rounded-2xl p-6 flex flex-col justify-center shadow-sm">
                    <h5 className="text-[26px] font-[500] pl-10 mb-4">Proven Impact</h5>

                    <ul className="space-y-3 text-[20px] pl-10">
                        <li className="flex items-center gap-2 text-[#303030]/90">
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776753210/rightTick_ehghq6.png"
                                alt="tick"
                                width={18}
                                height={18}
                                className="object-contain"
                            />
                            <span>
                                <strong className="text-[22px]">99%</strong> Consultation Accuracy
                            </span>
                        </li>

                        <li className="flex items-center gap-2 text-[#303030]/90">
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776753210/rightTick_ehghq6.png"
                                alt="tick"
                                width={18}
                                height={18}
                                className="object-contain"
                            />
                            Expert Practitioners
                        </li>

                        <li className="flex items-center gap-2 text-[#303030]/90">
                            <Image
                                src="https://res.cloudinary.com/dumjuhrob/image/upload/v1776753210/rightTick_ehghq6.png"
                                alt="tick"
                                width={18}
                                height={18}
                                className="object-contain"
                            />
                            Data-Driven Remedies
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}