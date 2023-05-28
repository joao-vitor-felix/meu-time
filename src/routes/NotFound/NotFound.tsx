import { useNavigate } from "react-router-dom";
import * as S from "./NotFound.styles";
import Logo from "../../components/Logo/Logo";

const NotFound = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <S.Container>
      <Logo />
      <S.Icon />
      <S.ButtonStyled
        children="Voltar à página inicial"
        onClick={handleClick}
      />
    </S.Container>
  );
};

export default NotFound;
