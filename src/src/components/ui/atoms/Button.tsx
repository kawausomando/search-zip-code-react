import React from 'react';

function Button(props: { text: string, onClick: () => void}) {
  return (
    <button onClick={ props.onClick }>{props.text}</button>
  );
}

export default Button;
