import { FC, memo } from "react";
import TodoRow from "./TodoRow";
import {State, todoType} from './Models/todo'
import { completedSelector, incompletedSelector } from "./Selectors";
import { connect, useDispatch } from "react-redux";
import { STATUS_CHANGE } from "./Data";

const TodoList = (props:State) => {
    const dispatch = useDispatch();
    const markAsStatusChange = (id:number) => {
        console.log("id", id)
          dispatch( { type: STATUS_CHANGE, payload:id})
        }

  return (
  <div>
      {!props.todos.length && <p className="text-gray-500">No todos here!</p>}
      {props.todos.map(t=><TodoRow todo={t} key={t.id} onStatusChange={markAsStatusChange}></TodoRow>)  }
  </div>
  )
  
};

export default memo(TodoList);

const incompleteMapper =(s:State)=>{
    return {todos: incompletedSelector(s)}
};

const completeMapper=(s:State)=>{
    return {todos: completedSelector(s)}
};

export const IncompleteTodoList= connect(incompleteMapper)(TodoList);
export const CompleteTodoList= connect(completeMapper)(TodoList);