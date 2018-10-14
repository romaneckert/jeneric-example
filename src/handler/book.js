const AbstractHandler = require('@jeneric/core/src/core/abstract-handler');

class BookList extends AbstractHandler {

    handle(req, res) {
        return res.render('book');
    }

}

module.exports = BookList;

