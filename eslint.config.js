import tseslintParser from '@typescript-eslint/parser';
import reactCompilerPlugin from 'eslint-plugin-react-compiler';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'src/routeTree.gen.ts'],
  },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-compiler': reactCompilerPlugin },
    rules: { 'react-compiler/react-compiler': 'error' },
  },
];
