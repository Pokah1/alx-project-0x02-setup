import Card from "@/components/common/Card"
import PostModal from "@/components/common/PostModal"
import { useState } from "react"
import { Post } from "@/interfaces"

const HomePage: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [posts, setPosts] = useState<Post[]>([])

    const handleNewPost = (
        title: string,
        content: string
    ) => {
        setPosts([...posts, {title, content}]);
    }

    return (
       <div className="p-8">
      <h1 className="text-2xl font-bold">Welcome to the Home Page</h1>
      <Card
      title="Pokah-Dev"
      content="Study well"
      />

      <Card
      title="Pokah-Dev"
      content="Study well"
      />
      <button
      onClick={() => setModalOpen(true)}
       className="mb-6 px-4 py-2 bg-green-600 text-white rounded"
      >
     Add New Post
      </button>
      
       <PostModal
       isOpen={modalOpen}
       onClose={() => setModalOpen(false)}
       onSubmit={handleNewPost}
       />
      <div className="space-y-4">
        {posts.map((post: Post, index: number) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
    )
}

export default HomePage