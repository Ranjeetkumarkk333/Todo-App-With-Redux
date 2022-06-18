import { values } from "lodash";
import { createSelector } from "reselect";
import { State } from "../store";

const todoStateSelector = (s:State)=>s.todos;
const todoListSelector = createSelector(todoStateSelector, (todoState)=> values(todoState))

export const incompleteTodoSelector = createSelector(todoListSelector, (todos)=>todos.filter((t)=>!t.done))
export const completeTodoSelector = createSelector(todoListSelector, (todos)=>todos.filter((t)=>!t.done))

export const incompletedCountSelector = () => incompleteTodoSelector.length;
export const completedCountSelector =()=> completeTodoSelector.length;