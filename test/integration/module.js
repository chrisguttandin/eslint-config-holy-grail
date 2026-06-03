const { ESLint } = require('eslint');
const { defineConfig } = require('eslint/config');
const config = require('../../src/module.js');

describe('eslint-config-holy-grail', () => {
    let eslint;

    beforeEach(function () {
        this.timeout(4000);

        eslint = new ESLint({
            baseConfig: defineConfig([
                { extends: [config] },
                { files: ['**/*.ts'], languageOptions: { parserOptions: { projectService: { allowDefaultProject: ['dummy.ts'] } } } }
            ]),
            overrideConfigFile: true
        });
    });

    it('should lint a dummy text as JavaScript', async () => {
        const [report] = await eslint.lintText('', { filePath: 'dummy.js' });

        expect(report.errorCount).to.equal(1);
        expect(report.messages[0].messageId).to.equal('no-empty-file');
    });

    it('should lint a dummy text as HTML', async () => {
        const [report] = await eslint.lintText('', { filePath: 'dummy.html' });

        expect(report.errorCount).to.equal(0);
    });

    it('should lint a dummy text as TypeScript', async () => {
        const [report] = await eslint.lintText('', { filePath: 'dummy.ts' });

        expect(report.errorCount).to.equal(2);
        expect(report.messages[0].messageId).to.equal('noStrictNullCheck');
        expect(report.messages[1].messageId).to.equal('no-empty-file');
    });
});
