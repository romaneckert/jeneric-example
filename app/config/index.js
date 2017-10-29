module.exports = {
    services : {
        data : {
            config : {
                db : {
                    host : '127.0.0.1',
                    database : 'jeneric-example'
                }
            }
        }
    },
    entities : {
        book : {
            class : require('../entity/book')
        }
    },
    repositories : {
        book : {
            class : require('../repository/book')
        }
    }
};