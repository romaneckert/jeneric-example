const AbstractHandler = require('@jeneric/core/web/abstract-handler');

class ClickHandler extends AbstractHandler {
    constructor() {
        super();
    }

    handle(event) {
        this.logger.info('test button click');
    }
}

module.exports = ClickHandler;