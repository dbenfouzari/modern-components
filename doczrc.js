const { css } = require('docz-plugin-css');

module.exports = {
  src: './src',
  files: '**/*.{md,markdown,mdx}',
  hashRouter: true,
  plugins: [
    css({
      preprocessor: 'postcss',
      cssmodules: false
    })
  ],
  title: '@dbenfouzari/modern-components',
  typescript: true,
  wrapper: '../../docz/Wrapper.js'
};
