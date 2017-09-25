const AbstractApplication = require('@jeneric/core/abstract-application');
const config = require('./config/config.js');

class Main extends AbstractApplication {
    constructor(config) {

        super(config);

        this.logger.debug('debug message', {1:'test'});

    }
}

let main = new Main(config);