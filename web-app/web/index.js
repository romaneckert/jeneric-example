(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/** all classes extends the abstract class.
 * @abstract
 */
var Abstract = function () {
    function Abstract() {
        _classCallCheck(this, Abstract);

        this._instanceId = '_' + Math.random().toString(36).substr(2, 9);
    }

    _createClass(Abstract, [{
        key: 'instanceId',
        get: function get() {
            return this._instanceId;
        }

        /**
         * the application kernel
         * @returns {Kernel}
         */

    }, {
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
    }]);

    return Abstract;
}();

module.exports = Abstract;

},{"./kernel":5}],2:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('./abstract');

var Application = function (_Abstract) {
    _inherits(Application, _Abstract);

    function Application() {
        _classCallCheck(this, Application);

        return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));
    }

    return Application;
}(Abstract);

module.exports = Application;

},{"./abstract":1}],3:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('./abstract');

var Entity = function (_Abstract) {
    _inherits(Entity, _Abstract);

    function Entity(entityName) {
        _classCallCheck(this, Entity);

        var _this = _possibleConstructorReturn(this, (Entity.__proto__ || Object.getPrototypeOf(Entity)).call(this));

        _this._id = null;
        _this._entityName = entityName;
        return _this;
    }

    _createClass(Entity, [{
        key: 'id',
        get: function get() {
            return this._id;
        },
        set: function set(id) {
            this._id = id;
        }
    }, {
        key: 'entityName',
        get: function get() {
            return this._entityName;
        }
    }]);

    return Entity;
}(Abstract);

module.exports = Entity;

},{"./abstract":1}],4:[function(require,module,exports){
(function (process){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('./abstract');

/** the main application class have to extend the application class. */

var Environment = function (_Abstract) {
    _inherits(Environment, _Abstract);

    function Environment() {
        _classCallCheck(this, Environment);

        return _possibleConstructorReturn(this, (Environment.__proto__ || Object.getPrototypeOf(Environment)).call(this));
    }

    _createClass(Environment, [{
        key: 'node',
        get: function get() {
            return (typeof process === 'undefined' ? 'undefined' : _typeof(process)) === 'object' && _typeof(process.versions) === 'object' && typeof process.versions.node !== 'undefined';
        }
    }]);

    return Environment;
}(Abstract);

module.exports = Environment;

}).call(this,require('_process'))
},{"./abstract":1,"_process":16}],5:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Environment = require('./environment');
var Abstract = require('./abstract');

var Kernel = function (_Abstract) {
    _inherits(Kernel, _Abstract);

    function Kernel() {
        _classCallCheck(this, Kernel);

        var _this = _possibleConstructorReturn(this, (Kernel.__proto__ || Object.getPrototypeOf(Kernel)).call(this));

        _this._config = null;
        _this._services = {};
        _this._env = new Environment();

        console.log('create kernel');
        return _this;
    }

    _createClass(Kernel, [{
        key: 'init',
        value: function init(config) {

            this._config = config;

            if ('object' !== _typeof(this._config.services)) throw new Error('config have no services configuration');

            for (var key in this._config.services) {

                var service = this._config.services[key];

                if (!service.active) continue;

                this._services[key] = new service.module(service.config);
            }
        }
    }, {
        key: 'config',
        get: function get() {
            return this._config;
        }
    }, {
        key: 'services',
        get: function get() {
            return this._services;
        }
    }, {
        key: 'env',
        get: function get() {
            return this._env;
        }
    }]);

    return Kernel;
}(Abstract);

module.exports = new Kernel();

},{"./abstract":1,"./environment":4}],6:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('./abstract');

var Service = function (_Abstract) {
    _inherits(Service, _Abstract);

    function Service() {
        _classCallCheck(this, Service);

        return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this));
    }

    return Service;
}(Abstract);

module.exports = Service;

},{"./abstract":1}],7:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('@jeneric/core/abstract');

var AbstractEntities = function (_Abstract) {
    _inherits(AbstractEntities, _Abstract);

    function AbstractEntities(config) {
        _classCallCheck(this, AbstractEntities);

        var _this = _possibleConstructorReturn(this, (AbstractEntities.__proto__ || Object.getPrototypeOf(AbstractEntities)).call(this));

        _this._config = {
            entities: []
        };

        _this._data = {};

        // merge custom config with default config
        for (var attr in config) {
            _this._config[attr] = config[attr];
        }for (var entityName in _this._config.entities) {

            // init data object
            _this._data[entityName] = {};

            // init repositories
            _this[_this._stringToMany(entityName)] = new _this._config.entities[entityName].repository(entityName);
        }

        return _this;
    }

    _createClass(AbstractEntities, [{
        key: 'persist',
        value: function persist(object) {

            var entityName = object.entityName;
            var id = object.id;

            // check if table name already used in data
            if ('undefined' === typeof this._data[entityName]) throw new Error('entity name "' + entityName + '" is not allowed');

            // set id for object if not set
            if ('number' !== typeof id) id = this._getNewId(entityName);

            var objectToPersist = {};

            for (var attribute in object) {

                if (-1 === ['_instanceId', '_entityName'].indexOf(attribute)) objectToPersist[attribute] = object[attribute];

                objectToPersist._id = id;
            }

            this._data[entityName][id] = objectToPersist;
        }
    }, {
        key: '_stringToMany',
        value: function _stringToMany(value) {
            if (value.indexOf('y') === value.length - 1) return value.slice(0, -1) + 'ies';
            return value + 's';
        }
    }, {
        key: '_getNewId',
        value: function _getNewId(entityName) {

            var increment = 0;

            for (var id in this._data[entityName]) {
                if (parseInt(id) > increment) increment = parseInt(id);
            }

            return increment + 1;
        }
    }, {
        key: '_getDataFromJsonString',
        value: function _getDataFromJsonString(jsonString) {
            return JSON.parse(jsonString, function (key, value) {

                // convert date string to date object
                if (typeof value === 'string') {
                    var a = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*)?)Z$/.exec(value);

                    if (a) return new Date(Date.UTC(+a[1], +a[2] - 1, +a[3], +a[4], +a[5], +a[6]));
                }
                return value;
            });
        }
    }, {
        key: 'data',
        get: function get() {
            return this._data;
        }
    }]);

    return AbstractEntities;
}(Abstract);

module.exports = AbstractEntities;

},{"@jeneric/core/abstract":9}],8:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractEntityManager = require('./abstract-entities');
var Util = require('@jeneric/core/util');
var path = require('path');

var EntityManager = function (_AbstractEntityManage) {
    _inherits(EntityManager, _AbstractEntityManage);

    function EntityManager(config) {
        _classCallCheck(this, EntityManager);

        // default config
        var _this = _possibleConstructorReturn(this, (EntityManager.__proto__ || Object.getPrototypeOf(EntityManager)).call(this, config));

        _this._config = {
            file: 'var/data/data.json'
        };

        Object.assign(_this._config, config);

        //this._config.file = path.join(path.dirname(require.main.filename), this._config.file);
        //Util.ensureFileExists(this._config.path);

        // read data from json
        //let rawData = this._getDataFromJsonString(fs.readFileSync(this._config.file));


        // set entity class to each object
        /*
        for(let entityName in rawData) {
             let entityData = rawData[entityName];
             for(let id in entityData) {
                let entityClass = require(path.join(__dirname, '/../entity/' + entityName + '.js'));
                 rawData[entityName][id].__proto__ = entityClass.prototype;
                 this.persist(rawData[entityName][id]);
            }
        }*/
        return _this;
    }

    return EntityManager;
}(AbstractEntityManager);

module.exports = EntityManager;

},{"./abstract-entities":7,"@jeneric/core/util":12,"path":15}],9:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./kernel":11,"dup":1}],10:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"./abstract":9,"_process":16,"dup":4}],11:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Environment = require('./environment');

var Kernel = function () {
    function Kernel() {
        _classCallCheck(this, Kernel);

        this._config = null;
        this._services = {};
        this._env = new Environment();
    }

    _createClass(Kernel, [{
        key: 'init',
        value: function init(config) {

            this._config = config;

            if ('object' !== _typeof(this._config.services)) throw new Error('config have no services configuration');

            for (var key in this._config.services) {

                var service = this._config.services[key];

                if (!service.active) continue;

                this._services[key] = new service.module(service.config);
            }
        }
    }, {
        key: 'config',
        get: function get() {
            return this._config;
        }
    }, {
        key: 'services',
        get: function get() {
            return this._services;
        }
    }, {
        key: 'env',
        get: function get() {
            return this._env;
        }
    }]);

    return Kernel;
}();

module.exports = new Kernel();

},{"./environment":10}],12:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var path = require('path');
var fs = require('fs');

var Util = function () {
    function Util() {
        _classCallCheck(this, Util);
    }

    _createClass(Util, null, [{
        key: 'ensureFileExists',
        value: function ensureFileExists(filepath) {

            if (fs.existsSync(filepath)) return true;

            var dirname = path.dirname(filepath);

            this.ensureFolderExists(dirname);

            fs.writeFileSync(filepath, '');

            return true;
        }
    }, {
        key: 'ensureFolderExists',
        value: function ensureFolderExists(folderPath) {
            if (fs.existsSync(folderPath)) return true;

            this.ensureFolderExists(path.dirname(folderPath));
            fs.mkdirSync(folderPath);

            return true;
        }
    }]);

    return Util;
}();

module.exports = Util;

},{"fs":14,"path":15}],13:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Abstract = require('@jeneric/core/abstract');

var Repository = function (_Abstract) {
    _inherits(Repository, _Abstract);

    function Repository(entityName) {
        _classCallCheck(this, Repository);

        var _this = _possibleConstructorReturn(this, (Repository.__proto__ || Object.getPrototypeOf(Repository)).call(this));

        _this._entityName = entityName;
        return _this;
    }

    _createClass(Repository, [{
        key: 'find',
        value: function find(data) {

            switch (typeof data === 'undefined' ? 'undefined' : _typeof(data)) {
                case 'undefined':
                    return this._findAll();
                case 'object':
                    return this._findByData(data);
                case 'string':
                    return this._findById(parseInt(data));
                case 'number':
                    return this._findById(parseInt(data));
                default:
                    throw new Error('data have wrong type');
            }
        }
    }, {
        key: '_findAll',
        value: function _findAll() {
            return this.services.entities.data[this._entityName];
        }
    }, {
        key: '_findByData',
        value: function _findByData(data) {}
    }, {
        key: '_findById',
        value: function _findById(id) {

            console.log(this);

            for (var objectId in this.services.entities.data[this._entityName]) {

                if (parseInt(objectId) === id) return this.services.entities.data[this._entityName][objectId];
            }

            return null;
        }
    }]);

    return Repository;
}(Abstract);

module.exports = Repository;

},{"@jeneric/core/abstract":9}],14:[function(require,module,exports){
"use strict";

},{}],15:[function(require,module,exports){
(function (process){
'use strict';

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function splitPath(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function () {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = i >= 0 ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function (p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return (resolvedAbsolute ? '/' : '') + resolvedPath || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function (path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function (p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function (path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function () {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function (p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};

// path.relative(from, to)
// posix version
exports.relative = function (from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function (path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};

exports.basename = function (path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};

exports.extname = function (path) {
  return splitPath(path)[3];
};

function filter(xs, f) {
  if (xs.filter) return xs.filter(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    if (f(xs[i], i, xs)) res.push(xs[i]);
  }
  return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b' ? function (str, start, len) {
  return str.substr(start, len);
} : function (str, start, len) {
  if (start < 0) start = str.length + start;
  return str.substr(start, len);
};

}).call(this,require('_process'))
},{"_process":16}],16:[function(require,module,exports){
'use strict';

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while (len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) {
    return [];
};

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function () {
    return 0;
};

},{}],17:[function(require,module,exports){
'use strict';

module.exports = {
    services: {
        logger: {
            active: true,
            module: require('@jeneric/logger/web')
        },
        entities: {
            active: true,
            module: require('@jeneric/entities'),
            config: {
                entities: {
                    car: {
                        entity: require('../entity/car'),
                        repository: require('../repository/car')
                    }
                }
            }
        },
        custom: {
            active: true,
            module: require('../service/custom')
        }
    }
};

},{"../entity/car":20,"../repository/car":22,"../service/custom":23,"@jeneric/entities":8,"@jeneric/logger/web":31}],18:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractApplication = require('@jeneric/core/application');

var Application = function (_AbstractApplication) {
    _inherits(Application, _AbstractApplication);

    function Application() {
        _classCallCheck(this, Application);

        return _possibleConstructorReturn(this, (Application.__proto__ || Object.getPrototypeOf(Application)).call(this));
    }

    _createClass(Application, [{
        key: 'logger',
        get: function get() {
            return this.services.logger;
        }
    }, {
        key: 'custom',
        get: function get() {
            return this.services.custom;
        }
    }, {
        key: 'entities',
        get: function get() {
            return this.services.entities;
        }
    }]);

    return Application;
}(AbstractApplication);

module.exports = Application;

},{"@jeneric/core/application":2}],19:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractService = require('@jeneric/core/service');

var Service = function (_AbstractService) {
    _inherits(Service, _AbstractService);

    function Service() {
        _classCallCheck(this, Service);

        return _possibleConstructorReturn(this, (Service.__proto__ || Object.getPrototypeOf(Service)).call(this));
    }

    return Service;
}(AbstractService);

module.exports = Service;

},{"@jeneric/core/service":6}],20:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entity = require('@jeneric/core/entity');

var Car = function (_Entity) {
    _inherits(Car, _Entity);

    function Car(title, color) {
        _classCallCheck(this, Car);

        var _this = _possibleConstructorReturn(this, (Car.__proto__ || Object.getPrototypeOf(Car)).call(this, 'car'));

        _this._title = title;
        _this._color = color;

        return _this;
    }

    _createClass(Car, [{
        key: 'drive',
        value: function drive() {
            console.log('drive');
        }
    }]);

    return Car;
}(Entity);

module.exports = Car;

},{"@jeneric/core/entity":3}],21:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Application = require('./core/application');
var Car = require('./entity/car');

var Main = function (_Application) {
    _inherits(Main, _Application);

    function Main() {
        _classCallCheck(this, Main);

        var _this = _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).call(this));

        var kernel = require('@jeneric/core/kernel');

        kernel.test = 1;

        _this.kernel.init(require('./config/config.js'));

        _this.logger.debug('debug message', { 1: 'test' });

        _this.createCars();

        console.log(_this.services.entities.kernel);

        //console.log(this.entities.cars.find(1));


        //this.logger.debug('car with id 1', this.entities.cars.find(1));
        //this.logger.debug('car with id 3', this.entities.cars.find(3));
        //this.logger.debug('all cars', this.entities.cars.find());

        //let firstCar = this.entities.cars.find(1);

        //console.log(firstCar.drive());

        return _this;
    }

    _createClass(Main, [{
        key: 'createCars',
        value: function createCars() {
            var car = new Car('BMW', '#ffffff');
            var car2 = new Car('Audi', '#ffffff');
            var car3 = new Car('Porsche', '#ffffff');

            car.drive();

            this.entities.persist(car);
            this.entities.persist(car2);
            this.entities.persist(car3);
        }
    }]);

    return Main;
}(Application);

var main = new Main();

},{"./config/config.js":17,"./core/application":18,"./entity/car":20,"@jeneric/core/kernel":5}],22:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Repository = require('@jeneric/entities/repository');

var CarRepository = function (_Repository) {
    _inherits(CarRepository, _Repository);

    function CarRepository(entityName) {
        _classCallCheck(this, CarRepository);

        return _possibleConstructorReturn(this, (CarRepository.__proto__ || Object.getPrototypeOf(CarRepository)).call(this, entityName));
    }

    return CarRepository;
}(Repository);

module.exports = CarRepository;

},{"@jeneric/entities/repository":13}],23:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Service = require('../core/service');

var Custom = function (_Service) {
    _inherits(Custom, _Service);

    function Custom(config) {
        _classCallCheck(this, Custom);

        var _this = _possibleConstructorReturn(this, (Custom.__proto__ || Object.getPrototypeOf(Custom)).call(this));

        _this._config = config;
        return _this;
    }

    _createClass(Custom, [{
        key: 'test',
        value: function test() {
            this.services.logger.info('custom log entry');
        }
    }]);

    return Custom;
}(Service);

module.exports = Custom;

},{"../core/service":19}],24:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Service = require('@jeneric/core/service');

var AbstractLogger = function (_Service) {
    _inherits(AbstractLogger, _Service);

    function AbstractLogger() {
        _classCallCheck(this, AbstractLogger);

        return _possibleConstructorReturn(this, (AbstractLogger.__proto__ || Object.getPrototypeOf(AbstractLogger)).call(this));
    }

    _createClass(AbstractLogger, [{
        key: 'debug',
        value: function debug(data, meta) {
            this._log(data, meta, 'debug');
        }
    }, {
        key: 'info',
        value: function info(data, meta) {
            this._log(data, meta, 'info');
        }
    }, {
        key: 'error',
        value: function error(data, meta) {
            this._log(data, meta, 'error');
        }
    }]);

    return AbstractLogger;
}(Service);

module.exports = AbstractLogger;

},{"@jeneric/core/service":30}],25:[function(require,module,exports){
'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Entity = require('@jeneric/core/entity');

var Log = function (_Entity) {
    _inherits(Log, _Entity);

    function Log(message, meta, type) {
        _classCallCheck(this, Log);

        var _this = _possibleConstructorReturn(this, (Log.__proto__ || Object.getPrototypeOf(Log)).call(this, 'log'));

        switch (typeof message === 'undefined' ? 'undefined' : _typeof(message)) {
            case 'string':
                message = String(message.split("\n"));
                break;
            case 'object':
                message = [JSON.stringify(message)];
                break;
            case 'undefined':
                message = null;
                break;
            default:
                message = [String(message)];
                break;
        }

        switch (typeof meta === 'undefined' ? 'undefined' : _typeof(meta)) {
            case 'string':
                meta = String(meta.split("\n"));
                break;
            case 'object':
                meta = JSON.stringify(meta);
                break;
            case 'undefined':
                meta = null;
                break;
            default:
                meta = String(meta);
                break;
        }

        _this._message = message;
        _this._meta = meta;
        _this._type = type;

        _this._date = new Date();
        _this._callStack = 'undefined' === typeof new Error().stack ? null : new Error().stack;
        return _this;
    }

    _createClass(Log, [{
        key: 'date',
        get: function get() {
            return this._date;
        }
    }, {
        key: 'dateString',
        get: function get() {
            return ('0' + this.date.getDate()).slice(-2) + '-' + ('0' + (this.date.getMonth() + 1)).slice(-2) + '-' + this.date.getFullYear() + ' ' + this.date.toTimeString().slice(0, 8);
        }
    }, {
        key: 'message',
        get: function get() {
            return this._message;
        }
    }, {
        key: 'type',
        get: function get() {
            return this._type;
        }
    }, {
        key: 'callStack',
        get: function get() {
            return this._callStack;
        }
    }, {
        key: 'meta',
        get: function get() {
            return this._meta;
        }
    }, {
        key: 'module',
        get: function get() {

            if (null === this._callStack) return null;

            var module = this.callStack.split("at")[4].split('(')[0].trim();

            return 0 === module.indexOf('new') ? module.replace('new ', '') + '.constructor' : module;
        }
    }, {
        key: 'longMessage',
        get: function get() {

            return '[' + this.dateString + '] [' + this.type + ']' + (null !== this.module ? ' [' + this.module + ']' : '') + ' ' + this.message + (null !== this.meta ? ' [' + this.meta + ']' : '') + (null !== this.callStack ? ' [' + this.callStack.split("at")[4].match(/\w+\.js:\d+:\d+|\w+\.\w+\.js:\d+:\d+/g)[0] + ']' : '');
        }
    }]);

    return Log;
}(Entity);

module.exports = Log;

},{"@jeneric/core/entity":27}],26:[function(require,module,exports){
arguments[4][1][0].apply(exports,arguments)
},{"./kernel":29,"dup":1}],27:[function(require,module,exports){
arguments[4][3][0].apply(exports,arguments)
},{"./abstract":26,"dup":3}],28:[function(require,module,exports){
arguments[4][4][0].apply(exports,arguments)
},{"./abstract":26,"_process":16,"dup":4}],29:[function(require,module,exports){
arguments[4][11][0].apply(exports,arguments)
},{"./environment":28,"dup":11}],30:[function(require,module,exports){
arguments[4][6][0].apply(exports,arguments)
},{"./abstract":26,"dup":6}],31:[function(require,module,exports){
'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AbstractLogger = require('./abstract-logger');
var Log = require('./entity/log');

var Logger = function (_AbstractLogger) {
    _inherits(Logger, _AbstractLogger);

    function Logger() {
        _classCallCheck(this, Logger);

        return _possibleConstructorReturn(this, (Logger.__proto__ || Object.getPrototypeOf(Logger)).call(this));
    }

    _createClass(Logger, [{
        key: '_log',
        value: function _log(data, meta, type) {

            var log = new Log(data, meta, type);

            if ('error' === log.type) {
                console.error(log.longMessage);
            } else {
                console.log(log.longMessage);
            }
        }
    }]);

    return Logger;
}(AbstractLogger);

module.exports = Logger;

},{"./abstract-logger":24,"./entity/log":25}]},{},[21]);
