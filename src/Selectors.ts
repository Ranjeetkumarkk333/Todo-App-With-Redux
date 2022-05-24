import {State} from './Models/todo'

export const incompletedSelector = (s:State) => s.todos.filter(t =>!t.done);
export const completedSelector = (s:State) => s.todos.filter(t =>t.done);

export const incompletedCountSelector = (s:State) => s.todos.filter(t =>!t.done).length;
export const completedCountSelector = (s:State) => s.todos.filter(t =>t.done).length;