import React, { useState } from 'react';
import AddressSearch from '../ui/organisms/AddressSearch';
import { searchByZipcode } from '../../api/AddressApi';

function AddressSearchContainer() {
  const [zipcodeTop, setZipcodeTop] = useState('');
  const [zipcodeBottom, setZipcodeBottom] = useState('');
  const [addressList, setAddressList] = useState<Address[]>([]);

  const search = () => {
    searchByZipcode(`${zipcodeTop}${zipcodeBottom}`).then((addressList) => {
      setAddressList(addressList);
    });
  };

  return (
    <AddressSearch
      zipcodeTop={zipcodeTop}
      setZipcodeTop={setZipcodeTop}
      zipcodeBottom={zipcodeBottom}
      setZipcodeBottom={setZipcodeBottom}
      search={search}
      addressList={addressList}
    />
  );
}

export default AddressSearchContainer;
