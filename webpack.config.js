module.exports = {
    entry: "./app/components/Main.js",

    output: {
        filename: "bundle.js"
    },

    devServer: {
        contentBase: "./public",
        inline: true,
        port: 3333
    },

    debug: true,

    devtool: "#eval-source-map",

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                }
            }
        ]
    }
};
