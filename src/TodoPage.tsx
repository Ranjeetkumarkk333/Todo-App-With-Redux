import React, { ChangeEvent } from 'react';
import Header from './Header';
import Container from './Container';
import H1 from './H1';
import H3 from './H3';
import TodoForm from './TodoForm';
import Button from './Button';
import TodoRow from './TodoRow';
import {TODO_ADDED} from './Data'
import { useDispatch} from 'react-redux';
import {uniqueId} from 'lodash'
// import { completedSelector, incompletedSelector } from './Selectors';
import { CompleteTodoList, IncompleteTodoList } from './TodoList';

function TodoPage() {
  const [values, setValues] = React.useState({
    todoTitle:"",
    todoFormVisible:false
  });

 const dispatch = useDispatch();
  const Id = +uniqueId();

  const addTodo = () => {
    const todoData={id: Id, title: values.todoTitle, done: false} 
      dispatch( { type: TODO_ADDED, payload:todoData})
      setValues({ todoTitle:"", todoFormVisible:false});
  
    };
  
  const showTodoForm = () => setValues({...values, todoFormVisible:true});
  const hideTodoForm = () =>setValues({ ...values, todoFormVisible:false});

    const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
      setValues({...values, todoTitle:event.target.value});
    }
  
  return (
    <>
      <Header></Header>
      <Container>
        <H1>Things to get done</H1>
        <H3>Things to do</H3>
        <IncompleteTodoList/>
        {!values.todoFormVisible && <Button onClick={showTodoForm} theme="highlight" icon="+">Add a todo</Button>}
        {values.todoFormVisible && <TodoForm value={values.todoTitle} onChange={onInputChange} onClose={hideTodoForm} onCreate={addTodo} />}
        <H3>Things done</H3>
        <CompleteTodoList/>
      </Container>
    </>
  );
}

export default TodoPage;