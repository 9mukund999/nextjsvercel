

export default async function BlogList() {
  const data = await fetch('https://api.vercel.app/blog')
  const posts = await data.json()
  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>{post.nnnj}</li>
      ))}
    </ul>
  )
}