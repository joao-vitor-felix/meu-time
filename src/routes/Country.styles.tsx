import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 1rem 2rem;
  width: 100vw;
  height: 100vh;
`;

export const Box = styled.div`
  padding: 4rem 3.5rem;
  width: 60rem;
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
