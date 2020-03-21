import { addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { sortStories } from './utils';

addDecorator(withInfo);

/**
 * Add group and story names to the sort order to explicitly order them.
 * Items that are not included in the list are shown below the sorted items.
 */
const SORT_ORDER = {
  Introduction: [
    'Welcome',
    'Getting Started',
    'Contributing',
  ],
  Advanced: [
    'How to use tables',
    'Usage',
    'CI-CD',
  ],
  Components: [],
};

addParameters({
  options: {
    storySort: sortStories(SORT_ORDER),
    showRoots: true,
  },
});
