const AbstractService = require('@jeneric/core/web/abstract-service');

class Test extends AbstractService {
    constructor() {
        super();
        this.logger.debug('init test service');
    }
}

module.exports = Test;