const AbstractApplication = require('@jeneric/core/application');

class Application extends AbstractApplication {
    constructor() {
        super();
    }

    get logger() {
        return this.services.logger;
    }

    get custom() {
        return this.services.custom;
    }

    get entities() {
        return this.services.entities;
    }
}

module.exports = Application;