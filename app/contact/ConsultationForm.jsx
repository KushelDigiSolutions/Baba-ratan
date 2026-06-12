"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import styles from "./ConsultationForms.module.css";
import { CheckCircle2, X } from "lucide-react";

const vastuIssueOptions = {
  Residential: [
    "Main Entrance",
    "Bedroom Vastu",
    "Kitchen Vastu",
    "Bathroom / Toilet",
    "Pooja Room",
    "Staircase",
    "Energy Imbalance",
    "Financial Growth",
    "Health Related",
    "Relationship / Family",
    "Interior Placement",
    "Furniture Placement",
    "Color Selection",
    "Parking Area",
    "Water Source Placement",
    "Septic Tank",
    "Borewell / Underground Tank",
    "Overhead Tank",
    "Balcony / Window",
    "Vastu Dosh",
    "Renovation Suggestion",
    "Consultation Follow-up",
    "Other",
  ],
  Commercial: [
    "Main Entrance",
    "Office Vastu",
    "Commercial Space",
    "Bathroom / Toilet",
    "Staircase",
    "Energy Imbalance",
    "Financial Growth",
    "Career Growth",
    "Business Loss",
    "Interior Placement",
    "Furniture Placement",
    "Color Selection",
    "Parking Area",
    "Water Source Placement",
    "Vastu Dosh",
    "Renovation Suggestion",
    "Consultation Follow-up",
    "Other",
  ],
  Industrial: [
    "Main Entrance",
    "Factory Vastu",
    "Plot Direction",
    "Bathroom / Toilet",
    "Staircase",
    "Energy Imbalance",
    "Financial Growth",
    "Business Loss",
    "Construction Vastu",
    "Parking Area",
    "Water Source Placement",
    "Septic Tank",
    "Borewell / Underground Tank",
    "Overhead Tank",
    "Land Shape",
    "Vastu Dosh",
    "Renovation Suggestion",
    "Consultation Follow-up",
    "Other",
  ],
  Land: [
    "Plot Direction",
    "Land Shape",
    "Energy Imbalance",
    "Water Source Placement",
    "Borewell / Underground Tank",
    "Septic Tank",
    "Vastu Dosh",
    "Construction Vastu",
    "Consultation Follow-up",
    "Other",
  ],
  Educational: [
    "Main Entrance",
    "Office Vastu",
    "Commercial Space",
    "Bathroom / Toilet",
    "Staircase",
    "Energy Imbalance",
    "Financial Growth",
    "Career Growth",
    "Interior Placement",
    "Furniture Placement",
    "Color Selection",
    "Parking Area",
    "Water Source Placement",
    "Septic Tank",
    "Borewell / Underground Tank",
    "Overhead Tank",
    "Vastu Dosh",
    "Renovation Suggestion",
    "Consultation Follow-up",
    "Other",
  ],
  Spiritual: [
    "Main Entrance",
    "Pooja Room",
    "Energy Imbalance",
    "Construction Vastu",
    "Interior Placement",
    "Land Shape",
    "Vastu Dosh",
    "Renovation Suggestion",
    "Consultation Follow-up",
    "Other",
  ],
  Default: [
    "Main Entrance",
    "Bedroom Vastu",
    "Kitchen Vastu",
    "Bathroom / Toilet",
    "Pooja Room",
    "Staircase",
    "Plot Direction",
    "Office Vastu",
    "Factory Vastu",
    "Commercial Space",
    "Energy Imbalance",
    "Financial Growth",
    "Health Related",
    "Relationship / Family",
    "Career Growth",
    "Business Loss",
    "Construction Vastu",
    "Interior Placement",
    "Furniture Placement",
    "Color Selection",
    "Parking Area",
    "Water Source Placement",
    "Septic Tank",
    "Borewell / Underground Tank",
    "Overhead Tank",
    "Balcony / Window",
    "Land Shape",
    "Vastu Dosh",
    "Renovation Suggestion",
    "Consultation Follow-up",
    "Other",
  ],
};

const getVastuCategory = (propertyType) => {
  if (
    ["Home / Flat", "Villa / Bungalow", "Apartment", "Farmhouse"].includes(
      propertyType,
    )
  )
    return "Residential";
  if (
    [
      "Office",
      "Shop / Showroom",
      "Commercial Building",
      "Restaurant / Cafe",
      "Hotel / Resort",
      "Hospital / Clinic",
    ].includes(propertyType)
  )
    return "Commercial";
  if (["Factory", "Warehouse", "Industrial Property"].includes(propertyType))
    return "Industrial";
  if (["Plot / Land"].includes(propertyType)) return "Land";
  if (["School / College"].includes(propertyType)) return "Educational";
  if (["Temple / Religious Place"].includes(propertyType)) return "Spiritual";
  return "Default";
};

export default function ConsultationForm() {
  const [serviceType, setServiceType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    dob: "",
    birth_time: "",
    birth_place: "",
    gender: "",
    property_type: "",
    property_address: "",
    direction: "",
    issue_type: "",
    message: "",
    layoutPlan: null,
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

    // Name: Minimum 2 alphabets, no digits
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!formData.name) {
      newErrors.name = "Full Name is required";
    } else if (!nameRegex.test(formData.name.trim())) {
      newErrors.name = "Name must contain at least 2 alphabets and no digits";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email Address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Phone: digits only, exactly 10
    if (!formData.phone) {
      newErrors.phone = "Contact Number is required";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Contact number must be exactly 10 digits";
    }

    // City
    if (!formData.city) {
      newErrors.city = "City is required";
    }

    if (!serviceType) {
      newErrors.serviceType = "Please select a service";
    }

    const isAstrology = serviceType === "Astro Consulting";
    const isVastu = serviceType === "Vastu Consulting";

    if (isAstrology) {
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (!formData.birth_time)
        newErrors.birth_time = "Time of Birth is required";
      if (!formData.birth_place)
        newErrors.birth_place = "Place of Birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.issue_type) newErrors.issue_type = "Issue type is required";
      if (!formData.message) newErrors.message = "Message is required";
    }

    if (isVastu) {
      if (!formData.property_type)
        newErrors.property_type = "Property type is required";
      if (!formData.property_address)
        newErrors.property_address = "Property address is required";
      if (!formData.direction) newErrors.direction = "Direction is required";
      if (!formData.issue_type) newErrors.issue_type = "Issue type is required";
      if (!formData.message) newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const payload =
        serviceType === "Astro Consulting"
          ? {
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              city: formData.city,
              query_type: "astrology",
              dob: formData.dob,
              birth_time: formData.birth_time,
              birth_place: formData.birth_place,
              gender: formData.gender,
              issue_type: formData.issue_type,
              message: formData.message,
              status: "pending",
            }
          : {
              name: formData.name,
              phone: formData.phone,
              email: formData.email,
              city: formData.city,
              query_type: "vastu",
              property_type: formData.property_type,
              property_address: formData.property_address,
              direction: formData.direction,
              issue_type: formData.issue_type,
              message: formData.message,
              status: "pending",
            };

      const response = await fetch(
        "https://admin.bajrangastro.com/api/queries",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to submit query");
      }

      const result = await response.json();
      setShowSuccessPopup(true);
      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        dob: "",
        birth_time: "",
        birth_place: "",
        gender: "",
        property_type: "",
        property_address: "",
        direction: "",
        issue_type: "",
        message: "",
        layoutPlan: null,
      });
      setServiceType("");
    } catch (error) {
      console.error("Submission error:", error);
      alert("Failed to submit query. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // For phone, prevent typing more than 10 digits and non-digits
    if (name === "phone") {
      const sanitizedValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({ ...formData, [name]: sanitizedValue });
    } else if (name === "name") {
      // Prevent anything other than alphabets and spaces
      const sanitizedValue = value.replace(/[^A-Za-z\s]/g, "");
      setFormData({ ...formData, [name]: sanitizedValue });
    } else if (name === "property_type") {
      setFormData({ ...formData, [name]: value, issue_type: "" });
    } else {
      setFormData({ ...formData, [name]: value });
    }
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, layoutPlan: e.target.files[0] });
    if (errors.layoutPlan) {
      setErrors({ ...errors, layoutPlan: null });
    }
  };

  const handleServiceChange = (e) => {
    setServiceType(e.target.value);
    if (errors.serviceType) {
      setErrors({ ...errors, serviceType: null });
    }
  };

  return (
    <div className={styles.pageWrapper}>
      <div className={styles.innerWrapper}>
        <div className={styles.formContainer}>
          <h1 className={styles.title}>
            Consultation <span>Request</span>
          </h1>

          <p className={styles.subtitle}>
            Start your journey with Vishal Verma. Choose your service and take
            the first step today.
          </p>

          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <p>
              Vishal Verma <span>(Vedic Astrologer & Vastu Consultant)</span>
            </p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* COMMON FIELDS */}
            <h3 className={styles.sectionHeading}>
              Talk to Experts Astrologer
            </h3>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                />
                {errors.name && (
                  <p className={styles.errorText}>{errors.name}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>
                  Email Address <span>*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
                {errors.email && (
                  <p className={styles.errorText}>{errors.email}</p>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>
                  Contact Number <span>*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter 10-digit number"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                {errors.phone && (
                  <p className={styles.errorText}>{errors.phone}</p>
                )}
              </div>

              <div className={styles.formGroup}>
                <label>
                  City <span>*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Enter your city"
                  value={formData.city}
                  onChange={handleInputChange}
                />
                {errors.city && (
                  <p className={styles.errorText}>{errors.city}</p>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>
                  Select Service <span>*</span>
                </label>
                <select value={serviceType} onChange={handleServiceChange}>
                  <option value="">Choose a service</option>
                  <option value="Vastu Consulting">Vastu Consulting</option>
                  <option value="Astro Consulting">Astro Consulting</option>
                </select>
                {errors.serviceType && (
                  <p className={styles.errorText}>{errors.serviceType}</p>
                )}
              </div>
            </div>

            {/* ASTROLOGY */}
            {serviceType === "Astro Consulting" && (
              <>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>
                      Date of Birth (DOB) <span>*</span>
                    </label>
                    <input
                      type="date"
                      name="dob"
                      value={formData.dob}
                      onChange={handleInputChange}
                    />
                    {errors.dob && (
                      <p className={styles.errorText}>{errors.dob}</p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Time of Birth <span>*</span>
                    </label>
                    <input
                      type="time"
                      name="birth_time"
                      value={formData.birth_time}
                      onChange={handleInputChange}
                    />
                    {errors.birth_time && (
                      <p className={styles.errorText}>{errors.birth_time}</p>
                    )}
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>
                      Place of Birth <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="birth_place"
                      placeholder="City, State, Country"
                      value={formData.birth_place}
                      onChange={handleInputChange}
                    />
                    {errors.birth_place && (
                      <p className={styles.errorText}>{errors.birth_place}</p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Gender <span>*</span>
                    </label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleInputChange}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.gender && (
                      <p className={styles.errorText}>{errors.gender}</p>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    Issue Type <span>*</span>
                  </label>
                  <select
                    name="issue_type"
                    value={formData.issue_type}
                    onChange={handleInputChange}
                  >
                    <option value="">Select issue type</option>
                    <option value="Career / Job / Profession Issue">
                      Career / Job / Profession Issue
                    </option>
                    <option value="Business / Financial Issue">
                      Business / Financial Issue
                    </option>
                    <option value="Market / Trading Issue">
                      Market / Trading Issue
                    </option>
                    <option value="Relationship / Love / Marriage Issue">
                      Relationship / Love / Marriage Issue
                    </option>
                    <option value="Family / Child Related Issue">
                      Family / Child Related Issue
                    </option>
                    <option value="Health / Mental Stress Issue">
                      Health / Mental Stress Issue
                    </option>
                    <option value="Education Issue">Education Issue</option>
                    <option value="Foreign Travel / Settlement Issue">
                      Foreign Travel / Settlement Issue
                    </option>
                    <option value="Legal Issue">Legal Issue</option>
                    <option value="Property Related Concern">
                      Property Related Concern
                    </option>
                    <option value="Kundli / Horoscope Matching">
                      Kundli / Horoscope Matching
                    </option>
                    <option value="Dosha / Grah Dosh (Kundli Dosh, Planetary Effects)">
                      Dosha / Grah Dosh (Kundli Dosh, Planetary Effects)
                    </option>
                    <option value="Spiritual Guidance">
                      Spiritual Guidance
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.issue_type && (
                    <p className={styles.errorText}>{errors.issue_type}</p>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label>
                    Message <span>*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Write your questions or concerns..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <p className={styles.errorText}>{errors.message}</p>
                  )}
                </div>
              </>
            )}

            {/* VASTU */}
            {serviceType === "Vastu Consulting" && (
              <>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>
                      Property Type <span>*</span>
                    </label>
                    <select
                      name="property_type"
                      value={formData.property_type}
                      onChange={handleInputChange}
                    >
                      <option value="">Select property type</option>
                      <option value="Home / Flat">Home / Flat</option>
                      <option value="Villa / Bungalow">Villa / Bungalow</option>
                      <option value="Apartment">Apartment</option>
                      <option value="Office">Office</option>
                      <option value="Shop / Showroom">Shop / Showroom</option>
                      <option value="Factory">Factory</option>
                      <option value="Warehouse">Warehouse</option>
                      <option value="Plot / Land">Plot / Land</option>
                      <option value="Commercial Building">
                        Commercial Building
                      </option>
                      <option value="Restaurant / Cafe">
                        Restaurant / Cafe
                      </option>
                      <option value="Hotel / Resort">Hotel / Resort</option>
                      <option value="Hospital / Clinic">
                        Hospital / Clinic
                      </option>
                      <option value="School / College">School / College</option>
                      <option value="Temple / Religious Place">
                        Temple / Religious Place
                      </option>
                      <option value="Industrial Property">
                        Industrial Property
                      </option>
                      <option value="Farmhouse">Farmhouse</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.property_type && (
                      <p className={styles.errorText}>{errors.property_type}</p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Property Address <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="property_address"
                      placeholder="Enter property address"
                      value={formData.property_address}
                      onChange={handleInputChange}
                    />
                    {errors.property_address && (
                      <p className={styles.errorText}>
                        {errors.property_address}
                      </p>
                    )}
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>
                      Direction (Property Entrance) <span>*</span>
                    </label>
                    <select
                      name="direction"
                      value={formData.direction}
                      onChange={handleInputChange}
                    >
                      <option value="">Select direction</option>
                      <option value="North">North</option>
                      <option value="South">South</option>
                      <option value="East">East</option>
                      <option value="West">West</option>
                      <option value="North-East">North-East</option>
                      <option value="North-West">North-West</option>
                      <option value="South-East">South-East</option>
                      <option value="South-West">South-West</option>
                    </select>
                    {errors.direction && (
                      <p className={styles.errorText}>{errors.direction}</p>
                    )}
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Issue Type <span>*</span>
                    </label>
                    <select
                      name="issue_type"
                      value={formData.issue_type}
                      onChange={handleInputChange}
                    >
                      <option value="">Select issue type</option>
                      {vastuIssueOptions[
                        getVastuCategory(formData.property_type)
                      ].map((issue) => (
                        <option key={issue} value={issue}>
                          {issue}
                        </option>
                      ))}
                    </select>
                    {errors.issue_type && (
                      <p className={styles.errorText}>{errors.issue_type}</p>
                    )}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    Message <span>*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="3"
                    placeholder="Describe your vastu concerns or specific problems..."
                    value={formData.message}
                    onChange={handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <p className={styles.errorText}>{errors.message}</p>
                  )}
                </div>
              </>
            )}

            <button
              type="submit"
              className={styles.submitBtn}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Book Free Consultation"}
            </button>
          </form>
        </div>
      </div>

      {/* SUCCESS POPUP */}
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
                Your query has been submitted successfully. Our team will get back to you shortly.
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
    </div>
  );
}
