import js from '@eslint/js';
import queryPlugin from '@tanstack/eslint-plugin-query';
import reactPlugin from 'eslint-plugin-react';
import reactCompiler from 'eslint-plugin-react-compiler';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import unusedImports from 'eslint-plugin-unused-imports';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';
import routerPlugin from '@tanstack/eslint-plugin-router';

export default defineConfig([
  // 1. Global ignore patterns
  globalIgnores([
    '**/node_modules/**',
    '**/dist/**',
    '**/build/**',
    '**/public/**',
    '**/*.config.*',
    '**/*.tsconfig*.json',
    '**/vite.config.ts',
    '**/eslint.config.js',
    '**/.env*',
    '**/*.md',
    '**/README.md',
  ]),

  // 2. Base ESLint recommended rules
  // Note: js.configs.recommended is already included via tseslint.config below

  // 3. TypeScript + JS recommended rules
  tseslint.config(js.configs.recommended, tseslint.configs.recommended),

  // 4. Main app code configuration
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
        project: './tsconfig.app.json', // Ensure this path is correct
      },
      globals: {
        React: 'writable',
      },
    },
    plugins: {
      react: reactPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'react-compiler': reactCompiler,
      'unused-imports': unusedImports,
      '@tanstack/query': queryPlugin,
      '@tanstack/router': routerPlugin,
      '@typescript-eslint': tseslint.plugin, // Ensure the plugin is explicitly added
    },
    settings: {
      react: { version: 'detect' },
    },
    rules: {
      // React plugin rules
      ...reactPlugin.configs.recommended.rules,

      // React Hooks rules
      ...reactHooks.configs.recommended.rules,

      // React Compiler rules
      ...reactCompiler.configs.recommended.rules,

      // TanStack plugin rules
      ...queryPlugin.configs.recommended.rules,
      ...routerPlugin.configs.recommended.rules,

      // Unused imports
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'error',
        {
          vars: 'all',
          varsIgnorePattern: '^_',
          args: 'after-used',
          argsIgnorePattern: '^_',
        },
      ],

      // Additional custom rules
      '@typescript-eslint/no-explicit-any': 'warn', // Keep TS rules under the @typescript-eslint namespace
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Ensure TS rules are correctly referenced
      // Example: '@typescript-eslint/rule-name': 'error',
    },
  },
]);
