import { Post } from "@/src/features/post/Post";
import { getLatestPosts } from "@/src/query/post.query";

export default async function Home() {
  const posts = await getLatestPosts()

  return (
    <div className="divide-y divide-muted">
      {posts.map(p => (
        <Post post={p} key={p.id} />
      ))}
    </div>
  )
}
