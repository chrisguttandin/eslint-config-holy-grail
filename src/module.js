'use strict';

module.exports = {
    env: {
        es6: true
    },
    rules: {
        'block-spacing': [ 2, 'always' ],
        'camelcase': 2,
        'comma-spacing': [ 2, { after: true, before: false }],
        'curly': 2,
        'eqeqeq': 2,
        'indent': [ 2, 4, { VariableDeclarator: { let: 1, var: 1 } } ],
        'new-cap': 2,
        'newline-after-var': [ 2, 'always' ],
        'newline-before-return': 2,
        'no-alert': 2,
        'no-bitwise': 2,
        'no-caller': 2,
        'no-console': 2,
        'no-debugger': 2,
        'no-duplicate-imports': [ 2, { includeExports: true } ],
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-unused-expressions': 2,
        'no-unused-vars': 2,
        'no-useless-escape': 2,
        'object-curly-spacing': [ 2, 'always' ],
        'one-var-declaration-per-line': [ 2, 'always' ],
        'quote-props': [ 2, 'consistent-as-needed' ],
        'quotes': [ 2, 'single', 'avoid-escape' ],
        'sort-imports': 2,
        'sort-vars': [ 2, { ignoreCase: true } ],
        'space-before-blocks': [ 2, 'always' ],
        'strict': [ 2, 'global' ],
        'template-curly-spacing': [ 2, 'always' ],
        'vars-on-top': 2,
        'wrap-iife': 2
    }
};
