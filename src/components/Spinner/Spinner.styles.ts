import styled from "styled-components";

type SpinnerContainerProps = {
  small?: boolean;
};

export const SpinnerOverlay = styled.div<SpinnerContainerProps>`
  height: ${({ small }) => (small ? "2rem" : "80vh")};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div<SpinnerContainerProps>`
  display: inline-block;
  width: ${({ small }) => (small ? "2rem" : "5rem")};
  height: ${({ small }) => (small ? "2rem" : "5rem")};
  border: 0.3rem solid ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  border-top-color: ${({ theme }) => theme.colors.primary};
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
