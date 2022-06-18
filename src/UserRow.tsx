import { User } from './Models/User';

type Props = {
  user:User,
}
function UserRow({user}:Props) {
  return (
    <div className="bg-yellow-500 text-red-500 font-bold p-2 rounded-md">
     #{user.id} {user.name}
    </div>
  );
}

export default UserRow;