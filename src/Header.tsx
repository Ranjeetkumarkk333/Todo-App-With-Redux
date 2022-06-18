import React from 'react';
import { useSelector } from 'react-redux';
import { completedCountSelector, incompletedCountSelector } from './Selectors/todos';


function Header() {
  const completed = useSelector(completedCountSelector);
  const incompleted = useSelector(incompletedCountSelector);
  return (
    <div className="px-10 sm:px-32 py-4 shadow flex justify-between">
     <span className="text-xl font-medium">CodeYogi Todo</span>
     <div className=" flex flex-col"> 
       <span className="text-red-500">Incompleted  = {incompleted}</span>
       <span className="text-green-500">Completed  = {completed}</span>
     </div>
    </div>
  );
}

export default Header;

