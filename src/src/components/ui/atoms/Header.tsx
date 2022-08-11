import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled('h1')`
  text-align: center;
  max-width: 600px;
  margin: auto;
`;

function Header(props: { text: string }) {
  return (
    <HeaderWrapper>{props.text}</HeaderWrapper>
  );
}

export default Header;