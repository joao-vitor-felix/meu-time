import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#65a30d",
    secondary: "#1E293B",
    background: "#0F172A",
    text: "#e2e8f0"
  }
};

export const Theme = ({ children }: PropsWithChildren) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
