const ASSERT = require('assert');
let TestClass = require('./testclass');
let PrivateStore = require('./../index');

describe('PrivateStore Specs', function () {
    it('create class definition', function () {        
        let t = new TestClass();
        t.setMyName('Peter');
        ASSERT.equal(t.Name, 'Peter', '');
        t.setMyName('Paul');
        ASSERT.equal(t.Name, 'Paul');
        t.dispose();
    });

    it('test multiple instances', function () {
        let t1 = new TestClass();
        let t2 = new TestClass();
        t1.setMyName('Peter');
        t2.setMyName('Paul');
        ASSERT.notEqual(t1.Name, t2.Name, '');
        ASSERT.equal(t1.Name, 'Peter', '');
        ASSERT.equal(t2.Name, 'Paul');
        t1.dispose();
        t2.dispose();
    });
});