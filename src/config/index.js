module.exports = {
    handler: {
        book: {
            list: {
                class: require('../handler/book/list')
            }
        }
    },
    module: {
        mongoose: {
            config: {
                uri: 'mongodb://localhost/jeneric-example'
            }
        },
        server: {
            config: {
                routes: require('./routes')
            }
        }
    }
};