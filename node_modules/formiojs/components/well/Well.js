'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _NestedComponent2 = require('../nested/NestedComponent');

var _NestedComponent3 = _interopRequireDefault(_NestedComponent2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var WellComponent = function (_NestedComponent) {
  _inherits(WellComponent, _NestedComponent);

  function WellComponent() {
    _classCallCheck(this, WellComponent);

    return _possibleConstructorReturn(this, (WellComponent.__proto__ || Object.getPrototypeOf(WellComponent)).apply(this, arguments));
  }

  _createClass(WellComponent, [{
    key: 'defaultSchema',
    get: function get() {
      return WellComponent.schema();
    }
  }, {
    key: 'className',
    get: function get() {
      return 'card card-body bg-faded well formio-component formio-component-well ' + this.component.customClass;
    }
  }], [{
    key: 'schema',
    value: function schema() {
      for (var _len = arguments.length, extend = Array(_len), _key = 0; _key < _len; _key++) {
        extend[_key] = arguments[_key];
      }

      return _NestedComponent3.default.schema.apply(_NestedComponent3.default, [{
        type: 'well',
        key: 'well',
        input: false,
        persistent: false,
        components: []
      }].concat(extend));
    }
  }, {
    key: 'builderInfo',
    get: function get() {
      return {
        title: 'Well',
        icon: 'fa fa-square-o',
        group: 'layout',
        documentation: 'http://help.form.io/userguide/#well',
        weight: 60,
        schema: WellComponent.schema()
      };
    }
  }]);

  return WellComponent;
}(_NestedComponent3.default);

exports.default = WellComponent;