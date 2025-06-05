import Card from "@/components/common/Card"

const HomePage: React.FC = () => {
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
    </div>
    )
}

export default HomePage