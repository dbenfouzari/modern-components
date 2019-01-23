import * as React from "react";
import { theme } from "../src/palette";
import { ThemeProvider } from "../src/styled-components";

const Wrapper = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Wrapper;
