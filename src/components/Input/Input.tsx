import * as S from "./Input.styles";

type InputProps = {
  placeholder: string;
  id: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, id, onChange }: InputProps) => {
  return (
    <S.Container>
      <S.Label htmlFor={id}></S.Label>
      <S.InputField
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={onChange}
      />
    </S.Container>
  );
};

export default Input;
