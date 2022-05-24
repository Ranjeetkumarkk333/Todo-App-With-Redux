import React, { InputHTMLAttributes } from 'react';
import Checkbox from './Checkbox';
import { todoType } from './Models/todo';
// import { RiDeleteBin6Fill } from 'react-icons/ri';

type Props = {
  todo:todoType,
  onStatusChange:Function,
}
function TodoRow({todo, onStatusChange}:Props) {

  const onCheckboxChange = () => {
    onStatusChange(todo.id);
  }

  
  return (
    <div className="flex items-center" onClick={onCheckboxChange}>
      <Checkbox checked={todo.done}  />
      <span className={"mr-1 ml-2 font-medium text-gray-700 text-sm " + (todo.done && 'line-through')}>{todo.title}</span>
    </div>
  );
}

export default TodoRow;