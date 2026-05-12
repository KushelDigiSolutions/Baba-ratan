"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const apiBase =
  process.env.NEXT_PUBLIC_API_BASE ?? "https://bajrangastro.kdscrm.com/api";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    if (typeof window === "undefined") return null;
    const savedAuth = localStorage.getItem("authUser");
    if (!savedAuth) return null;
    try {
      const parsed = JSON.parse(savedAuth);
      if (parsed?.data?.user) {
        return {
          ...parsed.data.user,
          token: parsed.data.token ?? parsed.token,
        };
      }
      return parsed;
    } catch (error) {
      console.error("Failed to parse stored auth", error);
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem("authUser", JSON.stringify(user));
    } else {
      localStorage.removeItem("authUser");
    }
  }, [user]);

  const login = async ({ email, password }) => {
    const response = await fetch(`${apiBase}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();
    if (!response.ok) {
      throw new Error(
        data.message || "Login failed. Please check your credentials.",
      );
    }

    const authUser = data.data?.user
      ? {
          ...data.data.user,
          token: data.data.token,
          email: data.data.user.email ?? email,
        }
      : {
          ...data,
          email,
        };
    setUser(authUser);
    return authUser;
  };

  const register = async ({
    name,
    email,
    phone,
    password,
    passwordConfirmation,
  }) => {
    try {
      const response = await fetch(`${apiBase}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          password,
          password_confirmation: passwordConfirmation,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        if (data.errors) {
          const firstError = Object.values(data.errors)[0]?.[0];
          throw new Error(firstError || data.message);
        }

        throw new Error(
          data.message || "Registration failed. Please try again.",
        );
      }

      const authUser = data.data?.user
        ? {
            ...data.data.user,
            token: data.data.token,
            email: data.data.user.email ?? email,
          }
        : {
            ...data,
            name,
            email,
            phone,
          };

      setUser(authUser);

      return authUser;
    } catch (error) {
      console.error("Register Error:", error);
      throw error;
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
