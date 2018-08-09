const commonConfig = require("./webpack.common");
const webpackMerge = require("webpack-merge");

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const AngularCompilerPlugin = require("@ngtools/webpack");

module.exports = webpackMerge(commonConfig, {
        devtools:"cheap-module-source-map",
        entry:{
            polyfills:"./src/polyfills.ts",
            app:"./src/main.ts"
        },
        output: {
            path: root('dist'),
            filename: 'js/[name].bundle.js',
            chunkFilename: 'js/[id].chunk.js'
        },
        resolve:[".js", ".ts", ".html"],
        module:{
            rules:[
                {
                    test: /\.ts$/,
                    loaders: ['@ngtools/webpack']
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
        ],
        devServer: {
            historyApiFallback: true,
            watchOptions: {
                aggregateTimeout: 300,
                poll: 1000
            },
            open: true,
            overlay: true,
            stats: {
                colors: true,
                hash: true,
                timings: true,
                chuckModules: false,
                modules: true,
                maxModules: 0,
                reasons: false,
                warnings: true,
                version: false,
                assets: false,
                chunks: true,
                children: false
            } // none (or false), errors-only, minimal, normal (or true) and verbose
        },
        node: {
            global: true,
            crypto: 'empty',
            process: true,
            module: false,
            clearImmediate: false,
            setImmediate: false
        }
    });


// Helper functions
function root(args) {
    args = Array
        .prototype
        .slice
        .call(arguments, 0);
    return path
        .join
        .apply(path, [__dirname].concat(args));
}