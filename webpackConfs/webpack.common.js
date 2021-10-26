const webpack = require('webpack');
const { resolve } = require('path');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

const createConfig = () => {
    const BUILD_TARGET = process.env.BUILD_TARGET;
    const BUILD_TYPE = process.env.BUILD_TYPE;
    const PATH_SRC = resolve(__dirname, "../");
    const PATH_DIST = resolve(PATH_SRC, "dist", BUILD_TARGET);
    const IS_SERVER = BUILD_TARGET === "server";
    const IS_DEV = BUILD_TYPE === "dev";

    return {
        name: IS_SERVER ? "server" : "client",
        entry: resolve(PATH_SRC, BUILD_TARGET),
        target: IS_SERVER ? "node" : "web",
        mode: "development",
        output: {
            path: PATH_DIST,
            filename: IS_DEV ? '[name].js' : '[name].[hash].js'
        },
        resolve: {
            modules: [
                "node_modules",
                "src"
            ],
            extensions: [".tsx", ".ts", ".js"]
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: "ts-loader"
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin()
        ]
    }
}

module.exports = {
    createConfig,
};