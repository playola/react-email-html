module.exports = {
  stories: [
    '../docs/**/*.(stories|story).(js|mdx)',
    '../src/**/*.(stories|story).(js|mdx)',
  ],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
  ],
};
