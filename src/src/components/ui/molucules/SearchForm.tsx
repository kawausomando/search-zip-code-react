import React from 'react';
import TextLabel from '../atoms/TextLabel';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import MUIBox from '@mui/material/Box';
import MUIGrid from '@mui/material/Grid';
import styled from '@emotion/styled';

type SearchFormProps = {
  zipcodeTop: string;
  setZipcodeTop: (value: string) => void;
  zipcodeBottom: string;
  setZipcodeBottom: (value: string) => void;
  search: () => void;
  zipCodeTopRef: React.RefObject<HTMLInputElement>;
  zipCodeBottomRef: React.RefObject<HTMLInputElement>;
};

const ButtonWrapper = styled('div')`
  margin-top: 5px;
`;

/**
 * 住所検索入力用 コンポーネント
 * @param {SearchFormProps} props
 * @return {JSX.Element}
 */
function SearchForm(props: SearchFormProps) {
  return (
    <MUIBox sx={{flexGrow: 1}}>
      <MUIGrid container spacing={2}>
        <MUIGrid item xs={1}>
          <TextLabel text="〒" size="big"></TextLabel>
        </MUIGrid>
        <MUIGrid item xs={3}>
          <InputText
            value={props.zipcodeTop}
            name="zipcodeTop"
            onChange={props.setZipcodeTop}
            inputRef={props.zipCodeTopRef}
            placeHolder="000"
            maxLength={3}
            pattern="^[0-9]+$"
          ></InputText>
        </MUIGrid>
        <MUIGrid item xs={1}>
          <TextLabel text="-" size="big"></TextLabel>
        </MUIGrid>
        <MUIGrid item xs={3}>
          <InputText
            value={props.zipcodeBottom}
            name="zipcodeBottom"
            onChange={props.setZipcodeBottom}
            inputRef={props.zipCodeBottomRef}
            placeHolder="0000"
            maxLength={4}
            pattern="^[0-9]+$"
          ></InputText>
        </MUIGrid>
        <MUIGrid item xs={2}>
          <ButtonWrapper>
            <Button text="検索" onClick={props.search}></Button>
          </ButtonWrapper>
        </MUIGrid>
      </MUIGrid>
    </MUIBox>
  );
}

export default SearchForm;
