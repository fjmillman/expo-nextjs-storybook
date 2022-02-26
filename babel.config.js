module.exports = (api) => {
  api.cache(true)

  return {
    presets: ['@expo/next-adapter/babel', ['babel-preset-expo', { web: { useTransformReactJSXExperimental: true } }]],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      ['@babel/plugin-proposal-private-methods', { loose: true }],
      ['@babel/plugin-proposal-private-property-in-object', { loose: true }],
    ]
  }
}
