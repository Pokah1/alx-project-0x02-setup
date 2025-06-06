import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({
    name,
    email,
    address
}) => {
    return (

        <div className="border p-4 rounded shadow">
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-700 mb-2">{email}</p>
      <span className="text-sm text-gray-500"> {address.city}</span>
      <span className="text-sm text-gray-500"> {address.street}</span>
      <span className="text-sm text-gray-500"> {address.zipcode}</span>
    </div>
    )
}

export default UserCard

