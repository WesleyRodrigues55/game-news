const Dotenv = require('dotenv-webpack');

module.exports = {
    mode: 'production',
    // Seu arquivo de entrada
    entry: {
        main: './src/main.js',
        loadPublishers: './src/load-publishers.js',
        loadTags: './src/load-tags.js',
        loadGameInfo: './src/load-game-info.js',
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