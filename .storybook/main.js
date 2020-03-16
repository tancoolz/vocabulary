module.exports = {
  stories: [
    './welcome.stories.js',
    '../src/**/*.stories.[tj]s',
    '../src/**/*.stories.mdx'
  ],
  addons: 
  ['@storybook/addon-knobs',
  '@storybook/addon-backgrounds',
  '@storybook/addon-docs',
  ],
  }
