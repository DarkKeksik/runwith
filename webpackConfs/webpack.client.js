const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const BUILD_TYPE = process.env.BUILD_TYPE;
const IS_DEV = BUILD_TYPE === "dev";
const config = require('./webpack.common').createConfig();

module.exports = {
    ...config,

    module: {
        ...config.module,

        rules: [
            ...config.module.rules,

            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ],
            },
        ],
    },

    plugins: [
        ...config.plugins,

        new MiniCssExtractPlugin({
            filename: IS_DEV ? "[name].css" : "[name].[hash].css",
        }),
    ],
};