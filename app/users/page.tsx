import Link from "next/link";



export default async function UsersPage() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users")
    const users = await res.json();
    
  return <div>
    {" "}
    <ul>
        <h1>User List</h1>
    {users.map((user: {id:number; name: string}) =>(
        <li key={user.id}>
            
           <Link
              href={`/users/${user.id}`}
              className="text-blue-600 hover:underline"
            >
              {user.name}
            </Link>
        </li>
    ))}
    </ul>{" "}
  </div>;
}