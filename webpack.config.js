const path = require('path');

module.exports = {
    entry: './client/src/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist/client'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'client/public'),
        },
        compress: true,
        port: 9000
    }
};
