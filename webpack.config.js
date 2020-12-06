const currentTask = process.env.npm_lifecycle_event; //gives the name of the current taskof npm whih is running(ie dev or build)

const path = require('path');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// mini-css-extract-plugn has two things one is loader and other ia class

const HtmlWebpackPlugin = require('html-webpack-plugin');
const fse = require('fs-extra');

const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];
//hot module repalacement

class TaskAfterCompilation {
    apply(compiler) {
        compiler.hooks.done.tap('Coping Images...', function() {
            fse.copySync('./app/assets/images', './dist/assets/images'); 
        });
    }
}

let cssConfig = {
    test: /\.css$/i,
    use: [
        'css-loader?url=false',
        {
            loader: 'postcss-loader',
            options: {
                postcssOptions: {
                    plugins: postCSSPlugins
                }
            }
        }
    ]
};

let config = {
    entry: './app/assets/scripts/app.js',
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './app/index.html'
        })
    ],
    //watch: true,
    module: {
        rules: [
            cssConfig
        ],
    }
};

if(currentTask == 'dev') {
    config.output = {
        filename: 'app.bundled.js',
        path: path.resolve(__dirname, 'app')
    };
    
    config.devServer = {
        before: function(app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.resolve(__dirname, 'app'),
        port: 3000,
        hot: true, //'hot module' feature allows injecting css and js refresh
        host: '0.0.0.0',
        //open: true
    };
    
    config.mode = 'development';
    
    cssConfig.use.unshift('style-loader');
}

if(currentTask == 'build') {
    config.mode = 'production';
    config.output = {
        filename: '[name].[chunkhash].bundled.js',
        path: path.resolve(__dirname, 'dist')
    };
    config.optimization = {
        splitChunks: {
            chunks: 'all',
        }
    };
    
    config.plugins.push(
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: 'styles.[chunkhash].css'
        }),
        new TaskAfterCompilation()
    );
    
    cssConfig.use.unshift(MiniCssExtractPlugin.loader);
    
    postCSSPlugins.push(require('cssnano'));
}
module.exports = config;