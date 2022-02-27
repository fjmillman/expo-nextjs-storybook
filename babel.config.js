module.exports = (api) => {
  const isWeb = api.caller(
    (caller) =>
      caller &&
      (caller.name === "babel-loader" ||
        caller.name === "next-babel-turbo-loader")
  );
  const isStorybook = api.env("storybook");

  return {
    presets: [
      isWeb &&
        !isStorybook && [
          "next/babel",
          { "preset-env": { loose: true, shippedProposals: true } },
        ],
      [
        "babel-preset-expo",
        { web: { useTransformReactJSXExperimental: true } },
      ],
    ].filter(Boolean),
    plugins: [
      isStorybook && ["@babel/plugin-proposal-class-properties"],
    ].filter(Boolean),
  };
};
