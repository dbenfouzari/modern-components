import { configure, addDecorator } from '@storybook/react';
import { withInfo } from "@storybook/addon-info";
import { withThemesProvider } from 'storybook-addon-styled-component-theme';
import defaultTheme from '../src/theme';

const mainTheme = {
  name: 'main',
  ...defaultTheme
};

const testTheme = {
  name: 'test',
  primaryColor: '#0f0'
};

const themes = [mainTheme, testTheme];

addDecorator(withInfo);
addDecorator(withThemesProvider(themes));

const req = require.context('../src', true, /\.stories.tsx$/);

function loadStories () {
  req.keys().forEach(req);
}

configure(loadStories, module);
