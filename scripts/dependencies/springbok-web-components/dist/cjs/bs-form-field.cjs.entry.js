'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-34e16b56.js');
const isEmpty = require('./is-empty-3de4afc0.js');
const validators_types = require('./validators.types-2591a48b.js');

const defaultValidator = {
  validate: () => true,
};
function LengthValidator(min, max) {
  return {
    validate: (value) => {
      const regex = new RegExp(`^.{${min || 0},${max || ''}}$`);
      return regex.test(value);
    },
    errorMessage: 'LengthError',
  };
}
function MinMaxValidator(min, max) {
  return {
    validate: (value) => {
      if (Number(min) && Number(value) < Number(min)) {
        return false;
      }
      if (Number(max) && Number(value) > Number(max)) {
        return false;
      }
      if (new Date(min) instanceof Date && new Date(value) < new Date(min)) {
        return false;
      }
      if (new Date(max) instanceof Date && new Date(value) > new Date(max)) {
        return false;
      }
      return true;
    },
    errorMessage: 'numberError',
  };
}
function EmailValidator() {
  return {
    validate: (value) => {
      const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\u0600-\u06FF\u0400-\u04FF\u0370-\u03ff\-0-9]+\.)+[a-zA-Z\u0600-\u06FF\u0400-\u04FF\u0370-\u03ff]{2,}))$/;
      return regex.test(value);
    },
    errorMessage: 'emailError',
  };
}
const DateTimeValidator = {
  validate: (value) => {
    const dateValue = new Date(value);
    if (dateValue instanceof Date) {
      return true;
    }
    return false;
  },
  errorMessage: 'dateTimeError',
};

function validatorFactory(name, options) {
  switch (name) {
    case validators_types.ValidatorNames.DateTime:
      return DateTimeValidator;
    case validators_types.ValidatorNames.Length:
      return LengthValidator(options.min, options.max);
    case validators_types.ValidatorNames.MinMax:
      return MinMaxValidator(options.min, options.max);
    case validators_types.ValidatorNames.Email:
      return EmailValidator();
    default:
      return defaultValidator;
  }
}
function getValidator(v) {
  if (typeof v === 'string') {
    return validatorFactory(v, null);
  }
  return validatorFactory(v.name, v.options);
}

const formFieldCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;position:relative}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .form-field{position:relative;width:100%;min-width:max-content;min-height:4rem;margin-bottom:0.3333333333rem;background-color:#fff;border:1px solid #3d3d3d;border-bottom:0;border-radius:3px;box-shadow:0 1px 0 #f8f7f3}:host ::slotted(.form-label){font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal;position:absolute;top:1rem;right:4.5833333333rem;left:2rem;width:fit-content;overflow:hidden;color:#000;white-space:nowrap;cursor:inherit;transition:top 0.3s ease, font-size 0.3s ease}:host .form-icon{position:absolute;top:2rem;right:2rem;font-size:2rem;color:#000;pointer-events:none;transform:translateY(-50%)}:host .form-error{display:block;margin-bottom:0.8333333333rem;color:#f00}:host([focused]) ::slotted(.form-label),:host([filled]) ::slotted(.form-label){top:0.5rem;font-size:1rem;color:#292929}:host([invalid]) .form-field{box-shadow:0 2px 0 #f00}:host([hidden]){display:none !important}";

const BsFormField = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.validatorFunc = defaultValidator;
    this.value = undefined;
    this.name = undefined;
    this.filled = undefined;
    this.focused = undefined;
    this.invalid = undefined;
    this.required = undefined;
    this.invalidMessage = undefined;
    this.requiredMessage = undefined;
    this.icon = undefined;
    this.label = undefined;
    this.border = true;
    this.validator = undefined;
  }
  valueDidChange() {
    this.validate();
  }
  /**
   * A method to run the validation on the form input value
   */
  async validate(value = this.value) {
    this.invalid = true;
    if (isEmpty.isEmpty(value) && this.required) {
      this.errorMessage = this.requiredMessage;
    }
    else if (!isEmpty.isEmpty(value) && this.validator && !this.validatorFunc.validate(value)) {
      this.errorMessage = this.invalidMessage;
    }
    else {
      this.invalid = false;
    }
  }
  componentWillLoad() {
    if (!isEmpty.isEmpty(this.validator)) {
      this.validatorFunc = getValidator(this.validator);
    }
    if (!isEmpty.isEmpty(this.value)) {
      this.filled = true;
      this.validate();
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: this.border ? 'form-field' : '' }, index.h("slot", { name: "form-element" }), index.h("slot", { name: "form-label" }), index.h("bs-icon", { class: "form-icon", name: this.icon })), index.h("span", { class: "form-error" }, this.invalid && this.errorMessage, "\u00A0")));
  }
  static get watchers() { return {
    "value": ["valueDidChange"]
  }; }
};
BsFormField.style = formFieldCss;

exports.bs_form_field = BsFormField;

//# sourceMappingURL=bs-form-field.cjs.entry.js.map