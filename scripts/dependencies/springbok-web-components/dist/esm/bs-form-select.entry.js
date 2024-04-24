import { r as registerInstance, h, H as Host, g as getElement } from './index-35b5e8ce.js';
import { M as Memoize } from './memoize-43914bec.js';
import { p as parseIfString } from './parse-if-string-dba46397.js';

var KeyboardCodes;
(function (KeyboardCodes) {
  KeyboardCodes["ArrowDown"] = "ArrowDown";
  KeyboardCodes["ArrowUp"] = "ArrowUp";
  KeyboardCodes["Escape"] = "Escape";
  KeyboardCodes["Enter"] = "Enter";
})(KeyboardCodes || (KeyboardCodes = {}));

const formSelectCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;cursor:pointer}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .custom-select{position:absolute;width:100%;height:100%;padding:2rem 2rem 0;text-align:left;cursor:pointer;background:unset;border:0}:host .custom-options-wrapper{position:absolute;top:calc(100% + 1px);left:0;z-index:5;width:100%;max-height:0;overflow:hidden;transition:max-height 0.5s ease}:host .custom-option{display:flex;align-items:center;min-height:4rem;padding-left:2rem;cursor:pointer;background-color:#fff;border-bottom:2px solid #292929}:host .custom-option.is-disabled{color:#474747;cursor:not-allowed}:host .custom-option:hover,:host .custom-option:focus{background-color:#292929;outline:none}:host([focused]) .custom-options-wrapper{max-height:16.6666666667rem}.hidden{display:none}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const BsFormSelect = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.customOptions = [];
    this.focus = () => {
      this.focused = true;
      this.selectWrap.addEventListener('keydown', this.handleKeyDown, true);
      this.selectWrap.querySelector('.custom-options-wrapper').setAttribute('aria-expanded', 'true');
      this.selectWrap.querySelector('.custom-options-wrapper').style.display =
        'block';
      this.activeOption = 0;
    };
    this.focusOut = () => {
      this.focused = false;
      this.selectWrap.removeEventListener('keydown', this.handleKeyDown, true);
      this.selectWrap.querySelector('.custom-options-wrapper').setAttribute('aria-expanded', 'false');
      this.selectWrap.querySelector('.custom-options-wrapper').style.display =
        'none';
      this.activeOption = undefined;
    };
    this.handleKeyDown = (e) => {
      switch (e.code) {
        case KeyboardCodes.Enter:
          this.handleSelect(e);
          this.focusOut();
          break;
        case KeyboardCodes.ArrowDown:
          this.handleOptionfocus(KeyboardCodes.ArrowDown);
          break;
        case KeyboardCodes.ArrowUp:
          this.handleOptionfocus(KeyboardCodes.ArrowUp);
          break;
        case KeyboardCodes.Escape:
          this.focusOut();
          break;
      }
    };
    this.value = undefined;
    this.filled = false;
    this.focused = false;
    this.invalid = false;
    this.activeOption = undefined;
    this.name = undefined;
    this.label = undefined;
    this.options = undefined;
    this.required = false;
    this.requiredMessage = undefined;
    this.icon = undefined;
  }
  validateValue(newValue, oldValue) {
    if (typeof newValue === 'undefined')
      return;
    if (newValue > oldValue) {
      this.activeOption = newValue >= this.parsedOptions.length ? 0 : newValue;
    }
    else if (newValue < oldValue) {
      this.activeOption = newValue < 0 ? this.parsedOptions.length - 1 : newValue;
    }
    else {
      this.activeOption = newValue;
    }
    const options = this.selectWrap.querySelectorAll('.custom-option');
    options[this.activeOption].focus();
  }
  get parsedOptions() {
    return parseIfString(this.options);
  }
  handleFocusOut(e) {
    if (e.target.nodeName !== 'BS-FORM-SELECT') {
      this.focused = false;
    }
  }
  handleOptionfocus(direction) {
    if (direction === KeyboardCodes.ArrowDown) {
      this.activeOption += 1;
    }
    else if (direction === KeyboardCodes.ArrowUp) {
      this.activeOption -= 1;
    }
  }
  handleSelect(e) {
    var _a;
    const nativeSelect = this.selectElRef;
    const selected = e.target;
    let filled = false;
    for (let i = 0; i < nativeSelect.options.length; i += 1) {
      if (nativeSelect.options[i].innerHTML === selected.innerHTML) {
        if (nativeSelect.options[i].disabled)
          return;
        nativeSelect.selectedIndex = i;
        nativeSelect.options[i].click();
        this.value = nativeSelect.options[i];
        this.formFieldRef.value = (_a = this.value) === null || _a === void 0 ? void 0 : _a.value;
        filled = true;
        break;
      }
    }
    this.focusOut();
    this.filled = filled;
  }
  handleSelectedProp() {
    for (let i = 0; i < this.selectElRef.options.length; i += 1) {
      this.selectElRef.options[i].addEventListener('click', this.handleSelect.bind(this));
      if (this.selectElRef.options[i].selected) {
        this.selectElRef.options[i].click();
      }
    }
  }
  componentDidRender() {
    document.addEventListener('click', this.handleFocusOut.bind(this));
  }
  componentDidLoad() {
    this.customOptions.forEach((option) => {
      option.addEventListener('click', this.handleSelect.bind(this));
    });
    this.hostElement.addEventListener('focusout', this.focusOut.bind(this));
    this.handleSelectedProp();
  }
  disconnectedCallback() {
    document.removeEventListener('click', this.handleFocusOut.bind(this));
    this.hostElement.removeEventListener('focusout', this.focusOut.bind(this));
  }
  render() {
    var _a, _b;
    return (h(Host, { focused: this.focused }, h("bs-form-field", { ref: (el) => {
        this.formFieldRef = el;
      }, value: (_a = this.value) === null || _a === void 0 ? void 0 : _a.value, name: this.name, focused: this.focused || this.filled, filled: this.filled, invalid: this.invalid, required: this.required, requiredMessage: this.requiredMessage, label: this.label, icon: this.icon }, h("button", { slot: "form-element", ref: (el) => {
        this.selectWrap = el;
      }, id: this.name, class: "custom-select", onFocus: this.focus }, h("span", { class: "custom-select-value" }, (_b = this.value) === null || _b === void 0 ? void 0 : _b.text), h("select", { ref: (el) => {
        this.selectElRef = el;
        return this.selectElRef;
      }, class: "hidden", required: this.required, id: `hidden-${this.name}`, name: this.name }, this.parsedOptions.map((option) => (h("option", { selected: option.selected, value: option.value, disabled: option.disabled }, option.text)))), h("div", { "aria-labelledby": this.name }, h("ul", { class: "custom-options-wrapper hidden", "aria-haspopup": "listbox", "aria-expanded": "false", role: "group" }, this.parsedOptions.map((option) => (h("li", { ref: (el) => {
        this.customOptions.push(el);
      }, role: "option", class: `custom-option ${option.disabled ? 'is-disabled' : ''}`, tabindex: option.disabled ? '-1' : '0', "aria-disabled": option.disabled }, option.text)))))), h("label", { slot: "form-label", class: "form-label", htmlFor: this.name, title: this.label }, this.label, this.required ? h("span", { "aria-hidden": "true" }, "\u00A0*") : ''))));
  }
  get hostElement() { return getElement(this); }
  static get watchers() { return {
    "activeOption": ["validateValue"]
  }; }
};
__decorate([
  Memoize('options')
], BsFormSelect.prototype, "parsedOptions", null);
BsFormSelect.style = formSelectCss;

export { BsFormSelect as bs_form_select };

//# sourceMappingURL=bs-form-select.entry.js.map