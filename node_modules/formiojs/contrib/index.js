'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _Stripe = require('./stripe/stripe/Stripe');

var _Stripe2 = _interopRequireDefault(_Stripe);

var _StripeCheckout = require('./stripe/checkout/StripeCheckout');

var _StripeCheckout2 = _interopRequireDefault(_StripeCheckout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Contrib = {
  stripe: {
    stripe: _Stripe2.default,
    checkout: _StripeCheckout2.default
  }
};

exports.default = Contrib;

if ((typeof global === 'undefined' ? 'undefined' : _typeof(global)) === 'object' && global.Formio) {
  global.Formio.contrib = Contrib;
}