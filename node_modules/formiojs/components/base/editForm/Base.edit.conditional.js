'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable quotes, max-len */
exports.default = [{
  type: 'panel',
  title: 'Simple',
  key: 'simple-conditional',
  theme: 'default',
  components: [{
    type: 'select',
    input: true,
    label: 'This component should Display:',
    key: 'conditional.show',
    dataSrc: 'values',
    data: {
      values: [{ label: 'True', value: true }, { label: 'False', value: false }]
    }
  }, {
    type: 'select',
    input: true,
    label: 'When the form component:',
    key: 'conditional.when',
    dataSrc: 'custom',
    valueProperty: 'value',
    data: {
      custom: '\n            utils.eachComponent(instance.root.editForm.components, function(component, path) {\n              if (component.key !== data.key) {\n                values.push({\n                  label: component.label || component.key,\n                  value: component.key\n                });\n              }\n            });\n          '
    }
  }, {
    type: 'textfield',
    input: true,
    label: 'Has the value:',
    key: 'conditional.eq'
  }]
}, _utils2.default.javaScriptValue('Advanced Conditions', 'customConditional', 'conditional.json', 110, '<p>You must assign the <strong>show</strong> variable as either <strong>true</strong> or <strong>false</strong>.</p>' + '<p><strong>Note: Advanced Conditional logic will override the results of the Simple Conditional logic.</strong></p>' + '<h5>Example</h5><pre>show = !!data.showMe;</pre>', '<p><a href="http://formio.github.io/formio.js/app/examples/conditions.html" target="_blank">Click here for an example</a></p>')];
/* eslint-enable quotes, max-len */