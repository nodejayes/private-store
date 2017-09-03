const UUID = require('uuid/v4');

let _store = {};

class PrivateStore {
    static register () {
        let id = UUID();
        _store[id] = {};
        return id;
    }

    static write (id, key, value) {
        _store[id][key] = value;
    }

    static read (id, key) {
        return _store[id][key];
    }

    static clear (id) {
        if (_store.hasOwnProperty(id)) {
            delete _store[id];
        }
    }
}
module.exports = PrivateStore;