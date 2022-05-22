import React from 'react';

function Checkbox(props) {
  return (
    <input checked={props.checked} onChange={props.onChange} type="checkbox" className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-yellow-500" />
  );
}

export default Checkbox;