import React, { useState } from 'react';
import SearchForm from '../molucules/SearchForm';
import AddressList from '../molucules/AddressList';
import {searchByZipcode} from '../../../api/AddressApi';
import styled from '@emotion/styled';
import TextLabel from '../atoms/TextLabel';

const SearchFormWrapper = styled('section')`
  margin-bottom: 8px;
`;

const AddressSearchWrapper = styled('div')`
  max-width: 600px;
  margin: auto;
}`;

const AddressListWrapper = styled('section')`
  margin-top: 5px;
`;

const ResultLabelWrapper = styled('section')`
  margin-top: 5px;
  margin-bottom: 5px;
`;

function AddressSearch() {
  const [zipcodeTop, setZipcodeTop] = useState('');
  const [zipcodeBottom, setZipcodeBottom] = useState('');
  const [addressList, setAddressList] = useState<Address[]>([]);

  const search = () => {
    searchByZipcode(`${zipcodeTop}${zipcodeBottom}`).then((addressList) => {
      setAddressList(addressList);
    });
  };

  return (
    <AddressSearchWrapper>
      <SearchFormWrapper>
        <SearchForm
          zipcodeTop={zipcodeTop}
          setZipcodeTop={setZipcodeTop}
          zipcodeBottom={zipcodeBottom}
          setZipcodeBottom={setZipcodeBottom}
          search={search}
        />
      </SearchFormWrapper>
      <AddressListWrapper className="AddressList">
        <ResultLabelWrapper>
          <TextLabel text='検索結果:'/>
        </ResultLabelWrapper>
        <AddressList
          addressList={addressList}
        />
      </AddressListWrapper>
    </AddressSearchWrapper>
  );
}

export default AddressSearch;
