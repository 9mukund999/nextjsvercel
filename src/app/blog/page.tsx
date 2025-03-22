import { Suspense } from 'react'
import BlogList from '@/src/app/blog/BlogList'
import Loading from '@/src/app/blog/loading'
 
export default function BlogPage() {
  return (
    <div>
      {/* This content will be sent to the client immediately */}
      <header>
        <h1>Welcome to the Blog</h1>
        <p>Read the latest posts below.</p>
      </header>
      <main>
        {/* Any content wrapped in a <Suspense> boundary will be streamed */}
        <Suspense fallback={<Loading />}>
          <BlogList />
        </Suspense>
      </main>
    </div>
  )
}

