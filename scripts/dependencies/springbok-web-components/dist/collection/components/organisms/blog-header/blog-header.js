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
 * Blog header component.
 */
export class BsBlogHeader {
  constructor() {
    this.image = undefined;
    this.logo = undefined;
    this.head = undefined;
  }
  get parsedImage() {
    return parseIfString(this.image);
  }
  get parsedLogo() {
    return parseIfString(this.logo);
  }
  get parsedTitle() {
    return parseIfString(this.head);
  }
  render() {
    return (h(Host, null, h("header", { class: "blog-header" }, h("bs-title", { variant: this.parsedTitle.variant, color: this.parsedTitle.color, tag: this.parsedTitle.tag, class: "blog-header-title", text: this.parsedTitle.text }), h("bs-image", { src: this.parsedImage.src, srcset: this.parsedImage.srcset, width: this.parsedImage.width, height: this.parsedImage.height, "image-sizes": this.parsedImage.imageSizes, "alt-text": this.parsedImage.altText, itemprop: this.parsedImage.itemprop, cover: this.parsedImage.cover }), h("bs-logo-bar", { logo: this.parsedLogo }))));
  }
  static get is() { return "bs-blog-header"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["blog-header.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["blog-header.css"]
    };
  }
  static get properties() {
    return {
      "image": {
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
          "text": "A (json)object string containing the bs-image elemement properties."
        },
        "attribute": "image",
        "reflect": false
      },
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
        "optional": false,
        "docs": {
          "tags": [],
          "text": "A (json)object string containing the bs-image that is used for the logo elemement properties."
        },
        "attribute": "logo",
        "reflect": false
      },
      "head": {
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
          "text": "A (json)object string containing the bs-title elemement properties."
        },
        "attribute": "head",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('image')
], BsBlogHeader.prototype, "parsedImage", null);
__decorate([
  Memoize('logo')
], BsBlogHeader.prototype, "parsedLogo", null);
__decorate([
  Memoize('head')
], BsBlogHeader.prototype, "parsedTitle", null);
//# sourceMappingURL=blog-header.js.map
