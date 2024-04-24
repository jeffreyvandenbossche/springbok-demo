import { h, Host } from '@stencil/core';
import { TitleTag, TitleVariant, TitleColor, TitleSize } from './title.types';
/**
 * The title component.
 */
export class BsTitle {
  constructor() {
    this.text = undefined;
    this.tag = TitleTag.H2;
    this.color = TitleColor.Undefined;
    this.variant = TitleVariant.None;
    this.size = TitleSize.Head1;
  }
  render() {
    const Tag = this.tag;
    const titleVariant = this.variant && this.variant !== 'undefined' ? `bs-title--${this.variant}` : '';
    const titleColor = Object.values(TitleColor).includes(this.color)
      ? `text-color-${this.color}`
      : `text-color-${TitleColor.Undefined}`;
    const fontSize = Object.values(TitleSize).includes(this.size)
      ? `font-${this.size}`
      : `font-${TitleSize.Head1}`;
    return (h(Host, null, h(Tag, { class: `${titleColor} bs-title ${titleVariant} ${fontSize}` }, this.text)));
  }
  static get is() { return "bs-title"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["title.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["title.css"]
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
          "text": "To customize the text"
        },
        "attribute": "text",
        "reflect": false
      },
      "tag": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TitleTag",
          "resolved": "TitleTag.H1 | TitleTag.H2 | TitleTag.H3 | TitleTag.H4 | TitleTag.H5 | TitleTag.H6 | TitleTag.Span",
          "references": {
            "TitleTag": {
              "location": "import",
              "path": "./title.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "To set the title tag"
        },
        "attribute": "tag",
        "reflect": false,
        "defaultValue": "TitleTag.H2"
      },
      "color": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TitleColor",
          "resolved": "TitleColor.Black | TitleColor.Primary | TitleColor.Undefined | TitleColor.White",
          "references": {
            "TitleColor": {
              "location": "import",
              "path": "./title.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "To set the color"
        },
        "attribute": "color",
        "reflect": false,
        "defaultValue": "TitleColor.Undefined"
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TitleVariant",
          "resolved": "TitleVariant.Dash | TitleVariant.None | TitleVariant.Slash",
          "references": {
            "TitleVariant": {
              "location": "import",
              "path": "./title.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "To set the title variant"
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "TitleVariant.None"
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TitleSize",
          "resolved": "TitleSize.Head1 | TitleSize.Head2 | TitleSize.Head3 | TitleSize.Head4 | TitleSize.Head5",
          "references": {
            "TitleSize": {
              "location": "import",
              "path": "./title.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "To set the title size"
        },
        "attribute": "size",
        "reflect": false,
        "defaultValue": "TitleSize.Head1"
      }
    };
  }
}
//# sourceMappingURL=title.js.map
