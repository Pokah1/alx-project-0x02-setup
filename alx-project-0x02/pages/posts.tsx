// pages/posts.tsx

import { useEffect, useState } from "react";
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      const formatted = data.slice(0, 10).map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(formatted);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <main className="p-8 space-y-4">
        <h1 className="text-2xl font-bold">Posts Page</h1>
        <div className="grid gap-4">
          {posts.map((post, index) => (
            <PostCard
              key={index}
              title={post.title}
              content={post.content}
              userId={post.userId}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Posts;
