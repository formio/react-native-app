'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Formio = exports.Components = exports.Utils = exports.Form = undefined;

var _components = require('./components');

var _components2 = _interopRequireDefault(_components);

var _Components = require('./components/Components');

var _Components2 = _interopRequireDefault(_Components);

var _Formio = require('./Formio');

var _Formio2 = _interopRequireDefault(_Formio);

var _Form2 = require('./Form');

var _Form3 = _interopRequireDefault(_Form2);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Components2.default.setComponents(_components2.default);
_Formio2.default.Components = _Components2.default;
exports.Form = _Form3.default;
exports.Utils = _utils2.default;
exports.Components = _Components2.default;
exports.Formio = _Formio2.default;