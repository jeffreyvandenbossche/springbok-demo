import { Host, h, } from '@stencil/core';
import { parseIfString } from '@springbokagency/stencil-base';
import { BaseModalId } from '../../organisms/base-modal/base-modal.types';
import { ColorTheme, TouchDirections } from './default-layout.types';
/**
 * Default layout component.
 */
export class BsDefaultLayout {
  constructor() {
    this.touchStartX = 0;
    this.touchEndX = 0;
    this.touchThreshold = 150;
    this.overlayMenuIsOpen = undefined;
    this.overlayMenuData = undefined;
    this.youtubeModalIsOpen = undefined;
    this.youtubeModalData = undefined;
    this.carouselModalIsOpen = undefined;
    this.carouselModalData = undefined;
    this.experienceZoneModalIsOpen = undefined;
    this.experienceZoneModalData = undefined;
    this.testBadgeModalIsOpen = undefined;
    this.testBadgeModalData = undefined;
    this.theme = ColorTheme.Default;
  }
  /** Listeners */
  bsClickActionHandler(e) {
    e.stopPropagation();
    const name = e.detail.name || e.detail.action;
    switch (name) {
      case 'open-overlay-menu':
        this.overlayMenuData = e.detail.value;
        this.overlayMenuIsOpen = true;
        break;
      case 'open-youtube-modal':
        this.youtubeModalData = parseIfString(e.detail.value);
        this.youtubeModalIsOpen = true;
        break;
      case 'open-carousel-modal':
        this.carouselModalData = e.detail.value;
        this.carouselModalIsOpen = true;
        break;
      case 'open-experience-zone-modal':
        this.experienceZoneModalData = e.detail.value;
        this.experienceZoneModalIsOpen = true;
        break;
      case 'open-test-badge-modal':
        this.testBadgeModalData = parseIfString(e.detail.value);
        this.testBadgeModalIsOpen = true;
        break;
      default:
        break;
    }
  }
  bsModalIsClosedHandler(e) {
    switch (e.detail.modalId) {
      case BaseModalId.OverlayMenu:
        this.overlayMenuIsOpen = false;
        break;
      case BaseModalId.Media:
        this.youtubeModalIsOpen = false;
        this.carouselModalIsOpen = false;
        this.experienceZoneModalIsOpen = false;
        this.testBadgeModalIsOpen = false;
        break;
      default:
        break;
    }
  }
  handleTouchStart(e) {
    this.touchStartX = e.touches[0].clientX;
  }
  handleTouchEnd(e) {
    this.touchEndX = e.changedTouches[0].clientX;
    this.handleTouch();
  }
  /** Methods */
  async handleTouch() {
    if (this.touchEndX - this.touchStartX < -this.touchThreshold) {
      this.bsSwipeAction.emit({ direction: TouchDirections.Left });
    }
    if (this.touchEndX - this.touchStartX > this.touchThreshold) {
      this.bsSwipeAction.emit({ direction: TouchDirections.Right });
    }
  }
  /** lifecycle hooks */
  componentDidLoad() {
    window.onYouTubePlayerAPIReady = () => {
      this.bsYoutubeAPIReady.emit();
    };
  }
  render() {
    return (h(Host, null, h("div", { class: `default-layout` }, this.overlayMenuIsOpen && (h("bs-overlay-menu", { "header-navigation": this.overlayMenuData })), h("main", null, h("slot", null)), this.youtubeModalIsOpen && h("bs-youtube-video", Object.assign({}, this.youtubeModalData)), this.carouselModalIsOpen && h("bs-image-carousel", Object.assign({}, this.carouselModalData)), this.experienceZoneModalIsOpen && (h("bs-experience-zone-modal", Object.assign({}, this.experienceZoneModalData))), this.testBadgeModalIsOpen && h("bs-test-badge-modal", Object.assign({}, this.testBadgeModalData)))));
  }
  static get is() { return "bs-default-layout"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["default-layout.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["default-layout.css"]
    };
  }
  static get properties() {
    return {
      "theme": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ColorTheme",
          "resolved": "ColorTheme.Dark | ColorTheme.Default | ColorTheme.Light",
          "references": {
            "ColorTheme": {
              "location": "import",
              "path": "./default-layout.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Color theme"
        },
        "attribute": "theme",
        "reflect": false,
        "defaultValue": "ColorTheme.Default"
      }
    };
  }
  static get states() {
    return {
      "overlayMenuIsOpen": {},
      "overlayMenuData": {},
      "youtubeModalIsOpen": {},
      "youtubeModalData": {},
      "carouselModalIsOpen": {},
      "carouselModalData": {},
      "experienceZoneModalIsOpen": {},
      "experienceZoneModalData": {},
      "testBadgeModalIsOpen": {},
      "testBadgeModalData": {}
    };
  }
  static get events() {
    return [{
        "method": "bsSwipeAction",
        "name": "bsSwipeAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when a swipe action is detected."
        },
        "complexType": {
          "original": "{ direction: TouchDirections }",
          "resolved": "{ direction: TouchDirections; }",
          "references": {
            "TouchDirections": {
              "location": "import",
              "path": "./default-layout.types"
            }
          }
        }
      }, {
        "method": "bsYoutubeAPIReady",
        "name": "bsYoutubeAPIReady",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emitted when the youtube API script triggers the window.onYouTubeIframeAPIReady method."
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
      "handleTouch": {
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
      }
    };
  }
  static get listeners() {
    return [{
        "name": "bsClickAction",
        "method": "bsClickActionHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "bsButtonClick",
        "method": "bsClickActionHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "bsModalIsClosed",
        "method": "bsModalIsClosedHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "touchstart",
        "method": "handleTouchStart",
        "target": undefined,
        "capture": false,
        "passive": true
      }, {
        "name": "touchend",
        "method": "handleTouchEnd",
        "target": undefined,
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=default-layout.js.map
