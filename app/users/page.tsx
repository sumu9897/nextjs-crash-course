import Link from "next/link";

export default async function UsersPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await res.json();

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      {/* Page Header */}
      <h1 className="text-4xl font-bold text-center text-gray-900 mb-12">
        👥 Our Users
      </h1>

      {/* Users Grid */}
      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {users.map(
          (user: { id: number; name: string; email: string; username: string }) => (
            <div
              key={user.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
            >
              {/* Avatar */}
              <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-xl font-bold text-indigo-600 mb-4">
                {user.name.charAt(0)}
              </div>

              {/* User Info */}
              <h2 className="text-lg font-semibold text-gray-800">
                {user.name}
              </h2>
              <p className="text-sm text-gray-500 mb-2">@{user.username}</p>
              <p className="text-gray-600 text-sm mb-4">{user.email}</p>

              {/* Profile Link */}
              <Link
                href={`/users/${user.id}`}
                className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-lg hover:bg-indigo-700 transition"
              >
                View Profile
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
}
