import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';
import { ThemeProvider } from '../../styled-components';
import defaultTheme from '../../theme';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Button>Hello World!</Button>
        </ThemeProvider>
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot();
  });

  it('renders correctly when raised', () => {
    const wrapper = renderer
      .create(
        <ThemeProvider theme={defaultTheme}>
          <Button raised>Hello World!</Button>
        </ThemeProvider>
      )
      .toJSON()

    expect(wrapper).toMatchSnapshot();
  });
})
