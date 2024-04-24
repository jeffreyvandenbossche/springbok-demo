import { Host, h } from '@stencil/core';
/**
 * The container component.
 */
export class BsContainer {
  constructor() {
    this.mobileFullWidth = false;
    this.contained = false;
  }
  render() {
    return (h(Host, { class: `bs-container ${this.mobileFullWidth ? 'is-mobile-full-width' : ''} ${this.contained ? 'is-contained' : ''}` }, h("slot", null)));
  }
  static get is() { return "bs-container"; }
  static get originalStyleUrls() {
    return {
      "$": ["container.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["container.css"]
    };
  }
  static get properties() {
    return {
      "mobileFullWidth": {
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
          "text": "Should the content be centered with a max width on mobile?"
        },
        "attribute": "mobile-full-width",
        "reflect": false,
        "defaultValue": "false"
      },
      "contained": {
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
          "text": "Should the content be centered with a max width on desktop?"
        },
        "attribute": "contained",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
//# sourceMappingURL=container.js.map
