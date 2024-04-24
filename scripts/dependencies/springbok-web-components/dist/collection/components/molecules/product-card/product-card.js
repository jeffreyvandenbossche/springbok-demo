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
import { TitleColor, TitleSize, TitleTag } from '../../atoms/title/title.types';
/**
 * Product card component.
 */
export class BsProductCard {
  constructor() {
    this.cardTitle = undefined;
    this.cardText = undefined;
    this.cardImage = undefined;
  }
  get parsedCardImage() {
    return parseIfString(this.cardImage);
  }
  render() {
    return (h(Host, null, h("div", { class: "card" }, h("div", { class: "image" }, h("bs-image", Object.assign({}, this.parsedCardImage, { caption: "" }))), h("div", { class: "content" }, h("bs-title", { class: "title", tag: TitleTag.Span, size: TitleSize.Head4, text: this.cardTitle, color: TitleColor.Black }), h("bs-text", { class: "text", text: this.cardText })))));
  }
  static get is() { return "bs-product-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["product-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["product-card.css"]
    };
  }
  static get properties() {
    return {
      "cardTitle": {
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
          "text": "The product card title."
        },
        "attribute": "card-title",
        "reflect": false
      },
      "cardText": {
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
          "text": "The cta label."
        },
        "attribute": "card-text",
        "reflect": false
      },
      "cardImage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsImage | string",
          "resolved": "BsImage | string",
          "references": {
            "BsImage": {
              "location": "import",
              "path": "../../atoms/image/image"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The product card image."
        },
        "attribute": "card-image",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('cardImage')
], BsProductCard.prototype, "parsedCardImage", null);
//# sourceMappingURL=product-card.js.map
