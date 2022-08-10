import React from 'react';
import MUIButton from '@mui/material/Button'

function Button(props: { text: string, onClick: () => void}) {
  return (
    <MUIButton variant="contained" component="label" onClick={props.onClick} >
      {props.text}
    </MUIButton>
  );
}

export default Button;
