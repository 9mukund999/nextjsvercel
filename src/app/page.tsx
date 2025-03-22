import Image from "next/image";
import AuthButtons from './components/AuthButtons';
// import { authOptions } from "./api/auth/[...nextauth]/route";
// import { getServerSession } from "next-auth";
import SearchButton from "@/src/app/components/FormHandlers";
import SubmitForm from "@/src/app/components/FormHandlers";
import Form from 'next/form'
import { SessionProvider } from "next-auth/react"

export async function createPost(prevState: any, formData: FormData) {
  "use server";  
  console.log("kkk", formData)
  const query = formData.get("query");
  console.log("query", query);
  // Create a new post
  // ...
  // return { message: 'Failed to create post' }
  // Redirect to the new post
  // redirect(`/posts/${data.id}`)
}
export default async function Home() {
  
  return (
    <>
      <h1>Home</h1>
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="light:invert"
        width={100}
        height={24}
        priority
      />

    {/* <Form action={createPost}>
      <input name="query" value={"ppppp"} />
      <SearchButton createPost={createPost}/>
    </Form> */}
      {/* <SearchButton /> */}
      {/* <AuthButtons /> */}
      <SubmitForm createPost={createPost}/>
    </>
  );
}
