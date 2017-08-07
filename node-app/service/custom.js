const Service = require('../core/service');

class Custom extends Service {
    constructor(config) {
        super();

        this._config = config;
    }

    test() {
        this.services.logger.info('custom log entry');
    }
}

module.exports = Custom;