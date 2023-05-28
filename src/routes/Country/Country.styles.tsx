import styled from "styled-components";
import { Button } from "../../components/Button/Button.styles";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1.5rem;
  padding: 4rem 2rem;
  width: 100vw;
  height: 100vh;
  position: relative;
`;

export const Box = styled.div`
  padding: 4rem 3.5rem;
  width: 80rem;
  height: 50rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  overflow: auto;

  @media screen and (max-width: 768px) {
    width: 30rem;
    gap: 4rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Error = styled(Title)`
  color: red;
`;

export const ButtonStyled = styled(Button)`
  position: absolute;
  top: 2rem;
  right: 2.5rem;

  @media screen and (max-width: 768px) {
    width: 7rem;
    right: 1rem;
  }
`;
