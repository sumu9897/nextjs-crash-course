"use client";
import { useState } from "react";

export default function ButtonComponent() {
  const [copied, setCopied] = useState(false);
  const email = "mohammad.sumon9897@gmail.com";

  const handleClick = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 text-center max-w-md w-full">
      <h2 className="text-xl font-semibold mb-3">Get in Touch</h2>
      <p className="text-gray-700 mb-4">
        You can reach me directly at:
      </p>
      <p className="font-medium text-blue-600 mb-6">{email}</p>

      <button
        onClick={handleClick}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
      >
        {copied ? "Copied!" : "Copy Email"}
      </button>

      {copied && (
        <p className="mt-3 text-green-600 font-medium">
          ✅ Email copied to clipboard!
        </p>
      )}
    </div>
  );
}
