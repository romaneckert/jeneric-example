const AbstractApplication = require('@jeneric/core/abstract-application');
const config = require('./config/web.js');

class Main extends AbstractApplication {
    constructor(config) {

        super(config);

        let book1 = new this.models.book('Moby Dick');
        let book2 = new this.models.book('Shakespeare');

        this.logger.debug('new book with title ' + book1.title + ' created', book1);

    }
}

let main = new Main(config);