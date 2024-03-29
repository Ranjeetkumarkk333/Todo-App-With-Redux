import { FC, memo } from "react";
import { connect} from "react-redux";
import { State } from "./store";
import { User } from "./Models/User";
import { userSelector } from "./Selectors/users";
import UserRow from "./UserRow";
import { fetchStudents } from "./Actions/students";

type Props = {users:User[]}

const UserList:FC<Props> = ({users}) => {
   
  return (
  <div>
      {!users.length && <p className="text-gray-500">No users here!</p>}
      {users.map(t=><UserRow user={t} key={t.id} ></UserRow>)  }
  </div>
  )
  
};



function Mapper(s: State) {
  return { users: userSelector(s) };
}

const mapDispatchToProps={grtStudents:fetchStudents}

export const UserData= connect(Mapper, mapDispatchToProps)(UserList);
