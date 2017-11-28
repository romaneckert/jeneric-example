#!/usr/bin/env node
const AbstractApplication = require('@jeneric/core/app/abstract-application');
const config = require('./config');
const path = require('path');

class Main extends AbstractApplication {
    constructor(config) {

        super(config);

    }

    start() {

        this.logger.notice('start application');

        this.data.log.find({}, this._handleGetLogs.bind(this));
    }

    _handleGetLogs(logs) {
        this.logger.debug(logs[0]);
    }
}

let main = new Main(config);