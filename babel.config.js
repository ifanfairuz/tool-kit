const path = require('path');
const aliases = require('./aliases');

const commonPlugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: [path.resolve('./src')],
      alias: aliases,
    },
  ],
];

module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [...commonPlugins]
}
