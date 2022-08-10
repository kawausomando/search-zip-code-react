import React from 'react';

function Input(props: {value: string, name: string, onChange: Function}) {
  return (
    <input value={ props.value } name={ props.name } onChange={ (e) => props.onChange(e.target.value)}></input>
  );
}

export default Input;
