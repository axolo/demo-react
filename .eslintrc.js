module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['alloy', 'alloy/react', 'alloy/typescript'],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    semi: 2,
    'default-case-last': 0,
    'comma-dangle': ['error', 'only-multiline'],
  },
};
