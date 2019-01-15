import { storiesOf } from "@storybook/react";
import * as React from "react";

import Icon from ".";

storiesOf("Icon", module).add("with text", () => (
  <div>
    <div>
      <Icon name="address-book" size="1x" />
      <Icon name="address-book" size="2x" />
      <Icon name="address-book" size="3x" />
    </div>

    <h3>Fixed width</h3>
    <div>
      <Icon name="address-book" size="1x" fixedWidth={true} />
      <Icon name="address-book" size="2x" fixedWidth={true} />
      <Icon name="address-book" size="3x" fixedWidth={true} />
    </div>
  </div>
));
