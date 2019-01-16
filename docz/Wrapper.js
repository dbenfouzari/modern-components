import * as React from "react";
import theme from "../lib/palette";
import { ThemeProvider } from "../lib/styled-components";

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Wrapper;
