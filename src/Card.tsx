import React from 'react';

function Card(props:React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className="rounded-md px-4 py-2 my-2 shadow">{props.children}</div>
  );
}

export default Card;