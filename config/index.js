module.exports = {
    module: {
        mongoose: {
            uri: 'mongodb://localhost/jeneric-example'
        },
        server: {
            routes: require('./routes')
        }
    }
};