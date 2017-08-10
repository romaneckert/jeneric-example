module.exports = {
    services: {
        logger : {
            active : true,
            module : require('@jeneric/logger')
        },
        entities : {
            active : true,
            module : require('@jeneric/entities'),
            config : {
                entities : {
                    car : {
                        entity : require('../entity/car'),
                        repository : require('../entity/repository')
                    }
                }
            }
        },
        custom : {
            active : true,
            module : require('../service/custom'),
            config : {
                text : 'blub'
            }
        }
    }
};