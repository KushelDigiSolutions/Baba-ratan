"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Mail, Lock, User, Phone, ArrowRight } from "lucide-react";
import { useAuth } from "../context/AuthContext";

const AuthPage = () => {
  const router = useRouter();
  const { login, register } = useAuth();
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");

  const validateEmail = (value) => {
    if (!value) return false;
    if (value.includes("..")) return false;
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
  };

  const validatePassword = (value) => {
    if (!value || value.length < 8) return false;
    const hasUpper = /[A-Z]/.test(value);
    const hasLower = /[a-z]/.test(value);
    const hasSpecial = /[!@#$%^&*()\-_=+\[\]{};:'"\\|,.<>/?`~]/.test(value);
    return hasUpper && hasLower && hasSpecial;
  };

  const validatePhone = (value) => {
    return /^\d{10}$/.test(value);
  };

  const validateName = (value) => {
    if (!value) return false;
    const lettersOnly = value.replace(/[^a-zA-Z]/g, "");
    return lettersOnly.length >= 2;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const validationErrors = {};
    setStatusMessage("");

    if (!validateEmail(email)) {
      validationErrors.email =
        "Please enter a valid email address in standard format (no consecutive dots).";
    }

    if (!validatePassword(password)) {
      validationErrors.password =
        "Password must be at least 8 characters and include uppercase, lowercase, and a special symbol.";
    }

    if (!isLogin) {
      if (!validateName(name)) {
        validationErrors.name = "Full name must contain at least two letters.";
      }

      if (!validatePhone(phone)) {
        validationErrors.phone =
          "Phone number must be exactly 10 digits.";
      }

      if (!passwordConfirmation) {
        validationErrors.passwordConfirmation =
          "Please confirm your password.";
      } else if (password !== passwordConfirmation) {
        validationErrors.passwordConfirmation =
          "Passwords do not match.";
      }
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setLoading(true);
    setErrors({});

    try {
      if (isLogin) {
        await login({ email, password });
        setStatusMessage("Login successful. Redirecting to home...");
      } else {
        await register({
          name,
          email,
          phone,
          password,
          passwordConfirmation,
        });

        setStatusMessage(
          "Account created successfully. Redirecting to home..."
        );
      }

      setTimeout(() => router.push("/"), 1000);
    } catch (error) {
      setErrors({
        api:
          error?.message ||
          "Unable to complete request. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#d97869] relative overflow-hidden flex items-center justify-center px-4 py-10">
      <div className="absolute top-20 left-20 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

      <div className="absolute bottom-10 right-10 w-80 h-80 bg-orange-300/10 blur-3xl rounded-full"></div>

      <div className="w-full max-w-6xl grid lg:grid-cols-2 bg-white/10 backdrop-blur-xl border border-white/20 rounded-[30px] overflow-hidden shadow-2xl z-10">
        <div className="hidden lg:flex flex-col justify-start px-14 py-16 relative text-white">
          <div className="absolute inset-0 bg-linear-to-br from-[#cf6f60] to-[#b85e53]"></div>

          <div className="relative z-10">
            <img
              src="https://res.cloudinary.com/daup99ghe/image/upload/v1777528042/iconof_astro-removebg-preview_vie6mi.png"
              alt="Bajrang Astro Logo"
              className="w-32 md:w-40 mb-8 object-contain brightness-0 invert drop-shadow-md"
            />

            <h1 className="text-5xl font-bold leading-tight mb-6">
              Welcome to <br /> Bajrang Astro
            </h1>

            <p className="text-lg text-white/80 leading-8 mb-10">
              Discover astrology guidance, vastu consultation, and spiritual
              solutions to transform your life with positivity and clarity.
            </p>

            <div className="flex gap-4">
              <button className="bg-white text-[#cf6f60] px-6 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300">
                Explore Services
              </button>

              <button className="border border-white/40 px-6 py-3 rounded-full hover:bg-white/10 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white px-6 md:px-12 py-12 md:py-16 flex flex-col justify-center">
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-[#222] mb-3">
              {isLogin ? "Welcome Back 👋" : "Create Account ✨"}
            </h2>

            <p className="text-gray-500">
              {isLogin
                ? "Login to continue your spiritual journey"
                : "Join Bajrang Astro today"}
            </p>
          </div>

          <form className="space-y-5" onSubmit={handleSubmit}>
            {!isLogin && (
              <div className="relative">
                <User
                  size={20}
                  className="absolute left-4 top-7 -translate-y-1/2 text-[#d97869]"
                />

                <input
                  value={name}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^[a-zA-Z\s]*$/.test(val)) {
                      setName(val);
                      if (errors.name) setErrors((prev) => ({ ...prev, name: null }));
                    }
                  }}
                  type="text"
                  placeholder="Full Name"
                  maxLength={50}
                  className="w-full h-14 rounded-2xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#d97869] transition-all"
                />

                {errors.name && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.name}
                  </p>
                )}
              </div>
            )}

            {!isLogin && (
              <div className="relative">
                <Phone
                  size={20}
                  className="absolute left-4 top-7 -translate-y-1/2 text-[#d97869]"
                />

                <input
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value;
                    if (/^\d*$/.test(val)) {
                      setPhone(val);
                      if (val.length === 10 && errors.phone) {
                        setErrors((prev) => ({ ...prev, phone: null }));
                      }
                    }
                  }}
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={10}
                  className="w-full h-14 rounded-2xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#d97869] transition-all"
                />

                {errors.phone && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.phone}
                  </p>
                )}
              </div>
            )}

            <div className="relative">
              <Mail
                size={20}
                className="absolute left-4 top-7 -translate-y-1/2 text-[#d97869]"
              />

              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (errors.email && validateEmail(e.target.value)) {
                    setErrors((prev) => ({ ...prev, email: null }));
                  }
                }}
                onBlur={() => {
                  if (email && !validateEmail(email)) {
                    setErrors((prev) => ({ ...prev, email: "Please enter a valid email address." }));
                  }
                }}
                type="email"
                placeholder="Email Address"
                className="w-full h-14 rounded-2xl border border-gray-200 pl-12 pr-4 outline-none focus:border-[#d97869] transition-all"
              />

              {errors.email && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="relative">
              <Lock
                size={20}
                className="absolute left-4 top-7 -translate-y-1/2 text-[#d97869]"
              />

              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full h-14 rounded-2xl border border-gray-200 pl-12 pr-14 outline-none focus:border-[#d97869] transition-all"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-7 -translate-y-1/2 text-gray-500"
              >
                {showPassword ? (
                  <EyeOff size={20} />
                ) : (
                  <Eye size={20} />
                )}
              </button>

              {errors.password && (
                <p className="mt-2 text-sm text-red-600">
                  {errors.password}
                </p>
              )}
            </div>

            {!isLogin && (
              <div className="relative">
                <Lock
                  size={20}
                  className="absolute left-4 top-7 -translate-y-1/2 text-[#d97869]"
                />

                <input
                  value={passwordConfirmation}
                  onChange={(e) =>
                    setPasswordConfirmation(e.target.value)
                  }
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  className="w-full h-14 rounded-2xl border border-gray-200 pl-12 pr-14 outline-none focus:border-[#d97869] transition-all"
                />

                {errors.passwordConfirmation && (
                  <p className="mt-2 text-sm text-red-600">
                    {errors.passwordConfirmation}
                  </p>
                )}
              </div>
            )}

            {isLogin && (
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input type="checkbox" />
                  Remember me
                </label>

                <button
                  type="button"
                  className="text-[#d97869] font-medium hover:underline"
                >
                  Forgot Password?
                </button>
              </div>
            )}

            {errors.api && (
              <p className="text-sm text-red-600">
                {errors.api}
              </p>
            )}

            {statusMessage && (
              <p className="text-sm text-green-600">
                {statusMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full h-14 rounded-2xl bg-[#d97869] hover:bg-[#c56657] text-white font-semibold flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading
                ? isLogin
                  ? "Logging in..."
                  : "Creating account..."
                : isLogin
                ? "Login Now"
                : "Create Account"}

              <ArrowRight size={18} />
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-gray-200"></div>

            <span className="text-gray-400 text-sm">
              OR
            </span>

            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          <p className="text-center text-gray-500">
            {isLogin
              ? "Don’t have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setErrors({});
                setStatusMessage("");
                setPasswordConfirmation("");
              }}
              className="text-[#d97869] font-semibold ml-2"
            >
              {isLogin ? "Sign Up" : "Login"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;