const AbstractService = require('@jeneric/web/abstract-service');

class Test extends AbstractService {
    constructor() {
        super();
        this.logger.debug('init test service');
    }
}

module.exports = Test;