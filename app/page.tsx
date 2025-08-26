import Image from "next/image";
import Link from "next/link";
import { Code, Rocket, Layers } from "lucide-react";

export default function HomePage() {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      {/* ✅ Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <Image
            src="/slogo.png"
            width={100}
            height={100}
            alt="Logo"
            className="mx-auto mb-6"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to <span className="text-yellow-300">MyWebsite</span>
          </h1>
          <p className="text-lg md:text-xl mb-6 opacity-90">
            Learn Next.js step by step and build modern, scalable web apps 🚀
          </p>
          <Link
            href="/about"
            className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition shadow"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* ✅ Features Section */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
          <p className="text-gray-600">
            Everything you need to kickstart your Next.js learning journey
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Code className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Hands-on Coding
            </h3>
            <p className="text-gray-600">
              Learn by building real-world projects with clean and modern code.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Rocket className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Fast Deployment
            </h3>
            <p className="text-gray-600">
              Deploy your Next.js apps quickly with Vercel and modern hosting.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <Layers className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Scalable Architecture
            </h3>
            <p className="text-gray-600">
              Learn best practices for creating scalable, production-ready apps.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Call To Action */}
      <section className="bg-indigo-700 text-white py-12 px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ready to start your journey?
        </h2>
        <p className="mb-6 opacity-90">
          Join us today and take your development skills to the next level.
        </p>
        <Link
          href="/about"
          className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition"
        >
          Start Learning →
        </Link>
      </section>

      
    </div>
  );
}
