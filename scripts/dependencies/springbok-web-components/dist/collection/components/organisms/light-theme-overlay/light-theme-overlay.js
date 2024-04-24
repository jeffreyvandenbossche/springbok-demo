import { Host, h } from '@stencil/core';
import { IconName } from '../../atoms/icon/icon.types';
import { BaseModalId } from '../base-modal/base-modal.types';
/**
 * Lark-theme overlay component.
 */
export class BsLightOverlay {
  constructor() {
    this.screens = false;
  }
  /** Methods */
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
      }, modalId: BaseModalId.Media, transitionType: "fade" }, h("div", { class: "light-overlay" }, h("div", { class: "light-overlay__content" }, h("bs-container", { class: "light-overlay__head", contained: true }, h("bs-click-action", { name: "close-light-overlay", tagClass: "light-overlay__close-icon", onBsClickAction: this.closeOverlay.bind(this) }, h("bs-icon", { name: IconName.Close }))), h("div", { class: "light-overlay__body" }, this.screens && (h("bs-click-action", { name: "previous-media", tagClass: "light-overlay__navigation-icon light-overlay__navigation-icon--previous", onBsClickAction: this.previousSlide.bind(this) }, h("bs-icon", { name: IconName.CaretForward }))), h("bs-container", { contained: true }, h("slot", { name: "media" })), this.screens && (h("bs-click-action", { name: "next-media", tagClass: "light-overlay__navigation-icon light-overlay__navigation-icon--next", onBsClickAction: this.nextSlide.bind(this) }, h("bs-icon", { name: IconName.CaretForward })))), h("bs-container", { class: "light-overlay__footer", contained: true }))))));
  }
  static get is() { return "bs-light-overlay"; }
  static get originalStyleUrls() {
    return {
      "$": ["light-theme-overlay.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["light-theme-overlay.css"]
    };
  }
  static get properties() {
    return {
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
      }
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
}
//# sourceMappingURL=light-theme-overlay.js.map
