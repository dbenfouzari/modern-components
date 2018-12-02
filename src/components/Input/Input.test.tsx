import { shallow } from "enzyme";
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
          <Input value="test" onChange={() => null} />
        </ThemeProvider>
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });

  it("effectively calls onChange handler with value", () => {
    const onChange = jest.fn();

    const wrapper = shallow(<Input value="test" onChange={onChange} />);
    wrapper.simulate("change", { currentTarget: { value: "next test value" } });

    expect(onChange).toHaveBeenCalledWith("next test value");
  });
});
