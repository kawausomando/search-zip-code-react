import React from 'react';
import Header from '../ui/atoms/Header';
import styled from '@emotion/styled';
import AddressSearchContainer from '../container/AddressSearchContainer';

const StyledHeader = styled('header')`
  margin-top: 20px;
  margin-bottom: 20px;
`;

/**
 * ホーム画面
 * @return {JSX.Element}
 */
function Home() {
  return (
    <div>
      <StyledHeader>
        <Header text="郵便番号検索"></Header>
      </StyledHeader>
      <AddressSearchContainer></AddressSearchContainer>
    </div>
  );
}

export default Home;
