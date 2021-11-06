const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { resolve } = require('path');

const BUILD_TYPE = process.env.BUILD_TYPE;
const IS_DEV = BUILD_TYPE === "dev";
const config = require('./webpack.common').createConfig();


module.exports = {
    ...config,

    module: {
        ...config.module,

        rules: [
            ...config.module.rules,
        ],
    },

    plugins: [
        ...config.plugins
    ],
};