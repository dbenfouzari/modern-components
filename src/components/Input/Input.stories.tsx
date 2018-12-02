import { StateDecorator, Store } from "@sambego/storybook-state";
import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Input from ".";

const store = new Store({
  value: "Hello world !",
});

storiesOf("Input", module)
  .addDecorator(StateDecorator(store))
  .add("with text", () => {
    const handleChange = (nextValue: any) => {
      action("inputChange")(nextValue);
      store.set({ value: nextValue });
    };

    return (
      <Input value={store.get("value")} onChange={handleChange} />
    );
  });
