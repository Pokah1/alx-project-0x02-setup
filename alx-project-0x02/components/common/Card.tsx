import { CardProps } from "@/interfaces"
const Card: React.FC<CardProps> = ({
    title,
    content
}) => {
    return (
      <div className="bg-white shadow p-4 rounded">  
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="text-gray-700">{content}</p>
      </div>
    )
}

export default Card