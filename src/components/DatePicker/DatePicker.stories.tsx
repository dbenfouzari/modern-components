import { StateDecorator, Store } from "@sambego/storybook-state";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import DatePicker from ".";

const store = new Store({
  value: new Date()
});

storiesOf("DatePicker", module)
  .addDecorator(StateDecorator(store) as any)
  .add("normal behavior", () => {
    const handleChange = (nextDate: Date) => store.set({ value: nextDate });

    return <DatePicker value={store.get("value")} onChange={handleChange} />;
  });
