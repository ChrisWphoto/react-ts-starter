import { configure } from '@storybook/react';

function loadStories() {
  require('../src/components/Hello.stories.js');
}

configure(loadStories, module);