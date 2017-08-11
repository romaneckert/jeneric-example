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
                        entityClass : require('../entity/car'),
                        repositoryClass : require('../repository/car')
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