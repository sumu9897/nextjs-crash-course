import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyWebsite",
  description: "A professional Next.js project",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="fixed top-0 left-0 w-full z-50 shadow-md">
          <Navbar />
        </header>

        {/* ✅ Main Content Area */}
        <main className="pt-20 min-h-[calc(100vh-90px)] flex flex-col">
          <div className="flex-1">{children}</div>
        </main>

        {/* ✅ Sticky Footer */}
        <footer className="bg-gray-900 text-gray-300 py-2 text-center mt-2">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
