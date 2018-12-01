import * as React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "../../styled-components";
import defaultTheme from "../../theme";
import Input from "./Input";

describe("Input", () => {
  it("renders correctly", () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Input value="test" onChange={() => null}></Input>
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
