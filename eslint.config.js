import eslintConfig from '@it-incubator/eslint-config';

export default [
    eslintConfig,
    {
        files: ['**/*.stories.tsx'],
        rules: {
            'no-console': 'off',
            'react-hooks/rules-of-hooks': 'off',
        },
    },
];
