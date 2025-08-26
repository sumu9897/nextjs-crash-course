import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (<div>
    {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          <Image
            src="/slogo.png"
            width={80}
            height={80}
            alt="Logo"
            className="mx-auto mb-4"
          />
          Welcome to MyWebsite
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Learn Next.js step by step and build modern web apps 🚀
        </p>
        <Link
          href="/about"
          className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition"
        >
          Get Started
        </Link>
      </section>
  </div>);
}