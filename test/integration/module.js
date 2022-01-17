const { ESLint } = require('eslint');
const config = require('../../src/module.js');

describe('eslint-config-holy-grail', () => {
    let eslint;

    beforeEach(() => (eslint = new ESLint({ baseConfig: config })));

    it('should lint a dummy text', async () => {
        const [report] = await eslint.lintText('');

        expect(report.errorCount).to.equal(0);
    });
});
