import {createStore, Reducer} from 'redux'
import {TODO_ADDED, STATUS_CHANGE} from './Actions/todos'
import {Todo} from './Models/todo'
import { User } from './Models/User'
export type State ={
    todos:{
        [id:number]:Todo
    },
    users:{
        [id:number]:User
    }
}

const initialState : State= {
   todos:{},
   users:{}
}

const reducer: Reducer<State> =(currentState = initialState, action)=>{

    console.log(currentState, action);
switch(action.type){
    case TODO_ADDED:{
        const todo:Todo = action.payload
        return {...currentState, todos:{...currentState.todos, [todo.id]:todo}}
    }
    case STATUS_CHANGE:{
       const {id, done} = action.payload
     
    return {
        ...currentState, todos:{...currentState.todos, [id]:{...currentState.todos[id], done}}
    }
}
}
return currentState;
}
const store = createStore(reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;