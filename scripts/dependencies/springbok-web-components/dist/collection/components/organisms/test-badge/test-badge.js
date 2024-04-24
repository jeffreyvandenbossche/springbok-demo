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
 * Test Badge component.
 */
export class BsTestBadge {
  constructor() {
    this.testBadgeCollection = undefined;
  }
  get parsedTestBadgeCollection() {
    return parseIfString(this.testBadgeCollection);
  }
  render() {
    return (h(Host, null, h("bs-slider", null, this.parsedTestBadgeCollection.map((testBadge, index) => (h("bs-click-action", { class: "card", slot: "slider-item", name: "open-test-badge-modal", tagClass: "click-action", tabIndex: 1, value: { index, testBadgeCollection: this.parsedTestBadgeCollection } }, h("bs-test-badge-card", { cardTitle: testBadge.cardTitle, cardText: testBadge.cardText, cardImage: testBadge.badgeImages[0] })))))));
  }
  static get is() { return "bs-test-badge-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["test-badge.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["test-badge.css"]
    };
  }
  static get properties() {
    return {
      "testBadgeCollection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TestBadge[] | string",
          "resolved": "TestBadge[] | string",
          "references": {
            "TestBadge": {
              "location": "import",
              "path": "./test-badge.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The Experience Zone contract."
        },
        "attribute": "test-badge-collection",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('testBadgeCollection')
], BsTestBadge.prototype, "parsedTestBadgeCollection", null);
//# sourceMappingURL=test-badge.js.map
