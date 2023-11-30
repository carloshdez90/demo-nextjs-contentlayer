import { allPosts } from "@/.contentlayer/generated"
import Link from "next/link"

export default function Home() {
  
  console.log('My public environment variable:', process.env.NEXT_PUBLIC_ENV_NAME);
  
  return (
    <div className="prose dark:prose-invert">
      {allPosts.map((post) => (
        <article key={post._id}>
          <Link href={post.slug}>
            <h2>{post.title}</h2>
          </Link>
          {post.description && <p>{post.description}</p>}
          <p>{process.env.NEXT_PUBLIC_ENV_NAME}</p>
        </article>
      ))}
    </div>
  )
}
