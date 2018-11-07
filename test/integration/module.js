const { CLIEngine } = require('eslint');
const config = require('../../src/module.js');

describe('eslint-config-holy-grail', () => {

    let cli;

    beforeEach(() => cli = new CLIEngine(config));

    it('should lint a dummy text', () => {
        const report = cli.executeOnText('');

        expect(report.errorCount).to.equal(0);
    });

});
