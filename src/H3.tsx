import React from 'react';

function H3(props:React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3 className="text-lg font-medium leading-6 text-gray-900">
      {props.children}
    </h3>
  );
}

export default H3;