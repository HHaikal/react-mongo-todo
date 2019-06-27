const merge = require('webpack-merge')
const base = require('./base.config.js')

module.exports = merge(base, {
    devtool: "eval-source-map",

    devServer: {
        inline: true,
        port: 3000,
        hot: true
    }
})
