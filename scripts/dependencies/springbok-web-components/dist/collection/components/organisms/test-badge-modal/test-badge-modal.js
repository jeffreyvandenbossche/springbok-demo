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
import { Memoize, isEmpty, parseIfString } from '@springbokagency/stencil-base';
/**
 * The test badge modal component.
 */
export class BsTestBadgeModal {
  constructor() {
    /** methods */
    this.updateIndex = (newIndex) => {
      if (!isEmpty(this.parsedtestBadgeCollection[newIndex])) {
        this.index = newIndex;
      }
      else {
        this.overlayRef.closeOverlay();
      }
    };
    this.index = 0;
    this.testBadgeCollection = undefined;
  }
  get parsedtestBadgeCollection() {
    return parseIfString(this.testBadgeCollection);
  }
  /** Listeners */
  bsNextSlideActionHandler() {
    this.updateIndex(this.index + 1);
  }
  bsPreviousSlideActionHandler() {
    this.updateIndex(this.index - 1);
  }
  render() {
    return (h(Host, null, h("bs-light-overlay", { ref: (el) => {
        this.overlayRef = el;
      }, screens: this.parsedtestBadgeCollection.length > 1 }, h("bs-test-badge-detail", Object.assign({}, this.parsedtestBadgeCollection[this.index], { slot: "media" })))));
  }
  static get is() { return "bs-test-badge-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["test-badge-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["test-badge-modal.css"]
    };
  }
  static get properties() {
    return {
      "index": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The index of the featured image."
        },
        "attribute": "index",
        "reflect": false,
        "defaultValue": "0"
      },
      "testBadgeCollection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "| (BsTestBadgeDetail & { cardTitle: string; cardText: string })[]\n    | string",
          "resolved": "(BsTestBadgeDetail & { cardTitle: string; cardText: string; })[] | string",
          "references": {
            "BsTestBadgeDetail": {
              "location": "import",
              "path": "../../molecules/test-badge-detail/test-badge-detail"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The list of images to be shown in the carousel."
        },
        "attribute": "test-badge-collection",
        "reflect": false
      }
    };
  }
  static get listeners() {
    return [{
        "name": "bsNextSlideAction",
        "method": "bsNextSlideActionHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "bsPreviousSlideAction",
        "method": "bsPreviousSlideActionHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Memoize('testBadgeCollection')
], BsTestBadgeModal.prototype, "parsedtestBadgeCollection", null);
//# sourceMappingURL=test-badge-modal.js.map
