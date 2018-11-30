import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";

addDecorator(withInfo);

const req = require.context('../src', true, /\.stories.tsx$/);

function loadStories () {
  req.keys().forEach(req);
}

configure(loadStories, module);
