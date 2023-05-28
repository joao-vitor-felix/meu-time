import { createGlobalStyle } from "styled-components";

type DefaultTheme = {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
  };
};

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
* {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  font-size: 62.5%;
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme.colors.primary} ${({ theme }) =>
  theme.colors.background};

::-webkit-scrollbar {
  width: 0.9vw;
}

::-webkit-scrollbar-thumb {
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background-color: #779e3f;
}

::-webkit-scrollbar-track {
  background-color: ${({ theme }) => theme.colors.secondary};
}
  }


body {
  box-sizing: border-box;
  font-family: 'Manrope', sans-serif;
  background-color: ${({ theme }) => theme.colors.background};
  height: 100vh;
  width: 100%;
  color: ${({ theme }) => theme.colors.text};
}

`;
