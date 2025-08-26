import { notFound } from "next/navigation";

async function fetchUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function UserPage({
  params,
}: {
  params: { userId: string };
}) {
  const user = await fetchUser(params.userId);

  if (!user) {
    notFound();
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <div className="flex items-center space-x-6">
          {/* Avatar Placeholder */}
          <div className="w-20 h-20 rounded-full bg-indigo-100 flex items-center justify-center text-2xl font-bold text-indigo-600">
            {user.name.charAt(0)}
          </div>

          {/* User Info */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {user.name}
            </h1>
            <p className="text-gray-600">@{user.username}</p>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-8 space-y-3">
          <p className="text-gray-700">
            <span className="font-semibold">📧 Email:</span> {user.email}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">📞 Phone:</span> {user.phone}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">🌐 Website:</span>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              className="text-indigo-600 hover:underline"
            >
              {user.website}
            </a>
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">🏠 Address:</span>{" "}
            {user.address.street}, {user.address.city}
          </p>
          <p className="text-gray-700">
            <span className="font-semibold">🏢 Company:</span> {user.company.name}
          </p>
        </div>

        {/* Back Button */}
        <div className="mt-10">
          <a
            href="/users"
            className="inline-block px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            ← Back to Users
          </a>
        </div>
      </div>
    </div>
  );
}
