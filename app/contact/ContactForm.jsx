import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion";
export default function ContactForm() {

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    const fadeLeft = {
        hidden: { opacity: 0, x: -60 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };

    const fadeRight = {
        hidden: { opacity: 0, x: 60 },
        show: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 }
        }
    };
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
        service: "",
    });

    const [errors, setErrors] = useState({});
    const [dropdownOpen, setDropdownOpen] = useState(false);

    // ✅ Validation
    const validate = () => {
        let newErrors = {};

        // Name: only alphabets, min 2
        const nameRegex = /^[A-Za-z\s]{2,}$/;
        if (!form.name) {
            newErrors.name = "Name is required";
        } else if (!nameRegex.test(form.name.trim())) {
            newErrors.name = "Only alphabets, min 2 characters";
        }

        // Email
        if (!form.email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email";
        }

        // Phone: only numbers
        if (!form.phone) {
            newErrors.phone = "Phone is required";
        } else if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Enter valid 10 digit number";
        }

        // Service
        if (!form.service) {
            newErrors.service = "Please select service";
        }

        // Message
        if (!form.message) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // ✅ Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log(form);
        }
    };

    return (
        <div className="max-w-[1720px] mx-auto"

            style={{
                background: `
        radial-gradient(113.61% 98.59% at 20% 70%, #D6E3FF 0%, rgba(214,227,255,0) 40%),
        radial-gradient(106.8% 92.68% at 70% 30%, #FFDEA5 0%, rgba(255,222,165,0) 40%)
      `,
            }}>

            {/* ✅ Banner */}
            <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="show"
                className="bg-[#E57661] py-5 text-center flex flex-col gap-4 text-white text-3xl"
            >


                <h1 className=" text-2xl md:text-4xl font-[500]">Consultation <span>Request</span></h1>

                <p className="text-[17px] md:text-lg font-[300]">
                    Align your journey with celestial wisdom. Choose your service to begin.
                </p>
            </motion.div>

            {/* Main Section */}
            <div className="max-w-7xl mx-auto mt-10 grid md:grid-cols-2 gap-8 px-4">

                {/* ✅ LEFT SIDE (Contact Info) */}
                <motion.div
                    variants={fadeLeft}
                    initial="hidden"
                    animate="show"
                    className="p-6 md:p-8"
                >

                    <h2 className="text-3xl font-semibold text-[#E57661] mb-3">
                        Contact Information
                    </h2>

                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Meenal (Vastu & Astrology Consultant)
                    </p>

                    <div className="space-y-10">

                        {/* Email */}
                        <div className="flex items-start gap-4">
                            <FaEnvelope className="text-[#E57661] mt-1 text-lg" />
                            <div>
                                <p className="text-gray-500 text-sm">Email</p>
                                <p className="text-gray-800 text-base">
                                    info@astrovastullc.com
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <div className="flex items-start gap-4">
                            <FaPhoneAlt className="text-[#E57661] mt-1 text-lg" />
                            <div>
                                <p className="text-gray-500 text-sm">Phone</p>
                                <p className="text-gray-800 text-base">
                                    +641-230-0819
                                </p>
                            </div>
                        </div>

                        {/* USA */}
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-[#E57661] mt-1 text-lg" />
                            <div>
                                <p className="text-gray-500 text-sm">USA Office</p>
                                <p className="text-gray-800 text-base leading-relaxed">
                                    Bridgemill Dr., Columbus, GA 31904
                                </p>
                            </div>
                        </div>

                        {/* India */}
                        <div className="flex items-start gap-4">
                            <FaMapMarkerAlt className="text-[#E57661] mt-1 text-lg" />
                            <div>
                                <p className="text-gray-500 text-sm">India Office</p>
                                <p className="text-gray-800 text-base leading-relaxed">
                                    B-838 2nd floor (back side) <br />
                                    Gate no.4, Greenfield Colony, Faridabad
                                </p>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* ✅ Form */}
                <motion.div
                    variants={fadeRight}
                    initial="hidden"
                    animate="show"
                    className="bg-white shadow-lg rounded-xl p-8"
                >

                    <h2 className="text-2xl font-[500] mb-6 text-gray-800">
                        Talk to Your Consultant
                    </h2>

                    <form onSubmit={handleSubmit} className="space-y-5">

                        {/* Name */}
                        <div>
                            <input
                                type="text"
                                placeholder="Full Name"
                                value={form.name}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    // Prevent numbers typing
                                    if (/^[A-Za-z\s]*$/.test(value)) {
                                        setForm({ ...form, name: value });
                                    }
                                }}
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#E57661]"
                            />
                            <p className="text-red-500 text-sm">{errors.name}</p>
                        </div>

                        {/* Email */}
                        <div>
                            <input
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={(e) =>
                                    setForm({ ...form, email: e.target.value })
                                }
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#E57661]"
                            />
                            <p className="text-red-500 text-sm">{errors.email}</p>
                        </div>

                        {/* Phone */}
                        <div>
                            <input
                                type="text"
                                placeholder="Phone"
                                value={form.phone}
                                maxLength={10}
                                onChange={(e) => {
                                    const value = e.target.value;
                                    // Only numbers allowed
                                    if (/^\d*$/.test(value)) {
                                        setForm({ ...form, phone: value });
                                    }
                                }}
                                className="w-full border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-[#E57661]"
                            />
                            <p className="text-red-500 text-sm">{errors.phone}</p>
                        </div>

                        {/* ✅ Custom Dropdown */}
                        <div className="relative">
                            <div
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="w-full border border-gray-300 p-3 rounded-lg flex justify-between items-center cursor-pointer"
                            >
                                <span className={form.service ? "text-black" : "text-gray-500"}>
                                    {form.service || "Select Service *"}
                                </span>

                                {dropdownOpen ? (
                                    <FaChevronUp className="text-gray-500 text-sm" />
                                ) : (
                                    <FaChevronDown className="text-gray-500 text-sm" />
                                )}
                            </div>

                            {dropdownOpen && (
                                <div className="absolute w-full focus:outline-none border-gray-300 focus:border-[#E57661] bg-white rounded-lg mt-1 shadow-md z-10">
                                    {["Astrology", "Vastu"].map((item) => (
                                        <div
                                            key={item}
                                            onClick={() => {
                                                setForm({ ...form, service: item });
                                                setDropdownOpen(false);
                                            }}
                                            className="p-3 rounded-lg  hover:bg-[#E57661] hover:text-white cursor-pointer"
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            )}

                            <p className="text-red-500 text-sm">{errors.service}</p>
                        </div>

                        {/* Message */}
                        <div>
                            <textarea
                                placeholder="Message"
                                value={form.message}
                                onChange={(e) =>
                                    setForm({ ...form, message: e.target.value })
                                }
                                className="w-full border border-gray-300 p-3 rounded-lg h-32 resize-none focus:outline-none focus:border-[#E57661]"
                            />
                            <p className="text-red-500 text-sm">{errors.message}</p>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#E57661] text-white py-3 rounded-lg hover:bg-[#d96552] transition cursor-pointer"
                        >
                            Submit
                        </button>

                    </form>
                </motion.div>
            </div>

            <div className="w-full h-[300px] md:h-[320px] lg:h-[400px] mt-10">
                <iframe
                    src="https://www.google.com/maps?q=Bridgemill+Dr,+Columbus,+GA+31904,+USA&output=embed"
                    className="w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
}