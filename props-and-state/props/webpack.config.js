module.exports = {
  mode: 'development',
  entry: './props.js',
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
};
