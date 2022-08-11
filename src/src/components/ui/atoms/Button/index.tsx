import React from 'react';
import MUIButton from '@mui/material/Button';

/**
 * ボタンコンポーネント
 * @param {Object} props
 * @return {JSX.Element}
 */
function Button(props: { text: string; onClick: () => void }) {
  return (
    <MUIButton
      variant="contained"
      component="label"
      onClick={props.onClick}
      data-testid="button"
    >
      {props.text}
    </MUIButton>
  );
}

export default Button;
