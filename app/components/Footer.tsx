"use client";
import Link from "next/link";

export default function Footer() {
  return <div>
    <footer className="bg-gray-900 text-gray-400 text-center py-2">
        <p>© {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        <div className="space-x-4 mt-2">
          <Link href="https://github.com/sumu9897" target="_blank">GitHub</Link>
          <Link href="https://linkedin.com/in/md-sumon9897" target="_blank">LinkedIn</Link>
        </div>
      </footer>
  </div>;
}