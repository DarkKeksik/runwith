const { DefinePlugin } = require("webpack");
const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
            extensions: [".ts", ".tsx", ".js", ".json", ".css", ".scss"],
            alias: {
                "@Components": resolve(__dirname, "../client/src/components"),
                "@Layouts": resolve(__dirname, "../client/src/layouts"),
                "@StylesCommon": resolve(__dirname, "../client/stylesCommon"),
                "@Pages": resolve(__dirname, "../client/src/pages"),
            }
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: "ts-loader"
                },
                {
                    test: /\.css$/,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: "[folder].[local].[hash:base64:5]"
                                }
                            }
                        }
                    ],
                    include: /\.module\.css$/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: 'css-loader',
                            options: {
                                importLoaders: 1,
                                modules: {
                                    localIdentName: "[folder].[local].[hash:base64:5]"
                                }
                            }
                        },
                        "sass-loader",
                    ],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new DefinePlugin({
                "process.env": {
                    "IS_CLIENT": `"${ !IS_SERVER }"`
                }
            }),
            new MiniCssExtractPlugin({
                filename: IS_DEV ? "[name].css" : "[name].[hash].css",
            }),
        ]
    }
}

module.exports = {
    createConfig,
};