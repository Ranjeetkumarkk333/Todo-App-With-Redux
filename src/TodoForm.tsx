import React, { ChangeEvent } from 'react';
import Card from './Card';
import H3 from './H3';
import Input from './Input';
import Button from './Button';

function TodoForm(props:any) {

 

  
  
  return (
    <Card>
      <H3>Create a todo</H3>
      <div className="mt-4 w-80 mb-4">
       <Input value={props.Value} onChange={props.onChange} placeholder="Your todo text" />
      </div>
      <div className="space-x-4">
       <Button disabled={!props.value} onClick={props.onCreate}>Save</Button>
       <Button onClick={props.onClose} theme="secondary">Cancel</Button>
      </div>
    </Card>
  );
}

export default TodoForm;