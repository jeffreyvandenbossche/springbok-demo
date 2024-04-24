import { h, Host } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
import { defaultValidator } from '../../../validators/validators';
import { getValidator } from '../../../validators/validators.factory';
/**
 * The form field component.
 */
export class BsFormField {
  constructor() {
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
    if (isEmpty(value) && this.required) {
      this.errorMessage = this.requiredMessage;
    }
    else if (!isEmpty(value) && this.validator && !this.validatorFunc.validate(value)) {
      this.errorMessage = this.invalidMessage;
    }
    else {
      this.invalid = false;
    }
  }
  componentWillLoad() {
    if (!isEmpty(this.validator)) {
      this.validatorFunc = getValidator(this.validator);
    }
    if (!isEmpty(this.value)) {
      this.filled = true;
      this.validate();
    }
  }
  render() {
    return (h(Host, null, h("div", { class: this.border ? 'form-field' : '' }, h("slot", { name: "form-element" }), h("slot", { name: "form-label" }), h("bs-icon", { class: "form-icon", name: this.icon })), h("span", { class: "form-error" }, this.invalid && this.errorMessage, "\u00A0")));
  }
  static get is() { return "bs-form-field"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["form-field.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["form-field.css"]
    };
  }
  static get properties() {
    return {
      "value": {
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
          "text": "The value of the form field"
        },
        "attribute": "value",
        "reflect": false
      },
      "name": {
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
          "text": "The name of the form field"
        },
        "attribute": "name",
        "reflect": false
      },
      "filled": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Wether or not the form field is filled"
        },
        "attribute": "filled",
        "reflect": true
      },
      "focused": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Wether or not the form field is focussed"
        },
        "attribute": "focused",
        "reflect": true
      },
      "invalid": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Wether or not the form field is invalid"
        },
        "attribute": "invalid",
        "reflect": true
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Wether or not the form field is required"
        },
        "attribute": "required",
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The error message to be displayed on the form field in case of invalidity"
        },
        "attribute": "invalid-message",
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
          "text": "The error message to be displayed on the form field when the required field is not populated"
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
          "text": "The label describing the form field"
        },
        "attribute": "label",
        "reflect": false
      },
      "border": {
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
          "text": "A border styling for text input and select fields"
        },
        "attribute": "border",
        "reflect": false,
        "defaultValue": "true"
      },
      "validator": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string | ValidatorEntry",
          "resolved": "string | { name: ValidatorNames; options?: any; }",
          "references": {
            "ValidatorEntry": {
              "location": "import",
              "path": "../../../validators/validators.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The validator function name used to validate the form field"
        },
        "attribute": "validator",
        "reflect": false
      }
    };
  }
  static get methods() {
    return {
      "validate": {
        "complexType": {
          "signature": "(value?: string) => Promise<void>",
          "parameters": [{
              "tags": [],
              "text": ""
            }],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "A method to run the validation on the form input value",
          "tags": []
        }
      }
    };
  }
  static get watchers() {
    return [{
        "propName": "value",
        "methodName": "valueDidChange"
      }];
  }
}
//# sourceMappingURL=form-field.js.map
