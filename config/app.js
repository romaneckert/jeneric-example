module.exports = {
    services : {
        data : {
            config : {
                db : {
                    host : '127.0.0.1',
                    database : 'jeneric-example'
                }
            }
        },
        logger : {
            config : {
                level: {
                    debug: {
                        console: true
                    }
                }
            }
        }
    },
    models : {
        book : {
            class : require('../model/book'),
            schema : {
                title : String
            }
        }
    },
    repositories : {
        book : {
            class : require('../repository/book')
        }
    }
};