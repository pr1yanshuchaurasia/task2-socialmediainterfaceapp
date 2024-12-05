import { MoreHorizontal, Heart, MessageCircle, Share2 } from 'lucide-react'
import Image from 'next/image'


export interface PostProps {
  id: number;
  author: {
    name: string;
    username: string;
    avatar: string;  // URL or path to the author's avatar image
  };
  content: string;
  image: string;  // URL or path to the post's image
  likes: number;
  comments: number;
  shares: number;
}


export function Posts({ posts }: { posts: PostProps[] }) {
  return (
    <div>
      {posts.map((post) => (
        <article key={post.id} className="bg-white rounded-lg shadow-sm p-4 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image
                src={post.author.avatar}  // Static profile image
                alt={post.author.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div>
                <h2 className="font-semibold">{post.author.name}</h2>
                <p className="text-sm text-gray-500">{post.author.username}</p>
              </div>
            </div>
            <button className="text-gray-400 hover:text-gray-600">
              <MoreHorizontal className="h-5 w-5" />
            </button>
          </div>
          <p className="text-gray-600">
            {post.content}{" "}
            <button className="text-[#9DCDC0] hover:underline">Read More</button>
          </p>
          <Image
            src={post.image}  // Dynamically load the image from the post object
            alt="Post image"
            width={800}
            height={500}
            className="rounded-lg w-full"
          />
          <div className="flex gap-6">
            <button className="flex items-center gap-2 text-gray-500">
              <Heart className="h-5 w-5" />
              <span>{post.likes}k</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500">
              <MessageCircle className="h-5 w-5" />
              <span>{post.comments}k</span>
            </button>
            <button className="flex items-center gap-2 text-gray-500">
              <Share2 className="h-5 w-5" />
              <span>{post.shares}k</span>
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}


