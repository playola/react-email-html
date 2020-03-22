/**
 * @see https://storybook.js.org/docs/configurations/theming/
 */
import { create } from '@storybook/theming/create';
import { addons } from '@storybook/addons';

const customTheme = create({
  base: '#007D9E',
  brandTitle: 'React Email Html',
  brandUrl: 'https://github.com/playola/react-email-html',
});

/**
 * @see https://storybook.js.org/docs/configurations/options-parameter/
 */
addons.setConfig({
  theme: customTheme,
  panelPosition: 'bottom',
  showPanel: false,
});
