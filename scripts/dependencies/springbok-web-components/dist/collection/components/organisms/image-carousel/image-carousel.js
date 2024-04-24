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
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
import { throttle } from '../../../utils/throttle';
import { TouchDirections } from '../../layouts/default-layout/default-layout.types';
/**
 * The image carousel component.
 */
export class BsImageCarousel {
  constructor() {
    /** methods */
    this.onResize = () => {
      this.desktop = compareBreakpoint('min', Breakpoint.md);
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.updateIndex = (newValue) => {
      this.focusedImageRef.classList.add('fade-out');
      this.focusedImageRef.addEventListener('animationend', () => {
        if (newValue > this.parsedImageCollection.length - 1) {
          this.index = 0;
        }
        else if (newValue < 0) {
          this.index = this.parsedImageCollection.length - 1;
        }
        else {
          this.index = newValue;
        }
        this.focusedImageRef.classList.remove('fade-out');
      });
    };
    this.setTimer = () => {
      if (this.autoplay) {
        this.timeout = setTimeout(() => {
          this.updateIndex(this.index + 1);
        }, this.slow ? 30000 : 15000);
      }
    };
    this.desktop = compareBreakpoint('min', Breakpoint.md);
    this.imageCollection = undefined;
    this.index = 0;
    this.autoplay = false;
    this.slow = false;
    this.carouselTitle = undefined;
    this.logo = undefined;
  }
  get parsedImageCollection() {
    return parseIfString(this.imageCollection);
  }
  handleIndexChange() {
    clearTimeout(this.timeout);
    this.setTimer();
    this.autoscrollThumbnails();
  }
  autoscrollThumbnails() {
    this.thumbnailWrapRef
      .getElementsByClassName('thumbnail--active')[0]
      .scrollIntoView({ behavior: 'smooth', inline: 'center' });
  }
  /** Listeners */
  handleBsSwipeAction(e) {
    if (e.detail.direction === TouchDirections.Left) {
      this.overlayRef.nextSlide();
    }
    if (e.detail.direction === TouchDirections.Right) {
      this.overlayRef.previousSlide();
    }
  }
  handleScreenResized() {
    this.throttleMethod();
  }
  handleNextMedia() {
    this.updateIndex(this.index + 1);
  }
  handlePreviousMedia() {
    this.updateIndex(this.index - 1);
  }
  render() {
    return (h(Host, null, h("bs-dark-overlay", { ref: (el) => {
        this.overlayRef = el;
      }, mainTitle: this.carouselTitle, screens: this.parsedImageCollection.length > 1, logo: this.logo }, h("div", { slot: "media", class: "image-carousel" }, h("div", { class: "carousel-body" }, h("bs-image", { ref: (el) => {
        this.focusedImageRef = el;
      }, class: "focused-image", src: this.parsedImageCollection[this.index].src, srcset: this.parsedImageCollection[this.index].srcset, width: this.parsedImageCollection[this.index].width, height: this.parsedImageCollection[this.index].height, altText: this.parsedImageCollection[this.index].altText, itemprop: this.parsedImageCollection[this.index].itemprop, caption: this.parsedImageCollection[this.index].caption, captionCover: this.desktop, cover: this.desktop }), h("div", { class: "counter" }, this.index + 1, "/", this.parsedImageCollection.length)), h("div", { class: "carousel-footer", ref: (el) => {
        this.thumbnailWrapRef = el;
      } }, h("div", { class: "thumbnail-wrap" }, this.parsedImageCollection.map((thumbnail, index) => (h("bs-image", { class: `thumbnail ${index === this.index && 'thumbnail--active'}`, src: thumbnail.src, srcset: thumbnail.srcset, width: thumbnail.width, height: thumbnail.height, "image-sizes": "200px, 400px", "alt-text": thumbnail.altText, itemprop: this.parsedImageCollection[this.index].itemprop, cover: true })))))))));
  }
  static get is() { return "bs-image-carousel"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["image-carousel.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["image-carousel.css"]
    };
  }
  static get properties() {
    return {
      "imageCollection": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsImage[] | string",
          "resolved": "BsImage[] | string",
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
          "text": "The list of images to be shown in the carousel."
        },
        "attribute": "image-collection",
        "reflect": false
      },
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
      "autoplay": {
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
          "text": "Should autoplay be enabled?"
        },
        "attribute": "autoplay",
        "reflect": false,
        "defaultValue": "false"
      },
      "slow": {
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
          "text": "Should the autoplay be slow?"
        },
        "attribute": "slow",
        "reflect": false,
        "defaultValue": "false"
      },
      "carouselTitle": {
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
        "attribute": "carousel-title",
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
          "text": "The logo to be displayed in the footer."
        },
        "attribute": "logo",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "desktop": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "index",
        "methodName": "handleIndexChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "bsSwipeAction",
        "method": "handleBsSwipeAction",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "resize",
        "method": "handleScreenResized",
        "target": "window",
        "capture": false,
        "passive": true
      }, {
        "name": "bsNextSlideAction",
        "method": "handleNextMedia",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "bsPreviousSlideAction",
        "method": "handlePreviousMedia",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Memoize('imageCollection')
], BsImageCarousel.prototype, "parsedImageCollection", null);
//# sourceMappingURL=image-carousel.js.map
