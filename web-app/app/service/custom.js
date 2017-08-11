const AbstractService = require('@jeneric/core/abstract-service');

class Custom extends AbstractService {
    constructor(config) {
        super();

        this._config = config;
    }

    test() {
        this.services.logger.info('custom log entry');
    }
}

module.exports = Custom;