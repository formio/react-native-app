'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Formio = require('./Formio');

var _Formio2 = _interopRequireDefault(_Formio);

var _WebformBuilder = require('./WebformBuilder');

var _WebformBuilder2 = _interopRequireDefault(_WebformBuilder);

var _WizardBuilder = require('./WizardBuilder');

var _WizardBuilder2 = _interopRequireDefault(_WizardBuilder);

var _PDFBuilder = require('./PDFBuilder');

var _PDFBuilder2 = _interopRequireDefault(_PDFBuilder);

var _Form2 = require('./Form');

var _Form3 = _interopRequireDefault(_Form2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FormBuilder = function (_Form) {
  _inherits(FormBuilder, _Form);

  /**
   * Creates an easy to use interface for embedding a form builder into your application..
   *
   * @param {Object} element - The DOM element you wish to render this form within.
   * @param {Object | string} form - Either a Form JSON schema or the URL of a hosted form via. form.io.
   * @param {Object} options - The options to create a new form instance.
   * @param {boolean} options.readOnly - Set this form to readOnly
   * @param {boolean} options.noAlerts - Set to true to disable the alerts dialog.
   * @param {boolean} options.i18n - The translation file for this rendering. @see https://github.com/formio/formio.js/blob/master/i18n.js
   * @param {boolean} options.template - Provides a way to inject custom logic into the creation of every element rendered within the form.
   *
   * @example
   * import Form from 'formiojs/FormBuilder';
   * const builder = new FormBuilder(document.getElementById('formio'), {components:[
   *   {
   *     type: 'textfield',
   *     label: 'First Name',
   *     key: 'firstName',
   *     input: true
   *   }
   * ]});
   * builder.render();
   */
  function FormBuilder(element, form, options) {
    _classCallCheck(this, FormBuilder);

    return _possibleConstructorReturn(this, (FormBuilder.__proto__ || Object.getPrototypeOf(FormBuilder)).call(this, element, form, options));
  }

  _createClass(FormBuilder, [{
    key: 'create',
    value: function create() {
      if (!this.form.components) {
        this.form.components = [];
      }
      if (this.form.display === 'wizard') {
        return new _WizardBuilder2.default(this.element, this.options);
      } else if (this.form.display === 'pdf') {
        return new _PDFBuilder2.default(this.element, this.options);
      } else {
        return new _WebformBuilder2.default(this.element, this.options);
      }
    }
  }]);

  return FormBuilder;
}(_Form3.default);

/**
 * Creates a new form based on the form parameter.
 *
 * @param element {HMTLElement} - The HTML Element to add this form to.
 * @param form {string|Object} - The src of the form, or a form object.
 * @param options {Object} - The options to create this form.
 *
 * @return {Promise} - When the form is instance is ready.
 */


exports.default = FormBuilder;
_Formio2.default.builder = function (element, form, options) {
  var builder = new FormBuilder(element, form, options);
  return builder.render();
};

_Formio2.default.FormBuilder = FormBuilder;