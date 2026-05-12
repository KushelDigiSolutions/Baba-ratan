"use client";

import React from "react";
import {
  Shield,
  Lock,
  Eye,
  Database,
  Phone,
  Mail,
  CheckCircle2,
} from "lucide-react";

const PrivacyPolicyPage = () => {
  return (
    <div className="min-h-screen bg-[#fff7f5]">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#d97869] to-[#bf6253] py-20 px-4 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-orange-300/10 blur-3xl rounded-full"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10 text-white">
          <div className="flex justify-center mb-6">
            <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
              <Shield size={40} />
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-5">
            Privacy Policy
          </h1>

          <p className="max-w-3xl mx-auto text-white/80 text-lg leading-8">
            Your privacy and personal information are important to us. Learn
            how Bajrang Astro collects, uses, and protects your data.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-16">
        <div className="bg-white rounded-[30px] border border-[#f1d7d1] p-6 md:p-12">
          {/* Intro */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#d97869]" size={28} />

              <h2 className="text-3xl font-bold text-[#222]">
                Introduction
              </h2>
            </div>

            <p className="text-gray-600 leading-8">
              Bajrang Astro respects your privacy and is committed to protecting
              your personal information. This Privacy Policy explains how we
              collect, use, and safeguard your information when you use our
              website, astrology consultations, vastu services, and spiritual
              products.
            </p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {/* Information Collection */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-3">
                <Database className="text-[#d97869] mt-1" size={24} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    1. Information We Collect
                  </h3>

                  <p className="text-gray-600 leading-8">
                    We may collect personal details such as your name, email
                    address, phone number, date of birth, billing information,
                    and consultation details to provide personalized astrology
                    and vastu services.
                  </p>
                </div>
              </div>
            </div>

            {/* Use of Information */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-3">
                <CheckCircle2
                  className="text-[#d97869] mt-1"
                  size={24}
                />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    2. How We Use Your Information
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Your information is used to process consultations, manage
                    orders, improve customer experience, provide support, and
                    send updates regarding our services and products.
                  </p>
                </div>
              </div>
            </div>

            {/* Data Protection */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-3">
                <Shield className="text-[#d97869] mt-1" size={24} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    3. Data Protection & Security
                  </h3>

                  <p className="text-gray-600 leading-8">
                    We implement industry-standard security measures to protect
                    your personal data from unauthorized access, misuse, or
                    disclosure. However, no online platform can guarantee
                    complete security.
                  </p>
                </div>
              </div>
            </div>

            {/* Sharing */}
            <div className="border-b border-[#f3dfda] pb-8">
              <div className="flex items-start gap-3">
                <Eye className="text-[#d97869] mt-1" size={24} />

                <div>
                  <h3 className="text-2xl font-bold text-[#222] mb-4">
                    4. Sharing of Information
                  </h3>

                  <p className="text-gray-600 leading-8">
                    Bajrang Astro does not sell, trade, or rent your personal
                    information to third parties. Your data may only be shared
                    with trusted service providers when necessary for order
                    processing or legal compliance.
                  </p>
                </div>
              </div>
            </div>

            {/* Cookies */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                5. Cookies & Tracking
              </h3>

              <p className="text-gray-600 leading-8">
                Our website may use cookies and analytics tools to improve user
                experience, track website performance, and personalize content.
                You can disable cookies through your browser settings if
                preferred.
              </p>
            </div>

            {/* Rights */}
            <div className="border-b border-[#f3dfda] pb-8">
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                6. Your Rights
              </h3>

              <p className="text-gray-600 leading-8">
                You have the right to access, update, or request deletion of
                your personal information. To make any requests regarding your
                data, please contact our support team.
              </p>
            </div>

            {/* Changes */}
            <div>
              <h3 className="text-2xl font-bold text-[#222] mb-4">
                7. Updates to This Policy
              </h3>

              <p className="text-gray-600 leading-8">
                Bajrang Astro reserves the right to modify this Privacy Policy
                at any time. Changes will be reflected on this page, and
                continued use of our services indicates your acceptance of the
                updated policy.
              </p>
            </div>
          </div>

          {/* Contact Box */}
          <div className="mt-14 bg-[#fff4f1] border border-[#f2d6d0] rounded-[25px] p-8">
            <h3 className="text-2xl font-bold text-[#222] mb-6">
              Contact Us
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#d97869] text-white flex items-center justify-center">
                  <Phone size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Phone Number</p>
                  <h4 className="font-semibold text-[#222]">
                    +91 85950 46368
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-2xl bg-[#d97869] text-white flex items-center justify-center">
                  <Mail size={24} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">Email Address</p>
                  <h4 className="font-semibold text-[#222]">
                    support@bajrangastro.com
                  </h4>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <p className="text-center text-sm text-gray-400 mt-10">
            Last updated: May 2026
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;