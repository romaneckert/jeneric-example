#!/usr/bin/env node
const AbstractApplication = require('@jeneric/core/abstract-application');
const config = require('./config');

class Main extends AbstractApplication {
    constructor(config) {

        super(config);

    }

    start() {
        let book = new this.models.book('Moby Dick');

        this.data.add(book);

        this.repositories.log.find({}, this._handleGetLogs.bind(this));
    }

    _handleGetLogs(logs) {
        console.log(logs);
    }
}

let main = new Main(config);