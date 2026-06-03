// eslint-disable-next-line node/file-extension-in-import
import config from '../../src/module.js';
import { defineConfig } from 'eslint/config';
import globals from 'globals';

// eslint-disable-next-line import/no-default-export
export default defineConfig([
    {
        extends: [config],
        languageOptions: {
            globals: { ...globals.node }
        }
    }
]);
