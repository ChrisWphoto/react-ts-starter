import React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from './Hello';

storiesOf('Hello', module).add('with text', () => (
  <Hello name="billy" enthusiasmLevel={5} />
));
