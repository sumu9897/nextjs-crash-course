"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Brand */}
        <div className="text-2xl font-bold tracking-wide">
          <Link href="/">
            <Image
              src="/slogo.png"
              width={40}
              height={40}
              alt="Logo"
              className="mx-auto mb-4"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link
            href="/"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/users"
            className="hover:text-blue-400 transition-colors duration-300"
          >
            Users
          </Link>
        </div>
      </div>
    </nav>
  );
}
