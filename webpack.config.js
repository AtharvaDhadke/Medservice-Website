const path = require('path');
const postCSSPlugins = [
    require('postcss-import'),
    require('postcss-mixins'),
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
];
//hot module repalacement
module.exports = {
    entry: './app/assets/scripts/app.js',
    output: {
        filename: 'app.bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    devServer: {
        before: function (app, server) {
            server._watch('./app/**/*.html')
        },
        contentBase: path.resolve(__dirname, 'app'),
        port: 3000,
        hot: true, //hot module feature allows injecting css and js refresh
        host: '0.0.0.0'
        /*,
                open: true*/
    },
    mode: 'development',
    //    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                        'style-loader',
                        'css-loader?url=false',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: postCSSPlugins
                            }
                        }
                        }
                    ],
            },
        ],
    }
}
