import { Host, h } from '@stencil/core';
import { CalloutBoxVariation } from './callout-box.types';
import { TextColor, TextSize } from '../../atoms/text/text.types';
/**
 * Callout box component.
 */
export class BsCalloutBox {
  constructor() {
    this.text = undefined;
    this.variation = CalloutBoxVariation.Primary;
  }
  render() {
    return (h(Host, null, h("div", { class: `callout-box callout-box--${this.variation}` }, h("bs-text", { textColor: TextColor.White, size: TextSize.Bold, text: this.text }))));
  }
  static get is() { return "bs-callout-box"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["callout-box.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["callout-box.css"]
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
          "text": "\nCallout box content text"
        },
        "attribute": "text",
        "reflect": false
      },
      "variation": {
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
          "text": "\nCallout box variation"
        },
        "attribute": "variation",
        "reflect": false,
        "defaultValue": "CalloutBoxVariation.Primary"
      }
    };
  }
}
//# sourceMappingURL=callout-box.js.map
