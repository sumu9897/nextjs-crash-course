import Link from "next/link";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        User List
      </h1>

      {/* Users Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user: { id: number; name: string; email: string }) => (
          <div
            key={user.id}
            className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{user.name}</h2>
            <p className="text-gray-600 mb-4">{user.email}</p>
            <Link
              href={`/users/${user.id}`}
              className="text-blue-600 font-medium hover:underline"
            >
              View Profile
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
