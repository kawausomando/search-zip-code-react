import React from 'react';
import TextLabel from '../atoms/TextLabel';
import MUIList from '@mui/material/List';
import MUIListItem from '@mui/material/ListItem';
import MUIListItemText from '@mui/material/ListItemText';
import MUIDivider from '@mui/material/Divider';
import styled from '@emotion/styled';

// mui component stylings
const muiListStyle = {
  width: '100%',
  maxWidth: '800px',
  bgcolor: 'background.paper',
};

const muiDividerStyle = {
  marginLeft: '0px',
};

// component stylings
const ZipcodeWrapper = styled('div')`
  margin-right: 15px;
`;


function AddressList(props: {addressList: Address[]}) {
  const resultElementList = props.addressList.map((address: Address, index: number) => {
    return (
      <div key={index}>
        <MUIListItem>
          <ZipcodeWrapper>
            <TextLabel text={address.zipcode} size='small'></TextLabel>
          </ZipcodeWrapper>
          <MUIListItemText primary={address.address} secondary={address.addressKana} />
        </MUIListItem>
        <MUIDivider sx={muiDividerStyle} variant="inset" component="li" />
      </div>
    );
  });
  return (
    <MUIList sx={muiListStyle} component="nav" aria-label="addressList">
      {resultElementList}
    </MUIList>
  );
}

export default AddressList;