const AbstractApplication = require('@jeneric/web/abstract-application');
const config = require('./config');

class Main extends AbstractApplication {
    constructor(config) {
        super(config);
    }

    start() {
        this.logger.info('application started');

        $(window).on('resize', this.handler['window']['resize']);
    }
}

let main = new Main(config);