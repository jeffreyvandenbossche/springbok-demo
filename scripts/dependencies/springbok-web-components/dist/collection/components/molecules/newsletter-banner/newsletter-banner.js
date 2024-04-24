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
import { ButtonVariant } from '../../atoms/button/button.types';
import { TextSize } from '../../atoms/text/text.types';
import { TitleSize, TitleTag, TitleVariant } from '../../atoms/title/title.types';
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
/**
 * Newsletter banner component.
 */
export class BsNewsletterBanner {
  constructor() {
    this.sectionTitle = undefined;
    this.subtitle = undefined;
    this.button = undefined;
  }
  get parsedButton() {
    return parseIfString(this.button);
  }
  render() {
    return (h(Host, null, h("div", { class: "newsletter-banner" }, h("div", { class: "text-wrapper" }, h("bs-title", { tag: TitleTag.H2, text: this.sectionTitle, size: TitleSize.Head2, variant: TitleVariant.Slash }), h("bs-text", { text: this.subtitle, size: TextSize.Small })), h("bs-button", Object.assign({}, this.parsedButton, { isFullWidth: compareBreakpoint('max', Breakpoint.md), variant: ButtonVariant.Primary })))));
  }
  static get is() { return "bs-newsletter-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["newsletter-banner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["newsletter-banner.css"]
    };
  }
  static get properties() {
    return {
      "sectionTitle": {
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
          "text": "Section's title"
        },
        "attribute": "section-title",
        "reflect": false
      },
      "subtitle": {
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
          "text": "Subtitle"
        },
        "attribute": "subtitle",
        "reflect": false
      },
      "button": {
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
          "text": "Description."
        },
        "attribute": "button",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('button')
], BsNewsletterBanner.prototype, "parsedButton", null);
//# sourceMappingURL=newsletter-banner.js.map
