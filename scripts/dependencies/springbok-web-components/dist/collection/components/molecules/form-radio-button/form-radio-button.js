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
import { Memoize, isEmpty, parseIfString } from '@springbokagency/stencil-base';
/**
 * The form radio component.
 */
export class BsFormRadioButton {
  constructor() {
    /**
     * Methods
     */
    this.handleOnChange = (e) => {
      const el = e.target;
      if (el.checked) {
        this.value = el.value;
        this.formFieldRef.value = this.value;
      }
    };
    this.invalid = false;
    this.focused = false;
    this.value = undefined;
    this.name = undefined;
    this.requiredMessage = undefined;
    this.required = true;
    this.label = '';
    this.options = undefined;
  }
  get parsedOptions() {
    return parseIfString(this.options);
  }
  componentDidLoad() {
    this.parsedOptions.forEach((item) => {
      if (item.selected) {
        this.value = item.value;
        this.formFieldRef.value = this.value;
      }
    });
  }
  render() {
    return (h(Host, null, h("fieldset", { class: "form-fieldset" }, h("legend", { class: "form-legend" }, this.label, this.required && !isEmpty(this.label) ? h("span", { "aria-hidden": "true" }, "\u00A0*") : ''), h("bs-form-field", { ref: (el) => {
        this.formFieldRef = el;
      }, value: this.value, name: this.name, invalid: this.invalid, required: this.required, requiredMessage: this.requiredMessage, label: this.label, border: false }, this.parsedOptions.map((radio, index) => (h("div", { slot: "form-element", class: "form-group" }, h("input", { class: "form-input", id: `radio-${index}`, type: "radio", name: this.name, value: radio.value, disabled: radio.disabled, checked: radio.selected, onChange: this.handleOnChange }), h("label", { class: "form-label", htmlFor: `radio-${index}`, title: radio.text }, radio.text))))))));
  }
  static get is() { return "bs-form-radio-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["form-radio-button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["form-radio-button.css"]
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
          "text": "Wether or not the checkbox is required"
        },
        "attribute": "required",
        "reflect": false,
        "defaultValue": "true"
      },
      "label": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The label displayed after the checkbox"
        },
        "attribute": "label",
        "reflect": false,
        "defaultValue": "''"
      },
      "options": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "RadioButtonItem[] | string",
          "resolved": "RadioButtonItem[] | string",
          "references": {
            "RadioButtonItem": {
              "location": "import",
              "path": "./form-radio-button.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A list of values for each radio button"
        },
        "attribute": "options",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "invalid": {},
      "focused": {},
      "value": {}
    };
  }
}
__decorate([
  Memoize('options')
], BsFormRadioButton.prototype, "parsedOptions", null);
//# sourceMappingURL=form-radio-button.js.map
