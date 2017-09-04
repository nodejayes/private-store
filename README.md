# private-store
Allows to set private variables in a Javascript Class

## Example

```javascript
const PrivateStore = require('private-store');

class TestClass {
    constructor () {
        // register a new private store
        this.id = PrivateStore.register();
        PrivateStore.write(this.id, 'name', null);
    }

    dispose() {
        // clear the private store
        PrivateStore.clear(this.id);
    }

    get Name () {
        // read a value from private store
        return PrivateStore.read(this.id, 'name');
    }

    setMyName (name) {
        // write a value in private store
        PrivateStore.write(this.id, 'name', name);
    }
}
module.exports = TestClass;
```
