const AbstractApplication = require('@jeneric/core/abstract-application');

class Main extends AbstractApplication {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        console.log(this.services.custom);
        console.log(this.services.custom);
        console.log(this.services.custom);


    }
}

let main = new Main();