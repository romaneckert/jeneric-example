const Repository = require('@jeneric/entities/repository');

class CarRepository extends Repository {

    constructor(entityName) {
        super(entityName);
    }
}

module.exports = CarRepository;