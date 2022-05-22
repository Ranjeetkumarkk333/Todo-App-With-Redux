import React from 'react';

function Card(props) {
  return (
    <div className="rounded-md px-4 py-2 shadow">{props.children}</div>
  );
}

export default Card;