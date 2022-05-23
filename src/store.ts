import {createStore, Reducer} from 'redux'
import {TODO_ADDED,TODO_MARKED_DONE,TODO_MARKED_UNDONE} from './Data'
type Todos ={title:string, id:number, done: boolean}
type State = {
   todos:Todos[]
}

const initialState : State= {
   todos:[ {title:"", id:+"", done:false}]
}

const reducer: Reducer<State> =(currentState = initialState, action)=>{

    console.log(currentState, action);
switch(action.type){
    case TODO_ADDED:{
        const newTodos:Todos[] = [...currentState.todos, action.payload]
        return {...currentState, todos:newTodos}
    }
    case TODO_MARKED_DONE:{
        console.log("action.payload", action.payload)
     const todoDone = currentState.todos.map(t=> {
         if(t.id==action.payload){
            console.log("action.payload1", action.payload)
             return {...t, done:true}
         }
         return t;
    });
    return {
        ...currentState, ...currentState.todos, todos:todoDone
    }
}
case TODO_MARKED_UNDONE:{
    
    const todoDone = currentState.todos.map(t=> {
        if(t.id==action.payload){
            return {...t, done:false}
        }
        return t;
   })
}
}
return currentState;
}
const store = createStore(reducer);

export default store;