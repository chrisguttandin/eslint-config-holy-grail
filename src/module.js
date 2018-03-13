module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: '2018',
        sourceType: 'module'
    },
    plugins: [
        'unicorn'
    ],
    rules: {
        'array-bracket-spacing': [ 'error', 'always' ],
        'block-spacing': [ 'error', 'always' ],
        'camelcase': 'error',
        'class-methods-use-this': 'error',
        'comma-dangle': [ 'error', 'never' ],
        'comma-spacing': [ 'error', { after: true, before: false } ],
        'curly': 'error',
        'default-case': 'error',
        'eqeqeq': 'error',
        'for-direction': 'error',
        'func-call-spacing': 'error',
        'function-paren-newline': [ 'error', 'multiline' ],
        'indent': [ 'error', 4, { VariableDeclarator: { let: 1, var: 1 } } ],
        'line-comment-position': [ 'error', { position: 'above' } ],
        'lines-between-class-members': [ 'error', 'always' ],
        'multiline-comment-style': 'error',
        'multiline-ternary': [ 'error', 'always-multiline' ],
        'new-cap': 'error',
        'newline-per-chained-call': 'error',
        'no-alert': 'error',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': [ 'error', 'except-parens' ],
        'no-console': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': [ 'error', { includeExports: true } ],
        'no-else-return': 'error',
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-irregular-whitespace': 'error',
        'no-mixed-operators': 'error',
        'no-multi-assign': 'error',
        'no-multi-spaces': 'error',
        'no-param-reassign': 'error',
        'no-restricted-properties': [ 'error', {
            message: 'describe.only() should not end up in any commit.',
            object: 'describe',
            property: 'only'
        }, {
            message: 'it.only() should not end up in any commit.',
            object: 'it',
            property: 'only'
        } ],
        'no-restricted-syntax': [ 'error', {
            message: 'xdescribe() should not end up in any commit.',
            selector: 'CallExpression[callee.name="xdescribe"]'
        }, {
            message: 'xit() should not end up in any commit.',
            selector: 'CallExpression[callee.name="xit"]'
        }, {
            message: 'OpaqueToken is deprecated. InjectionToken should be used instead.',
            selector: 'NewExpression[callee.name="OpaqueToken"]'
        } ],
        'no-return-await': 'error',
        'no-sync': 'error',
        'no-throw-literal': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-unsafe-negation': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'object-curly-newline': [ 'error', { consistent: true } ],
        'object-curly-spacing': [ 'error', 'always' ],
        'object-property-newline': [ 'error', { allowAllPropertiesOnSameLine: true } ],
        'object-shorthand': 'error',
        'one-var-declaration-per-line': [ 'error', 'always' ],
        'padding-line-between-statements': [
            'error',
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
        'prefer-const': [ 'error', {
            destructuring: 'any',
            ignoreReadBeforeAssign: false
        } ],
        'prefer-numeric-literals': 'error',
        'prefer-promise-reject-errors': 'error',
        'quote-props': [ 'error', 'consistent-as-needed' ],
        'quotes': [ 'error', 'single', 'avoid-escape' ],
        'require-await': 'error',
        'rest-spread-spacing': [ 'error', 'never' ],
        'semi': [ 'error', 'always' ],
        'semi-style': 'error',
        'sort-imports': 'error',
        'sort-keys': 'error',
        'sort-vars': [ 'error', { ignoreCase: true } ],
        'space-before-blocks': [ 'error', 'always' ],
        'space-before-function-paren': [ 'error', 'always' ],
        'space-infix-ops': 'error',
        'strict': [ 'error', 'global' ],
        'switch-colon-spacing': 'error',
        'symbol-description': 'error',
        'template-curly-spacing': [ 'error', 'always' ],
        'unicorn/no-process-exit': [ 'error' ],
        'vars-on-top': 'error',
        'wrap-iife': 'error'
    }
};
