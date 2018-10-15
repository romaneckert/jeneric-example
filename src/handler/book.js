const Handler = require('@jeneric/core/handler');

class BookList extends Handler {

    handle(req, res) {
        return res.render('book');
    }

}

module.exports = BookList;

