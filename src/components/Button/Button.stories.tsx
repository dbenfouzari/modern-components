import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import * as React from "react";

import Button from ".";

storiesOf("Button", module)
  .add("with text", () => (
    <Button raised={false} onClick={action("onClick")}>
      Coucou
    </Button>
  ))
  .add("raised", () => (
    <Button raised={true} onClick={action("onClick")}>
      Coucou
    </Button>
  ))
  .add("with some emoji", () => (
    <Button>
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
