import styled from "styled-components";

export const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.text};
  border: none;
  border-radius: 0.5rem;
  width: 10rem;
  padding: 1.1rem 0.5rem;
  font-weight: bold;
  font-size: 1.5rem;
  font-family: "Manrope", sans-serif;
  cursor: pointer;

  &:hover {
    box-shadow: 0.1rem 0 30rem 0.1rem ${({ theme }) => theme.colors.primary};
  }
`;
