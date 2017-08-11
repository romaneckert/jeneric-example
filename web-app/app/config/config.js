module.exports = {
    services: {
        logger : {
            active : true,
            module : require('@jeneric/logger/web')
        },
        entities : {
            active : true,
            module : require('@jeneric/entities/web'),
            config : {
                entities : {
                    car : {
                        entity : require('../entity/car'),
                        repository : require('../repository/car')
                    }
                }
            }
        },
        custom : {
            active : true,
            module : require('../service/custom')
        }
    }
};