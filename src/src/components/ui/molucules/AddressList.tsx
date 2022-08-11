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

/**
 * 住所検索結果表示用 コンポーネント
 * @param {Object} props
 * @return {JSX.Element}
 */
function AddressList(props: { addressList: Address[] }) {
  let resultElementList = props.addressList.map(
    (address: Address, index: number) => {
      return (
        <div key={index}>
          <MUIListItem>
            <ZipcodeWrapper>
              <TextLabel text={address.zipcode} size="small" />
            </ZipcodeWrapper>
            <MUIListItemText
              primary={address.address}
              secondary={address.addressKana}
            />
          </MUIListItem>
          <MUIDivider sx={muiDividerStyle} variant="inset" component="li" />
        </div>
      );
    },
  );

  if (resultElementList.length === 0) {
    resultElementList = [
      <div key={0}>
        <MUIListItem>
          <ZipcodeWrapper></ZipcodeWrapper>
          <MUIListItemText primary="検索結果なし" />
        </MUIListItem>
        <MUIDivider sx={muiDividerStyle} variant="inset" component="li" />
      </div>,
    ];
  }

  return (
    <MUIList sx={muiListStyle} component="nav" aria-label="addressList">
      {resultElementList}
    </MUIList>
  );
}

export default AddressList;
