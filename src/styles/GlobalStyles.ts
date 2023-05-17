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
}

body {
    box-sizing: border-box;
    font-family: 'Manrope', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
}

`;
