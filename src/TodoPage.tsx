import React, { ChangeEvent } from 'react';
import Header from './Header';
import Container from './Container';
import H1 from './H1';
import H3 from './H3';
import TodoForm from './TodoForm';
import Button from './Button';
import TodoRow from './TodoRow';
import {TODO_ADDED, TODO_MARKED_DONE, TODO_MARKED_UNDONE} from './Data'
import { useDispatch, useSelector } from 'react-redux';
import {uniqueId} from 'lodash'
import { completedSelect, incompletedSelect } from './Selectors';

type todotyoe ={title:string, id:string, done: boolean}

function TodoPage() {
  const [values, setValues] = React.useState({
    todoTitle:"",
    todoFormVisible:false
  });
 
  const dispatch = useDispatch();
  const Id = uniqueId();

  const addTodo = () => {
    const todoData={id: Id, title: values.todoTitle, done: false} 
      dispatch( { type: TODO_ADDED, payload:todoData})
      setValues({ todoTitle:"", todoFormVisible:false});
  
    };
  
  const showTodoForm = () => setValues({...values, todoFormVisible:true});
  const hideTodoForm = () =>setValues({ ...values, todoFormVisible:false});

  const incompleteTodoList =useSelector(incompletedSelect);
  const completeTodoList =useSelector(completedSelect);
 
  const markAsDone = (id:number) => {
    console.log("id", id)
      dispatch( { type: TODO_MARKED_DONE, payload:id})
    }
    const markAsNotDone = (id:number) => {
    
      dispatch( { type: TODO_MARKED_UNDONE, payload:id})
    }
  
    console.log("incompleteTodoList", incompleteTodoList)
    console.log("completeTodoList", completeTodoList)
  
    const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
      setValues({...values, todoTitle:event.target.value});
    }
  
  return (
    <>
      <Header></Header>
      <Container>
        <H1>Things to get done</H1>
        <H3>Things to do</H3>

        {!incompleteTodoList.length && <div>No todos here!</div>}
        
        {incompleteTodoList.map(t => <TodoRow todo={t} onStatusChange={markAsDone} key={t.id} ></TodoRow>)}
        
        {!values.todoFormVisible && <Button onClick={showTodoForm} theme="highlight" icon="+">Add a todo</Button>}
        
        {values.todoFormVisible && <TodoForm value={values.todoTitle} onChange={onInputChange} onClose={hideTodoForm} onCreate={addTodo} />}

        {!completeTodoList.length && <div>No todos here!</div>}
        
        {completeTodoList.map(t => <TodoRow todo={t} onStatusChange={markAsNotDone} key={t.id}></TodoRow>)}
        
      </Container>
    </>
  );
}

export default TodoPage;