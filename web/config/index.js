module.exports = {
    services : {
        test : {
            class : require('../services/test')
        }
    },
    handler : {
        window : {
            resize : {
                class : require('../handler/window/resize')
            }
        },
        document : {
            main : {
                'test-button' : {
                    click : {
                        class: require('../handler/document/main/test-button/click')
                    }
                }
            }
        }
    },
};