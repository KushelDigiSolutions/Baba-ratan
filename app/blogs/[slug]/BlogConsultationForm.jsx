"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { CheckCircle2, X } from "lucide-react";

export default function BlogConsultationForm() {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    dob: "",
    birth_time: "",
    gender: "",
    address: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const validate = () => {
    let newErrors = {};

    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!form.name.trim()) {
      newErrors.name = "Required";
    } else if (!nameRegex.test(form.name.trim())) {
      newErrors.name = "Alphabets only";
    }

    if (!form.mobile) {
      newErrors.mobile = "Required";
    } else if (form.mobile.length !== 10) {
      newErrors.mobile = "10 digits";
    }

    if (!form.dob) newErrors.dob = "Required";
    if (!form.gender) newErrors.gender = "Required";
    if (!form.address.trim()) newErrors.address = "Required";
    if (!form.message.trim()) newErrors.message = "Required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsSubmitting(true);

    try {
      const payload = {
        name: form.name,
        phone: form.mobile,
        email: "guest@bajrangastro.com",
        city: form.address,
        query_type: "astrology",
        dob: form.dob,
        birth_time: form.birth_time || "00:00",
        birth_place: form.address,
        gender: form.gender,
        issue_type: "Other",
        message: form.message,
        status: "pending"
      };

      const response = await fetch("https://admin.bajrangastro.com/api/queries", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Failed to submit query");
      }

      setShowSuccessPopup(true);
      setForm({ name: "", mobile: "", dob: "", birth_time: "", gender: "", address: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit query. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="bg-[#fffcf8] p-6 rounded-xl shadow-md border border-[#E57661]/20">
        <h3 className="text-[18px] font-semibold text-[#E57661] mb-1">
          Quick Consultation
        </h3>
        <p className="text-xs text-gray-500 mb-4 font-medium">
          Fill out the form below and our astrologer will contact you shortly.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          
          {/* ROW 1: Name & Mobile */}
          <div className="flex gap-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Name"
                className={`w-full border p-3 rounded-lg text-sm outline-none transition-all bg-white ${errors.name ? 'border-red-500 focus:ring-red-500' : 'border-[#f0e6e1] focus:border-[#E57661] focus:ring-1 focus:ring-[#E57661]'}`}
                value={form.name}
                onChange={(e) => {
                  const val = e.target.value.replace(/[^A-Za-z\s]/g, "");
                  setForm({ ...form, name: val });
                  if (errors.name) setErrors({ ...errors, name: null });
                }}
              />
              {errors.name && <p className="text-red-500 text-[10px] mt-0.5 ml-1">{errors.name}</p>}
            </div>

            <div className="flex-1">
              <input
                type="tel"
                placeholder="Mobile Number"
                className={`w-full border p-3 rounded-lg text-sm outline-none transition-all bg-white ${errors.mobile ? 'border-red-500 focus:ring-red-500' : 'border-[#f0e6e1] focus:border-[#E57661] focus:ring-1 focus:ring-[#E57661]'}`}
                value={form.mobile}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 10);
                  setForm({ ...form, mobile: val });
                  if (errors.mobile) setErrors({ ...errors, mobile: null });
                }}
              />
              {errors.mobile && <p className="text-red-500 text-[10px] mt-0.5 ml-1">{errors.mobile}</p>}
            </div>
          </div>

          {/* ROW 2: DOB & Time */}
          <div className="flex gap-2">
            <div className="flex-1 flex flex-col">
              <input
                type="date"
                className={`w-full border p-3 rounded-lg text-sm outline-none transition-all bg-white text-gray-700 ${errors.dob ? 'border-red-500 focus:ring-red-500' : 'border-[#f0e6e1] focus:border-[#E57661] focus:ring-1 focus:ring-[#E57661]'}`}
                value={form.dob}
                onChange={(e) => {
                  setForm({ ...form, dob: e.target.value });
                  if (errors.dob) setErrors({ ...errors, dob: null });
                }}
              />
              {errors.dob && <p className="text-red-500 text-[10px] mt-0.5 ml-1">{errors.dob}</p>}
            </div>

            <div className="flex-1 flex flex-col">
              <input
                type="time"
                className={`w-full border p-3 rounded-lg text-sm outline-none transition-all bg-white text-gray-700 ${errors.birth_time ? 'border-red-500 focus:ring-red-500' : 'border-[#f0e6e1] focus:border-[#E57661] focus:ring-1 focus:ring-[#E57661]'}`}
                value={form.birth_time}
                onChange={(e) => {
                  setForm({ ...form, birth_time: e.target.value });
                  if (errors.birth_time) setErrors({ ...errors, birth_time: null });
                }}
              />
              {errors.birth_time && <p className="text-red-500 text-[10px] mt-0.5 ml-1">{errors.birth_time}</p>}
            </div>
          </div>

          {/* ROW 3: Gender & City */}
          <div className="flex gap-2">
            <div className="flex-1">
              <select
                className={`w-full border p-3 rounded-lg text-sm outline-none transition-all bg-white text-gray-700 ${errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-[#f0e6e1] focus:border-[#E57661] focus:ring-1 focus:ring-[#E57661]'}`}
                value={form.gender}
                onChange={(e) => {
                  setForm({ ...form, gender: e.target.value });
                  if (errors.gender) setErrors({ ...errors, gender: null });
                }}
              >
                <option value="">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && <p className="text-red-500 text-[10px] mt-0.5 ml-1">{errors.gender}</p>}
            </div>

            <div className="flex-1">
              <input
                type="text"
                placeholder="Address"
                className={`w-full border p-3 rounded-lg text-sm outline-none transition-all bg-white ${errors.address ? 'border-red-500 focus:ring-red-500' : 'border-[#f0e6e1] focus:border-[#E57661] focus:ring-1 focus:ring-[#E57661]'}`}
                value={form.address}
                onChange={(e) => {
                  setForm({ ...form, address: e.target.value });
                  if (errors.address) setErrors({ ...errors, address: null });
                }}
              />
              {errors.address && <p className="text-red-500 text-[10px] mt-0.5 ml-1">{errors.address}</p>}
            </div>
          </div>

          {/* ROW 4: Message */}
          <div>
            <textarea
              placeholder="Your Message / Query"
              rows="4"
              className={`w-full border p-3 rounded-lg text-sm outline-none transition-all bg-white resize-none ${errors.message ? 'border-red-500 focus:ring-red-500' : 'border-[#f0e6e1] focus:border-[#E57661] focus:ring-1 focus:ring-[#E57661]'}`}
              value={form.message}
              onChange={(e) => {
                setForm({ ...form, message: e.target.value });
                if (errors.message) setErrors({ ...errors, message: null });
              }}
            ></textarea>
            {errors.message && <p className="text-red-500 text-[10px] mt-0.5 ml-1">{errors.message}</p>}
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-[#E57661] text-white font-semibold py-3.5 rounded-lg hover:bg-[#d46550] shadow-sm transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? "Sending..." : "Send Request"}
          </button>
        </form>
      </div>

      {mounted && showSuccessPopup && createPortal(
        <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto">
          <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl relative animate-in fade-in zoom-in duration-300 m-auto">
            <button 
              onClick={() => setShowSuccessPopup(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
                <CheckCircle2 className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Thank You!</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Your query has been submitted successfully. Our astrologer will get back to you shortly.
              </p>
              <button
                onClick={() => setShowSuccessPopup(false)}
                className="w-full bg-[#de7a63] hover:bg-[#c96650] text-white font-semibold py-3 px-6 rounded-2xl transition-colors cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
