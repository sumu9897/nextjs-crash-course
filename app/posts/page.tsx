import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          📚 Blog Posts
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.slice(0, 12).map((post: { id: number; title: string; body: string }) => (
            <div
              key={post.id}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition-shadow duration-300"
            >
              <h2 className="text-xl font-semibold text-gray-800 mb-3 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                {post.body}
              </p>
              <Link
                href={`/posts/${post.id}`}
                className="inline-block text-indigo-600 hover:text-indigo-800 font-medium"
              >
                Read More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
