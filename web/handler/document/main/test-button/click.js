const AbstractHandler = require('@jeneric/web/abstract-handler');

class ClickHandler extends AbstractHandler {
    constructor() {
        super();
    }

    handle(event) {
        console.log('test button click');
    }
}

module.exports = ClickHandler;