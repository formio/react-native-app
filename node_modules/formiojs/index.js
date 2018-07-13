'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormBuilder = undefined;

var _formio = require('./formio.form');

Object.keys(_formio).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _formio[key];
    }
  });
});

var _FormBuilder2 = require('./FormBuilder');

var _FormBuilder3 = _interopRequireDefault(_FormBuilder2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.FormBuilder = _FormBuilder3.default;