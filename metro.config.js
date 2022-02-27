const { getDefaultConfig } = require("expo/metro-config");

const defaultConfig = getDefaultConfig(__dirname);

defaultConfig.resolver.resolverMainFields = [
  "sbmodern",
  "react-native",
  ...defaultConfig.resolver.resolverMainFields,
];

defaultConfig.transformer.getTransformOptions = async () => ({
  transform: {
    experimentalImportSupport: false,
    inlineRequires: false,
  },
});

defaultConfig.watchFolders = [
  ...defaultConfig.watchFolders,
  "./.storybook/react-native",
];

module.exports = defaultConfig;
