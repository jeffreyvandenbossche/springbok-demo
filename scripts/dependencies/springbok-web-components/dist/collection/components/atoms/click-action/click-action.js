import { h, Host } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
import { ClickActionTarget, ClickActionType } from './click-action.types';
/**
 * The click action component.
 */
export class BsClickAction {
  constructor() {
    this.name = undefined;
    this.value = undefined;
    this.type = ClickActionType.Button;
    this.href = undefined;
    this.target = undefined;
    this.tagClass = undefined;
    this.disabled = undefined;
    this.ariaLabelText = undefined;
  }
  handleClick(event) {
    const { name, value, type, href, target, bsClickAction } = this;
    if (href && target !== ClickActionTarget.Internal) {
      return;
    }
    bsClickAction.emit({ name, value, type, href, target });
    event.stopPropagation();
    event.preventDefault();
  }
  render() {
    const { type, href, target, disabled } = this;
    const TagType = !isEmpty(href) ? 'a' : 'button';
    const attrs = TagType === 'button' ? { type, disabled } : { href, target, disabled };
    return (h(Host, { class: "bs-click-action" }, h(TagType, Object.assign({ class: this.tagClass }, attrs, { "aria-label": this.ariaLabelText, onClick: this.handleClick.bind(this) }), h("slot", null))));
  }
  static get is() { return "bs-click-action"; }
  static get originalStyleUrls() {
    return {
      "$": ["click-action.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["click-action.css"]
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
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The name for the bsClickAction event."
        },
        "attribute": "name",
        "reflect": false
      },
      "value": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The value for the bsClickAction event."
        },
        "attribute": "value",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ClickActionType",
          "resolved": "ClickActionType.Button | ClickActionType.Reset | ClickActionType.Submit",
          "references": {
            "ClickActionType": {
              "location": "import",
              "path": "./click-action.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The type of button for the bsClickAction component."
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "ClickActionType.Button"
      },
      "href": {
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
          "text": "The href of bsClickAction component, will convert the button into a link."
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ClickActionTarget",
          "resolved": "ClickActionTarget.Blank | ClickActionTarget.Internal | ClickActionTarget.Parent | ClickActionTarget.Self | ClickActionTarget.Top",
          "references": {
            "ClickActionTarget": {
              "location": "import",
              "path": "./click-action.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The target of the provided href."
        },
        "attribute": "target",
        "reflect": false
      },
      "tagClass": {
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
          "text": "The class of the button or link."
        },
        "attribute": "tag-class",
        "reflect": false
      },
      "disabled": {
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
          "text": "Disabled state of inner tag."
        },
        "attribute": "disabled",
        "reflect": false
      },
      "ariaLabelText": {
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
          "text": "Use aria-label attribute when link/button doesn't have any text"
        },
        "attribute": "aria-label-text",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "bsClickAction",
        "name": "bsClickAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the component is clicked."
        },
        "complexType": {
          "original": "ClickActionEvent",
          "resolved": "ClickActionEvent",
          "references": {
            "ClickActionEvent": {
              "location": "import",
              "path": "./click-action.types"
            }
          }
        }
      }];
  }
}
//# sourceMappingURL=click-action.js.map
