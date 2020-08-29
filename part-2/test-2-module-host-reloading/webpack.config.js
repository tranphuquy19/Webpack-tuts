const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (env = {}, argv = {}) => {
    // console.log({ env, argv });
    return {
        module: {
            rules: [
                {
                    test: /\.js$/,
                    use: 'babel-loader'
                }
            ]
        },

        plugins: [
            argv.mode === 'development' ? new HtmlWebpackPlugin() : null
        ].filter(plugin => !!plugin)
    }
}