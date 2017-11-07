module.exports = {
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