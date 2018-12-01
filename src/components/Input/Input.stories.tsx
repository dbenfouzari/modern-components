import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { StateDecorator, Store } from "@sambego/storybook-state";

import Input from '.';

const store = new Store({
  value: 'Hello world !'
});

storiesOf('Input', module)
  .addDecorator(StateDecorator(store))
  .add('with text', () => {
    const handleChange = (nextValue: any) => {
      action('inputChange')(nextValue);
      store.set({ value: nextValue });
    }

    return (
      <Input value='Hello world !' onChange={handleChange} />
    );
  });
