const path = require('path')

module.exports = {
    mode: 'development',
    devtool: false,
    entry: __dirname + '/index.jsx',
    output: {
        filename: 'main.js',
        path: path.join(__dirname, '../template/static/react')


    },
    module: {
        rules: [
            {
                test: /\.jsx$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react']
                    }
                }
            }
        ]
    }
}