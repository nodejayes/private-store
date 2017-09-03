const PrivateStore = require('./privatestore');

module.exports = function () {
    let id = PrivateStore.register();
    return {
        get: function (key) {
            return PrivateStore.read(id, key);
        },
        set: function (key, value) {
            PrivateStore.write(id, key, value);
        },
        destruct: function () {
            PrivateStore.clear(id);
        }
    };
};