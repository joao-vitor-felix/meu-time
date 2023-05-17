import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#65a30d",
    secondary: "#374151",
    background: "#1e293b",
    text: "#e2e8f0"
  }
};

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
