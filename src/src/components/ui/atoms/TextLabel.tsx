import React from 'react';
import styled from '@emotion/styled';


function TextLabel(props: { text: string, size?: string}) {
  const TextLabelWrapper = styled('span')`
    font-size: ${(props.size === 'big') ? '30px' : '14px'};
  `;

  return (
    <TextLabelWrapper>{props.text}</TextLabelWrapper>
  );
}

export default TextLabel;
