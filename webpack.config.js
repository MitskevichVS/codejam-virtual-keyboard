const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const GhPagesWebpackPlugin = require('gh-pages-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'source-map',
  module: {
    rules: [
      { enforce: 'pre', test: /\.js$/, loader: 'eslint-loader' },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        }],
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({
    title: 'Codejam Virtual Keyboard',
  }),
  /* new GhPagesWebpackPlugin({
    path: path.resolve(__dirname, 'dist'),
    options: {
      user: {
        name: 'Codejam Virtual Keyboard',
        email: 'mv2.mx@yandex.ru',
      },
    },
  }), */
  ],
};
