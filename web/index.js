const AbstractApplication = require('@jeneric/core/abstract-application');

class Main extends AbstractApplication {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        this.logger.debug('debug message', {1:'test'});

    }
}

let main = new Main();