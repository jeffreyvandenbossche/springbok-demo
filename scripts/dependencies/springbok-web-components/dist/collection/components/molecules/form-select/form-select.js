var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from '@stencil/core';
import { Memoize, parseIfString } from '@springbokagency/stencil-base';
import { KeyboardCodes } from './form-select.types';
/**
 * The form select component.
 */
export class BsFormSelect {
  constructor() {
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
        default:
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
  static get is() { return "bs-form-select"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["form-select.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["form-select.css"]
    };
  }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The unique name to identify the form element"
        },
        "attribute": "name",
        "reflect": false
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The label describing the form field"
        },
        "attribute": "label",
        "reflect": false
      },
      "options": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SelectOption[] | string",
          "resolved": "SelectOption[] | string",
          "references": {
            "SelectOption": {
              "location": "import",
              "path": "./form-select.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The list of options that will populate the select field."
        },
        "attribute": "options",
        "reflect": false
      },
      "required": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Wether or not the input field is required"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "false"
      },
      "requiredMessage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The error message to be displayed when the required field remains empty"
        },
        "attribute": "required-message",
        "reflect": false
      },
      "icon": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "IconName",
          "resolved": "IconName",
          "references": {
            "IconName": {
              "location": "import",
              "path": "../../../components"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The icon to be displayed on the right hand side of the form field"
        },
        "attribute": "icon",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "value": {},
      "filled": {},
      "focused": {},
      "invalid": {},
      "activeOption": {}
    };
  }
  static get elementRef() { return "hostElement"; }
  static get watchers() {
    return [{
        "propName": "activeOption",
        "methodName": "validateValue"
      }];
  }
}
__decorate([
  Memoize('options')
], BsFormSelect.prototype, "parsedOptions", null);
//# sourceMappingURL=form-select.js.map
