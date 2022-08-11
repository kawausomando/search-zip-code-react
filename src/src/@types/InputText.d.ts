type InputTextProps = {
  value: string;
  name: string;
  onChange: (value: string) => void;
  inputRef?: React.RefObject<HTMLInputElement>;
  placeHolder?: string;
  maxLength?: number;
  pattern?: string;
};
