import { User } from "../Models/User";


export const USER_ADD = 'todo created'


export const addUser = (userData:User) => {
      return { type: USER_ADD, payload:userData}
    };

