/** @type {import("@babel/core").ConfigFunction} */
const config = function (api) {
  api.cache.forever();

  return {
    presets: [
      ['babel-preset-expo', { jsxImportSource: 'nativewind' }],
      'nativewind/babel',
    ],
    plugins: [
      ['babel-plugin-react-docgen-typescript', { exclude: 'node_modules' }],
    ],
  };
};

export default config;
