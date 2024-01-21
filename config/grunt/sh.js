module.exports = () => {
    return {
        'lint-config': {
            cmd: 'npm run lint:config'
        },
        'lint-src': {
            cmd: 'npm run lint:src'
        },
        'lint-test': {
            cmd: 'npm run lint:test'
        },
        'test-integration': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-integration.mjs test/integration'
        }
    };
};
