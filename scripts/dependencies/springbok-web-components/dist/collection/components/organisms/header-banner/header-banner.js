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
import { Variant } from './header-banner.types';
import { TitleSize, TitleTag } from '../../atoms/title/title.types';
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
import { throttle } from '../../../utils/throttle';
/**
 * Header banner component.
 */
export class BsHeaderBanner {
  constructor() {
    /** Methods */
    this.onResize = () => {
      this.isMobile = compareBreakpoint('max', Breakpoint.md);
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.isMobile = compareBreakpoint('max', Breakpoint.md);
    this.image = undefined;
    this.logo = undefined;
    this.label = undefined;
    this.headerTitle = undefined;
    this.subtitle = undefined;
    this.button = undefined;
    this.variant = undefined;
    this.video = undefined;
  }
  get parsedImage() {
    return parseIfString(this.image);
  }
  get parsedLogo() {
    return parseIfString(this.logo);
  }
  get parsedHeaderTitle() {
    return parseIfString(this.headerTitle);
  }
  get parsedButton() {
    return parseIfString(this.button);
  }
  get parsedvideo() {
    return parseIfString(this.video);
  }
  /** Listeners */
  handleScreenResized() {
    this.throttleMethod();
  }
  render() {
    return (h(Host, null, h("header", { class: "header-banner" }, h("div", { class: "content" }, !isEmpty(this.parsedLogo) ? (this.parsedLogo.src && h("bs-image", Object.assign({ class: "logo" }, this.parsedLogo))) : (h("bs-title", { size: TitleSize.Head2, tag: TitleTag.Span, class: "label", text: this.label })), h("div", { class: "center" }, h("bs-title", Object.assign({ class: "title" }, this.parsedHeaderTitle)), this.subtitle && h("bs-text", { class: "sub", text: this.subtitle }), this.parsedButton && this.parsedButton.text && (h("bs-button", Object.assign({ class: "button" }, this.parsedButton, { isFullWidth: !!this.isMobile }))))), h("div", { class: "image" }, this.variant === Variant.Image ? (h("bs-image", Object.assign({}, this.parsedImage, { caption: "" }))) : (h("bs-video-card", Object.assign({}, this.parsedvideo)))))));
  }
  static get is() { return "bs-header-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["header-banner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["header-banner.css"]
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
        "optional": true,
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A (json)object string containing the bs-image that is used for the logo elemement properties."
        },
        "attribute": "logo",
        "reflect": false
      },
      "label": {
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
          "text": "A label to be displayed on the top if there is no logo."
        },
        "attribute": "label",
        "reflect": false
      },
      "headerTitle": {
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
        "attribute": "header-title",
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
          "text": "The header banner subtitle."
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
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A (json)object string containing the bs-button elemement properties."
        },
        "attribute": "button",
        "reflect": false
      },
      "variant": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "Variant",
          "resolved": "Variant.Image | Variant.Video",
          "references": {
            "Variant": {
              "location": "import",
              "path": "./header-banner.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The header banner variant. Either 'image' or 'video'."
        },
        "attribute": "variant",
        "reflect": false
      },
      "video": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsVideoCard | string",
          "resolved": "BsVideoCard | string",
          "references": {
            "BsVideoCard": {
              "location": "import",
              "path": "../../molecules/video-card/video-card"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A (json)object string containing the bs-video-card elemement properties."
        },
        "attribute": "video",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isMobile": {}
    };
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleScreenResized",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
__decorate([
  Memoize('image')
], BsHeaderBanner.prototype, "parsedImage", null);
__decorate([
  Memoize('logo')
], BsHeaderBanner.prototype, "parsedLogo", null);
__decorate([
  Memoize('headerTitle')
], BsHeaderBanner.prototype, "parsedHeaderTitle", null);
__decorate([
  Memoize('button')
], BsHeaderBanner.prototype, "parsedButton", null);
__decorate([
  Memoize('video')
], BsHeaderBanner.prototype, "parsedvideo", null);
//# sourceMappingURL=header-banner.js.map
