const Application = require('./core/application');
const Car = require('./entity/car');

class Main extends Application {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        this.logger.debug('debug message', {1:'test'});

        this.createCars();

        this.logger.error('test error', this.entities.cars.find(1));
        this.logger.info('test info with object', this.entities.cars.find(1));
        this.logger.info('test info');

    }

    createCars() {
        let car = new Car('BMW', '#ffffff');
        let car2 = new Car('Audi', '#ffffff');
        let car3 = new Car('Porsche', '#ffffff');

        car.drive();

        this.entities.persist(car);
        this.entities.persist(car2);
        this.entities.persist(car3);
    }
}

let main = new Main();