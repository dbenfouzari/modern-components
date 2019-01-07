import { StateDecorator, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import DatePicker from ".";

storiesOf("DatePicker", module).add("normal behavior", () => {
  return <DatePicker />;
});
