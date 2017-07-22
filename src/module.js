module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: '2017',
        sourceType: 'module'
    },
    rules: {
        'array-bracket-spacing': [ 2, 'always' ],
        'block-spacing': [ 2, 'always' ],
        'camelcase': 2,
        'class-methods-use-this': 2,
        'comma-dangle': [ 2, 'never' ],
        'comma-spacing': [ 2, { after: true, before: false } ],
        'curly': 2,
        'eqeqeq': 2,
        'for-direction': 2,
        'func-call-spacing': 2,
        'indent': [ 2, 4, { VariableDeclarator: { let: 1, var: 1 } } ],
        'line-comment-position': [ 2, { position: 'above' } ],
        'multiline-ternary': [ 2, 'always-multiline' ],
        'new-cap': 2,
        'newline-per-chained-call': 2,
        'no-alert': 2,
        'no-bitwise': 2,
        'no-buffer-constructor': 2,
        'no-caller': 2,
        'no-compare-neg-zero': 2,
        'no-cond-assign': [ 2, 'except-parens' ],
        'no-console': 2,
        'no-debugger': 2,
        'no-dupe-args': 2,
        'no-dupe-keys': 2,
        'no-duplicate-case': 2,
        'no-duplicate-imports': [ 2, { includeExports: true } ],
        'no-else-return': 2,
        'no-extra-boolean-cast': 2,
        'no-global-assign': 2,
        'no-mixed-operators': 2,
        'no-multi-assign': 2,
        'no-multi-spaces': 2,
        'no-restricted-properties': [ 2, {
            object: 'describe',
            property: 'only'
        }, {
            object: 'it',
            property: 'only'
        } ],
        'no-restricted-syntax': [ 2, 'CallExpression[callee.name="xdescribe"]', 'CallExpression[callee.name="xit"]' ],
        'no-return-await': 2,
        'no-sync': 2,
        'no-throw-literal': 2,
        'no-trailing-spaces': 2,
        'no-undef': 2,
        'no-unsafe-negation': 2,
        'no-unused-expressions': 2,
        'no-unused-vars': 2,
        'no-useless-escape': 2,
        'no-useless-return': 2,
        'no-var': 2,
        'object-curly-newline': [ 2, { consistent: true } ],
        'object-curly-spacing': [ 2, 'always' ],
        'object-shorthand': 2,
        'one-var-declaration-per-line': [ 2, 'always' ],
        'padding-line-between-statements': [
            2,
            {
                blankLine: 'always',
                next: 'return',
                prev: '*'
            }, {
                blankLine: 'always',
                next: '*',
                prev: [ 'const', 'let' ]
            }, {
                blankLine: 'never',
                next: 'const',
                prev: 'const'
            }, {
                blankLine: 'never',
                next: 'let',
                prev: 'let'
            }
        ],
        'prefer-const': [ 2, {
            destructuring: 'any',
            ignoreReadBeforeAssign: false
        } ],
        'prefer-numeric-literals': 2,
        'prefer-promise-reject-errors': 2,
        'quote-props': [ 2, 'consistent-as-needed' ],
        'quotes': [ 2, 'single', 'avoid-escape' ],
        'require-await': 2,
        'rest-spread-spacing': [ 2, 'never' ],
        'semi': [ 2, 'always' ],
        'semi-style': 2,
        'sort-imports': 2,
        'sort-keys': 2,
        'sort-vars': [ 2, { ignoreCase: true } ],
        'space-before-blocks': [ 2, 'always' ],
        'space-before-function-paren': [ 2, 'always' ],
        'space-infix-ops': [ 2 ],
        'strict': [ 2, 'global' ],
        'switch-colon-spacing': 2,
        'symbol-description': 2,
        'template-curly-spacing': [ 2, 'always' ],
        'vars-on-top': 2,
        'wrap-iife': 2
    }
};
