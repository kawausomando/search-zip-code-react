import React from 'react';
import styled from '@emotion/styled';

const HeaderWrapper = styled('h1')`
  text-align: center;
  max-width: 600px;
  margin: auto;
`;

/**
 * ヘッダーコンポーネント
 * @param {Object} props
 * @return {JSX.Element}
 */
function Header(props: { text: string }) {
  return <HeaderWrapper data-testid="header">{props.text}</HeaderWrapper>;
}

export default Header;
