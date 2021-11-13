const config = require('./webpack.common.js').createConfig();

module.exports = {
    ...config,

    module: {
        ...config.module,

        rules: [
            ...config.module.rules,
        ],
    },

    plugins: [
        ...config.plugins
    ],
};