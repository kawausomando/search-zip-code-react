import React, {useRef, useState} from 'react';
import AddressSearch from '../ui/organisms/AddressSearch';
import {searchByZipcode} from '../../api/AddressApi';

/**
 * 住所検索/結果表示用 コンテナコンポーネント
 * @return {JSX.Element}
 */
function AddressSearchContainer() {
  const [zipcodeTop, setZipcodeTop] = useState('');
  const [zipcodeBottom, setZipcodeBottom] = useState('');
  const [addressList, setAddressList] = useState<Address[]>([]);
  const zipCodeTopRef = useRef<HTMLInputElement>(null);
  const zipCodeBottomRef = useRef<HTMLInputElement>(null);

  const validate = (zipCodeRef: React.RefObject<HTMLInputElement>) => {
    const ref = zipCodeRef.current;
    if (!ref) {
      return false;
    }
    if (!ref.checkValidity()) {
      alert(ref.validationMessage);
      return true;
    }
    return false;
  };

  const search = () => {
    if (validate(zipCodeTopRef)) return;
    if (validate(zipCodeBottomRef)) return;
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
      zipCodeTopRef={zipCodeTopRef}
      zipCodeBottomRef={zipCodeBottomRef}
      search={search}
      addressList={addressList}
    />
  );
}

export default AddressSearchContainer;
