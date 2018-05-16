const env = process.env.BABEL_ENV || process.env.NODE_ENV;
const isEnvDevelopment = env === 'development';
const isEnvProduction = env === 'production';
const isEnvTest = env === 'test';

module.exports = {
  presets: [
    isEnvTest && [
      require.resolve('@babel/preset-env'),
      { targets: { node: 'current' } },
    ],
    (isEnvProduction || isEnvDevelopment) && [
      require.resolve('@babel/preset-env'),
      {
        targets: { browsers: 'last 2 Chrome versions' },
        useBuiltIns: 'entry',
        modules: false,
      },
    ],
    [
      require.resolve('@babel/preset-react'),
      { development: isEnvDevelopment || isEnvTest, useBuiltIns: true },
    ],
    require.resolve('@babel/preset-flow'),
  ].filter(Boolean),
  plugins: [
    require.resolve('@babel/plugin-transform-destructuring'),
    [
      require.resolve('@babel/plugin-proposal-class-properties'),
      { loose: true },
    ],
    [
      require.resolve('@babel/plugin-proposal-object-rest-spread'),
      { useBuiltIns: true },
    ],
    [
      require.resolve('@babel/plugin-transform-runtime'),
      { helpers: false, polyfill: false, regenerator: true },
    ],
    isEnvProduction && [
      require.resolve('babel-plugin-transform-react-remove-prop-types'),
      { removeImport: true },
    ],
    !isEnvTest && [
      require.resolve('@babel/plugin-transform-regenerator'),
      { async: false },
    ],
    require.resolve('@babel/plugin-syntax-dynamic-import'),
    isEnvTest && require.resolve('babel-plugin-transform-dynamic-import'),
  ].filter(Boolean),
};
