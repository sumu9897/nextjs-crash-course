import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 text-center">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">Page Not Found</h2>
      <p className="mt-2 text-gray-500 max-w-md">
        Oops! The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-lg hover:bg-blue-700 transition-all duration-300"
      >
        Go Back Home
      </Link>
    </div>
  );
}
