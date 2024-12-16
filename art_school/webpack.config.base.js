const path = require('path');
const crypto = require("crypto");
const crypto_orig_createHash = crypto.createHash;
crypto.createHash = algorithm => crypto_orig_createHash(algorithm == "md4" ? "sha256" : algorithm);

module.exports = {
    target: 'web',
    resolve: {
        alias: {
            '~': path.resolve(__dirname, 'src'),
        }
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-react',
                            ['@babel/env', {targets: {browsers: ['last 7 versions']}}]
                        ]
                    }
                }
            },
            {
                test: /\.(png|gif|jpe?g|svg)$/,
                exclude: /node_modules/,
                loader: 'url-loader'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                exclude: /node_modules/,
                use: ['url-loader']
            },
        ]
    },
};
