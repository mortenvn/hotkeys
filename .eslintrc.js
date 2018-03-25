module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
    'prettier/react',
  ],
  plugins: ['babel', 'react', 'prettier'],
  settings: {
    react: {
      pragma: 'h',
    },
  },
  rules: {
    'react/no-unknown-property': ['error', { ignore: ['class', 'for'] }],
    'arrow-parens': ['error', 'as-needed', { requireForBlockBody: false }],
    'react/jsx-filename-extension': ['off', { extensions: ['.jsx'] }],
    'no-underscore-dangle': ['off'],
    'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
    'react/forbid-prop-types': ['off'],
    'import/prefer-default-export': ['off'],
    'no-unused-expressions': ['error', { allowTaggedTemplates: true }],
    'react/sort-comp': [
      1,
      {
        order: [
          'type-annotations',
          'static-methods',
          'lifecycle',
          'everything-else',
          'render',
        ],
      },
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        bracketSpacing: true,
        jsxBracketSameLine: true,
      },
    ],
    'jsx-a11y/anchor-is-valid': [
      'error',
      {
        components: ['Link'],
        specialLink: ['to'],
        aspects: ['noHref', 'invalidHref', 'preferButton'],
      },
    ],
    'prefer-destructuring': [
      'error',
      {
        VariableDeclarator: {
          array: true,
          object: true,
        },
        AssignmentExpression: {
          array: false,
          object: false,
        },
      },
      {
        enforceForRenamedProperties: false,
      },
    ],
    'jsx-a11y/label-has-for': [
      'error',
      {
        required: {
          every: ['id'],
        },
        allowChildren: false,
      },
    ],
  },
};
