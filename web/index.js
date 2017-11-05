const AbstractApplication = require('@jeneric/web/abstract-application');
const config = require('./config');

class Main extends AbstractApplication {
    constructor(config) {
        super(config);
    }

    start() {
        this.logger.info('application started');
    }
}

let main = new Main(config);