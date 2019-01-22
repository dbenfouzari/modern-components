import * as React from "react";
import renderer from "react-test-renderer";
import { ThemeProvider } from "../../styled-components";
import defaultTheme from "../../theme";

import Select from ".";

describe("Select", () => {
  it("should render successfully", () => {
    const handleChange = jest.fn();
    const wrapper = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Select
            options={[{ value: 1, label: "One" }]}
            onChange={handleChange}
            value={[1]}
          />
        </ThemeProvider>,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot();
  });
});
