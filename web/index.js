const AbstractApplication = require('@jeneric/core/abstract-application');
const config = require('./config');

class Main extends AbstractApplication {
    constructor(config) {
        super(config);
    }
}

let main = new Main(config);