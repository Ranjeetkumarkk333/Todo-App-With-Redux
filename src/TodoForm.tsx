import React, { ChangeEvent, FC } from 'react';
import Card from './Card';
import H3 from './H3';
import Input from './Input';
import Button from './Button';
import { uniqueId } from 'lodash';
import { connect} from 'react-redux';
import { addTodo } from './Actions/todos';
import { Todo } from './Models/todo';

type Props = { 
  onSubmit:(todo:Todo)=>void
};

const TodoForm:FC<Props> = ({onSubmit})=> {

  const [values, setValues] = React.useState({
    todoTitle:"",
    todoFormVisible:false
  });
  const Id = +uniqueId();
  const handleSubmit = () => {
    const todoData={id: Id, title: values.todoTitle, done: false} 
       onSubmit(todoData);
      setValues({ todoTitle:"", todoFormVisible:false});
    };
  const showTodoForm = () => setValues({...values, todoFormVisible:true});
  const hideTodoForm = () =>setValues({ ...values, todoFormVisible:false});

    const onInputChange = (event:ChangeEvent<HTMLInputElement>) => {
      setValues({...values, todoTitle:event.target.value});
    };

  return (
    <>
    {!values.todoFormVisible && <Button onClick={showTodoForm} theme="highlight" icon="+">Add a todo</Button>}
    {values.todoFormVisible && <Card>
      <H3>Create a todo</H3>
      <div className="mt-4 w-80 mb-4">
       <Input value={values.todoTitle} onChange={onInputChange} placeholder="Your todo text" />
      </div>
      <div className="space-x-4">
       <Button disabled={!values.todoTitle} onClick={handleSubmit}>Save</Button>
       <Button onClick={hideTodoForm} theme="secondary">Cancel</Button>
      </div>
    </Card>}
    </>
  );
}

export default connect(undefined, {onSubmit: addTodo})(TodoForm);
