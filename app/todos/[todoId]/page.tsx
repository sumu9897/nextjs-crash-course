async function fetchTodo(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  if (!res.ok) return null;
  return res.json();
}

export default async function TodoPage({
  params,
}: {
  params: { todoId: string };
}) {
  const todo = await fetchTodo(params.todoId);

  if (!todo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-red-500 mb-4">404</h1>
          <p className="text-gray-600">Todo Not Found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen py-16 px-6">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Task #{todo.id}
        </h1>

        <p className="text-gray-700 text-lg mb-6">{todo.title}</p>

        <span
          className={`inline-block px-4 py-2 text-sm rounded-lg font-medium ${
            todo.completed
              ? "bg-green-100 text-green-700"
              : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {todo.completed ? "✅ Completed" : "⏳ Pending"}
        </span>

        <div className="mt-8">
          <a
            href="/todos"
            className="inline-block px-4 py-2 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition"
          >
            ← Back to Todos
          </a>
        </div>
      </div>
    </div>
  );
}
