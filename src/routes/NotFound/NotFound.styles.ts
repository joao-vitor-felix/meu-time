import styled from "styled-components";
import { ReactComponent as ErrorIcon } from "../../assets/404.svg";
import { Button } from "../../components/Button/Button.styles";

export const Icon = styled(ErrorIcon)`
  height: 40rem;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  padding: 5rem 2rem;
`;

export const ButtonStyled = styled(Button)`
  width: 20rem;
  padding: 1rem 1.2rem;
`;
