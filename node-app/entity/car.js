const AbstractEntity = require('@jeneric/core/abstract-entity');

class Car extends AbstractEntity {
    constructor(title, color) {
        super('car');

        this._title = title;
        this._color = color;

    }

    drive() {
        console.log('drive');
    }
}

module.exports = Car;