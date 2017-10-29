const AbstractEntity = require('@jeneric/app/abstract-entity');

class Book extends AbstractEntity {

    constructor(title) {

        super('book');

        this._title = title;

    }

    get title() {
        return this._title;
    }
}

module.exports = Book;