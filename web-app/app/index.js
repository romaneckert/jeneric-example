const Application = require('./core/application');

class Main extends Application {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        this.logger.debug('debug message', {1:'asdf','asdf':3});

        this.test();
        this.custom.test();
    }

    test() {
        this.logger.info('info message');
    }
}

let main = new Main();