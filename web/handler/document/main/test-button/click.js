const AbstractHandler = require('@jeneric/web/abstract-handler');

class ClickHandler extends AbstractHandler {
    constructor() {
        super();
    }

    handle(event) {
        this.logger.debug('test button click');
    }
}

module.exports = ClickHandler;