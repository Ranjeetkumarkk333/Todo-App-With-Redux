import React from 'react';

function Container(props:React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="px-32 py-4">
      {props.children}
    </div>
  );
}

export default Container;