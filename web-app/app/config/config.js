module.exports = {
    services: {
        logger : {
            active : true,
            module : require('@jeneric/logger/web')
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