const AbstractRepository = require('@jeneric/entities/abstract-repository');

class CarRepository extends AbstractRepository {

    constructor(entityName) {
        super(entityName);
    }
}

module.exports = AbstractRepository;