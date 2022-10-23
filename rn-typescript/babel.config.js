module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        envName: 'APP_ENV',
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        safe: false,
        allowUndefined: false,
        verbose: false,
      },
    ],
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js', '.json'],
        root: ['.'],
        alias: {
          // This needs to be mirrored in tsconfig.json
          '@assets': ['./assets'],
          '@api': ['./src/api'],
          '@components': ['./src/components'],
          '@shared': ['./src/components/shared'],
          '@bottomSheets': ['./src/components/bottomSheets'],
          '@config': ['./src/config'],
          '@constants': ['./src/constants'],
          '@data': ['./src/data'],
          '@helpers': ['./src/helpers'],
          '@hooks': ['./src/hooks'],
          '@state': ['./src/recoil/hooks'],
          '@schemas': ['./src/schemas'],
          '@screens': ['./src/screens'],
          '@storage': ['./src/storage'],
          '@theme': ['./src/theme'],
          '@type': ['./src/types'],
          '@env': ['./src/env'],
          '@atoms': ['./src/recoil/atoms'],
        },
      },
    ],
    'react-native-reanimated/plugin', //Reanimated plugin has to be listed last.
  ],
};
