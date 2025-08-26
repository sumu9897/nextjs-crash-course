import Link from "next/link";

export default async function TodosPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await res.json();

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center">
          ✅ Task Manager
        </h1>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {todos.slice(0, 18).map(
            (todo: { id: number; title: string; completed: boolean }) => (
              <div
                key={todo.id}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
              >
                <h2 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {todo.title}
                </h2>

                <span
                  className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                    todo.completed
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {todo.completed ? "Completed" : "Pending"}
                </span>

                <div className="mt-4">
                  <Link
                    href={`/todos/${todo.id}`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
