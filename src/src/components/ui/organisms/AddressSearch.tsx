import React, { useState } from 'react';
import SearchForm from '../molucules/SearchForm';
import AddressList from '../molucules/AddressList';
import {searchByZipcode} from '../../../api/AddressApi';
import styled from '@emotion/styled';
import TextLabel from '../atoms/TextLabel';

const SearchFormSection = styled('section')`
  margin-bottom: 8px;
`;

const AddressListSection = styled('section')`
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
    <div className='addressSearch'>
      <SearchFormSection>
        <SearchForm
          zipcodeTop={zipcodeTop}
          setZipcodeTop={setZipcodeTop}
          zipcodeBottom={zipcodeBottom}
          setZipcodeBottom={setZipcodeBottom}
          search={search}
        />
      </SearchFormSection>
      <AddressListSection className="AddressList">
        <ResultLabelWrapper>
          <TextLabel text='検索結果:'/>
        </ResultLabelWrapper>
        <AddressList
          addressList={addressList}
        />
      </AddressListSection>
    </div>
  );
}

export default AddressSearch;
