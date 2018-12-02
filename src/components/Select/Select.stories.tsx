import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Select from ".";
import { OptionType } from "./Select";

const arr = [1, 2, 3, 5, 1];

const options: OptionType[] = [
  { value: 1, label: "One" },
  { value: 2, label: "Two" },
  { value: 3, label: "Three" }
];

storiesOf("Select", module).add("with text", () => {
  const handleChange = (nextValue: Array<OptionType["value"]>) => {
    action("selectChange")(nextValue);
  };

  return <Select options={options} value={[1]} onChange={handleChange} />;
});
