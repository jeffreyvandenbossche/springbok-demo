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
/**
 * Country link card component.
 */
export class BsCountryCard {
  constructor() {
    this.flag = undefined;
    this.countryTitle = undefined;
    this.brands = undefined;
  }
  get parsedFlag() {
    return parseIfString(this.flag);
  }
  get parsedTitle() {
    return parseIfString(this.countryTitle);
  }
  get parsedBrands() {
    return parseIfString(this.brands);
  }
  render() {
    return (h(Host, null, h("div", { class: "country-card" }, h("div", { class: "flex align-center" }, h("div", { class: "flag" }, h("bs-image", Object.assign({}, this.parsedFlag))), h("div", { class: "title" }, h("bs-title", Object.assign({}, this.parsedTitle)))), h("div", { class: "flex" }, this.parsedBrands.map((brand) => (h("bs-click-action", { class: "brand", href: brand.href }, brand.label)))))));
  }
  static get is() { return "bs-country-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["country-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["country-card.css"]
    };
  }
  static get properties() {
    return {
      "flag": {
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
          "text": "The flag image."
        },
        "attribute": "flag",
        "reflect": false
      },
      "countryTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsTitle | string",
          "resolved": "BsTitle | string",
          "references": {
            "BsTitle": {
              "location": "import",
              "path": "../../atoms/title/title"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The country name."
        },
        "attribute": "country-title",
        "reflect": false
      },
      "brands": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "{ label: string; href: string }[] | string",
          "resolved": "string | { label: string; href: string; }[]",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The list of links to be rendered."
        },
        "attribute": "brands",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('flag')
], BsCountryCard.prototype, "parsedFlag", null);
__decorate([
  Memoize('countryTitle')
], BsCountryCard.prototype, "parsedTitle", null);
__decorate([
  Memoize('brands')
], BsCountryCard.prototype, "parsedBrands", null);
//# sourceMappingURL=country-card.js.map
