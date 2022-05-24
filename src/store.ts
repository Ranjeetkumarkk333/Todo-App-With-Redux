import {createStore, Reducer} from 'redux'
import {TODO_ADDED, STATUS_CHANGE} from './Data'
import {todoType, State} from './Models/todo'


const initialState : State= {
   todos:[]
}

const reducer: Reducer<State> =(currentState = initialState, action)=>{

    console.log(currentState, action);
switch(action.type){
    case TODO_ADDED:{
        const newTodos:todoType[] = [...currentState.todos, action.payload]
        return {...currentState, todos:newTodos}
    }
    case STATUS_CHANGE:{
        console.log("action.payload", action.payload)
     const todoDone = currentState.todos.map(t=> {
         if(t.id==action.payload){
            console.log("action.payload1", action.payload)
             return {...t, done:!t.done}
         }
         return t;
    });
    return {
        ...currentState, ...currentState.todos, todos:todoDone
    }
}
}
return currentState;
}
const store = createStore(reducer);

export default store;