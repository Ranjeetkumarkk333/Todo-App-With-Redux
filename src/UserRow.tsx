import { User } from './Models/User';

type Props = {
  user:User,
}
function UserRow({user}:Props) {
  return (
    <div className="bg-gray-100 text-red-500 font-bold p-2 rounded-md mb-2">
     #{user.id} {user.name}
    </div>
  );
}

export default UserRow;