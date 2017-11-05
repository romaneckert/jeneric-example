module.exports = {
    handler : {
        window : {
            resize : {
                class : require('../handler/window/resize')
            }
        },
        document : {
            'test-button' : {
                click : {
                    class: require('../handler/document/test-button/click')
                }
            }
        }
    },
};