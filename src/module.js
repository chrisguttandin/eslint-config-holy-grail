module.exports = {
    env: {
        es6: true
    },
    parserOptions: {
        ecmaVersion: '2020',
        sourceType: 'module'
    },
    plugins: ['import', 'node', 'unicorn'],
    reportUnusedDisableDirectives: true,
    rules: {
        'camelcase': ['error', { ignoreDestructuring: true }],
        'class-methods-use-this': 'error',
        'default-case': 'error',
        'default-param-last': 'error',
        'eqeqeq': 'error',
        'for-direction': 'error',
        'func-name-matching': 'error',
        'grouped-accessor-pairs': ['error', 'getBeforeSet'],
        'import/no-cycle': 'error',
        'import/no-default-export': 'error',
        'line-comment-position': ['error', { position: 'above' }],
        'lines-between-class-members': ['error', 'always'],
        'max-classes-per-file': ['error', 1],
        'multiline-comment-style': 'error',
        'new-cap': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-bitwise': 'error',
        'no-buffer-constructor': 'error',
        'no-caller': 'error',
        'no-case-declarations': 'error',
        'no-compare-neg-zero': 'error',
        'no-cond-assign': ['error', 'except-parens'],
        'no-console': 'error',
        'no-constructor-return': 'error',
        'no-debugger': 'error',
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-duplicate-imports': ['error', { includeExports: true }],
        'no-else-return': 'error',
        'no-extend-native': 'error',
        'no-extra-boolean-cast': 'error',
        'no-fallthrough': 'error',
        'no-global-assign': 'error',
        'no-import-assign': 'error',
        'no-irregular-whitespace': 'error',
        'no-loss-of-precision': 'error',
        'no-multi-assign': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-restricted-properties': [
            'error',
            {
                message: 'describe.only() should not end up in any commit.',
                object: 'describe',
                property: 'only'
            },
            {
                message: 'it.only() should not end up in any commit.',
                object: 'it',
                property: 'only'
            }
        ],
        'no-restricted-syntax': [
            'error',
            {
                message: 'xdescribe() should not end up in any commit.',
                selector: 'CallExpression[callee.name="xdescribe"]'
            },
            {
                message: 'xit() should not end up in any commit.',
                selector: 'CallExpression[callee.name="xit"]'
            },
            {
                message: 'OpaqueToken is deprecated. InjectionToken should be used instead.',
                selector: 'NewExpression[callee.name="OpaqueToken"]'
            }
        ],
        'no-return-await': 'error',
        'no-setter-return': 'error',
        'no-shadow': 'error',
        'no-throw-literal': 'error',
        'no-undef': 'error',
        'no-unreachable-loop': 'error',
        'no-unsafe-negation': 'error',
        'no-unsafe-optional-chaining': 'error',
        'no-unused-expressions': 'error',
        'no-unused-vars': 'error',
        'no-useless-catch': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'node/file-extension-in-import': ['error', 'never'],
        'node/no-callback-literal': 'error',
        'node/no-deprecated-api': ['error', { ignoreGlobalItems: ['require.extensions'] }],
        'node/no-missing-require': 'error',
        'node/no-sync': 'error',
        'node/prefer-global/buffer': ['error', 'never'],
        'node/prefer-global/console': 'error',
        'node/prefer-global/process': ['error', 'never'],
        'node/prefer-global/text-decoder': 'error',
        'node/prefer-global/text-encoder': 'error',
        'node/prefer-global/url': 'error',
        'node/prefer-global/url-search-params': 'error',
        'object-shorthand': 'error',
        'padding-line-between-statements': [
            'error',
            {
                blankLine: 'always',
                next: 'return',
                prev: '*'
            },
            {
                blankLine: 'always',
                next: '*',
                prev: ['const', 'let']
            },
            {
                blankLine: 'never',
                next: 'const',
                prev: 'const'
            },
            {
                blankLine: 'never',
                next: 'let',
                prev: 'let'
            }
        ],
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: false
            }
        ],
        'prefer-exponentiation-operator': 'error',
        'prefer-named-capture-group': 'error',
        'prefer-numeric-literals': 'error',
        'prefer-object-spread': 'error',
        'prefer-promise-reject-errors': 'error',
        'prefer-regex-literals': 'error',
        'require-await': 'error',
        'sort-imports': 'error',
        'sort-keys': 'error',
        'sort-vars': ['error', { ignoreCase: true }],
        'strict': ['error', 'global'],
        'symbol-description': 'error',
        'unicorn/better-regex': 'error',
        'unicorn/catch-error-name': ['error', { name: 'err' }],
        'unicorn/consistent-function-scoping': 'error',
        'unicorn/custom-error-definition': 'error',
        'unicorn/error-message': 'error',
        'unicorn/filename-case': ['error', { case: 'kebabCase' }],
        'unicorn/new-for-builtins': 'error',
        'unicorn/no-abusive-eslint-disable': 'error',
        'unicorn/no-array-instanceof': 'error',
        'unicorn/no-array-push-push': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-event-key': 'error',
        'unicorn/prefer-flat-map': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-node-remove': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-text-content': 'error',
        'unicorn/prefer-trim-start-end': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',
        'vars-on-top': 'error'
    }
};
