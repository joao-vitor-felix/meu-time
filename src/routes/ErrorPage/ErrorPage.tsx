import { useNavigate } from "react-router-dom";
import * as S from "./ErrorPage.styles";
import Logo from "../../components/Logo/Logo";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleClick = () => navigate("/");

  return (
    <S.Container>
      <Logo />
      <S.Icon />
      <S.Title>Algo deu errado! Tente novamente.</S.Title>
      <S.ButtonStyled
        children="Voltar à página inicial"
        onClick={handleClick}
      />
    </S.Container>
  );
};

export default ErrorPage;
