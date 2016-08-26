'use strict';

var chai = require('chai');

module.exports = {
    default: {
        options: {
            bail: true,
            clearRequireCache: true,
            require: [
                () => {
                    global.expect = chai.expect;
                }
            ]
        },
        src: [
            'test/integration/**/*.js'
        ]
    }
};