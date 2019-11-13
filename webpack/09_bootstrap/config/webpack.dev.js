const path = require('path');

module.exports = {
    entry: {
        main: './src/index.js'
    },
    mode: 'development',
    output: {
        filename: 'main-bundle.js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/'
    },
    devServer: {
        contentBase: 'dist'
    },
    module: {
        rules: [
            { // css
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            { // scss
                test: /\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' }
                ]
            },
            { // html
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'index.html'
                        }
                    },
                    {
                        loader: 'extract-loader'
                    },
                    {
                        loader: 'html-loader',
                        options: {
                            attrs: ['img:src']
                        }
                    }
                ]
            }    
        ]
    }
}