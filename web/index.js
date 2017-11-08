const AbstractApplication = require('@jeneric/web/abstract-application');
const config = require('./config');

class Main extends AbstractApplication {
    constructor(config) {
        super(config);
    }

    start() {
        this.logger.info('info message', {test:'test'});
        this.logger.notice('notice message', {test:'test'});
        this.logger.warning('warning message');
        this.logger.debug('debug message');
        this.logger.critical('critical message');
        this.logger.error('error message');
        this.logger.emergency('emergency message');

        throw new Error('test error');
    }
}

let main = new Main(config);