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
import { Memoize, parseIfString, isEmpty } from '@springbokagency/stencil-base';
/**
 * Share banner component.
 */
export class BsLogoBar {
  constructor() {
    this.logo = undefined;
  }
  get parsedLogo() {
    return parseIfString(this.logo);
  }
  render() {
    return (h(Host, null, !isEmpty(this.parsedLogo.src) && (h("div", { class: "logo-bar" }, h("div", { class: "gradient" }), h("div", { class: "logo-box" }, h("bs-image", { class: "logo", src: this.parsedLogo.src, altText: this.parsedLogo.altText, width: this.parsedLogo.width, height: this.parsedLogo.height }))))));
  }
  static get is() { return "bs-logo-bar"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["logo-bar.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["logo-bar.css"]
    };
  }
  static get properties() {
    return {
      "logo": {
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The logo to be displayed ."
        },
        "attribute": "logo",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('logo')
], BsLogoBar.prototype, "parsedLogo", null);
//# sourceMappingURL=logo-bar.js.map
