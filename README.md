# Modern components

> `modern-components` is a library that gives beautiful components
to be used in a React project

> https://modern-components.netlify.com

[![CircleCI](https://circleci.com/gh/dbenfouzari/modern-components/tree/master.svg?style=shield)](https://circleci.com/gh/dbenfouzari/modern-components/tree/master)

[![Example](https://imgur.com/wuEZx02.png)]()

- [Installation](#installation)

## Installation

```bash
yarn add @dbenfouzari/modern-components
```

And start using :

```typescript jsx
import * as React from 'react';
import { Calendar } from '@dbenfouzari/modern-components';

interface ExampleState {
  value: Date;
}

class MyExample extends React.Component<{}, ExampleState> {
  state = {
    value: new Date()
  }
  
  handleChange = (nextDate: Date) => {
    this.setState({ value: nextDate });
  }

  render () {
    return (
      <div>
        <Calendar value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
};
```

### Clone

- Clone this repo to your local machine using `https://github.com/dbenfouzari/modern-components`

### Setup

```bash
yarn install
yarn start
```

That will show you the library
