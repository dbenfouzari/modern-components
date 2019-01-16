const path = require('path');
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin');
const createStyledComponentsTransformer = require('typescript-plugin-styled-components').default;

const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
    options: {
      getCustomTransformers: () => ({ before: [styledComponentsTransformer] })
    }
  });

  config.plugins.push(new TSDocgenPlugin());

  config.resolve.extensions.push('.ts', '.tsx');

  return config;
};
