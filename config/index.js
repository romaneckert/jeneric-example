module.exports = {
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