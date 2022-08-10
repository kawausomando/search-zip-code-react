import React, { useState } from 'react';
import SearchForm from '../molucules/SearchForm';
import AddressList from '../molucules/AddressList';
import {searchByZipcode} from '../../../api/AddressApi';

function AddressSearch() {
  const [zipcodeTop, setZipcodeTop] = useState('');
  const [zipcodeBottom, setZipcodeBottom] = useState('');
  const [addressList, setAddressList] = useState<Address[]>([]);

  const search = () => {
    console.log(`${zipcodeTop}-${zipcodeBottom}で住所検索`);
    searchByZipcode(`${zipcodeTop}${zipcodeBottom}`).then((addressList) => {
      setAddressList(addressList);
    });
  };

  return (
    <div>
      <section className="AddressSearchForm">
        <SearchForm
          zipcodeTop={zipcodeTop}
          setZipcodeTop={setZipcodeTop}
          zipcodeBottom={zipcodeBottom}
          setZipcodeBottom={setZipcodeBottom}
          search={search}
        />
      </section>
      <section className="AddressList">
        <AddressList
          addressList={addressList}
        />
      </section>
    </div>
  );
}

export default AddressSearch;
