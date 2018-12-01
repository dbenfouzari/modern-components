import { shallow } from "enzyme";
import * as React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "../../styled-components";
import defaultTheme from "../../theme";
import Button from "./Button";

describe("Button", () => {
  it("renders correctly", () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Button>Hello World!</Button>
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it("renders correctly when raised", () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Button raised>Hello World!</Button>
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it("effectively calls onClick handler", () => {
    const onClick = jest.fn();

    const wrapper = shallow(<Button onClick={onClick}>Test</Button>);
    wrapper.simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
