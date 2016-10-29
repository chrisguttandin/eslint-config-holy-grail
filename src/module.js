'use strict';

module.exports = {
    env: {
        es6: true
    },
    rules: {
        'block-spacing': [ 2, 'always' ],
        'camelcase': 2,
        'class-methods-use-this': 2,
        'comma-dangle': [ 2, 'never' ],
        'comma-spacing': [ 2, { after: true, before: false }],
        'curly': 2,
        'eqeqeq': 2,
        'func-call-spacing': 2,
        'indent': [ 2, 4, { VariableDeclarator: { let: 1, var: 1 } } ],
        'line-comment-position': [ 2, { position: 'above' } ],
        'new-cap': 2,
        'newline-after-var': [ 2, 'always' ],
        'newline-before-return': 2,
        'newline-per-chained-call': 2,
        'no-alert': 2,
        'no-bitwise': 2,
        'no-caller': 2,
        'no-cond-assign': [ 2, 'except-parens' ],
        'no-console': 2,
        'no-debugger': 2,
        'no-duplicate-imports': [ 2, { includeExports: true } ],
        'no-global-assign': 2,
        'no-mixed-operators': 2,
        'no-restricted-properties': [ 2, {
            object: 'describe',
            property: 'only'
        }, {
            object: 'it',
            property: 'only'
        } ],
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-unsafe-negation': 2,
        'no-unused-expressions': 2,
        'no-unused-vars': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'object-curly-spacing': [ 2, 'always' ],
        'object-shorthand': 2,
        'one-var-declaration-per-line': [ 2, 'always' ],
        'quote-props': [ 2, 'consistent-as-needed' ],
        'quotes': [ 2, 'single', 'avoid-escape' ],
        'rest-spread-spacing': [ 2, 'never' ],
        'semi': [ 2, 'always' ],
        'sort-imports': 2,
        'sort-keys': 2,
        'sort-vars': [ 2, { ignoreCase: true } ],
        'space-before-blocks': [ 2, 'always' ],
        'space-before-function-paren': [ 2, 'always' ],
        'space-infix-ops': [ 2 ],
        'strict': [ 2, 'global' ],
        'symbol-description': 2,
        'template-curly-spacing': [ 2, 'always' ],
        'vars-on-top': 2,
        'wrap-iife': 2
    }
};
