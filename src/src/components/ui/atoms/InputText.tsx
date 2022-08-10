import React from 'react';
import MUITextField from '@mui/material/TextField'

type InputTextProps = {
  value: string,
  name: string,
  onChange: Function
}

function InputText(props: InputTextProps) {
  return (
    <MUITextField 
      id="filled-basic"
      defaultValue=""
      value={ props.value }
      name={ props.name }
      onChange={ (e) => props.onChange(e.target.value)}
      variant="filled"
      size="small"
    />
  );
}

export default InputText;
