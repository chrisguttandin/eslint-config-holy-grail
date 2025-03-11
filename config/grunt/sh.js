module.exports = () => {
    return {
        'test-integration': {
            cmd: 'mocha --bail --parallel --recursive --require config/mocha/config-integration.mjs test/integration'
        }
    };
};
