import React from 'react';
import Card from './Card';
import H3 from './H3';
import Input from './Input';
import Button from './Button';

function TodoForm(props) {

  const [inputValue, setInputValue] = React.useState('');

  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const saveTodo = () => {
    
    props.onCreate(inputValue);
    
    setInputValue('');
  
    props.onClose();
  }
  
  return (
    <Card>
      <H3>Create a todo</H3>
      <div className="mt-4 w-80 mb-4">
       <Input value={inputValue} onChange={onInputChange} placeholder="Your todo text" />
      </div>
      <div className="space-x-4">
       <Button disabled={!inputValue} onClick={saveTodo}>Save</Button>
       <Button onClick={props.onClose} theme="secondary">Cancel</Button>
      </div>
    </Card>
  );
}

export default TodoForm;