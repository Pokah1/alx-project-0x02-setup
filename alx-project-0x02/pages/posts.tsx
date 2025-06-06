// pages/posts.tsx
import PostCard from "@/components/common/PostCard";
import Header from "@/components/layout/Header";
import { type PostProps } from "@/interfaces";
import { GetStaticProps } from "next";


 type FetchedPost = {
  userId:number;
  id: number;
  title: string;
  body: string;
 };

 interface PostPageProps{
  posts: PostProps[];
 }

const Posts: React.FC<PostPageProps> = ({ posts }) => {
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

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data: FetchedPost[] = await response.json();

  const posts: PostProps[] = data.slice(0, 10).map((post) => ({
    title: post.title,
    content: post.body,
    userId: post.userId
  }));

  return {
    props: { posts, 
    },
  }
}

export default Posts;
