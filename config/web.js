module.exports = {
    models : {
        book : {
            class : require('../model/book')
        }
    },
    repositories : {
        book : {
            class : require('../repository/book')
        }
    }
};