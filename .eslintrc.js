module.exports = {
  root: true,
  env: {
    jest: true,
    browser: true,
    es6: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
  extends: [
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:import/warnings',
  ],
  rules: {
    'newline-after-var': 2,
    'object-property-newline': 2,
    'object-curly-newline': [
      2,
      {
        multiline: true,
      },
    ],
    'import/prefer-default-export': 0,
    'prettier/prettier': 'error',
    'jsx-a11y/label-has-for': [
      2,
      {
        components: ['Label'],
        required: {
          every: ['nesting', 'id'],
        },
        allowChildren: true,
      },
    ],
    'no-unused-vars': [
      2,
      {
        ignoreRestSiblings: true,
      },
    ],
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-autofocus': [
      2,
      {
        ignoreNonDOM: true,
      },
    ],
    'react/no-unused-prop-types': 2,
    'react/no-children-prop': 0,
  },
}
