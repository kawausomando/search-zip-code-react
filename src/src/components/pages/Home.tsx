import React from 'react';
import Header from '../ui/atoms/Header';
import AddressSearch from '../ui/organisms/AddressSearch';
import styled from '@emotion/styled';

const StyledHeader = styled('header')`
  margin-top: 20px;
  margin-bottom: 20px;
`;

function Home() {
  return (
    <div>
      <StyledHeader>
        <Header text='郵便番号検索'></Header>
      </StyledHeader>
      <AddressSearch></AddressSearch>
    </div>
  );
}

export default Home;
