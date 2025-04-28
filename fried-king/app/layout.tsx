"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./styles/header.module.css";
import { ToastContainer, toast } from "react-toastify";
import React from "react";
import { usePathname } from "next/navigation";
import "react-toastify/dist/ReactToastify.css";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathName = usePathname();
  const pathPlace =
    pathName.startsWith("/login") ||
    pathName.startsWith("/signup") ||
    pathName.startsWith("/admin");
  return (
    <html lang="en">
      <body>
        {!pathPlace && <Header />}
        {children}
        <ToastContainer />
        {!pathPlace && <Footer />}
      </body>
    </html>
  );
}
