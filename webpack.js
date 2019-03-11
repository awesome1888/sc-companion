const path = require('path');

module.exports = (env, argv) => {
    env = env || {};
    const development =
        argv.mode === 'development' || env.NODE_ENV === 'development';

    return {
        entry: path.join(__dirname, 'src/index.js'),
        mode: development ? 'development' : 'production',
        output: {
            filename: 'index.js',
            path: path.join(__dirname, 'build'),
            libraryTarget: 'commonjs',
        },
        resolve: {
            extensions: ['.js', '.jsx'],
            symlinks: false,
        },
        externals: ['styled-components', 'styled-components-grid', 'react'],
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
