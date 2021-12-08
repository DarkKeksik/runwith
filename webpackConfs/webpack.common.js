const { DefinePlugin } = require("webpack");
const { resolve } = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


/** Functions
 *      cssLoaders() - for styles in project
 *      babelLoader() - for js (ts, tsx, jsx and ect)
**/
const cssLoaders = (
    extraLoaders = [],
    extraOptions = {}
) => {

    return [
        MiniCssExtractPlugin.loader,
        {
            loader: "css-loader",
            options: { ...extraOptions }
        },
        ...extraLoaders,
    ]
}

const babelLoader = (extraLoaders = []) => {
    return [
        {
            loader: "babel-loader",
            options: {
                presets: [ "@babel/preset-env" ]
            }
        },
        ...extraLoaders
    ]
}
/** Functions ( end ) **/


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
            extensions: [".js", ".ts", ".tsx", ".jsx", ".json", ".css", ".scss"],
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
                    test: /\.m?js$/,
                    exclude: /node_modules/,
                    use: babelLoader()
                },
                {
                    test: /\.jsx$/,
                    exclude: /node_modules/,
                    use: babelLoader(["@babel/preset-react"])
                },
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: babelLoader(["ts-loader"])
                },
                {
                    test: /\.css$/,
                    use: cssLoaders(),
                    exclude: /\.module\.css$/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: cssLoaders(["sass-loader"]),
                    exclude: /\.module\.s[ac]ss$/
                },
                {
                    test: /\.s[ac]ss$/i,
                    use: cssLoaders(
                    ["sass-loader"],
                    {
                        importLoaders: 2,
                        modules: { localIdentName: "[folder].[local].[hash:base64:5]" },
                    }),
                    include: /\.module\.s[ac]ss$/
                },
                {
                    test: /\.(png|svg|jpg|gif)$/,
                    use: ["file-loader"]
                },
                {
                    test: /\.(ttf|woff|woff2|eot)$/,
                    use: ["file-loader"]
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new DefinePlugin({
                "process.env": {
                    "IS_CLIENT": !IS_SERVER
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