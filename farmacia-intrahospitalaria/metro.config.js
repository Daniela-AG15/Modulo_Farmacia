const { getDefaultConfig } = require('@expo/metro-config');

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  config.resolver.nodeModulesPaths.push(__dirname + '/node_modules');
  config.resolver.extraNodeModules = {
    'react-native-fbsdk-next': path.resolve(__dirname, 'node_modules/react-native-fbsdk-next'),
    'expo-auth-session': path.resolve(__dirname, 'node_modules/expo-auth-session'),
  };

  return config;
})();
