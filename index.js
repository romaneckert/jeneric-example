#!/usr/bin/env node
const AbstractApplication = require('@jeneric/core/abstract-application');
const config = require('./config/app.js');

class Main extends AbstractApplication {
    constructor(config) {

        super(config);

        let book = new this.models.book('Moby Dick');

        this.logger.debug('new book with title ' + book.title + ' created', book);

    }
}

let main = new Main(config);