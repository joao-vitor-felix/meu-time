import * as S from "./Input.styles";

type InputProps = {
  placeholder: string;
  id: string;
  type: string;
  min?: string;
  max?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, id, onChange, type, min, max }: InputProps) => {
  return (
    <S.InputField
      type={type}
      placeholder={placeholder}
      id={id}
      onChange={onChange}
      min={min}
      max={max}
    />
  );
};

export default Input;
