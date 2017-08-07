#!/usr/bin/env node
const Application = require('./core/application');

class Main extends Application {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        this.logger.debug('start application');

        this.test();
        this.custom.test();
    }

    test() {
        this.logger.info('info message');
    }
}

let main = new Main();