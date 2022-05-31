import React from 'react';
import Header from './Header';
import Container from './Container';
import H1 from './H1';
import H3 from './H3';
import TodoForm from './TodoForm';
import { CompleteTodoList, IncompleteTodoList } from './TodoList';

function TodoPage() {
  
  
  return (
    <>
      <Header></Header>
      <Container>
        <H1>Things to get done</H1>
        <H3>Things to do</H3>
        <IncompleteTodoList/>
        <TodoForm/>
        <H3>Things done</H3>
        <CompleteTodoList/>
      </Container>
    </>
  );
}

export default TodoPage;