const config = require('./webpack.common').createConfig();

module.exports = {
    ...config,

    output: {
        ...config.output,
        filename: "main.js"
    },

    module: {
        ...config.module,

        rules: [
            ...config.module.rules,

            {
                test: /\.css$/,
                use: 'null-loader'
            }
        ]
    },

    plugins: [
        ...config.plugins
    ],

    externals: {
        'express': 'commonjs express',
        'react': 'commonjs react',
        'react-dom/server': 'commonjs react-dom/server',
        'react-router': 'commonjs react-router',
        'react-router-dom': 'commonjs react-router-dom'
    },
};
