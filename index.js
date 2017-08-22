#!/usr/bin/env node
const AbstractApplication = require('@jeneric/core/abstract-application');

class Main extends AbstractApplication {
    constructor() {

        super();

        this.kernel.init(require('./app/config/config.js'));

        this.logger.debug('debug message', {1:'asdf','asdf':3});

    }
}

let main = new Main();