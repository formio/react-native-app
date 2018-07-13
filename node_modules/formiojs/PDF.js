'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _nativePromiseOnly = require('native-promise-only');

var _nativePromiseOnly2 = _interopRequireDefault(_nativePromiseOnly);

var _Formio = require('./Formio');

var _Formio2 = _interopRequireDefault(_Formio);

var _Webform2 = require('./Webform');

var _Webform3 = _interopRequireDefault(_Webform2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PDF = function (_Webform) {
  _inherits(PDF, _Webform);

  function PDF(element, options) {
    _classCallCheck(this, PDF);

    // Resolve when the iframe is ready.
    var _this = _possibleConstructorReturn(this, (PDF.__proto__ || Object.getPrototypeOf(PDF)).call(this, element, options));

    _this.iframeReady = new _nativePromiseOnly2.default(function (resolve) {
      return _this.iframeReadyResolve = resolve;
    });
    return _this;
  }

  _createClass(PDF, [{
    key: 'postMessage',
    value: function postMessage(message) {
      var _this2 = this;

      this.iframeReady.then(function () {
        if (_this2.iframe && _this2.iframe.contentWindow) {
          _this2.iframe.contentWindow.postMessage(JSON.stringify(message), '*');
        }
      });
    }

    // Do not clear the iframe.

  }, {
    key: 'clear',
    value: function clear() {}
  }, {
    key: 'redraw',
    value: function redraw() {
      this.postMessage({ name: 'redraw' });
    }
  }, {
    key: 'getSrc',
    value: function getSrc() {
      if (!this._form || !this._form.settings || !this._form.settings.pdf) {
        return '';
      }
      var iframeSrc = this._form.settings.pdf.src + '.html';
      var params = ['id=' + this.id];
      if (this.options.readOnly) {
        params.push('readonly=1');
      }
      if (this.options.zoom) {
        params.push('zoom=' + this.options.zoom);
      }
      if (this.options.builder) {
        params.push('builder=1');
      }
      if (params.length) {
        iframeSrc += '?' + params.join('&');
      }
      return iframeSrc;
    }
  }, {
    key: 'setForm',
    value: function setForm(form) {
      var _this3 = this;

      return _get(PDF.prototype.__proto__ || Object.getPrototypeOf(PDF.prototype), 'setForm', this).call(this, form).then(function () {
        if (_this3.formio) {
          form.projectUrl = _this3.formio.projectUrl;
          form.url = _this3.formio.formUrl;
          form.base = _this3.formio.base;
        }
        _this3.postMessage({ name: 'form', data: form });
      });
    }
  }, {
    key: 'setSubmission',
    value: function setSubmission(submission) {
      var _this4 = this;

      submission.readOnly = !!this.options.readOnly;
      this.postMessage({ name: 'submission', data: submission });
      return _get(PDF.prototype.__proto__ || Object.getPrototypeOf(PDF.prototype), 'setSubmission', this).call(this, submission).then(function () {
        if (_this4.formio) {
          _this4.formio.getDownloadUrl().then(function (url) {
            // Add a download button if it has a download url.
            if (!url) {
              return;
            }
            if (!_this4.downloadButton) {
              _this4.downloadButton = _this4.ce('a', {
                href: url,
                target: '_blank',
                style: 'position:absolute;right:10px;top:110px;cursor:pointer;'
              }, _this4.ce('img', {
                src: require('./pdf.image'),
                style: 'width:3em;'
              }));
              _this4.element.insertBefore(_this4.downloadButton, _this4.iframe);
            }
          });
        }
      });
    }
  }, {
    key: 'addComponent',
    value: function addComponent(component, element, data, before) {
      // Never add the component to the DOM.
      _get(PDF.prototype.__proto__ || Object.getPrototypeOf(PDF.prototype), 'addComponent', this).call(this, component, element, data, before, true);
    }

    // Iframe should always be shown.

  }, {
    key: 'showElement',
    value: function showElement() {}
  }, {
    key: 'build',
    value: function build() {
      var _this5 = this;

      // Do not rebuild the iframe...
      if (this.iframe) {
        this.addComponents();
        return;
      }

      this.zoomIn = this.ce('span', {
        style: 'position:absolute;right:10px;top:10px;cursor:pointer;',
        class: 'btn btn-default btn-secondary no-disable'
      }, this.ce('i', {
        class: this.iconClass('zoom-in')
      }));
      this.addEventListener(this.zoomIn, 'click', function (event) {
        event.preventDefault();
        _this5.postMessage({ name: 'zoomIn' });
      });

      this.zoomOut = this.ce('span', {
        style: 'position:absolute;right:10px;top:60px;cursor:pointer;',
        class: 'btn btn-default btn-secondary no-disable'
      }, this.ce('i', {
        class: this.iconClass('zoom-out')
      }));
      this.addEventListener(this.zoomOut, 'click', function (event) {
        event.preventDefault();
        _this5.postMessage({ name: 'zoomOut' });
      });

      this.iframe = this.ce('iframe', {
        src: this.getSrc(),
        id: 'iframe-' + this.id,
        seamless: true,
        class: 'formio-iframe'
      });

      // Handle an iframe submission.
      this.on('iframe-submission', function (submission) {
        _this5.setSubmission(submission).then(function () {
          return _this5.submit();
        });
      });

      // Trigger when this form is ready.
      this.on('iframe-ready', function () {
        return _this5.iframeReadyResolve();
      });

      this.appendChild(this.element, [this.zoomIn, this.zoomOut, this.iframe]);

      if (!this.options.readOnly) {
        this.submitButton = this.ce('button', {
          type: 'button',
          class: 'btn btn-primary'
        }, 'Submit');

        this.addEventListener(this.submitButton, 'click', function () {
          _this5.postMessage({ name: 'getSubmission' });
        });
        this.appendChild(this.element, this.submitButton);
      }

      this.addComponents();
    }
  }]);

  return PDF;
}(_Webform3.default);

/**
 * Listen for window messages.
 */


exports.default = PDF;
window.addEventListener('message', function (event) {
  var eventData = null;
  try {
    eventData = JSON.parse(event.data);
  } catch (err) {
    eventData = null;
  }

  // If this form exists, then emit the event within this form.
  if (eventData && eventData.name && eventData.formId && _Formio2.default.forms.hasOwnProperty(eventData.formId)) {
    _Formio2.default.forms[eventData.formId].emit('iframe-' + eventData.name, eventData.data);
  }
});