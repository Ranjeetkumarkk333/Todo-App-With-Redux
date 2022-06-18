import { Todo } from "../Models/todo";

export const TODO_ADDED = 'todo created'
export const STATUS_CHANGE = "status chage"

export const addTodo = (todoData:Todo) => {
      return { type: TODO_ADDED, payload:todoData}
    };

export const StatusChange = (id:number, done:boolean) => {
          return { type: STATUS_CHANGE, payload:{id, done}}
        }