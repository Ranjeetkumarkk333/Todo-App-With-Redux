import React, { InputHTMLAttributes } from 'react';
import Checkbox from './Checkbox';
// import { RiDeleteBin6Fill } from 'react-icons/ri';
type Props = {
  todo:{title:string, done:boolean, id:number},
  onStatusChange:Function,
}
function TodoRow(props:Props) {

  const onCheckboxChange = () => {
    props.onStatusChange(props.todo.id);
  }

  console.log("prop", props)
  
  return (
    <div className="flex items-center">
      <Checkbox checked={props.todo.done} onChange={onCheckboxChange} />
      <span className={"mr-3 ml-3 font-medium text-gray-700 text-sm " + (props.todo.done && 'line-through')}>{props.todo.title}</span>
    </div>
  );
}

export default TodoRow;