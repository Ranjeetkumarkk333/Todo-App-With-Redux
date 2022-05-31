import { FC, memo } from "react";
import TodoRow from "./TodoRow";
import {State, todoType} from './Models/todo'
import { completedSelector, incompletedSelector } from "./Selectors";
import { connect} from "react-redux";
import { StatusChange} from "./Actions/Data";

type Props = {todos:todoType[], onStatusChange:(id:number)=>void}

const TodoList:FC<Props> = ({todos, onStatusChange}) => {
   
  return (
  <div>
      {!todos.length && <p className="text-gray-500">No todos here!</p>}
      {todos.map(t=><TodoRow todo={t} key={t.id} onStatusChange={()=>onStatusChange(t.id)}></TodoRow>)  }
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

const dispatchMapper = {onStatusChange:StatusChange }

export const IncompleteTodoList= connect(incompleteMapper, dispatchMapper)(TodoList);
export const CompleteTodoList= connect(completeMapper, dispatchMapper)(TodoList);