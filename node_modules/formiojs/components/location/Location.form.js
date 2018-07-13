'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  for (var _len = arguments.length, extend = Array(_len), _key = 0; _key < _len; _key++) {
    extend[_key] = arguments[_key];
  }

  return _Base2.default.apply(undefined, extend.concat([[{
    label: 'Map',
    key: 'map',
    weight: 1,
    components: _LocationEdit2.default
  }]]));
};

var _Base = require('../base/Base.form');

var _Base2 = _interopRequireDefault(_Base);

var _LocationEdit = require('./editForm/Location.edit.map');

var _LocationEdit2 = _interopRequireDefault(_LocationEdit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }