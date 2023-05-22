import { ReactNode } from "react";
import * as S from "./Button.styles";
import Spinner from "../Spinner/Spinner";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  small?: boolean;
};

const Button = ({ children, onClick, isLoading, small }: ButtonProps) => {
  return (
    <S.Button onClick={onClick} disabled={isLoading}>
      {isLoading ? <Spinner small={small} /> : children}
    </S.Button>
  );
};

export default Button;
