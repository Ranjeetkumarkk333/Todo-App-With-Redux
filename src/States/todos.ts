import { Reducer } from "redux"
import { STATUS_CHANGE, TODO_ADDED } from "../Actions/todos";
import { Todo } from "../Models/todo"

export type TodoState ={
    [id:number]:Todo
}
 export const initialTodoState={};

export const todoReducer: Reducer<TodoState> = (todoState= initialTodoState, action)=>{
    switch(action.type){
        case TODO_ADDED:{
            const todo:Todo = action.payload
            return {...todoState, [todo.id]:todo}
        }
        case STATUS_CHANGE:{
           const {id, done} = action.payload
         
        return {
            ...todoState, [id]:{...todoState[id], done}}
        }
        default:
            return todoState;
    }
    
   
}
export default todoReducer;