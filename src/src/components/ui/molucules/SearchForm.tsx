import TextLabel from '../atoms/TextLabel';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';
import MUIBox from '@mui/material/Box';
import MUIGrid from '@mui/material/Grid';
import styled from '@emotion/styled';

type SearchFormProps = {
  zipcodeTop: string,
  setZipcodeTop: Function,
  zipcodeBottom: string,
  setZipcodeBottom: Function
  search: () => void
}

const StyledButtonWrapper = styled('div')`
  margin-top: 5px;
`;

function SearchForm(props: SearchFormProps) {

  return (
    <MUIBox sx={{ flexGrow: 1 }}>
      <MUIGrid container spacing={2}>
        <MUIGrid item xs={1}>
          <TextLabel text='〒' size='big'></TextLabel>
        </MUIGrid>
        <MUIGrid item xs={3}>
          <InputText value={props.zipcodeTop} name='zipcodeTop' onChange={props.setZipcodeTop}></InputText>
        </MUIGrid>
        <MUIGrid item xs={1}>
          <TextLabel text='-' size='big'></TextLabel>
        </MUIGrid>
        <MUIGrid item xs={3}>
          <InputText value={props.zipcodeBottom} name='zipcodeBottom' onChange={props.setZipcodeBottom}></InputText>
        </MUIGrid>
        <MUIGrid item xs={2}>
          <StyledButtonWrapper>
            <Button text='検索' onClick={props.search}></Button>
          </StyledButtonWrapper>
        </MUIGrid>
      </MUIGrid>
    </MUIBox>
  );
}

export default SearchForm;
