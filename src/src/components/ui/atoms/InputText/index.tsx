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
      value={props.value}
      name={props.name}
      onChange={(e) => props.onChange(e.target.value)}
      inputProps={{
        'data-testid': 'inputText',
        'maxLength': props.maxLength,
        'pattern': props.pattern,
      }}
      inputRef={props.inputRef}
      variant="filled"
      size="small"
      placeholder={props.placeHolder}
    />
  );
}

export default InputText;
