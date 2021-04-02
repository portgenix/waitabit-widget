module.exports = {
    entry: './app.js',
    mode: 'development',
    output: {
      path: `${__dirname}/dist`,
      filename: 'waitabit-bundle.js',
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
              'style-loader',
              'css-loader',
            ],
          },
        ],
      },
  };