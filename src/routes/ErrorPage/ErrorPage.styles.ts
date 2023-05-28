import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../assets/404-error.svg";
import { Button } from "../../components/Button/Button.styles";

export const Icon = styled(ErrorIcon)`
  height: 30rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 5rem 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;

  @media screen and (max-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const ButtonStyled = styled(Button)`
  width: 20rem;
  padding: 1rem 1.2rem;
`;
