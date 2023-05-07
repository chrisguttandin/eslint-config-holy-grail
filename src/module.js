module.exports = {
    env: {
        es6: true
    },
    overrides: [
        {
            files: ['*.ts'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                createDefaultProgram: true,
                project: ['src/tsconfig.json']
            },
            plugins: ['@angular-eslint', '@angular-eslint/template', '@typescript-eslint', 'jsdoc', 'rxjs'],
            processor: '@angular-eslint/template/extract-inline-html',
            rules: {
                '@angular-eslint/component-class-suffix': 'error',
                '@angular-eslint/contextual-decorator': 'error',
                '@angular-eslint/contextual-lifecycle': 'error',
                '@angular-eslint/directive-class-suffix': 'error',
                '@angular-eslint/no-attribute-decorator': 'error',
                '@angular-eslint/no-empty-lifecycle-method': 'error',
                '@angular-eslint/no-forward-ref': 'error',
                '@angular-eslint/no-host-metadata-property': 'error',
                '@angular-eslint/no-input-rename': 'error',
                '@angular-eslint/no-inputs-metadata-property': 'error',
                '@angular-eslint/no-lifecycle-call': 'error',
                '@angular-eslint/no-output-native': 'error',
                '@angular-eslint/no-output-on-prefix': 'error',
                '@angular-eslint/no-output-rename': 'error',
                '@angular-eslint/no-outputs-metadata-property': 'error',
                '@angular-eslint/no-pipe-impure': 'error',
                '@angular-eslint/no-queries-metadata-property': 'error',
                '@angular-eslint/prefer-on-push-component-change-detection': 'error',
                '@angular-eslint/relative-url-prefix': 'error',
                '@angular-eslint/sort-ngmodule-metadata-arrays': 'error',
                '@angular-eslint/use-component-view-encapsulation': 'error',
                '@angular-eslint/use-injectable-provided-in': 'error',
                '@angular-eslint/use-lifecycle-interface': 'error',
                '@angular-eslint/use-pipe-transform-interface': 'error',
                '@typescript-eslint/adjacent-overload-signatures': 'error',
                '@typescript-eslint/array-type': [
                    'error',
                    {
                        default: 'array'
                    }
                ],
                '@typescript-eslint/await-thenable': 'error',
                '@typescript-eslint/ban-ts-comment': 'error',
                '@typescript-eslint/ban-types': [
                    'error',
                    {
                        types: {
                            Boolean: {
                                message: 'Avoid using the `Boolean` type. Did you mean `boolean`?'
                            },
                            Function: {
                                message: 'Avoid using the `Function` type. Prefer a specific function type, like `() => void`.'
                            },
                            Number: {
                                message: 'Avoid using the `Number` type. Did you mean `number`?'
                            },
                            Object: {
                                message: 'Avoid using the `Object` type. Did you mean `object`?'
                            },
                            OpaqueToken: {
                                message: 'Avoid using the `OpaqueToken` type. Prefer the `InjectionToken` instead.'
                            },
                            String: {
                                message: 'Avoid using the `String` type. Did you mean `string`?'
                            },
                            Symbol: {
                                message: 'Avoid using the `Symbol` type. Did you mean `symbol`?'
                            }
                        }
                    }
                ],
                '@typescript-eslint/consistent-generic-constructors': 'error',
                '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
                '@typescript-eslint/consistent-type-definitions': 'error',
                '@typescript-eslint/dot-notation': 'error',
                '@typescript-eslint/explicit-member-accessibility': [
                    'error',
                    {
                        accessibility: 'explicit',
                        overrides: {
                            constructors: 'no-public'
                        }
                    }
                ],
                '@typescript-eslint/member-delimiter-style': [
                    'error',
                    {
                        multiline: {
                            delimiter: 'semi',
                            requireLast: true
                        },
                        singleline: {
                            delimiter: 'semi',
                            requireLast: false
                        }
                    }
                ],
                '@typescript-eslint/member-ordering': 'error',
                '@typescript-eslint/method-signature-style': ['error', 'method'],
                '@typescript-eslint/naming-convention': [
                    'error',
                    {
                        format: ['PascalCase'],
                        prefix: ['I'],
                        selector: 'interface'
                    },
                    {
                        format: ['PascalCase'],
                        prefix: ['T'],
                        selector: 'typeAlias'
                    }
                ],
                '@typescript-eslint/no-dynamic-delete': 'error',
                '@typescript-eslint/no-empty-function': 'error',
                '@typescript-eslint/no-empty-interface': 'error',
                '@typescript-eslint/no-inferrable-types': 'error',
                '@typescript-eslint/no-misused-new': 'error',
                '@typescript-eslint/no-misused-promises': 'error',
                '@typescript-eslint/no-namespace': 'error',
                '@typescript-eslint/no-non-null-asserted-nullish-coalescing': 'error',
                '@typescript-eslint/no-non-null-assertion': 'error',
                '@typescript-eslint/no-require-imports': 'error',
                '@typescript-eslint/no-restricted-imports': ['error', '@angular/http', 'core-js', 'lodash-es', 'rxjs/Rx'],
                '@typescript-eslint/no-shadow': ['error', { hoist: 'all' }],
                '@typescript-eslint/no-this-alias': 'error',
                '@typescript-eslint/no-unused-expressions': 'error',
                '@typescript-eslint/no-var-requires': 'error',
                '@typescript-eslint/prefer-for-of': 'error',
                '@typescript-eslint/prefer-function-type': 'error',
                '@typescript-eslint/prefer-namespace-keyword': 'error',
                '@typescript-eslint/strict-boolean-expressions': 'error',
                '@typescript-eslint/triple-slash-reference': ['error', { lib: 'always', path: 'always', types: 'prefer-import' }],
                '@typescript-eslint/type-annotation-spacing': 'error',
                '@typescript-eslint/unified-signatures': 'error',
                'arrow-body-style': 'error',
                'arrow-parens': 'error',
                'capitalized-comments': ['error', 'always'],
                'constructor-super': 'error',
                'dot-notation': 'error',
                'eol-last': 'error',
                'guard-for-in': 'error',
                'id-denylist': ['error', 'any', 'Boolean', 'boolean', 'Number', 'number', 'String', 'string', 'Undefined', 'undefined'],
                'id-match': 'error',
                'import/no-deprecated': 'error',
                'import/no-extraneous-dependencies': 'error',
                'import/no-internal-modules': [
                    'error',
                    {
                        allow: [
                            '@angular/cdk/portal',
                            '@angular/common/http',
                            '@angular/core/testing',
                            '@angular/material/*',
                            '@angular/platform-browser/animations',
                            '@angular/platform-browser-dynamic/testing',
                            '@angular/router/testing',
                            '@ngrx/effects/testing',
                            '@nrwl/angular/testing',
                            'angulartics2/ga',
                            'angulartics2/gst',
                            'lodash-es/*',
                            'regenerator-runtime/runtime',
                            'rxjs-etc/operators',
                            'zone.js/dist',
                            '~common/*'
                        ]
                    }
                ],
                'import/order': 'error',
                'jsdoc/check-alignment': 'error',
                'jsdoc/no-types': 'error',
                'jsdoc/tag-lines': ['error', 'always', { startLines: 1 }],
                'max-classes-per-file': ['error', 2],
                'max-len': ['error', { code: 140 }],
                'new-parens': 'error',
                'no-empty': 'error',
                'no-empty-function': ['error', { allow: ['constructors'] }],
                'no-eval': 'error',
                'no-extra-bind': 'error',
                'no-invalid-this': 'error',
                'no-multiple-empty-lines': 'error',
                'no-new-wrappers': 'error',
                'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
                'no-restricted-imports': 'off',
                'no-restricted-syntax': ['error', 'ForInStatement'],
                'no-sequences': 'error',
                'no-sparse-arrays': 'error',
                'no-undef-init': 'error',
                'no-underscore-dangle': 'off',
                'no-unsafe-finally': 'error',
                'no-unused-labels': 'error',
                'prefer-template': 'error',
                'radix': 'error',
                'rxjs/no-compat': 'error',
                'rxjs/no-connectable': 'error',
                'rxjs/no-exposed-subjects': 'error',
                'rxjs/no-ignored-notifier': 'error',
                'rxjs/no-ignored-observable': 'error',
                'rxjs/no-ignored-replay-buffer': 'error',
                'rxjs/no-ignored-takewhile-value': 'error',
                'rxjs/no-index': 'error',
                'rxjs/no-internal': 'error',
                'rxjs/no-nested-subscribe': 'error',
                'rxjs/no-sharereplay': ['error', { allowConfig: true }],
                'rxjs/no-subclass': 'error',
                'rxjs/no-subject-unsubscribe': 'error',
                'rxjs/no-topromise': 'error',
                'rxjs/no-unbound-methods': 'error',
                'rxjs/no-unsafe-catch': 'error',
                'rxjs/no-unsafe-first': 'error',
                'rxjs/no-unsafe-subject-next': 'error',
                'rxjs/no-unsafe-switchmap': 'error',
                'rxjs/no-unsafe-takeuntil': 'error',
                'rxjs/prefer-observer': 'error',
                'rxjs/suffix-subjects': 'error',
                'rxjs/throw-error': 'error',
                'sort-imports': 'off',
                'use-isnan': 'error',
                'valid-typeof': 'error'
            }
        },
        {
            files: ['*.html'],
            parser: '@angular-eslint/template-parser',
            plugins: ['@angular-eslint/template'],
            rules: {
                '@angular-eslint/template/alt-text': 'error',
                '@angular-eslint/template/banana-in-box': 'error',
                '@angular-eslint/template/button-has-type': 'error',
                '@angular-eslint/template/click-events-have-key-events': 'error',
                '@angular-eslint/template/conditional-complexity': 'error',
                '@angular-eslint/template/cyclomatic-complexity': [
                    'error',
                    {
                        maxComplexity: 6
                    }
                ],
                '@angular-eslint/template/elements-content': 'error',
                '@angular-eslint/template/eqeqeq': 'error',
                '@angular-eslint/template/interactive-supports-focus': 'error',
                '@angular-eslint/template/label-has-associated-control': 'error',
                '@angular-eslint/template/mouse-events-have-key-events': 'error',
                '@angular-eslint/template/no-any': 'error',
                '@angular-eslint/template/no-autofocus': 'error',
                '@angular-eslint/template/no-call-expression': 'error',
                '@angular-eslint/template/no-distracting-elements': 'error',
                '@angular-eslint/template/no-negated-async': 'error',
                '@angular-eslint/template/no-positive-tabindex': 'error',
                '@angular-eslint/template/role-has-required-aria': 'error',
                '@angular-eslint/template/table-scope': 'error',
                '@angular-eslint/template/valid-aria': 'error',
                'node/no-deprecated-api': 'off',
                'node/prefer-global/buffer': 'off',
                'node/prefer-global/console': 'off',
                'node/prefer-global/process': 'off',
                'node/prefer-global/text-decoder': 'off',
                'node/prefer-global/text-encoder': 'off',
                'node/prefer-global/url': 'off',
                'node/prefer-global/url-search-params': 'off',
                'strict': 'off'
            }
        }
    ],
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
        'logical-assignment-operators': 'error',
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
        'no-new-native-nonconstructor': 'error',
        'no-nonoctal-decimal-escape': 'error',
        'no-param-reassign': 'error',
        'no-promise-executor-return': 'error',
        'no-restricted-imports': ['error', '@angular/http', 'core-js', 'lodash-es', 'rxjs/Rx'],
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
        'no-unused-private-class-members': 'error',
        'no-unused-vars': 'error',
        'no-useless-backreference': 'error',
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
        'prefer-object-has-own': 'error',
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
        'unicorn/no-empty-file': 'error',
        'unicorn/no-for-loop': 'error',
        'unicorn/no-invalid-remove-event-listener': 'error',
        'unicorn/no-lonely-if': 'error',
        'unicorn/no-new-array': 'error',
        'unicorn/no-object-as-default-parameter': 'error',
        'unicorn/no-process-exit': 'error',
        'unicorn/no-static-only-class': 'error',
        'unicorn/no-this-assignment': 'error',
        'unicorn/no-useless-fallback-in-spread': 'error',
        'unicorn/no-useless-length-check': 'error',
        'unicorn/no-useless-promise-resolve-reject': 'error',
        'unicorn/no-useless-spread': 'error',
        'unicorn/no-zero-fractions': 'error',
        'unicorn/prefer-array-find': 'error',
        'unicorn/prefer-array-flat': 'error',
        'unicorn/prefer-code-point': 'error',
        'unicorn/prefer-date-now': 'error',
        'unicorn/prefer-event-key': 'error',
        'unicorn/prefer-export-from': 'error',
        'unicorn/prefer-flat-map': 'error',
        'unicorn/prefer-includes': 'error',
        'unicorn/prefer-modern-dom-apis': 'error',
        'unicorn/prefer-negative-index': 'error',
        'unicorn/prefer-node-remove': 'error',
        'unicorn/prefer-object-from-entries': 'error',
        'unicorn/prefer-string-slice': 'error',
        'unicorn/prefer-text-content': 'error',
        'unicorn/prefer-trim-start-end': 'error',
        'unicorn/prefer-type-error': 'error',
        'unicorn/throw-new-error': 'error',
        'vars-on-top': 'error'
    }
};
