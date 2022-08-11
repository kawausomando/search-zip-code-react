import React from 'react';
import SearchForm from '../molucules/SearchForm';
import AddressList from '../molucules/AddressList';
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

type AddressSearchProps = {
  zipcodeTop: string,
  setZipcodeTop: (value: string) => void,
  zipcodeBottom: string,
  setZipcodeBottom: (value: string) => void,
  search: () => void,
  addressList: Address[]
}

function AddressSearch(props: AddressSearchProps) {

  return (
    <AddressSearchWrapper>
      <SearchFormWrapper>
        <SearchForm
          zipcodeTop={props.zipcodeTop}
          setZipcodeTop={props.setZipcodeTop}
          zipcodeBottom={props.zipcodeBottom}
          setZipcodeBottom={props.setZipcodeBottom}
          search={props.search}
        />
      </SearchFormWrapper>
      <AddressListWrapper className="AddressList">
        <ResultLabelWrapper>
          <TextLabel text='検索結果:'/>
        </ResultLabelWrapper>
        <AddressList
          addressList={props.addressList}
        />
      </AddressListWrapper>
    </AddressSearchWrapper>
  );
}

export default AddressSearch;
