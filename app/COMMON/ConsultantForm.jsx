"use client"

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
export default function ConsultantForm({ onClose }) {


    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [form, setForm] = useState({
        service: "",
        name: "",
        email: "",
        phone: "",
        dob: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const validate = () => {
        let newErrors = {};

        // Service
        if (!form.service) {
            newErrors.service = "Please select service";
        }

        // Name
        if (!form.name || form.name.length < 3) {
            newErrors.name = "Name must be at least 3 letters";
        } else if (!/^[A-Za-z\s]+$/.test(form.name)) {
            newErrors.name = "Only alphabets allowed";
        }

        // Email
        if (!/\S+@\S+\.\S+/.test(form.email)) {
            newErrors.email = "Invalid email";
        }

        // Phone
        if (!/^\d{10}$/.test(form.phone)) {
            newErrors.phone = "Enter valid 10 digit number";
        }

        // DOB
        if (!form.dob) {
            newErrors.dob = "DOB required";
        }

        // Message
        if (!form.message) {
            newErrors.message = "Message required";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            onClose();
        }
    };

    return (
        <>
            {/* Button */}


            {/* Dropdown Modal */}
            {open && (
                <div className="fixed inset-0  bg-opacity-40 backdrop-blur-sm flex justify-center items-center z-50">
                    <div className="bg-white w-[90%] md:w-[500px] rounded-xl p-6 relative">

                        {/* Close */}
                        <button
                            onClick={onClose}
                            className="absolute cursor-pointer right-4 top-3 text-gray-500"
                        >
                            ✕
                        </button>


                        <h2 className="text-2xl font-bold text-[#E57661] mb-4">
                            Consultation Form
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Service */}
                            {/* Custom Service Dropdown */}
                            <div className="relative">
                                <div
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="w-full border border-gray-300 p-3 rounded-lg flex justify-between items-center cursor-pointer"
                                >
                                    <span className={form.service ? "text-black" : "text-gray-500"}>
                                        {form.service || "Select Service *"}
                                    </span>

                                    {dropdownOpen ? (
                                        <FaChevronUp className="text-gray-500 text-sm opacity-70" />
                                    ) : (
                                        <FaChevronDown className="text-gray-500 text-sm opacity-70" />
                                    )}
                                </div>

                                {dropdownOpen && (
                                    <div className="absolute w-full bg-white border rounded-lg mt-1 shadow-md z-10">
                                        {["Astrology", "Vastu"].map((item) => (
                                            <div
                                                key={item}
                                                onClick={() => {
                                                    setForm({ ...form, service: item });
                                                    setDropdownOpen(false);
                                                }}
                                                className="p-3 rounded-lg hover:bg-[#E57661] hover:text-white cursor-pointer"
                                            >
                                                {item}
                                            </div>
                                        ))}
                                    </div>
                                )}

                                <p className="text-red-500 text-sm">{errors.service}</p>
                            </div>

                            {/* Name */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full border border-gray-300 p-2 rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#E57661]"
                                    value={form.name}
                                    onChange={(e) =>
                                        setForm({ ...form, name: e.target.value })
                                    }
                                />
                                <p className="text-red-500 text-sm">{errors.name}</p>
                            </div>

                            {/* Email */}
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full border border-gray-300 p-2 rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#E57661]"
                                    value={form.email}
                                    onChange={(e) =>
                                        setForm({ ...form, email: e.target.value })
                                    }
                                />
                                <p className="text-red-500 text-sm">{errors.email}</p>
                            </div>

                            {/* Phone */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full border border-gray-300 p-2 rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#E57661]"
                                    value={form.phone}
                                    onChange={(e) =>
                                        setForm({
                                            ...form,
                                            phone: e.target.value.replace(/\D/, ""),
                                        })
                                    }
                                />
                                <p className="text-red-500 text-sm">{errors.phone}</p>
                            </div>

                            {/* DOB */}
                            <div>
                                <input
                                    type="date"
                                    className="w-full border cursor-pointer border-gray-300 p-2 rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#E57661]"
                                    value={form.dob}
                                    onChange={(e) =>
                                        setForm({ ...form, dob: e.target.value })
                                    }
                                />
                                <p className="text-red-500 text-sm">{errors.dob}</p>
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    className="w-full border resize-none border-gray-300 p-2 rounded-lg outline-none focus:outline-none focus:ring-0 focus:border-[#E57661]"
                                    value={form.message}
                                    onChange={(e) =>
                                        setForm({ ...form, message: e.target.value })
                                    }
                                />
                                <p className="text-red-500 text-sm">{errors.message}</p>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="w-full bg-[#E57661] cursor-pointer text-white py-2 rounded-lg hover:bg-white hover:text-black"
                            >
                                Submit
                            </button>

                        </form>
                    </div>
                </div>
            )}
        </>
    );
}