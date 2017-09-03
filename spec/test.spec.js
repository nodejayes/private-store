const ASSERT = require('assert');

describe('PrivateStore Specs', function () {
    const PrivateStore = require('./../index')();

    class TestClass {
        constructor () {
            PrivateStore.set('name', null);
        }

        destruct () {
            PrivateStore.destruct();
        }

        get Name () {
            return PrivateStore.get('name');
        }

        setMyName (name) {
            PrivateStore.set('name', name);
        }
    }

    it('create class definition', function () {        
        let t = new TestClass();
        t.setMyName('Peter');
        ASSERT.equal(t.Name, 'Peter', '');
        t.setMyName('Paul');
        ASSERT.equal(t.Name, 'Paul');
    });

    it('test multiple instances', function () {
        let t1 = new TestClass();
        let t2 = new TestClass();
        t1.setMyName('Peter');
        t2.setMyName('Paul');
        ASSERT.notEqual(t1.Name, t2.Name, '');
        ASSERT.equal(t1.Name, 'Peter', '');
        ASSERT.equal(t2.Name, 'Paul');
    });
});