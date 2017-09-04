const PrivateStore = require('./../index');

class TestClass {
    constructor () {
        this.id = PrivateStore.register();
        PrivateStore.write(this.id, 'name', null);
    }

    dispose() {
        PrivateStore.clear(this.id);
    }

    get Name () {
        return PrivateStore.read(this.id, 'name');
    }

    setMyName (name) {
        PrivateStore.write(this.id, 'name', name);
    }
}
module.exports = TestClass;