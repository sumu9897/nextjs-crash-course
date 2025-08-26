"use client";

import Image from "next/image";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* ✅ Hero Section */}
      <section className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-600">
          Learn more about who we are, what we do, and why we’re passionate
          about building modern web applications.
        </p>
      </section>

      {/* ✅ Main About Content */}
      <section className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-16">
        {/* Image / Illustration */}
        <div className="flex justify-center">

          <Image
            src="/team.jpg"
            width={400}
            height={300}
            alt="Team"
            className="rounded-xl shadow-md"
          />
        </div>

        {/* Text Content */}
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We are a team of developers passionate about creating scalable,
            user-friendly, and impactful applications. With experience in React,
            Next.js, and full-stack development, we aim to deliver high-quality
            solutions that make a difference.
          </p>
          <p className="text-gray-700 leading-relaxed">
            This project is part of our learning journey in mastering Next.js
            fundamentals like routing, components, layouts, and server/client
            rendering.
          </p>
        </div>
      </section>

      {/* ✅ Highlights / Skills Section */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center mb-16">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-blue-600 mb-2">🚀 Next.js</h3>
          <p className="text-gray-600">
            Building modern web apps with SSR & SSG.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-green-600 mb-2">⚡ React</h3>
          <p className="text-gray-600">
            Component-based UI with hooks and state.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
          <h3 className="text-xl font-bold text-purple-600 mb-2">
            💡 Tailwind
          </h3>
          <p className="text-gray-600">
            Utility-first CSS framework for styling.
          </p>
        </div>
      </section>

      {/* ✅ Call to Action */}
      <section className="text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Want to connect?
        </h2>
        <p className="text-gray-600 mb-6">
          Feel free to reach out to us and learn more about our projects.
        </p>
        <a
          href="/contact"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
