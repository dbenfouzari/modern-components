import * as React from 'react';
import renderer from 'react-test-renderer';
import Button from './Button';

describe('Button', () => {
  it('renders correctly', () => {
    const wrapper = renderer
      .create(<Button>Hello World!</Button>)
      .toJSON()

    expect(wrapper).toMatchSnapshot();
  });

  
})
