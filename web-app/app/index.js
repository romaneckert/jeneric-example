const Application = require('./core/application');

class Main extends Application {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        this.custom.test();

        this.logger.debug('debug message');
        this.logger.info('info message');
        this.logger.error('error message');
    }
}

let main = new Main();