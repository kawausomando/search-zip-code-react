import React from 'react';
import MUITextField from '@mui/material/TextField';

/**
 * テキスト入力コンポーネント
 * @param {InputTextProps} props
 * @return {JSX.Element}
 */
function InputText(props: InputTextProps) {
  return (
    <MUITextField
      id="filled-basic"
      defaultValue=""
      value={props.value}
      name={props.name}
      onChange={(e) => props.onChange(e.target.value)}
      variant="filled"
      size="small"
      data-testid="inputText"
    />
  );
}

export default InputText;
