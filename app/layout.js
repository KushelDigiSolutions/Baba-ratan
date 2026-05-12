import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  metadataBase: new URL("https://bajrangastro.com"),
  title: "Bajrang Astro | Trusted Vedic Astrology & Gemstones",
  description:
    "Get trusted Vedic astrology consultation, Janam Kundli analysis, and 100% certified gemstones from Bajrang Astro.",
};

import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./context/AuthContext";
import { CategoryProvider } from "./context/CategoryContext";
import { WishlistProvider } from "./context/WishlistContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AuthProvider>
          <CartProvider>
            <WishlistProvider>
              <CategoryProvider>{children}</CategoryProvider>
            </WishlistProvider>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
