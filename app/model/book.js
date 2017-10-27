const AbstractModel = require('@jeneric/app/abstract-model');

class Book extends AbstractModel {

    constructor(title) {

        super('book');

        this._title = title;

    }

    get title() {
        return this._title;
    }
}

module.exports = Book;