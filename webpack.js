const path = require('path');

module.exports = () => {
    return {
        entry: path.join(__dirname, 'src/index.js'),
        mode: 'production',
        output: {
            filename: 'index.js',
            path: path.join(__dirname, 'build'),
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            symlinks: false,
        },
        externals: ['styled-components', 'styled-components-grid'],
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: [
                        {
                            loader: 'babel-loader',
                            options: {
                                presets: [
                                    '@babel/react',
                                    [
                                        '@babel/env',
                                        {
                                            targets: {
                                                browsers: ['last 2 versions'],
                                            },
                                        },
                                    ],
                                ],
                                plugins: [
                                    '@babel/plugin-proposal-object-rest-spread',
                                ],
                            },
                        },
                    ],
                },
            ],
        },
        plugins: [],
    };
};
