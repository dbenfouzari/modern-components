import { shallow } from "enzyme";
import * as React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "../../styled-components";
import defaultTheme from "../../theme";
import Checkbox from "./Checkbox";

const noop = () => null;

describe("Checkbox", () => {
  it("renders correctly", () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Checkbox value={true} onChange={noop}>
            Coucou
          </Checkbox>
        </ThemeProvider>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
