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
import { IconName } from '../../atoms/icon/icon.types';
import { BaseModalId } from '../base-modal/base-modal.types';
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
import { throttle } from '../../../utils/throttle';
/**
 * Dark-theme overlay component.
 */
export class BsDarkOverlay {
  constructor() {
    /** Methods */
    this.onResize = () => {
      this.isMobile = compareBreakpoint('max', Breakpoint.lg);
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.isMobile = compareBreakpoint('max', Breakpoint.lg);
    this.mainTitle = undefined;
    this.screens = false;
    this.logo = undefined;
  }
  get parsedLogo() {
    return parseIfString(this.logo);
  }
  /** Listeners */
  handleScreenResized() {
    this.throttleMethod();
  }
  /**
   * This method triggers the close method on the modal.
   */
  async closeOverlay() {
    this.modalRef.close();
  }
  /**
   * This method triggers the previous slide method on the modal.
   */
  async previousSlide() {
    this.modalRef.previousSlide();
  }
  /**
   * This method triggers the next slide method on the modal.
   */
  async nextSlide() {
    this.modalRef.nextSlide();
  }
  /**
   * This method triggers the handle focus method on the modal.
   */
  async focusTrap() {
    this.modalRef.handleFocus();
  }
  render() {
    return (h(Host, null, h("bs-base-modal", { ref: (el) => {
        this.modalRef = el;
      }, modalId: BaseModalId.Media, transitionType: "fade" }, h("div", { class: "dark-overlay" }, h("div", { class: "dark-overlay__content" }, h("bs-container", { class: "dark-overlay__head", contained: true }, h("bs-icon", { class: "dark-overlay__brand-icon", name: IconName.BMark }), h("bs-click-action", { name: "close-dark-overlay", tagClass: "dark-overlay__close-icon", onBsClickAction: this.closeOverlay.bind(this) }, h("bs-icon", { name: IconName.Close }))), h("bs-container", { class: "dark-overlay__body", mobileFullWidth: true, contained: true }, this.screens && (h("bs-click-action", { name: "previous-media", tagClass: "dark-overlay__navigation-icon dark-overlay__navigation-icon--previous", onBsClickAction: this.previousSlide.bind(this), disabled: this.isMobile }, h("bs-icon", { name: IconName.CaretForward }))), h("div", { class: "media-container" }, h("slot", { name: "media" })), this.screens && (h("bs-click-action", { name: "next-media", tagClass: "dark-overlay__navigation-icon dark-overlay__navigation-icon--next", onBsClickAction: this.nextSlide.bind(this), disabled: this.isMobile }, h("bs-icon", { name: IconName.CaretForward })))), h("bs-container", { class: "dark-overlay__footer", contained: true }, h("div", { class: "footer-main" }, !isEmpty(this.mainTitle) && (h("bs-text", { text: this.mainTitle, class: "dark-overlay__title" })), h("slot", { name: "controller" })), !isEmpty(this.parsedLogo) && (h("bs-image", { class: "dark-overlay__logo", src: this.parsedLogo.src, "alt-text": this.parsedLogo.altText }))))))));
  }
  static get is() { return "bs-dark-overlay"; }
  static get originalStyleUrls() {
    return {
      "$": ["dark-theme-overlay.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dark-theme-overlay.css"]
    };
  }
  static get properties() {
    return {
      "mainTitle": {
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
        "attribute": "main-title",
        "reflect": false
      },
      "screens": {
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
          "text": "Does the content contain multiple screens?"
        },
        "attribute": "screens",
        "reflect": false,
        "defaultValue": "false"
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
          "text": "The logo to be displayed in the footer."
        },
        "attribute": "logo",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isMobile": {}
    };
  }
  static get methods() {
    return {
      "closeOverlay": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "This method triggers the close method on the modal.",
          "tags": []
        }
      },
      "previousSlide": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "This method triggers the previous slide method on the modal.",
          "tags": []
        }
      },
      "nextSlide": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "This method triggers the next slide method on the modal.",
          "tags": []
        }
      },
      "focusTrap": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "This method triggers the handle focus method on the modal.",
          "tags": []
        }
      }
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
  Memoize('logo')
], BsDarkOverlay.prototype, "parsedLogo", null);
//# sourceMappingURL=dark-theme-overlay.js.map
