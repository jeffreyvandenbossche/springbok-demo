/* eslint-disable @stencil-community/required-jsdoc */
import { Host, h } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
import { getActiveElement } from '../../../utils/getActiveElement';
import { deepQuerySelectorAll } from '../../../utils/deepQuerySelectorAll';
/**
 * Component containing all the modals "focus trap" logic
 * This is a way to get around StencilJS not allowing class inheritance
 *
 * Each modal that requires focus trap functionality
 * needs to be nested inside this base component
 */
export class BsBaseModal {
  constructor() {
    this.modalId = undefined;
    this.transitionType = 'fade';
    this.modalCanBeClosed = true;
  }
  /**
   * Methods
   */
  async close() {
    if (!this.modalCanBeClosed)
      return;
    this.bsModalIsClosing.emit({ modalId: this.modalId });
    // animate modal closing
    this.el.classList.add('is-closing');
    // enable website scroll
    document.documentElement.classList.remove('modal-is-open');
    // when transition is finished, remove modal
    this.el.addEventListener('animationend', () => {
      this.bsModalIsClosed.emit({ modalId: this.modalId });
    });
  }
  async nextSlide() {
    this.bsNextSlideAction.emit();
  }
  async previousSlide() {
    this.bsPreviousSlideAction.emit();
  }
  async handleFocus() {
    var _a;
    // focus trap
    this.focusableElements = deepQuerySelectorAll('button:not([disabled]), a:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"]', this.el.firstElementChild);
    [this.firstFocusableElement] = this.focusableElements;
    this.lastFocusableElement = this.focusableElements[this.focusableElements.length - 1];
    // focus modal's first element
    (_a = this.firstFocusableElement) === null || _a === void 0 ? void 0 : _a.focus({ preventScroll: true });
  }
  handleKeyPress(e) {
    // handle focus trap on "Tab" key press
    if (e.key === 'Tab')
      this.handleFocusTrap(e);
    // close modal on "ESC" key press
    if (e.key === 'Escape')
      this.close();
  }
  handleFocusTrap(e) {
    const shiftKeyIsPressed = e.shiftKey;
    if (shiftKeyIsPressed) {
      if (getActiveElement() === this.firstFocusableElement) {
        // add focus for the last focusable element
        this.lastFocusableElement.focus({ preventScroll: true });
        e.preventDefault();
      }
    }
    else if (getActiveElement() === this.lastFocusableElement) {
      // add focus for the last focusable element
      this.firstFocusableElement.focus({ preventScroll: true });
      e.preventDefault();
    }
  }
  /**
   * Lifecycle Hooks
   */
  componentDidLoad() {
    document.addEventListener('keydown', this.handleKeyPress.bind(this));
    // disable website scroll
    document.documentElement.classList.add('modal-is-open');
    this.handleFocus();
    // save last page focused element (before modal opening)
    this.previousFocusedElement = getActiveElement();
  }
  disconnectedCallback() {
    var _a;
    document.removeEventListener('keydown', this.handleKeyPress.bind(this));
    // re-focus last main-content's focused element (before modal opening)
    (_a = this.previousFocusedElement) === null || _a === void 0 ? void 0 : _a.focus();
  }
  render() {
    return (h(Host, { class: `${!isEmpty(this.transitionType) ? `has-${this.transitionType}-transition` : ''}` }, h("slot", null)));
  }
  static get is() { return "bs-base-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["base-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["base-modal.css"]
    };
  }
  static get properties() {
    return {
      "modalId": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BaseModalId",
          "resolved": "BaseModalId.Media | BaseModalId.OverlayMenu",
          "references": {
            "BaseModalId": {
              "location": "import",
              "path": "./base-modal.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Props"
        },
        "attribute": "modal-id",
        "reflect": false
      },
      "transitionType": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TransitionType",
          "resolved": "\"fade\" | \"scale\"",
          "references": {
            "TransitionType": {
              "location": "import",
              "path": "./base-modal.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "attribute": "transition-type",
        "reflect": false,
        "defaultValue": "'fade'"
      },
      "modalCanBeClosed": {
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
          "text": ""
        },
        "attribute": "modal-can-be-closed",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
  static get events() {
    return [{
        "method": "bsModalIsClosing",
        "name": "bsModalIsClosing",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Events"
        },
        "complexType": {
          "original": "{ modalId: BaseModalId }",
          "resolved": "{ modalId: BaseModalId; }",
          "references": {
            "BaseModalId": {
              "location": "import",
              "path": "./base-modal.types"
            }
          }
        }
      }, {
        "method": "bsModalIsClosed",
        "name": "bsModalIsClosed",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "{ modalId: BaseModalId }",
          "resolved": "{ modalId: BaseModalId; }",
          "references": {
            "BaseModalId": {
              "location": "import",
              "path": "./base-modal.types"
            }
          }
        }
      }, {
        "method": "bsNextSlideAction",
        "name": "bsNextSlideAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }, {
        "method": "bsPreviousSlideAction",
        "name": "bsPreviousSlideAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": ""
        },
        "complexType": {
          "original": "any",
          "resolved": "any",
          "references": {}
        }
      }];
  }
  static get methods() {
    return {
      "close": {
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
          "text": "Methods",
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
          "text": "",
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
          "text": "",
          "tags": []
        }
      },
      "handleFocus": {
        "complexType": {
          "signature": "() => Promise<void>",
          "parameters": [],
          "references": {
            "Promise": {
              "location": "global"
            },
            "HTMLElement": {
              "location": "global"
            }
          },
          "return": "Promise<void>"
        },
        "docs": {
          "text": "",
          "tags": []
        }
      }
    };
  }
  static get elementRef() { return "el"; }
}
//# sourceMappingURL=base-modal.js.map
