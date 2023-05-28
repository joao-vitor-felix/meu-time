import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputField = styled.input`
  outline: none;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.text};
  font-family: "Manrope", sans-serif;
  font-weight: 400;
  font-size: 1.5rem;
  width: 30rem;
  height: 5rem;
  border-radius: 0.5rem;
  border: none;
  padding: 0.5rem 1rem;

  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.primary};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export const Label = styled.label`
  font-size: 1.5rem;
`;
