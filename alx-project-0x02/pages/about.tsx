import Button from "@/components/common/Button"
import Header from "@/components/layout/Header"

const About: React.FC = () => {
    return (
         <div className="p-8 space-y-4">
            <Header/>
      <h1 className="text-2xl font-bold">About Us</h1>
      <div className="space-x-4">
        <Button size="small" shape="rounded-sm">Small</Button>
        <Button size="medium" shape="rounded-md">Medium</Button>
        <Button size="large" shape="rounded-full">Large</Button>
      </div>
    </div>
    )
}

export default About