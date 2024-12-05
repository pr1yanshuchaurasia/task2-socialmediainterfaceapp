import { PostProps } from './post'
import { Posts } from './post'

const posts: PostProps[] = [  
  {
    id: 1,
    author: { name: "Lara Leones", username: "thewallart", avatar: "/images/profile1.png" },
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/post1.png",
    likes: 9.8,
    comments: 8.6,
    shares: 7.2,
  },
  {
    id: 2,
    author: { name: "Thomas J.", username: "thecustomercreater", avatar: "/images/profile2.png" },
    content: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    image: "/images/post2.png",
    likes: 9.8,
    comments: 8.6,
    shares:7.2,
  },
];

export default function Feed({ className }: { className?: string }) {
  return (
    <main className={`space-y-6 ${className}`}>
      {posts.map((post) => (
        <Posts key={post.id} posts={posts} />
      ))}
    </main>
  )
}

