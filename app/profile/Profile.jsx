"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Heart,
  ShoppingBag,
  LogOut,
  ShieldCheck,
  Trash2,
  Plus,
  Eye,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useWishlist } from "../context/WishlistContext";

const ProfilePage = () => {
  // All hooks must be declared before any logic or useEffect
  const [activeTab, setActiveTab] = useState("My Profile");
  const [profile, setProfile] = useState(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState(false);
  const [profileError, setProfileError] = useState(null);
  const [addresses, setAddresses] = useState([]);
  const [isLoadingAddresses, setIsLoadingAddresses] = useState(false);
  const [addressError, setAddressError] = useState(null);
  const [showAddAddressForm, setShowAddAddressForm] = useState(false);
  const [isEditingAddress, setIsEditingAddress] = useState(false);
  const [editingAddressId, setEditingAddressId] = useState(null);
  const [newAddress, setNewAddress] = useState({
    label: "",
    name: "Kartik",
    phone: "1234567890",
    address_line1: "1925 Gardenia Dr.",
    city: "Ghajiyabad",
    state: "UP",
    postal_code: "250103",
    country: "IN",
  });
  const [isPostingAddress, setIsPostingAddress] = useState(false);
  const [addressSubmitError, setAddressSubmitError] = useState(null);
  const [addressSubmitSuccess, setAddressSubmitSuccess] = useState(null);
  const [isDeletingAddressId, setIsDeletingAddressId] = useState(null);
  const [isUpdatingProfile, setIsUpdatingProfile] = useState(false);
  const [profileUpdateError, setProfileUpdateError] = useState(null);
  const [profileUpdateSuccess, setProfileUpdateSuccess] = useState(null);
  const [isEditingProfileMode, setIsEditingProfileMode] = useState(false);
  const [editProfileData, setEditProfileData] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const { user, logout } = useAuth();
  const { wishlistItems, isLoading: isLoadingWishlist, removeFromWishlist } = useWishlist();
  const router = useRouter();

  const addressApiBase =
    process.env.NEXT_PUBLIC_API_BASE ?? "https://bajrangastro.kdscrm.com/api";
  const profileApiBase =
    process.env.NEXT_PUBLIC_API_BASE ?? "https://bajrangastro.kdscrm.com/api";

  // Fetch profile info when My Profile tab is active
  useEffect(() => {
    if (activeTab !== "My Profile" || !user?.token) return;
    setIsLoadingProfile(true);
    setProfileError(null);
    fetch(`${profileApiBase}/profile`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) {
          let errorMessage = data.message || "Failed to load profile";
          if (typeof data.message === "object" && data.message !== null) {
            errorMessage = Object.values(data.message).flat().join(" ");
          }
          throw new Error(errorMessage);
        }
        setProfile(data.data ?? data.profile ?? data);
      })
      .catch((err) => setProfileError(err.message || "Failed to load profile"))
      .finally(() => setIsLoadingProfile(false));
  }, [activeTab, user?.token, profileApiBase]);

  const handleDeleteAddress = async (addressId) => {
    if (!user?.token) {
      setAddressError("Please login before deleting an address.");
      return;
    }
    setIsDeletingAddressId(addressId);
    setAddressError(null);
    try {
      const response = await fetch(`${addressApiBase}/addresses/${addressId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });
      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        let errorMessage = data.message || "Failed to delete address.";
        if (typeof data.message === "object" && data.message !== null) {
          errorMessage = Object.values(data.message).flat().join(" ");
        }
        throw new Error(errorMessage);
      }
      setAddressSubmitSuccess("Address deleted successfully.");
      loadAddresses();

      setTimeout(() => {
        setAddressSubmitSuccess(null);
      }, 3000);
    } catch (error) {
      setAddressError(error?.message || "Failed to delete address.");
    } finally {
      setIsDeletingAddressId(null);
    }
  };

  const loadAddresses = async () => {
    if (!user?.token) {
      setAddressError("Please login to view saved addresses.");
      setAddresses([]);
      return;
    }

    setIsLoadingAddresses(true);
    setAddressError(null);

    try {
      const response = await fetch(`${addressApiBase}/addresses`, {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      });

      const data = await response.json();
      if (!response.ok) {
        let errorMessage = data.message || "Unable to load addresses.";
        if (typeof data.message === "object" && data.message !== null) {
          errorMessage = Object.values(data.message).flat().join(" ");
        }
        throw new Error(errorMessage);
      }

      const fetchedAddresses = data.data ?? data.addresses ?? [];
      setAddresses(
        Array.isArray(fetchedAddresses) ? fetchedAddresses : [fetchedAddresses],
      );
    } catch (error) {
      setAddresses([]);
      setAddressError(error?.message || "Failed to fetch addresses.");
    } finally {
      setIsLoadingAddresses(false);
    }
  };

  useEffect(() => {
    if (activeTab !== "Addresses") return;
    loadAddresses();
  }, [activeTab, user?.token, addressApiBase]);

  const handleAddAddress = async (event) => {
    event.preventDefault();
    if (!user?.token) {
      setAddressSubmitError("Please login before adding an address.");
      return;
    }

    setIsPostingAddress(true);
    setAddressSubmitError(null);
    setAddressSubmitSuccess(null);

    try {
      const url = isEditingAddress
        ? `${addressApiBase}/addresses/${editingAddressId}`
        : `${addressApiBase}/addresses`;
      const method = isEditingAddress ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify(newAddress),
      });

      const data = await response.json();
      if (!response.ok) {
        let errorMessage = data.message || "Unable to save the address.";
        if (typeof data.message === "object" && data.message !== null) {
          errorMessage = Object.values(data.message).flat().join(" ");
        }
        throw new Error(errorMessage);
      }

      const successMessage = isEditingAddress
        ? "Address updated successfully."
        : "Address added successfully.";
      setAddressSubmitSuccess(successMessage);
      setShowAddAddressForm(false);
      setIsEditingAddress(false);
      setEditingAddressId(null);
      setNewAddress({
        label: "",
        name: "",
        phone: "",
        address_line1: "",
        city: "",
        state: "",
        postal_code: "",
        country: "",
      });
      loadAddresses();

      setTimeout(() => {
        setAddressSubmitSuccess(null);
      }, 3000);
    } catch (error) {
      setAddressSubmitError(error?.message || "Failed to save address.");
    } finally {
      setIsPostingAddress(false);
    }
  };

  const handleEditClick = (address) => {
    setEditingAddressId(address.id);
    setIsEditingAddress(true);
    setNewAddress({
      label: address.label || "",
      name: address.name || "",
      phone: address.phone || "",
      address_line1: address.address_line1 || "",
      city: address.city || "",
      state: address.state || "",
      postal_code: address.postal_code || "",
      country: address.country || "",
    });
    setShowAddAddressForm(true);
    setAddressSubmitError(null);
    setAddressSubmitSuccess(null);
  };

  const handleCancelEdit = () => {
    setShowAddAddressForm(false);
    setIsEditingAddress(false);
    setEditingAddressId(null);
    setNewAddress({
      label: "",
      name: "",
      phone: "",
      address_line1: "",
      city: "",
      state: "",
      postal_code: "",
      country: "",
    });
  };

  const handleUpdateProfile = async () => {
    if (!user?.token) {
      setProfileUpdateError("Please login to update your profile.");
      return;
    }

    // Validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    if (!editProfileData?.name || editProfileData.name.trim() === "") {
      setProfileUpdateError("Name is required.");
      return;
    }

    if (!editProfileData?.email || !emailRegex.test(editProfileData.email)) {
      setProfileUpdateError("Please enter a valid email address.");
      return;
    }

    if (!editProfileData?.phone || !phoneRegex.test(editProfileData.phone)) {
      setProfileUpdateError("Please enter a valid 10-digit phone number.");
      return;
    }

    setIsUpdatingProfile(true);
    setProfileUpdateError(null);
    setProfileUpdateSuccess(null);

    try {
      const formData = new FormData();
      formData.append("name", editProfileData.name || "");
      formData.append("email", editProfileData.email || "");
      formData.append("phone", editProfileData.phone || "");
      formData.append("dob", editProfileData.dob || editProfileData.date_of_birth || "");
      formData.append("address", editProfileData.address || "");

      if (selectedFile) {
        formData.append("avatar", selectedFile);
      }

      const response = await fetch(`${profileApiBase}/profile/update`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle specific validation errors from backend if available
        let errorMessage = data.message || "Failed to update profile";

        if (data.errors) {
          errorMessage = Object.values(data.errors).flat().join(" ");
        } else if (typeof data.message === "object" && data.message !== null) {
          errorMessage = Object.values(data.message).flat().join(" ");
        }

        throw new Error(errorMessage);
      }

      // Update the main profile state with the updated data from API or edit state
      const updatedProfile = data.data ?? data.profile ?? editProfileData;
      setProfile(updatedProfile);

      setProfileUpdateSuccess("Profile updated successfully!");
      setIsEditingProfileMode(false); // Exit edit mode on success

      // Message disappears after 3 seconds
      setTimeout(() => {
        setProfileUpdateSuccess(null);
      }, 3000);

    } catch (error) {
      setProfileUpdateError(error.message || "An error occurred while updating profile");
      // Error also disappears after 5 seconds for better UX
      setTimeout(() => {
        setProfileUpdateError(null);
      }, 5000);
    } finally {
      setIsUpdatingProfile(false);
    }
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditProfileData({ ...editProfileData, avatar: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const tabs = ["My Profile", "My Orders", "Wishlist", "Addresses"];

  return (
    <div className="min-h-screen bg-[#fdf6f2]">
      {/* Top Banner */}
      <div className="bg-[#de7a63] text-white py-14 px-4">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left */}
          <div className="flex items-center gap-5">
            <div className="w-28 h-28 rounded-full border-4 border-white overflow-hidden shadow-lg relative group">
              <img
                src={
                  isEditingProfileMode
                    ? (editProfileData?.avatar || profile?.avatar)
                    : profile?.avatar
                }
                alt="profile"
                className="w-full h-full object-cover"
              />
              {isEditingProfileMode && (
                <label className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity">
                  <Plus className="text-white" size={32} />
                  <input type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                </label>
              )}
            </div>

            <div>
              <h1 className="text-4xl font-bold">Hi, {profile?.name || "User"} 👋</h1>

              <p className="text-white/90 mt-2 text-lg">
                Welcome back to Bajrang Astro
              </p>

              <button
                onClick={() => {
                  setActiveTab("My Profile");
                  setEditProfileData({ ...profile });
                  setIsEditingProfileMode(true);
                }}
                className="mt-5 cursor-pointer flex items-center gap-2 bg-white text-[#de7a63] px-5 py-2 rounded-full font-semibold hover:scale-105 transition"
              >
                <Edit size={18} />
                Edit Profile
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 w-full lg:w-auto">
            <div className="bg-white/15 backdrop-blur-md p-5 rounded-2xl text-center">
              <Heart className="mx-auto mb-2" />
              <h3 className="text-2xl font-bold">{wishlistItems.length}</h3>
              <p className="text-sm">Wishlist</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-5 rounded-2xl text-center">
              <ShoppingBag className="mx-auto mb-2" />
              <h3 className="text-2xl font-bold">08</h3>
              <p className="text-sm">Orders</p>
            </div>

            <div className="bg-white/15 backdrop-blur-md p-5 rounded-2xl text-center">
              <ShieldCheck className="mx-auto mb-2" />
              <h3 className="text-2xl font-bold">Gold</h3>
              <p className="text-sm">Member</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Layout */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid lg:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="bg-white rounded-3xl shadow-md p-6 h-fit">
          <h2 className="text-2xl font-bold text-[#de7a63] mb-6">Dashboard</h2>

          <div className="space-y-3">
            {tabs.map((item, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-4 py-3 cursor-pointer rounded-xl transition font-medium ${activeTab === item
                  ? "bg-[#de7a63] text-white"
                  : "hover:bg-[#fdf1ec] text-gray-700"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="mt-8 flex items-center gap-2 cursor-pointer text-red-500 font-semibold"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:col-span-3">
          {/* ================= PROFILE ================= */}
          {activeTab === "My Profile" && (
            <div className="space-y-8">
              <div className="bg-white rounded-3xl shadow-md p-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-gray-800">
                    Personal Information
                  </h2>
                  {isEditingProfileMode && (
                    <div className="flex gap-3">
                      <button
                        onClick={() => setIsEditingProfileMode(false)}
                        className="border cursor-pointer border-gray-300 text-gray-600 px-5 py-2 rounded-full hover:bg-gray-50"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleUpdateProfile}
                        disabled={isUpdatingProfile}
                        className="bg-[#de7a63] text-white px-5 py-2 cursor-pointer rounded-full disabled:opacity-60"
                      >
                        {isUpdatingProfile ? "Saving..." : "Save Changes"}
                      </button>
                    </div>
                  )}
                </div>
                {profileUpdateSuccess && (
                  <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-xl text-sm">
                    {profileUpdateSuccess}
                  </div>
                )}
                {profileUpdateError && (
                  <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-xl text-sm">
                    {profileUpdateError}
                  </div>
                )}
                {isLoadingProfile ? (
                  <div className="text-center py-8 text-gray-500">
                    Loading profile...
                  </div>
                ) : profileError ? (
                  <div className="text-center py-8 text-red-500">
                    {profileError}
                  </div>
                ) : profile ? (
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-gray-600 text-sm mb-2 block">
                        Full Name
                      </label>
                      <div className="flex items-center gap-3 border rounded-2xl px-4 py-3">
                        <User className="text-[#de7a63]" size={20} />
                        <input
                          type="text"
                          value={isEditingProfileMode ? (editProfileData?.name || "") : (profile?.name || "")}
                          readOnly={!isEditingProfileMode}
                          onChange={(e) => setEditProfileData({ ...editProfileData, name: e.target.value })}
                          className={`w-full outline-none bg-transparent ${!isEditingProfileMode ? "cursor-default text-gray-500" : ""}`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-600 text-sm mb-2 block">
                        Email
                      </label>
                      <div className="flex items-center gap-3 border rounded-2xl px-4 py-3">
                        <Mail className="text-[#de7a63]" size={20} />
                        <input
                          type="email"
                          value={isEditingProfileMode ? (editProfileData?.email || "") : (profile?.email || "")}
                          readOnly={!isEditingProfileMode}
                          onChange={(e) => setEditProfileData({ ...editProfileData, email: e.target.value })}
                          className={`w-full outline-none bg-transparent ${!isEditingProfileMode ? "cursor-default text-gray-500" : ""}`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-600 text-sm mb-2 block">
                        Phone
                      </label>
                      <div className="flex items-center gap-3 border rounded-2xl px-4 py-3">
                        <Phone className="text-[#de7a63]" size={20} />
                        <input
                          type="text"
                          value={isEditingProfileMode ? (editProfileData?.phone || "") : (profile?.phone || "")}
                          readOnly={!isEditingProfileMode}
                          onChange={(e) => setEditProfileData({ ...editProfileData, phone: e.target.value })}
                          className={`w-full outline-none bg-transparent ${!isEditingProfileMode ? "cursor-default text-gray-500" : ""}`}
                        />
                      </div>
                    </div>
                    <div>
                      <label className="text-gray-600 text-sm mb-2 block">
                        Date of Birth
                      </label>
                      <div className="flex items-center gap-3 border rounded-2xl px-4 py-3">
                        <Calendar className="text-[#de7a63]" size={20} />
                        <input
                          type="date"
                          max={new Date().toISOString().split("T")[0]}
                          value={
                            isEditingProfileMode
                              ? (editProfileData?.dob || editProfileData?.date_of_birth || "")
                              : (profile?.dob || profile?.date_of_birth || "")
                          }
                          readOnly={!isEditingProfileMode}
                          onChange={(e) =>
                            setEditProfileData({
                              ...editProfileData,
                              dob: e.target.value,
                            })
                          }
                          className={`w-full outline-none bg-transparent ${!isEditingProfileMode ? "cursor-default text-gray-500" : ""
                            }`}
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-gray-600 text-sm mb-2 block">
                        Address
                      </label>
                      <div className="flex items-start gap-3 border rounded-2xl px-4 py-3">
                        <MapPin className="text-[#de7a63]" size={20} />
                        <textarea
                          rows={3}
                          value={isEditingProfileMode ? (editProfileData?.address || "") : (profile?.address || "")}
                          readOnly={!isEditingProfileMode}
                          onChange={(e) => setEditProfileData({ ...editProfileData, address: e.target.value })}
                          className={`w-full outline-none resize-none bg-transparent ${!isEditingProfileMode ? "cursor-default text-gray-500" : ""}`}
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    No profile data found.
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ================= ORDERS ================= */}
          {activeTab === "My Orders" && (
            <div className="bg-white rounded-3xl shadow-md p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">My Orders</h2>
              </div>

              <div className="space-y-5">
                {[1, 2, 3].map((item) => (
                  <div
                    key={item}
                    className="border rounded-2xl p-5 flex flex-col lg:flex-row lg:items-center justify-between gap-5 hover:shadow-md transition"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                        alt=""
                        className="w-20 h-20 rounded-xl object-cover"
                      />

                      <div>
                        <h3 className="font-bold text-lg">
                          Janam Kundli Report
                        </h3>

                        <p className="text-gray-500 mt-1">
                          Order ID : #BAJ00{item}
                        </p>

                        <span className="inline-block mt-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                          Completed
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button className="flex items-center gap-2 border px-4 py-2 rounded-xl hover:bg-gray-50">
                        <Eye size={18} />
                        View
                      </button>

                      <div className="font-bold text-[#de7a63] text-xl">
                        ₹999
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ================= WISHLIST ================= */}
          {activeTab === "Wishlist" && (
            <div className="bg-white rounded-3xl shadow-md p-8">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  My Wishlist
                </h2>
              </div>

              {isLoadingWishlist ? (
                <div className="text-center py-10">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#de7a63] mx-auto"></div>
                  <p className="mt-4 text-gray-500">Loading your wishlist...</p>
                </div>
              ) : wishlistItems.length > 0 ? (
                <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {wishlistItems.map((item) => (
                    <div
                      key={item.id}
                      className="border rounded-3xl overflow-hidden hover:shadow-xl transition group"
                    >
                      <div className="relative h-52 overflow-hidden">
                        <img
                          src={
                            item.product?.main_image || item.product?.image
                              ? ((item.product?.main_image || item.product?.image).startsWith('http')
                                ? (item.product?.main_image || item.product?.image)
                                : `${profileApiBase.replace('/api', '')}/${item.product?.main_image || item.product?.image}`)
                              : "https://images.unsplash.com/photo-1518562180175-34a163b1a9a6?q=80&w=1200&auto=format&fit=crop"
                          }
                          alt={item.product?.name || "Product"}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>

                      <div className="p-5">
                        <h3 className="font-bold text-lg truncate">
                          {item.product?.name || "Product Name"}
                        </h3>

                        <p className="text-gray-500 text-sm mt-2 line-clamp-2">
                          {item.product?.subtitle || item.product?.description?.replace(/<[^>]*>?/gm, '') || "No description available."}
                        </p>

                        <div className="flex items-center justify-between mt-5">
                          <span className="text-[#de7a63] font-bold text-xl">
                            ₹{item.product?.price || "TBD"}
                          </span>

                          <button
                            onClick={() => {
                              if (window.confirm("Remove this item from wishlist?")) {
                                removeFromWishlist(item.product?.id);

                              }
                            }}
                            className="text-red-500 cursor-pointer hover:scale-110 transition p-2"
                          >
                            <Trash2 size={20} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-10">
                  <Heart className="mx-auto text-gray-300 mb-4" size={48} />
                  <p className="text-gray-500">Your wishlist is empty.</p>
                  <button
                    onClick={() => router.push('/shop')}
                    className="mt-4 text-[#de7a63] font-semibold underline"
                  >
                    Browse products
                  </button>
                </div>
              )}
            </div>
          )}

          {/* ================= ADDRESS ================= */}
          {activeTab === "Addresses" && (
            <div className="bg-white rounded-3xl shadow-md p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-8">
                <h2 className="text-2xl font-bold text-gray-800">
                  Saved Addresses
                </h2>

                <button
                  onClick={() => {
                    handleCancelEdit();
                    setShowAddAddressForm((state) => !state);
                  }}
                  className="bg-[#de7a63] cursor-pointer text-white px-5 py-3 rounded-2xl flex items-center gap-2"
                >
                  <Plus size={18} />
                  {showAddAddressForm && !isEditingAddress
                    ? "Cancel"
                    : "Add Address"}
                </button>
              </div>

              {showAddAddressForm && (
                <form onSubmit={handleAddAddress} className="mb-8 space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Label
                      </label>
                      <input
                        type="text"
                        value={newAddress.label}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            label: e.target.value,
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="Home / Office ..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        value={newAddress.name}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, name: e.target.value })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="Full Name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={newAddress.phone}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            phone: e.target.value,
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="Phone Number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Address Line 1
                      </label>
                      <input
                        type="text"
                        value={newAddress.address_line1}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            address_line1: e.target.value,
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="Address Line 1"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        City
                      </label>
                      <input
                        type="text"
                        value={newAddress.city}
                        onChange={(e) =>
                          setNewAddress({ ...newAddress, city: e.target.value })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="New Delhi"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        State
                      </label>
                      <input
                        type="text"
                        value={newAddress.state}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            state: e.target.value,
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="UP"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Postal Code
                      </label>
                      <input
                        type="text"
                        value={newAddress.postal_code}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            postal_code: e.target.value,
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="250103"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Country
                      </label>
                      <input
                        type="text"
                        value={newAddress.country}
                        onChange={(e) =>
                          setNewAddress({
                            ...newAddress,
                            country: e.target.value,
                          })
                        }
                        className="w-full border rounded-2xl px-4 py-3 outline-none"
                        placeholder="IN"
                      />
                    </div>
                  </div>

                  {addressSubmitError && (
                    <div className="text-red-500 text-sm">
                      {addressSubmitError}
                    </div>
                  )}
                  {addressSubmitSuccess && (
                    <div className="text-green-600 text-sm">
                      {addressSubmitSuccess}
                    </div>
                  )}

                  <div className="flex flex-wrap gap-4">
                    <button
                      type="submit"
                      disabled={isPostingAddress}
                      className="bg-[#de7a63] cursor-pointer text-white px-6 py-3 rounded-2xl font-semibold hover:opacity-95 disabled:opacity-60"
                    >
                      {isPostingAddress
                        ? "Saving..."
                        : isEditingAddress
                          ? "Update Address"
                          : "Save Address"}
                    </button>
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="border border-[#de7a63] cursor-pointer text-[#de7a63] px-6 py-3 rounded-2xl"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              )}

              {!showAddAddressForm && (
                isLoadingAddresses ? (
                  <div className="text-center py-16 text-gray-500">
                    Loading addresses...
                  </div>
                ) : addressError ? (
                  <div className="text-center py-16 text-red-500">
                    {addressError}
                  </div>
                ) : addresses.length === 0 ? (
                  <div className="text-center py-16 text-gray-500">
                    No saved addresses found.
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-6">
                    {addresses.map((address, index) => {
                      const label =
                        address.label || address.name || `Address ${index + 1}`;
                      const lines = [];

                      if (address.address_line1)
                        lines.push(address.address_line1);
                      if (address.address_line2)
                        lines.push(address.address_line2);
                      if (address.city) lines.push(address.city);
                      if (address.state) lines.push(address.state);
                      if (address.postal_code) lines.push(address.postal_code);
                      if (address.country) lines.push(address.country);
                      if (address.phone) lines.push(`Phone: ${address.phone}`);
                      if (address.contact_number)
                        lines.push(`Phone: ${address.contact_number}`);

                      const content =
                        lines.length > 0
                          ? lines
                          : [
                            address.full_address ||
                            address.address ||
                            JSON.stringify(address),
                          ];

                      return (
                        <div
                          key={index}
                          className="border-2 border-dashed border-[#de7a63]/30 rounded-3xl p-6"
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-bold text-lg">{label}</h3>

                              <p className="text-gray-600 mt-3 leading-7 whitespace-pre-line">
                                {content.map((line, lineIndex) => (
                                  <span key={lineIndex}>
                                    {line}
                                    {lineIndex < content.length - 1 ? <br /> : null}
                                  </span>
                                ))}
                              </p>
                            </div>

                            <MapPin className="text-[#de7a63]" />
                          </div>

                          <div className="flex gap-3 mt-6">
                            <button
                              onClick={() => handleEditClick(address)}
                              className="px-4 py-2 cursor-pointer bg-[#de7a63] text-white rounded-xl"
                            >
                              Edit
                            </button>

                            <button
                              className="px-4 py-2 cursor-pointer border rounded-xl text-red-500 disabled:opacity-60"
                              disabled={isDeletingAddressId === address.id}
                              onClick={() => handleDeleteAddress(address.id)}
                            >
                              {isDeletingAddressId === address.id
                                ? "Deleting..."
                                : "Delete"}
                            </button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
