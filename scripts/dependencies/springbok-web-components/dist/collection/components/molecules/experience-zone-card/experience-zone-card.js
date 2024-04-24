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
import { TextColor } from '../../atoms/text/text.types';
import { IconName } from '../../atoms/icon/icon.types';
/**
 * Experience Zone card component.
 */
export class BsExperienceZoneCard {
  constructor() {
    this.singular = false;
    this.cardTitle = undefined;
    this.cardImage = undefined;
    this.video = false;
  }
  get parsedCardImage() {
    return parseIfString(this.cardImage);
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone-card" }, h("div", { class: "card-title" }, h("bs-text", { class: "bs-text", text: this.cardTitle, color: TextColor.Default })), h("div", { class: "card-image" }, h("bs-image", { class: "image", cover: true, src: this.parsedCardImage.src, srcset: this.parsedCardImage.srcset, imageSizes: this.parsedCardImage.imageSizes, altText: this.parsedCardImage.altText }), this.video && h("bs-icon", { class: "video-icon", name: IconName.Play })))));
  }
  static get is() { return "bs-experience-zone-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["experience-zone-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["experience-zone-card.css"]
    };
  }
  static get properties() {
    return {
      "singular": {
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
          "text": "Should the layout for singular items be applied?"
        },
        "attribute": "singular",
        "reflect": true,
        "defaultValue": "false"
      },
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
          "text": "The Experience Zone card title."
        },
        "attribute": "card-title",
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
          "text": "The Experience Zone card image."
        },
        "attribute": "card-image",
        "reflect": false
      },
      "video": {
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
          "text": "Should the image have a play icon?"
        },
        "attribute": "video",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
__decorate([
  Memoize('cardImage')
], BsExperienceZoneCard.prototype, "parsedCardImage", null);
//# sourceMappingURL=experience-zone-card.js.map
