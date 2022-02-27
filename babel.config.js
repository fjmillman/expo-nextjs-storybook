module.exports = (api) => {
  if (api.env("storybook")){
    return {
      presets: ["@babel/preset-env", "@babel/preset-react"],
      plugins: ["@babel/plugin-proposal-class-properties"]
    }
  }

  const isWeb = api.caller((caller) => caller && (caller.name === 'babel-loader' || caller.name === 'next-babel-turbo-loader'));

  if (!isWeb) {
    return {
      presets: [
        [require.resolve('babel-preset-expo'), { web: { useTransformReactJSXExperimental: true } }],
      ]
    }
  }

  return {
    presets: [
      [require.resolve('next/babel'), { 'preset-env': { loose: true, shippedProposals: true } }],
      [require.resolve('babel-preset-expo'), { web: { useTransformReactJSXExperimental: true } }],
    ],
  }
}
