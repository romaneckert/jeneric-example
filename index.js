#!/usr/bin/env node
const AbstractApplication = require('@jeneric/core/abstract-application');
const config = require('./app/config/config.js');

class Main extends AbstractApplication {
    constructor(config) {

        super(config);

        console.log(this.classes);

        let book = new this.classes.model.Book();

        console.log(book);

        this.logger.debug('debug message', {1:'asdf','asdf':3});

    }
}

let main = new Main(config);