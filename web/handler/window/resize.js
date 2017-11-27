const AbstractHandler = require('@jeneric/core/web/abstract-handler');

class ResizeHandler extends AbstractHandler {
    constructor() {
        super();
    }

    handle(event) {
        this.logger.debug('window resize');
    }
}

module.exports = ResizeHandler;