import TextLabel from '../atoms/TextLabel';
import InputText from '../atoms/InputText';
import Button from '../atoms/Button';

type SearchFormProps = {
  zipcodeTop: string,
  setZipcodeTop: Function,
  zipcodeBottom: string,
  setZipcodeBottom: Function
  search: () => void
}

function SearchForm(props: SearchFormProps) {

  return (
    <div>
      <div>
        <TextLabel text='〒'></TextLabel>
        <InputText value={props.zipcodeTop} name='zipcodeTop' onChange={props.setZipcodeTop}></InputText>
        <TextLabel text='-'></TextLabel>
        <InputText value={props.zipcodeBottom} name='zipcodeBottom' onChange={props.setZipcodeBottom}></InputText>
      </div>
      <div>
        <Button text='検索' onClick={props.search}></Button>
      </div>
    </div>
  );
}

export default SearchForm;
