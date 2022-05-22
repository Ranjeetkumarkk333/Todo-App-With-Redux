import React from 'react';

function Input(props) {
  return (
    <input type="text" placeholder={props.placeholder} value={props.value} onChange={props.onChange} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm" />
  );
}

export default Input;