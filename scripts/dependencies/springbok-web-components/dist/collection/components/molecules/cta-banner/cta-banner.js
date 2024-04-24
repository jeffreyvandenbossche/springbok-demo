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
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
/**
 * CTA Banner component.
 */
export class BsCTABanner {
  constructor() {
    this.bannerTitle = undefined;
    this.subtitle = undefined;
    this.button = undefined;
    this.variant = ButtonVariant.Primary;
    this.filled = false;
  }
  get parsedBannerTitle() {
    return parseIfString(this.bannerTitle);
  }
  get parsedButton() {
    return parseIfString(this.button);
  }
  render() {
    return (h(Host, { class: `is-${this.variant}-variant ${this.filled ? 'is-filled' : ''}` }, h("div", { class: "cta-banner" }, h("div", { class: "text-wrapper" }, h("bs-title", Object.assign({ class: "title" }, this.parsedBannerTitle)), this.subtitle && h("bs-text", { class: "sub", text: this.subtitle, size: TextSize.Default })), h("bs-button", Object.assign({}, this.parsedButton, { isFullWidth: this.variant === ButtonVariant.Secondary || compareBreakpoint('max', Breakpoint.md), variant: this.variant, ghost: true })))));
  }
  static get is() { return "bs-cta-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["cta-banner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["cta-banner.css"]
    };
  }
  static get properties() {
    return {
      "bannerTitle": {
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
          "text": "The (json)object containing the bs-title element properties"
        },
        "attribute": "banner-title",
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The banner subtitle"
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
          "text": "The (json)object containing the bs-button element properties."
        },
        "attribute": "button",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ButtonVariant",
          "resolved": "ButtonVariant.Primary | ButtonVariant.Secondary | ButtonVariant.Text",
          "references": {
            "ButtonVariant": {
              "location": "import",
              "path": "../../atoms/button/button.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The banner variant."
        },
        "attribute": "variant",
        "reflect": false,
        "defaultValue": "ButtonVariant.Primary"
      },
      "filled": {
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
          "text": "Should the background be filled up?"
        },
        "attribute": "filled",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
}
__decorate([
  Memoize('bannerTitle')
], BsCTABanner.prototype, "parsedBannerTitle", null);
__decorate([
  Memoize('button')
], BsCTABanner.prototype, "parsedButton", null);
//# sourceMappingURL=cta-banner.js.map
