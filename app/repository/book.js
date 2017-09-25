const AbstractRepository = require('@jeneric/core/abstract-repository');

class Book extends AbstractRepository {

    constructor() {
        super('book');
    }
}

module.exports = Book;