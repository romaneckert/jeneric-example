(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

module.exports = {
    services: {
        logger: {
            active: false,
            module: require('@jeneric/logger'),
            options: {
                directory: 'var/logs/',
                consoleLevels: ['debug', 'info', 'error']
            }
        },
        custom: {
            active: true,
            module: require('../service/custom'),
            options: {
                test: true
            }
        }
    }
};

},{"../service/custom":3,"@jeneric/logger":9}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractApplication = require('@jeneric/core/abstract-application');

var Main = function (_AbstractApplication) {
    _inherits(Main, _AbstractApplication);

    function Main() {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

        _this.kernel.init(require('./config/config.js'));

        console.log(_this.services.custom);
        console.log(_this.services.custom);
        console.log(_this.services.custom);

        return _this;
    }

    return Main;
}(AbstractApplication);

var main = new Main();

},{"./config/config.js":1,"@jeneric/core/abstract-application":4}],3:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('@jeneric/core/abstract');

var Custom = function (_Abstract) {
    _inherits(Custom, _Abstract);

    function Custom(options) {
        _classCallCheck(this, Custom);

        var _this = _possibleConstructorReturn(this, (Custom.__proto__ || Object.getPrototypeOf(Custom)).call(this));

        console.log(options);
        return _this;
    }

    return Custom;
}(Abstract);

module.exports = Custom;

},{"@jeneric/core/abstract":6}],4:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('./abstract');

/** the main application class have to extend the application class. */

var AbstractApplication = function (_Abstract) {
    _inherits(AbstractApplication, _Abstract);

    function AbstractApplication() {
        _classCallCheck(this, AbstractApplication);

        return _possibleConstructorReturn(this, (AbstractApplication.__proto__ || Object.getPrototypeOf(AbstractApplication)).call(this));
    }

    return AbstractApplication;
}(Abstract);

module.exports = AbstractApplication;

},{"./abstract":6}],5:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('./abstract');

var AbstractService = function (_Abstract) {
    _inherits(AbstractService, _Abstract);

    function AbstractService() {
        _classCallCheck(this, AbstractService);

        return _possibleConstructorReturn(this, (AbstractService.__proto__ || Object.getPrototypeOf(AbstractService)).call(this));
    }

    return AbstractService;
}(Abstract);

module.exports = AbstractService;

},{"./abstract":6}],6:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Kernel = require('./kernel');

/** all classes extends the abstract class.
 * @abstract
 */

var Abstract = function () {
    function Abstract() {
        _classCallCheck(this, Abstract);
    }

    /**
     * the application kernel
     * @returns {Kernel}
     */


    _createClass(Abstract, [{
        key: 'kernel',
        get: function get() {
            return require('./kernel');
        }

        /**
         * all registered components
         */

    }, {
        key: 'services',
        get: function get() {
            return this.kernel.services;
        }
    }, {
        key: 'config',
        get: function get() {
            return this.kernel.config;
        }
    }]);

    return Abstract;
}();

module.exports = Abstract;

},{"./kernel":7}],7:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Services = require('./services');

var Kernel = function () {
    function Kernel() {
        _classCallCheck(this, Kernel);

        this._config = null;
        this._services = new Services();
        this._initialized = false;
    }

    _createClass(Kernel, [{
        key: 'init',
        value: function init(config) {

            this._config = config;

            if ('object' !== _typeof(this._config.services)) throw new Error('config have no modules configuration');

            for (var key in this._config.services) {

                var configuration = this._config.services[key];

                if (!configuration.active) continue;

                this._services[key] = new configuration.module(configuration.options);
            }

            this._initialized = true;

            //this.services.logger.debug('all services are initialized');
        }
    }, {
        key: 'config',
        get: function get() {
            return this._config;
        }
    }, {
        key: 'services',
        get: function get() {

            if (!this._initialized) throw new Error('kernel not initialized, please call kernel.init');

            return this._services;
        }
    }]);

    return Kernel;
}();

module.exports = new Kernel();

},{"./services":8}],8:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Services = function () {
    function Services() {
        _classCallCheck(this, Services);

        return new Proxy(this, this);
    }

    _createClass(Services, [{
        key: 'set',
        value: function set(target, serviceKey, instance, reciever) {
            if ('undefined' !== typeof this['_' + serviceKey]) throw new Error('service ' + serviceKey + ' already exists');
            this['_' + serviceKey] = instance;
            return true;
        }
    }, {
        key: 'get',
        value: function get(target, serviceKey) {
            if ('undefined' === typeof this['_' + serviceKey]) throw new Error('service ' + serviceKey + ' not exists, please check your config.js');
            return this['_' + serviceKey];
        }
    }]);

    return Services;
}();

module.exports = Services;

},{}],9:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractService = require('@jeneric/core/abstract-service');

var Logger = function (_AbstractService) {
    _inherits(Logger, _AbstractService);

    function Logger() {
        _classCallCheck(this, Logger);

        var _this = _possibleConstructorReturn(this, (Logger.__proto__ || Object.getPrototypeOf(Logger)).call(this));

        console.log('logger created');
        return _this;
    }

    return Logger;
}(AbstractService);

},{"@jeneric/core/abstract-service":5}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvY29uZmlnL2NvbmZpZy5qcyIsImFwcC9pbmRleC5qcyIsImFwcC9zZXJ2aWNlL2N1c3RvbS5qcyIsIm5vZGVfbW9kdWxlcy9AamVuZXJpYy9jb3JlL2Fic3RyYWN0LWFwcGxpY2F0aW9uLmpzIiwibm9kZV9tb2R1bGVzL0BqZW5lcmljL2NvcmUvYWJzdHJhY3Qtc2VydmljZS5qcyIsIm5vZGVfbW9kdWxlcy9AamVuZXJpYy9jb3JlL2Fic3RyYWN0LmpzIiwibm9kZV9tb2R1bGVzL0BqZW5lcmljL2NvcmUva2VybmVsLmpzIiwibm9kZV9tb2R1bGVzL0BqZW5lcmljL2NvcmUvc2VydmljZXMuanMiLCJub2RlX21vZHVsZXMvQGplbmVyaWMvbG9nZ2VyL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxPQUFPLE9BQVAsR0FBaUI7QUFDYixjQUFVO0FBQ04sZ0JBQVM7QUFDTCxvQkFBUyxLQURKO0FBRUwsb0JBQVMsUUFBUSxpQkFBUixDQUZKO0FBR0wscUJBQVU7QUFDTiwyQkFBWSxXQUROO0FBRU4sK0JBQWUsQ0FDWCxPQURXLEVBRVgsTUFGVyxFQUdYLE9BSFc7QUFGVDtBQUhMLFNBREg7QUFhTixnQkFBUztBQUNMLG9CQUFTLElBREo7QUFFTCxvQkFBUyxRQUFRLG1CQUFSLENBRko7QUFHTCxxQkFBVTtBQUNOLHNCQUFPO0FBREQ7QUFITDtBQWJIO0FBREcsQ0FBakI7Ozs7Ozs7Ozs7O0FDQUEsSUFBTSxzQkFBc0IsUUFBUSxvQ0FBUixDQUE1Qjs7SUFFTSxJOzs7QUFDRixvQkFBYztBQUFBOztBQUFBOztBQUlWLGNBQUssTUFBTCxDQUFZLElBQVosQ0FBaUIsUUFBUSxvQkFBUixDQUFqQjs7QUFFQSxnQkFBUSxHQUFSLENBQVksTUFBSyxRQUFMLENBQWMsTUFBMUI7QUFDQSxnQkFBUSxHQUFSLENBQVksTUFBSyxRQUFMLENBQWMsTUFBMUI7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TSxVQUFYLENBQTFCLEVBQWtELE1BQU0sSUFBSSxLQUFKLGNBQXFCLFVBQXJCLDhDQUFOO0FBQ2xELG1CQUFPLEtBQUssTUFBTSxVQUFYLENBQVA7QUFDSDs7Ozs7O0FBR0wsT0FBTyxPQUFQLEdBQWlCLFFBQWpCOzs7Ozs7Ozs7OztBQ2xCQSxJQUFNLGtCQUFrQixRQUFRLGdDQUFSLENBQXhCOztJQUVNLE07OztBQUNGLHNCQUFjO0FBQUE7O0FBQUE7O0FBRVYsZ0JBQVEsR0FBUixDQUFZLGdCQUFaO0FBRlU7QUFHYjs7O0VBSmdCLGUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgc2VydmljZXM6IHtcbiAgICAgICAgbG9nZ2VyIDoge1xuICAgICAgICAgICAgYWN0aXZlIDogZmFsc2UsXG4gICAgICAgICAgICBtb2R1bGUgOiByZXF1aXJlKCdAamVuZXJpYy9sb2dnZXInKSxcbiAgICAgICAgICAgIG9wdGlvbnMgOiB7XG4gICAgICAgICAgICAgICAgZGlyZWN0b3J5IDogJ3Zhci9sb2dzLycsXG4gICAgICAgICAgICAgICAgY29uc29sZUxldmVsczogW1xuICAgICAgICAgICAgICAgICAgICAnZGVidWcnLFxuICAgICAgICAgICAgICAgICAgICAnaW5mbycsXG4gICAgICAgICAgICAgICAgICAgICdlcnJvcidcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbSA6IHtcbiAgICAgICAgICAgIGFjdGl2ZSA6IHRydWUsXG4gICAgICAgICAgICBtb2R1bGUgOiByZXF1aXJlKCcuLi9zZXJ2aWNlL2N1c3RvbScpLFxuICAgICAgICAgICAgb3B0aW9ucyA6IHtcbiAgICAgICAgICAgICAgICB0ZXN0IDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTsiLCJjb25zdCBBYnN0cmFjdEFwcGxpY2F0aW9uID0gcmVxdWlyZSgnQGplbmVyaWMvY29yZS9hYnN0cmFjdC1hcHBsaWNhdGlvbicpO1xuXG5jbGFzcyBNYWluIGV4dGVuZHMgQWJzdHJhY3RBcHBsaWNhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoKSB7XG5cbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICB0aGlzLmtlcm5lbC5pbml0KHJlcXVpcmUoJy4vY29uZmlnL2NvbmZpZy5qcycpKTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlcnZpY2VzLmN1c3RvbSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VydmljZXMuY3VzdG9tKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zZXJ2aWNlcy5jdXN0b20pO1xuXG5cbiAgICB9XG59XG5cbmxldCBtYWluID0gbmV3IE1haW4oKTsiLCJjb25zdCBBYnN0cmFjdCA9IHJlcXVpcmUoJ0BqZW5lcmljL2NvcmUvYWJzdHJhY3QnKTtcblxuY2xhc3MgQ3VzdG9tIGV4dGVuZHMgQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcbiAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICBjb25zb2xlLmxvZyhvcHRpb25zKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ3VzdG9tOyIsImNvbnN0IEFic3RyYWN0ID0gcmVxdWlyZSgnLi9hYnN0cmFjdCcpO1xuXG4vKiogdGhlIG1haW4gYXBwbGljYXRpb24gY2xhc3MgaGF2ZSB0byBleHRlbmQgdGhlIGFwcGxpY2F0aW9uIGNsYXNzLiAqL1xuY2xhc3MgQWJzdHJhY3RBcHBsaWNhdGlvbiBleHRlbmRzIEFic3RyYWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3RBcHBsaWNhdGlvbjsiLCJjb25zdCBBYnN0cmFjdCA9IHJlcXVpcmUoJy4vYWJzdHJhY3QnKTtcblxuY2xhc3MgQWJzdHJhY3RTZXJ2aWNlIGV4dGVuZHMgQWJzdHJhY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBBYnN0cmFjdFNlcnZpY2U7IiwiY29uc3QgS2VybmVsID0gcmVxdWlyZSgnLi9rZXJuZWwnKTtcblxuLyoqIGFsbCBjbGFzc2VzIGV4dGVuZHMgdGhlIGFic3RyYWN0IGNsYXNzLlxuICogQGFic3RyYWN0XG4gKi9cbmNsYXNzIEFic3RyYWN0IHtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGhlIGFwcGxpY2F0aW9uIGtlcm5lbFxuICAgICAqIEByZXR1cm5zIHtLZXJuZWx9XG4gICAgICovXG4gICAgZ2V0IGtlcm5lbCgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoJy4va2VybmVsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYWxsIHJlZ2lzdGVyZWQgY29tcG9uZW50c1xuICAgICAqL1xuICAgIGdldCBzZXJ2aWNlcygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMua2VybmVsLnNlcnZpY2VzO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmtlcm5lbC5jb25maWc7XG4gICAgfVxuXG59XG5cbm1vZHVsZS5leHBvcnRzID0gQWJzdHJhY3Q7IiwiY29uc3QgU2VydmljZXMgPSByZXF1aXJlKCcuL3NlcnZpY2VzJyk7XG5cbmNsYXNzIEtlcm5lbCB7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICAgICB0aGlzLl9jb25maWcgPSBudWxsO1xuICAgICAgICB0aGlzLl9zZXJ2aWNlcyA9IG5ldyBTZXJ2aWNlcygpO1xuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGluaXQoY29uZmlnKSB7XG5cbiAgICAgICAgdGhpcy5fY29uZmlnID0gY29uZmlnO1xuXG4gICAgICAgIGlmICgnb2JqZWN0JyAhPT0gdHlwZW9mIHRoaXMuX2NvbmZpZy5zZXJ2aWNlcykgdGhyb3cgbmV3IEVycm9yKCdjb25maWcgaGF2ZSBubyBtb2R1bGVzIGNvbmZpZ3VyYXRpb24nKTtcblxuICAgICAgICBmb3IobGV0IGtleSBpbiB0aGlzLl9jb25maWcuc2VydmljZXMpIHtcblxuICAgICAgICAgICAgbGV0IGNvbmZpZ3VyYXRpb24gPSB0aGlzLl9jb25maWcuc2VydmljZXNba2V5XTtcblxuICAgICAgICAgICAgaWYoIWNvbmZpZ3VyYXRpb24uYWN0aXZlKSBjb250aW51ZTtcblxuICAgICAgICAgICAgdGhpcy5fc2VydmljZXNba2V5XSA9IG5ldyBjb25maWd1cmF0aW9uLm1vZHVsZShjb25maWd1cmF0aW9uLm9wdGlvbnMpO1xuXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgLy90aGlzLnNlcnZpY2VzLmxvZ2dlci5kZWJ1ZygnYWxsIHNlcnZpY2VzIGFyZSBpbml0aWFsaXplZCcpO1xuICAgIH1cblxuICAgIGdldCBjb25maWcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jb25maWc7XG4gICAgfVxuXG4gICAgZ2V0IHNlcnZpY2VzKCkge1xuXG4gICAgICAgIGlmKCF0aGlzLl9pbml0aWFsaXplZCkgdGhyb3cgbmV3IEVycm9yKCdrZXJuZWwgbm90IGluaXRpYWxpemVkLCBwbGVhc2UgY2FsbCBrZXJuZWwuaW5pdCcpO1xuXG4gICAgICAgIHJldHVybiB0aGlzLl9zZXJ2aWNlcztcbiAgICB9XG5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBuZXcgS2VybmVsKCk7IiwiY2xhc3MgU2VydmljZXMge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJveHkodGhpcywgdGhpcyk7XG4gICAgfVxuXG4gICAgc2V0ICh0YXJnZXQsIHNlcnZpY2VLZXksIGluc3RhbmNlLCByZWNpZXZlcikge1xuICAgICAgICBpZigndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHRoaXNbJ18nICsgc2VydmljZUtleV0pIHRocm93IG5ldyBFcnJvcihgc2VydmljZSAke3NlcnZpY2VLZXl9IGFscmVhZHkgZXhpc3RzYCk7XG4gICAgICAgIHRoaXNbJ18nICsgc2VydmljZUtleV0gPSBpbnN0YW5jZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgZ2V0ICh0YXJnZXQsIHNlcnZpY2VLZXkpIHtcbiAgICAgICAgaWYoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0aGlzWydfJyArIHNlcnZpY2VLZXldKSB0aHJvdyBuZXcgRXJyb3IoYHNlcnZpY2UgJHtzZXJ2aWNlS2V5fSBub3QgZXhpc3RzLCBwbGVhc2UgY2hlY2sgeW91ciBjb25maWcuanNgKTtcbiAgICAgICAgcmV0dXJuIHRoaXNbJ18nICsgc2VydmljZUtleV07XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFNlcnZpY2VzOyIsImNvbnN0IEFic3RyYWN0U2VydmljZSA9IHJlcXVpcmUoJ0BqZW5lcmljL2NvcmUvYWJzdHJhY3Qtc2VydmljZScpO1xuXG5jbGFzcyBMb2dnZXIgZXh0ZW5kcyBBYnN0cmFjdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBjb25zb2xlLmxvZygnbG9nZ2VyIGNyZWF0ZWQnKTtcbiAgICB9XG59Il19
