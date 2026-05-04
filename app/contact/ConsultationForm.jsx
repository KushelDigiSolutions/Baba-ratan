"use client";

import { useState } from "react";
import styles from "./ConsultationForms.module.css";

export default function ConsultationForm() {
  const [serviceType, setServiceType] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    dob: "",
    tob: "",
    pob: "",
    gender: "",
    layoutPlan: null,
    googleLocation: "",
    propertyEntrance: "",
    message: ""
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Full Name: Minimum 2 alphabets, no digits
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    if (!formData.fullName) {
      newErrors.fullName = "Full Name is required";
    } else if (!nameRegex.test(formData.fullName.trim())) {
      newErrors.fullName = "Name must contain at least 2 alphabets and no digits";
    }

    // Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email Address is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    // Contact Number: digits only, exactly 10
    if (!formData.contactNumber) {
      newErrors.contactNumber = "Contact Number is required";
    } else if (formData.contactNumber.length !== 10) {
      newErrors.contactNumber = "Contact number must be exactly 10 digits";
    }

    if (!serviceType) {
      newErrors.serviceType = "Please select a service";
    }

    const isAstrology = ["Janam Kundli Analysis", "Palm Reading", "Kundli Matching"].includes(serviceType);
    const isVastu = ["Vastu Consulting — Home", "Vastu Consulting — Office", "Vastu Consulting — Factory"].includes(serviceType);

    if (isAstrology) {
      if (!formData.dob) newErrors.dob = "Date of Birth is required";
      if (!formData.tob) newErrors.tob = "Time of Birth is required";
      if (!formData.pob) newErrors.pob = "Place of Birth is required";
      if (!formData.gender) newErrors.gender = "Gender is required";
      if (!formData.message) newErrors.message = "Message is required";
    }

    if (isVastu) {
      if (!formData.layoutPlan) newErrors.layoutPlan = "Layout Plan is required";
      if (!formData.googleLocation) newErrors.googleLocation = "Google Location is required";
      if (!formData.propertyEntrance) newErrors.propertyEntrance = "Property Entrance is required";
      if (!formData.message) newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Proceed with form submission
      console.log("Form submitted successfully", { serviceType, ...formData });
      alert("Form submitted successfully!");
      // Reset form if needed
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // For contact number, prevent typing more than 10 digits and non-digits
    if (name === "contactNumber") {
      const sanitizedValue = value.replace(/\D/g, '').slice(0, 10);
      setFormData({ ...formData, [name]: sanitizedValue });
    } else if (name === "fullName") {
      // Prevent anything other than alphabets and spaces
      const sanitizedValue = value.replace(/[^A-Za-z\s]/g, '');
      setFormData({ ...formData, [name]: sanitizedValue });
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
          <h1 className={styles.title}>Consultation <span>Request</span></h1>

          <p className={styles.subtitle}>
            Start your journey with Pandit Vishal Johari. Choose your service and take the first step today.
          </p>

          <div className={styles.contactInfo}>
            <h2>Contact Information</h2>
            <p>Pandit Vishal Johari <span>(Vedic Astrologer & Vastu Consultant)</span></p>
          </div>

          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            {/* COMMON FIELDS */}
            <h3 className={styles.sectionHeading}>Talk to Experts Astrologer</h3>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>
                  Full Name <span>*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
                {errors.fullName && <p className={styles.errorText}>{errors.fullName}</p>}
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
                {errors.email && <p className={styles.errorText}>{errors.email}</p>}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.formGroup}>
                <label>
                  Contact Number <span>*</span>
                </label>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Enter 10-digit number"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                />
                {errors.contactNumber && <p className={styles.errorText}>{errors.contactNumber}</p>}
              </div>

              <div className={styles.formGroup}>
                <label>
                  Select Service <span>*</span>
                </label>
                <select
                  value={serviceType}
                  onChange={handleServiceChange}
                >
                  <option value="">Choose a service</option>
                  <option value="Janam Kundli Analysis">Janam Kundli Analysis</option>
                  <option value="Palm Reading">Palm Reading</option>
                  <option value="Vastu Consulting — Home">Vastu Consulting — Home</option>
                  <option value="Vastu Consulting — Office">Vastu Consulting — Office</option>
                  <option value="Vastu Consulting — Factory">Vastu Consulting — Factory</option>
                  <option value="Kundli Matching">Kundli Matching</option>
                </select>
                {errors.serviceType && <p className={styles.errorText}>{errors.serviceType}</p>}
              </div>
            </div>

            {/* ASTROLOGY */}
            {["Janam Kundli Analysis", "Palm Reading", "Kundli Matching"].includes(serviceType) && (
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
                    {errors.dob && <p className={styles.errorText}>{errors.dob}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Time of Birth (TOB) <span>*</span>
                    </label>
                    <input
                      type="time"
                      name="tob"
                      value={formData.tob}
                      onChange={handleInputChange}
                    />
                    {errors.tob && <p className={styles.errorText}>{errors.tob}</p>}
                  </div>
                </div>

                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>
                      Place of Birth (POB) <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="pob"
                      placeholder="City, State, Country"
                      value={formData.pob}
                      onChange={handleInputChange}
                    />
                    {errors.pob && <p className={styles.errorText}>{errors.pob}</p>}
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
                    {errors.gender && <p className={styles.errorText}>{errors.gender}</p>}
                  </div>
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
                  {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                </div>
              </>
            )}

            {/* VASTU */}
            {["Vastu Consulting — Home", "Vastu Consulting — Office", "Vastu Consulting — Factory"].includes(serviceType) && (
              <>
                <div className={styles.row}>
                  <div className={styles.formGroup}>
                    <label>
                      Upload Layout Plan <span>*</span>
                    </label>
                    <input
                      type="file"
                      name="layoutPlan"
                      accept=".jpg,.jpeg,.png,.pdf"
                      onChange={handleFileChange}
                    />
                    {errors.layoutPlan && <p className={styles.errorText}>{errors.layoutPlan}</p>}
                  </div>

                  <div className={styles.formGroup}>
                    <label>
                      Google Location <span>*</span>
                    </label>
                    <input
                      type="text"
                      name="googleLocation"
                      placeholder="Paste Google Maps link"
                      value={formData.googleLocation}
                      onChange={handleInputChange}
                    />
                    {errors.googleLocation && <p className={styles.errorText}>{errors.googleLocation}</p>}
                  </div>
                </div>

                <div className={styles.formGroup}>
                  <label>
                    Property Entrance <span>*</span>
                  </label>
                  <select
                    name="propertyEntrance"
                    value={formData.propertyEntrance}
                    onChange={handleInputChange}
                  >
                    <option value="">Select direction</option>
                    <option>North</option>
                    <option>South</option>
                    <option>East</option>
                    <option>West</option>
                    <option>North-East</option>
                    <option>North-West</option>
                    <option>South-East</option>
                    <option>South-West</option>
                  </select>
                  {errors.propertyEntrance && <p className={styles.errorText}>{errors.propertyEntrance}</p>}
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
                  {errors.message && <p className={styles.errorText}>{errors.message}</p>}
                </div>
              </>
            )}

            {serviceType && (
              <button type="submit" className={styles.submitBtn}>
                Book Free Consultation
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}