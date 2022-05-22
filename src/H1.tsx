import React from 'react';

function H1(props) {
  return (
    <h1 className="text-3xl font-bold leading-tight text-gray-900">
      {props.children}
    </h1>
  );
}

export default H1;