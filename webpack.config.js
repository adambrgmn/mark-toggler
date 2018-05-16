const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const pkg = require('./package.json');

module.exports = (_, { mode }) => {
  const isProd = mode === 'production';

  return {
    devtool: isProd ? false : 'cheap-module-source-map',
    entry: {
      popup: './src/popup.js',
    },
    output: {
      pathinfo: true,
      path: path.resolve(__dirname, 'dist'),
      filename: '[name].js',
    },
    resolve: {
      modules: ['node_modules'],
      extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    },
    module: {
      strictExportPresence: true,
      rules: [
        { parser: { requireEnsure: false } },
        {
          oneOf: [
            {
              test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'assets/media/[name].[ext]',
              },
            },
            {
              test: /\.(js|jsx|mjs)$/,
              exclude: [/[/\\\\]node_modules[/\\\\]/],
              use: [
                'thread-loader',
                {
                  loader: 'babel-loader',
                  options: {
                    compact: true,
                    highlightCode: true,
                  },
                },
              ],
            },
            {
              test: /\.js$/,
              use: [
                'thread-loader',
                {
                  loader: 'babel-loader',
                  options: {
                    babelrc: false,
                    compact: false,
                    presets: [
                      [
                        require.resolve('@babel/preset-env'),
                        { modules: false },
                      ],
                    ],
                  },
                },
              ],
            },
            {
              exclude: [/\.(js|jsx|mjs)$/, /\.html$/, /\.json$/],
              loader: 'file-loader',
              options: {
                name: 'assets/media/[name].[ext]',
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new CleanWebpackPlugin(['dist']),
      new HTMLWebpackPlugin({
        filename: 'popup.html',
        template: path.resolve(__dirname, 'public/popup.html'),
        inject: true,
        chunks: ['popup'],
      }),
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify(isProd ? 'production' : 'development'),
        },
      }),
      new CopyWebpackPlugin([
        {
          from: 'public',
          to: '.',
          ignore: ['manifest.json', 'popup.html', '.DS_Store'],
        },
        {
          from: 'public/manifest.json',
          to: 'manifest.json',
          transform: content => {
            const data = JSON.parse(content.toString());
            return JSON.stringify(
              {
                manifest_version: 2,
                version: pkg.version,
                name: pkg.name,
                description: pkg.description,
                homepage_url: pkg.homepage,
                ...data,
              },
              null,
              2,
            );
          },
        },
      ]),
    ],
    node: {
      dgram: 'empty',
      fs: 'empty',
      net: 'empty',
      tls: 'empty',
      child_process: 'empty',
    },
  };
};
