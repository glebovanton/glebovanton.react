module.exports = {
    rules: {
        'arrow-parens': [2, 'as-needed'],
        'strict': 0,
        'quotes': [1, 'single'],
        'no-underscore-dangle': 0,
        'no-native-reassign': 0,
        'no-console': 0,
        'no-unused-vars': [2, { vars: 'all', args: 'none' }],
        'no-extra-semi': 2,
        'no-extra-boolean-cast': 0,
        'no-mixed-spaces-and-tabs': 2,
        'no-multi-spaces': 2,
        'no-use-before-define': 0,
        'no-shadow': 2,
        'no-sequences': 2,
        'eqeqeq': 2,
        'comma-dangle': [0, 'always-multiline'],
        'new-cap': 0,
        'handle-callback-err': 2,
        'max-len': [
            'error', 120, {
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreUrls: true,
                ignoreTemplateLiterals: true,
            },
        ],
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-empty': 2,
        'no-extra-parens': [2, 'all'],
        'no-invalid-regexp': 2,
        'no-unreachable': 2,
        'use-isnan': 2,
        'valid-typeof': 2,
        'no-unexpected-multiline': 2,
        'consistent-return': 0,
        'curly': [2, 'all'],
        'dot-notation': 2,
        'guard-for-in': 0,
        'no-alert': 2,
        'no-caller': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-extra-bind': 2,
        'no-fallthrough': 2,
        'no-implicit-coercion': [1, { 'boolean': true, 'number': true, 'string': true }],
        'no-iterator': 2,
        'no-multi-str': 2,
        'no-self-compare': 2,
        'no-useless-call': 2,
        'no-with': 2,
        'no-undef': 2,
        'no-new-require': 2,
        'no-process-exit': 2,
        'camelcase': 0,
        'eol-last': 2,
        'no-multiple-empty-lines': [1, { 'max': 2 }],
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'space-before-function-paren': 2,
        'semi': 2,
        'object-curly-newline': [2, { 'ObjectPattern': { 'multiline': true } }],
        'indent-legacy': [2, 4, { SwitchCase: 1 }],
        'no-trailing-spaces': [2, { ignoreComments: true }],
        'key-spacing': 2,
        'comma-spacing': 2,
        'block-spacing': [2, 'always'],
        'array-element-newline': 0,
        'array-bracket-newline': 0,
        'array-bracket-spacing': [2, 'never'],
        'spaced-comment': [2, 'always'],
        'switch-colon-spacing': 2,
        'no-array-constructor': 2,
        'linebreak-style': 2,
        'keyword-spacing': 2,
        'func-call-spacing': 2,
        'object-curly-spacing': [2, 'always'],
        'no-invalid-this': 2,
        'no-throw-literal': 2,
        'indent': ['error', 4, { SwitchCase: 1 }]
    },
    env: { es6: true, node: true, jest: true, browser: true },
    parserOptions: { ecmaVersion: 9 },
    globals: { window: true }
};
