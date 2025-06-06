import UserCard from "@/components/common/UserCard";
import Header from "@/components/layout/Header";
import { type UserProps } from "@/interfaces";


type FetchedUser = {
    id: number;
    name: string;
    email: string;
    address: {
        street: string;
        city:string;
        zipcode:string
    }
}

interface UserPageProps{
    users: UserProps[];
}

const Users: React.FC<UserPageProps> = ({
    users
}) => {
    return (
        <div>
<Header/>
  <main className="p-8 space-y-4">
<h1 className="text-2xl font-bold">Users</h1>
<div className="grid gap-4">
    {users.map
    ((user, index)=> (
    <UserCard
    key={index}
    name={user.name}
    email={user.email}
    address={user.address}
    />
))
    }
</div>
</main>
</div>
    )
} 

export async function getStaticProps() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  const data: FetchedUser[] = await response.json();

  const users: UserProps[] = data.slice(0, 10).map((user) => ({
    name: user.name,
    email: user.email,
    address: {
      street: user.address.street,
      city: user.address.city,
      zipcode: user.address.zipcode,
    },
  }));

  return {
    props: {
      users,
    },
  };
}


export default Users