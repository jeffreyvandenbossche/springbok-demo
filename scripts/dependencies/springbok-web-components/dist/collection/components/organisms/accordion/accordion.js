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
import { Memoize, isEmpty, parseIfString } from '@springbokagency/stencil-base';
import { Host, h } from '@stencil/core';
/**
 * The Accordion component.
 */
export class BsAccordion {
  constructor() {
    this.mainTitle = undefined;
  }
  get parsedMainTitle() {
    return parseIfString(this.mainTitle);
  }
  // eslint-disable-next-line class-methods-use-this
  bsAccordionStateHandler(event) {
    const target = event.target;
    target.active = !target.active;
  }
  render() {
    return (h(Host, null, h("section", { class: "accordion-wrapper" }, !isEmpty(this.parsedMainTitle) && !isEmpty(this.parsedMainTitle.text) && (h("bs-title", { variant: this.parsedMainTitle.variant, color: this.parsedMainTitle.color, tag: this.parsedMainTitle.tag, text: this.parsedMainTitle.text, size: this.parsedMainTitle.size })), h("ul", { class: "accordion", "aria-label": "Accordion Control Group" }, h("slot", { name: "accordion-item" })))));
  }
  static get is() { return "bs-accordion"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion.css"]
    };
  }
  static get properties() {
    return {
      "mainTitle": {
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Section's title."
        },
        "attribute": "main-title",
        "reflect": false
      }
    };
  }
  static get listeners() {
    return [{
        "name": "bsAccordionStateAction",
        "method": "bsAccordionStateHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Memoize('mainTitle')
], BsAccordion.prototype, "parsedMainTitle", null);
//# sourceMappingURL=accordion.js.map
