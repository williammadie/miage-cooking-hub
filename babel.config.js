/**
 * This is a config file for Jest.
 */

module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
  ],
  plugins: ["@babel/plugin-proposal-class-properties", "@babel/plugin-transform-react-jsx"]
};