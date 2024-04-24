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
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
import { IconName } from '../../atoms/icon/icon.types';
import { TextSize } from '../../atoms/text/text.types';
/**
 * Carousel card component.
 */
export class BsCarouselCard {
  constructor() {
    this.imageCollection = undefined;
    this.autoplay = false;
    this.slow = false;
    this.carouselTitle = undefined;
    this.logo = undefined;
    this.cta = undefined;
    this.slim = false;
  }
  get parsedImageCollection() {
    const parsed = parseIfString(this.imageCollection);
    const length = compareBreakpoint('min', Breakpoint.md) && !this.slim ? 4 : 3;
    return parsed.slice(0, length);
  }
  render() {
    const carouselData = {
      logo: this.logo,
      carouselTitle: this.carouselTitle,
      autoplay: this.autoplay,
      slow: this.slow,
      imageCollection: this.imageCollection,
    };
    return (h(Host, { class: this.slim ? 'is-slim' : '' }, h("div", { class: "carousel-card" }, this.parsedImageCollection.map((image, index) => (h("bs-click-action", { name: "open-carousel-modal", value: Object.assign({ index }, carouselData), class: "card-item" }, h("bs-image", { class: "card-image", src: image.src, srcset: image.srcset, width: image.width, height: image.height, imageSizes: "200px, 400px", altText: image.altText, itemprop: image.itemprop, cover: true })))), h("bs-click-action", { name: "open-carousel-modal", class: "card-item", value: Object.assign({ index: 0 }, carouselData), tagClass: "button-square" }, h("span", { class: "icon" }, h("bs-icon", { name: IconName.Gallery })), h("bs-text", { text: this.cta, size: TextSize.Default })))));
  }
  static get is() { return "bs-carousel-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["carousel-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["carousel-card.css"]
    };
  }
  static get properties() {
    return {
      "imageCollection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsImage[] | string",
          "resolved": "BsImage[] | string",
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
          "text": "The list of images to be shown in the carousel."
        },
        "attribute": "image-collection",
        "reflect": false
      },
      "autoplay": {
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
          "text": "Should autoplay be enabled?"
        },
        "attribute": "autoplay",
        "reflect": false,
        "defaultValue": "false"
      },
      "slow": {
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
          "text": "Should the autoplay be slow?"
        },
        "attribute": "slow",
        "reflect": false,
        "defaultValue": "false"
      },
      "carouselTitle": {
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
          "text": "The title of the carousel displayed in the footer."
        },
        "attribute": "carousel-title",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The logo to be displayed in the footer."
        },
        "attribute": "logo",
        "reflect": false
      },
      "cta": {
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
        "attribute": "cta",
        "reflect": false
      },
      "slim": {
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
          "text": "Should the carousel be displayed in slim variation."
        },
        "attribute": "slim",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
__decorate([
  Memoize('imageCollection')
], BsCarouselCard.prototype, "parsedImageCollection", null);
//# sourceMappingURL=carousel-card.js.map
