const Application = require('./core/application');
const Car = require('./entity/car')

class Main extends Application {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        this.logger.debug('debug message', {1:'asdf','asdf':3});

        this.createCars();

        this.logger.debug('all entities', this.entities.cars.find());

    }

    createCars() {
        let car = new Car('BMW', '#ffffff');
        let car2 = new Car('Audi', '#ffffff');
        let car3 = new Car('Porsche', '#ffffff');

        this.entities.persist(car);
        this.entities.persist(car2);
        this.entities.persist(car3);
    }
}

let main = new Main();