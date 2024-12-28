const path = require('path');

module.exports = {
  entry: './src/main.ts', // Укажите главный файл вашего проекта
  output: {
    filename: 'bundle.js', // Имя выходного файла
    path: path.resolve(__dirname, 'dist'), // Путь для выходного файла
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  mode: 'development', // Или 'development' для отладки
};
