const AbstractHandler = require('@jeneric/web/abstract-handler');

class ResizeHandler extends AbstractHandler {
    constructor() {
        super();
    }

    handle(event) {
        console.log('window resize');
    }
}

module.exports = ResizeHandler;