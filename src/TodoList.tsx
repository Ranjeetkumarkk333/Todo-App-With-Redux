import { FC, memo } from "react";
import TodoRow from "./TodoRow";
import {Todo} from './Models/todo'
import {completeTodoSelector, incompleteTodoSelector } from "./Selectors/todos";
import { connect} from "react-redux";
import { StatusChange} from "./Actions/todos";
import { State } from "./store";

type Props = {todos:Todo[], onStatusChange:(id:number, done:boolean)=>void}

const TodoList:FC<Props> = ({todos, onStatusChange}) => {
   
  return (
  <div>
      {!todos.length && <p className="text-gray-500">No todos here!</p>}
      {todos.map(t=><TodoRow todo={t} key={t.id} onStatusChange={onStatusChange}></TodoRow>)  }
  </div>
  )
  
};

export default memo(TodoList);

const incompleteMapper =(s:State)=>{
    return {todos: incompleteTodoSelector(s)}
};

const completeMapper=(s:State)=>{
    return {todos: completeTodoSelector(s)}
};

const dispatchMapper = {onStatusChange:StatusChange }

export const IncompleteTodoList= connect(incompleteMapper, dispatchMapper)(TodoList);
export const CompleteTodoList= connect(completeMapper, dispatchMapper)(TodoList);