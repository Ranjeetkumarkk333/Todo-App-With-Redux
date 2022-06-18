import { Reducer } from "redux"
import { USER_ADD } from "../Actions/users";


import { User } from "../Models/User";

export type UserState ={
    [id:number]:User
}
 export const initialUserState={};

export const userReducer: Reducer<UserState> = (userState= initialUserState, action)=>{
    switch(action.type){
        case USER_ADD:{
            const todo:User = action.payload
            return {...userState, [todo.id]:todo}
        }
        
        default:
            return userState;
    }
    
   
}
export default userReducer;