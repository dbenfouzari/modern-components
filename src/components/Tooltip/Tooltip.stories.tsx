import { storiesOf } from "@storybook/react";
import * as React from "react";

import Tooltip from ".";

storiesOf("Tooltip", module)
  .addParameters({
    info: {
      text: `
            You have to import something like :
            
            ~~~js
            import "@dbenfouzari/modern-components/lib/components/Tooltip"
            ~~~
            
            to import the stylesheet.
            
            Then, simply use className 'tooltip' and a data-tooltip that contains the message
            `
    }
  })
  .add("normal behavior", () => {
    return (
      <div style={{ margin: 50 }}>
        <span className="tooltip" data-tooltip="I'm a tooltip !">
          Hover me
        </span>
      </div>
    );
  });
