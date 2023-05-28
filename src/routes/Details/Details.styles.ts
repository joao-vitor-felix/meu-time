import styled from "styled-components";

export const Container = styled.div`
  padding: 0 4rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const TableGraphContainer = styled.div`
  display: flex;

  gap: 3rem;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 2rem;
`;

export const Block = styled.div`
  display: flex;
  width: 30rem;
  padding-bottom: 0.5rem;
`;

export const Info = styled.div`
  font-size: 1.5rem;
  &:not(:last-child) {
    border-right: 2px solid ${({ theme }) => theme.colors.primary};
    margin-right: 1rem;
    padding-right: 1rem;
  }
`;

export const Graph = styled.div`
  width: min(70rem, 100%);
  color: ${({ theme }) => theme.colors.text};
`;

export const Error = styled(Title)`
  color: red;
  font-size: 2rem;
  margin-bottom: 2rem;
`;
