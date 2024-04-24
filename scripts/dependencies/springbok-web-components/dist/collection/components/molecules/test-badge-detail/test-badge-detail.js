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
import { TitleSize, TitleTag } from '../../atoms/title/title.types';
import { TextSize } from '../../atoms/text/text.types';
/**
 * Test badge detail component.
 */
export class BsTestBadgeDetail {
  constructor() {
    this.badgeTitle = undefined;
    this.badgeText = undefined;
    this.badgeCta = undefined;
    this.badgeImages = undefined;
  }
  get parsedBadgeCta() {
    return parseIfString(this.badgeCta);
  }
  get parsedbadgeImages() {
    return parseIfString(this.badgeImages);
  }
  render() {
    return (h(Host, null, h("div", { class: "badge-detail" }, h("div", { class: "content" }, h("div", { class: "cover" }, h("bs-title", { class: "title", text: this.badgeTitle, tag: TitleTag.Span, size: TitleSize.Head3 }), h("bs-text", { class: "text", text: this.badgeText, size: TextSize.Default }), this.parsedBadgeCta.text && (h("bs-button", Object.assign({ class: "button" }, this.parsedBadgeCta))))), h("div", { class: "media" }, h("div", { class: "image-grid" }, h("div", { class: "image" }, h("bs-image", Object.assign({ class: "relative" }, this.parsedbadgeImages[0], { caption: "" }))))))));
  }
  static get is() { return "bs-test-badge-detail"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["test-badge-detail.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["test-badge-detail.css"]
    };
  }
  static get properties() {
    return {
      "badgeTitle": {
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
          "text": "The badge title."
        },
        "attribute": "badge-title",
        "reflect": false
      },
      "badgeText": {
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
          "text": "The badge content."
        },
        "attribute": "badge-text",
        "reflect": false
      },
      "badgeCta": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsButton | string",
          "resolved": "BsButton | string",
          "references": {
            "BsButton": {
              "location": "import",
              "path": "../../atoms/button/button"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The badge CTA."
        },
        "attribute": "badge-cta",
        "reflect": false
      },
      "badgeImages": {
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
          "text": "The test badge image."
        },
        "attribute": "badge-images",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('badgeCta')
], BsTestBadgeDetail.prototype, "parsedBadgeCta", null);
__decorate([
  Memoize('badgeImages')
], BsTestBadgeDetail.prototype, "parsedbadgeImages", null);
//# sourceMappingURL=test-badge-detail.js.map
