const Abstract = require('@jeneric/core/abstract');

class Custom extends Abstract {
    constructor(options) {
        super();

        console.log(options);
    }
}

module.exports = Custom;