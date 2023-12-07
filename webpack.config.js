const Dotenv = require('dotenv-webpack');

module.exports = {
    // Seu arquivo de entrada
    entry: {
        main: './src/main.js',
        loadPublishers: './src/load-publishers.js',
    },

    // Configurações de saída
    output: {
        filename: '[name].bundle.js',
        path: __dirname + '/dist',
    },

    // Adicione o plugin dotenv-webpack
    plugins: [
        new Dotenv(),
    ],
};