'use strict';

const expect = require('chai').expect;

const xeeUtils = require('../build/bundle.js').default;

describe('type test', () => {
    it('isString test', () => {
        expect((() => {
            return xeeUtils.isString('1');
        })()).to.be.equal(true);
    })
})