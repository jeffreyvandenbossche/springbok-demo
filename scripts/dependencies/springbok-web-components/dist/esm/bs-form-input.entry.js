import { r as registerInstance, h, H as Host } from './index-35b5e8ce.js';
import { i as isEmpty } from './is-empty-0ea2058d.js';
import { V as ValidatorNames } from './validators.types-14271013.js';

var InputType;
(function (InputType) {
  InputType["Text"] = "text";
  InputType["Email"] = "email";
  InputType["Number"] = "number";
  InputType["Textarea"] = "textarea";
  InputType["Tel"] = "tel";
  InputType["Date"] = "date";
  InputType["Time"] = "time";
  InputType["DateTime"] = "datetime-local";
  InputType["Password"] = "password";
  InputType["Hidden"] = "hidden";
})(InputType || (InputType = {}));

const formInputCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .form-input{width:100%;min-height:4rem;padding:2rem 2rem 0;resize:none;border:0;outline:none}:host .form-input.is-resizeable{resize:vertical}input:-webkit-autofill,input:-webkit-autofill:focus{transition:background-color 0s 600000s, color 0s 600000s}input::-webkit-inner-spin-button,input::-webkit-calendar-picker-indicator{display:none;appearance:none}";

const BsFormInput = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.focus = () => {
      this.focused = true;
      if (this.inputEl !== undefined && this.placeholderInputTypes.includes(this.type)) {
        this.inputEl.showPicker();
      }
    };
    this.focusout = (e) => {
      this.value = e.target.value;
      this.formFieldRef.value = this.value;
      this.focused = false;
    };
    this.getValidator = () => {
      if (this.type === InputType.Email) {
        return ValidatorNames.Email;
      }
      if (!isEmpty(this.min) || !isEmpty(this.max)) {
        if (this.charInputTypes.includes(this.type)) {
          return { name: ValidatorNames.Length, options: { min: this.min, max: this.max } };
        }
        return { name: ValidatorNames.MinMax, options: { min: this.min, max: this.max } };
      }
      return this.type;
    };
    this.charInputTypes = [
      InputType.Text,
      InputType.Email,
      InputType.Password,
      InputType.Tel,
      InputType.Textarea,
    ];
    this.placeholderInputTypes = [InputType.Date, InputType.DateTime, InputType.Time];
    this.filled = false;
    this.focused = false;
    this.invalid = false;
    this.name = undefined;
    this.type = InputType.Text;
    this.label = undefined;
    this.value = '';
    this.required = false;
    this.min = undefined;
    this.max = undefined;
    this.requiredMessage = undefined;
    this.invalidMessage = undefined;
    this.icon = undefined;
    this.rows = undefined;
    this.resizeable = undefined;
  }
  validateValue(newValue) {
    const isBlank = typeof newValue !== 'string' || newValue === '';
    this.filled = !isBlank;
  }
  render() {
    const minMaxArg = this.charInputTypes.includes(this.type)
      ? { minlength: this.min, maxlength: this.max }
      : { min: this.min, max: this.max };
    return (h(Host, null, h("bs-form-field", { ref: (el) => {
        this.formFieldRef = el;
      }, value: this.value, name: this.name, hidden: this.type === 'hidden', focused: this.placeholderInputTypes.includes(this.type) ? true : this.focused, filled: this.filled, invalid: this.invalid, required: this.required, invalidMessage: this.invalidMessage, requiredMessage: this.requiredMessage, label: this.label, icon: this.icon, validator: this.getValidator(), onClick: this.focus }, this.type === 'textarea' ? (h("textarea", { rows: this.rows, slot: "form-element", class: { 'form-input': true, 'is-resizeable': this.resizeable }, required: this.required, id: this.name, minlength: this.min, maxlength: this.max, value: this.value, name: this.name, onFocus: this.focus, onFocusout: this.focusout })) : (h("input", Object.assign({ ref: (el) => {
        this.inputEl = el;
      }, slot: "form-element", class: "form-input", required: this.required, id: this.name, type: this.type }, minMaxArg, { value: this.value, name: this.name, onFocus: this.focus, onFocusout: this.focusout }))), h("label", { slot: "form-label", class: "form-label", htmlFor: this.name, title: this.label }, this.label, this.required ? h("span", { "aria-hidden": "true" }, "\u00A0*") : ''))));
  }
  static get watchers() { return {
    "value": ["validateValue"]
  }; }
};
BsFormInput.style = formInputCss;

export { BsFormInput as bs_form_input };

//# sourceMappingURL=bs-form-input.entry.js.map