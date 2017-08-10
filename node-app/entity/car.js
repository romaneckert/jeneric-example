const Entity = require('@jeneric/core/entity');

class Car extends Entity {
    constructor(title, color) {
        super('car');

        this._title = title;
        this._color = color;

    }
}

module.exports = Car;