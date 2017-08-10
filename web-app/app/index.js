const Application = require('./core/application');
const Car = require('./entity/car');

class Main extends Application {
    constructor() {

        super();

        this.kernel.init(require('./config/config.js'));

        this.logger.debug('debug message', {1:'asdf','asdf':3});

        this.createCars();

        console.log(this.entities.cars.find(1));

        this.logger.debug('car with id 1', this.entities.cars.find(1));
        this.logger.debug('car with id 3', this.entities.cars.find(3));
        this.logger.debug('all cars', this.entities.cars.findAll());

        let firstCar = this.entities.cars.find(1);

        console.log(firstCar.drive());

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