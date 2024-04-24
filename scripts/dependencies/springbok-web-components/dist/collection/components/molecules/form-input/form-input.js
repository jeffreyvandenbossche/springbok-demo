import { Host, h } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
import { ValidatorNames } from '../../../validators/validators.types';
import { InputType } from './form-input.types';
/**
 * The form input component.
 */
export class BsFormInput {
  constructor() {
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
  static get is() { return "bs-form-input"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["form-input.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["form-input.css"]
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
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "InputType",
          "resolved": "InputType.Date | InputType.DateTime | InputType.Email | InputType.Hidden | InputType.Number | InputType.Password | InputType.Tel | InputType.Text | InputType.Textarea | InputType.Time",
          "references": {
            "InputType": {
              "location": "import",
              "path": "./form-input.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The unique name to identify the form element"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "InputType.Text"
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
      "value": {
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
          "text": "The value of the form field"
        },
        "attribute": "value",
        "reflect": false,
        "defaultValue": "''"
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
      "min": {
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
          "text": "Wether or not the input field is required"
        },
        "attribute": "min",
        "reflect": false
      },
      "max": {
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
          "text": "Wether or not the input field is required"
        },
        "attribute": "max",
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
      "invalidMessage": {
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
          "text": "The error message to be displayed when the field has an invalid input"
        },
        "attribute": "invalid-message",
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
      },
      "rows": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The default amount of rows the textarea has"
        },
        "attribute": "rows",
        "reflect": false
      },
      "resizeable": {
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
          "text": "Wether or not the textarea is resizeable by the user"
        },
        "attribute": "resizeable",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "filled": {},
      "focused": {},
      "invalid": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "validateValue"
      }];
  }
}
//# sourceMappingURL=form-input.js.map
