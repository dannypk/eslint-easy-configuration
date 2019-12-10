module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: [
    'no-async-without-await',
    'jest'
  ],
  rules: {
    'class-methods-use-this': 'off',
    'no-trailing-spaces': 'off',
    'padded-blocks': 'off',
    'comma-dangle': 'off',
    'function-paren-newline': 'off',
    'max-len': ['error', 120],
    'react/jsx-filename-extension': 'off',
    'react/jsx-tag-spacing': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-indent-props': 'off',
    'react/no-danger': 'off',
    'react/no-unescaped-entities': 'off',
    'react/no-did-mount-set-state': 'off',
    'react/no-typos': 'off',
    'react/prefer-stateless-function': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/button-has-type': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/jsx-wrap-multilines': 'off',
    'eol-last': 'off',
    'arrow-parens': 'off',
    'no-underscore-dangle': 'off',
    'no-await-in-loop': 'off',
    'no-confusing-arrow': 'off',
    'no-use-before-define': 'off',
    'no-alert': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'max-lines': ['error', {
      max: 300
    }],
    'max-statements': ['error', 15, {
      ignoreTopLevelFunctions: true
    }],
    'no-async-without-await/no-async-without-await': 'error',
    'no-multiple-empty-lines': ['error', {
      max: 1
    }],
    'object-shorthand': 'off',
    'object-curly-newline': 'off',
    'one-var': 'off',
    'one-var-declaration-per-line': 'off',
    'prefer-destructuring': 'off',
    'react/sort-comp': 'off',
    'no-param-reassign': ['error', {
      props: false
    }],
    'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
    'global-require': 'off',
    'no-plusplus': 'off',
    'jsx-a11y/label-has-for': [ 'error', {
      required: {
        some: [ 'nesting', 'id' ]
      },
      allowChildren: true
    }],
    'jsx-a11y/label-has-associated-control': 'off',
    'operator-linebreak': 'off',
    'implicit-arrow-linebreak': 'off',
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],
    'import/no-useless-path-segments': 'off',
    'import/prefer-default-export': 'off',
    'jest/no-disabled-tests': 'error',
    'jest/no-focused-tests': 'error',
    'jest/no-identical-title': 'off',
    'jest/prefer-to-have-length': 'warn',
    'jest/valid-expect': 'error',
  }
};
