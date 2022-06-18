import {applyMiddleware, createStore, Reducer} from 'redux'
import {TODO_ADDED, STATUS_CHANGE} from './Actions/todos'
import {Todo} from './Models/todo'
import { User } from './Models/User'
import sagaMiddleware, { rootSaga } from './Sagas'
import todoReducer, { initialTodoState, TodoState } from './States/todos'
import userReducer, { initialUserState, UserState } from './States/users'
export type State ={
    todos:TodoState,
    users:UserState
}

const initialState : State= {
   todos:initialTodoState,
   users:initialUserState
}

const reducer: Reducer<State> =(currentState = initialState, action)=>{

    
return {
    todos:todoReducer(currentState.todos, action),
    users:userReducer(currentState.users, action)
}
}
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
    sagaMiddleware.run(rootSaga);

export default store;