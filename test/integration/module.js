'use strict';

var CLIEngine = require('eslint').CLIEngine,
    config = require('../../src/module.js');

describe('eslint-config-holy-grail', () => {

    var cli;

    beforeEach(() => cli = new CLIEngine(config));

    it('should lint a dummy text', () => {
        var report = cli.executeOnText("'use strict';", 'fake.txt');

        expect(report.errorCount).to.equal(0);
    });

});
