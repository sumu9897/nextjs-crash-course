// app/contact/page.tsx
import ButtonComponent from "./button";

export default async function Contact() {
  // Fetching posts just as a demo (not displayed yet)
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* ✅ Hero Section */}
      <section className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Contact Me
        </h1>
        <p className="text-lg text-gray-600">
          I’d love to hear from you! Whether you have a question, project idea, 
          or just want to connect, feel free to reach out.
        </p>
      </section>

      {/* ✅ Contact Card */}
      <section className="flex justify-center">
        <ButtonComponent />
      </section>

      {/* ✅ Social Links */}
      <section className="max-w-3xl mx-auto text-center mt-12">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Find Me On</h2>
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/sumu9897"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            🌐 GitHub
          </a>
          <a
            href="https://linkedin.com/in/md-sumon9897"
            target="_blank"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            💼 LinkedIn
          </a>
          <a
            href="mailto:mohammad.sumon9897@gmail.com"
            className="text-gray-600 hover:text-gray-900 transition"
          >
            ✉️ Email
          </a>
        </div>
      </section>
    </div>
  );
}
