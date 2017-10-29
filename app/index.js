#!/usr/bin/env node
const AbstractApplication = require('@jeneric/app/abstract-application');
const config = require('./config');

class Main extends AbstractApplication {
    constructor(config) {

        super(config);

    }

    start() {

        this.logger.info('start application');

        this.data.log.find({}, this._handleGetLogs.bind(this));
    }

    _handleGetLogs(logs) {
        console.log(logs[0]);
    }
}

let main = new Main(config);