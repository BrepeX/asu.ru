const path = require("path")
const htmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    entry: {
        filename: path.resolve(__dirname, `./src/index.js`),
    },
    output: {
        path: path.resolve(__dirname, "./build"),
        filename: "main.[contenthash].js",
        assetModuleFilename: (pathData) => {
            const filepath = path.dirname(pathData.filename).split('/').slice(1).join('/');
            return `${filepath}/[name][ext]`;
        },
        clean: true
    },
    performance : {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000,
    },
    devServer: {
        port: 3000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "./build"),
        },
        watchFiles: ["./src/**/*.*"]
    },
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/i,
                type: "asset/resource",

            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: "Нам 50 лет",
            filename: "index.html",
            template: path.resolve(__dirname, "./src/index.html"),
        })
    ]

}