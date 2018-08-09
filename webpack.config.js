const commonConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AngularCompilerPlugin = require("@ngtools/webpack");

module.exports = webpackMerge(commonConfig, {
        devtools:env.production ? false : "inline-source-map",

        entry:{
            app:"./src/main.ts",
            polyfills:"./src/polyfills.ts"
        },
        output:{
            path:getRoot("dist"),
            publicPath:"/",
            fileName:"[name].js"
        },
        resolve:[".js", ".ts", ".html"],
        module:{
            rules:[
                {
                    test: /.js$/,
                    parser:{
                        system: true
                    }
                },
                {
                    test: /.ts$/,
                    exclude: /node_modules/,
                    use: "@ngtools/webpack"
                }
            ]
        },
        plugins:[
            new AngularCompilerPlugin({
                mainPath:"./src/main.ts",
                tsConfigPath:"./src/tsconfig.app.json",
                skipCodeGeneration:false
            }),

            new HtmlWebpackPlugin({
                template:'./src/index.html',
                chunksSortMode: (a, b) => {
                    var order = ["polyfills", "vendor", "main"];
                    return order.indexOf(a.names[0]) - order.indexOf(b.names[0]);
                }
            }),
        ]
    });