type State = {
    todos:[{title:string, id:number, done: boolean}]
 }

export const incompletedSelect = (s:State) => s.todos.filter(t =>!t.done&&t.title);


export const completedSelect = (s:State) => s.todos.filter(t =>t.done);