"use strict";
// flexible reusble functions and classes for any types
class StorageContainer {
    constructor() {
        this.contents = [];
    }
    addItem(item) {
        this.contents.push(item);
    }
    getItem(idx) {
        return this.contents[idx];
    }
}
const usernames = new StorageContainer();
usernames.addItem('cart');
usernames.addItem('wowow');
console.log(usernames.getItem(1));
const herocount = new StorageContainer();
herocount.addItem(123);
herocount.addItem(34223);
console.log(usernames.getItem(1));
