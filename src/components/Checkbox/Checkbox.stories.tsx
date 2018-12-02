import { StateDecorator, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Checkbox from ".";

storiesOf("Checkbox", module)
  .add("unchecked", () => {
    const handleChange = (nextValue: boolean) => {
      action("checkboxChange")(nextValue);
    };

    return (
      <Checkbox value={false} onChange={handleChange}>
        Hello World!
      </Checkbox>
    );
  })
  .add("checked", () => {
    const handleChange = (nextValue: boolean) => {
      action("checkboxChange")(nextValue);
    };

    return (
      <Checkbox value={true} onChange={handleChange}>
        Hello World!
      </Checkbox>
    );
  })
  .add("disabled", () => {
    const handleChange = (nextValue: boolean) => {
      action("checkboxChange")(nextValue);
    };

    return (
      <Checkbox disabled={true} value={true} onChange={handleChange}>
        Hello World!
      </Checkbox>
    );
  });
