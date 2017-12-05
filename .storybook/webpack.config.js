const path = require('path');

const SRC_PATH = path.join(__dirname, '../src');

module.exports = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                include: [
                    SRC_PATH,
                ]
            },
            {
                test: /\.(jpg|png|svg)$/,
                loader: 'file-loader',
                include: SRC_PATH
            },
            {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
                include: SRC_PATH
            }
        ]
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        enforceExtension: false
    }
};