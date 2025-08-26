import ButtonComponent from "./button";

export default async function Contact() {
  console.log("Contact Page");

  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();
  console.log(posts);

  return (
    <div>

     <ButtonComponent/>
    </div>
  );
}
