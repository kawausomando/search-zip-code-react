import React from 'react';
import TextLabel from '../atoms/TextLabel';

function AddressList(props: {addressList: Address[]}) {
  const resultElementList = props.addressList.map((address: Address, index: number) => {
    return (
      <div key={index}>
        <TextLabel text={address.zipcode}></TextLabel>
        <TextLabel text={address.addressKana}></TextLabel>
        <TextLabel text={address.address}></TextLabel>
      </div>
    );
  });
  return (
    <div>{resultElementList}</div>
  );
}

export default AddressList;