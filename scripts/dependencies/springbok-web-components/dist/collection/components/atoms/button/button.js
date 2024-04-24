import { isEmpty } from '@springbokagency/stencil-base';
import { Host, h } from '@stencil/core';
import { ButtonType } from './button.types';
/**
 * Description of the component.
 */
export class BsButton {
  constructor() {
    this.text = undefined;
    this.href = undefined;
    this.target = undefined;
    this.value = undefined;
    this.type = ButtonType.Button;
    this.action = undefined;
    this.tagClass = undefined;
    this.variant = undefined;
    this.ghost = false;
    this.iconLeft = undefined;
    this.iconRight = undefined;
    this.isFullWidth = undefined;
    this.isDisabled = undefined;
  }
  handleClick() {
    const { type, href, target, action, value } = this;
    if (href && target === '_blank')
      return;
    this.bsButtonClick.emit({ type, href, target, action, value });
  }
  render() {
    const TagType = isEmpty(this.href) ? 'button' : 'a';
    const attributes = TagType === 'button'
      ? { type: this.type }
      : {
        href: this.href,
        target: this.target === 'internal' ? '_self' : this.target,
        rel: this.target === '_blank' ? 'noreferrer' : '',
      };
    return (h(Host, { class: `${this.isFullWidth ? 'is-full-width' : ''}` }, h(TagType, Object.assign({ class: `button
            ${this.tagClass}
            is-${this.variant}-variant
            ${this.ghost ? 'is-ghost' : ''}
            ${this.isFullWidth ? 'is-full-width' : ''}
            ${this.isDisabled ? 'is-disabled' : ''}` }, attributes, { onClick: this.handleClick.bind(this), "aria-label": this.text }), this.iconLeft && (h("span", { class: "icon" }, h("bs-icon", { name: this.iconLeft }))), !isEmpty(this.text) && h("span", { class: "text" }, this.text), this.iconRight && (h("span", { class: "icon icon--right" }, h("bs-icon", { name: this.iconRight }))))));
  }
  static get is() { return "bs-button"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["button.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["button.css"]
    };
  }
  static get properties() {
    return {
      "text": {
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
          "text": "Button's text"
        },
        "attribute": "text",
        "reflect": false
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
          "text": "Links's href"
        },
        "attribute": "href",
        "reflect": false
      },
      "target": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonTarget",
          "resolved": "ButtonTarget.Blank | ButtonTarget.Internal | ButtonTarget.Parent | ButtonTarget.Self | ButtonTarget.Top",
          "references": {
            "ButtonTarget": {
              "location": "import",
              "path": "./button.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Link's target"
        },
        "attribute": "target",
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
          "text": "The value for the bsClickEvent."
        },
        "attribute": "value",
        "reflect": false
      },
      "type": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonType",
          "resolved": "ButtonType.Button | ButtonType.Reset | ButtonType.Submit",
          "references": {
            "ButtonType": {
              "location": "import",
              "path": "./button.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Button's type"
        },
        "attribute": "type",
        "reflect": false,
        "defaultValue": "ButtonType.Button"
      },
      "action": {
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
          "text": "Define what kind of action the button will be used for (i.e. \"open-video-modal\")"
        },
        "attribute": "action",
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
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonVariant",
          "resolved": "ButtonVariant.Primary | ButtonVariant.Secondary | ButtonVariant.Text",
          "references": {
            "ButtonVariant": {
              "location": "import",
              "path": "./button.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Button's style variant"
        },
        "attribute": "variant",
        "reflect": false
      },
      "ghost": {
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
          "text": "Button's style variant"
        },
        "attribute": "ghost",
        "reflect": false,
        "defaultValue": "false"
      },
      "iconLeft": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconName",
          "resolved": "IconName",
          "references": {
            "IconName": {
              "location": "import",
              "path": "../icon/icon.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Button's icon"
        },
        "attribute": "icon-left",
        "reflect": false
      },
      "iconRight": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconName",
          "resolved": "IconName",
          "references": {
            "IconName": {
              "location": "import",
              "path": "../icon/icon.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Second button's icon"
        },
        "attribute": "icon-right",
        "reflect": false
      },
      "isFullWidth": {
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
          "text": "Make the button take the full-width"
        },
        "attribute": "is-full-width",
        "reflect": false
      },
      "isDisabled": {
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
          "text": "Disable button interactions"
        },
        "attribute": "is-disabled",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "bsButtonClick",
        "name": "bsButtonClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Button's custom click event"
        },
        "complexType": {
          "original": "ButtonClickEvent",
          "resolved": "{ type?: string; href?: string; target?: string; action?: string; value?: any; }",
          "references": {
            "ButtonClickEvent": {
              "location": "import",
              "path": "./button.types"
            }
          }
        }
      }];
  }
}
//# sourceMappingURL=button.js.map
