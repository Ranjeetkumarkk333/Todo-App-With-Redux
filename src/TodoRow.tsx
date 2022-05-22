import React from 'react';
import Checkbox from './Checkbox';
import { RiDeleteBin6Fill } from 'react-icons/ri';

function TodoRow(props) {

  const onCheckboxChange = () => {
    props.onStatusChange(props.todo);
  }

  const onDelete = () => {
    props.onDelete(props.todo);
  }
  
  return (
    <div className="flex items-center">
      <Checkbox checked={props.todo.done} onChange={onCheckboxChange} />
      <span className={"mr-3 ml-3 font-medium text-gray-700 text-sm " + (props.todo.done && 'line-through')}>{props.todo.title}</span><RiDeleteBin6Fill onClick={onDelete} />
    </div>
  );
}

export default TodoRow;