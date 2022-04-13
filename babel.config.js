module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                'modules': 'false',
                'useBuiltIns': 'usage',
                "corejs": 3,
                'targets': '> 0.25%, not dead',
            }
        ]
    ],
    env: {
        test: {
            presets: [['@babel/preset-env', {targets: {node: 'current'}}]],
        },
    },
};