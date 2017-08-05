const Service = require('../core/service');

class Custom extends Service {
    constructor(config) {
        super();

        this._config = config;
    }

    test() {
        console.log(this._config.text);
    }
}

module.exports = Custom;