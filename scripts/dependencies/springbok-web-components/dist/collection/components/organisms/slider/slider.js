import { Host, h } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
import { IconName } from '../../atoms/icon/icon.types';
import { isInViewport } from '../../../utils/inViewport';
import { throttle } from '../../../utils/throttle';
/**
 * The Slider component.
 */
export class BsSlider {
  constructor() {
    /** Methods */
    this.onResize = () => {
      this.slides = this.teaserSliderRef.scrollWidth > this.teaserSliderRef.offsetWidth;
      if (this.slides) {
        this.handleOverlay();
        if (this.teaserSliderRef.scrollLeft + this.teaserSliderRef.offsetWidth >=
          this.teaserSliderRef.scrollWidth) {
          this.navigationRef.style.maxWidth = '100%';
        }
      }
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.onPreviousSlide = () => {
      const cards = this.getCards();
      for (let i = 0; i < cards.length; i += 1) {
        if (isInViewport(cards[i], this.teaserSliderRef)) {
          this.teaserSliderRef.scrollTo({
            behavior: 'smooth',
            left: cards[i - 1] && cards[i - 1].offsetLeft,
          });
          break;
        }
      }
      this.handleOverlay();
    };
    this.onNextSlide = () => {
      const cards = this.getCards();
      for (let i = 0; i < cards.length; i += 1) {
        if (isInViewport(cards[i], this.teaserSliderRef)) {
          const offset = cards[i].offsetLeft === this.teaserSliderRef.scrollLeft
            ? cards[i + 1].offsetLeft
            : cards[i].offsetLeft;
          this.teaserSliderRef.scrollTo({
            behavior: 'smooth',
            left: offset,
          });
          break;
        }
      }
    };
    this.handleOverlay = () => {
      const cards = this.getCards();
      const containerWidth = this.teaserSliderRef.clientWidth;
      for (let i = 0; i < cards.length; i += 1) {
        if (cards[i].offsetLeft + cards[i].offsetWidth > containerWidth) {
          this.itemsVisible = i;
          break;
        }
      }
      this.navigationRef.style.maxWidth = `${cards[this.itemsVisible - 1].getBoundingClientRect().right -
        cards[0].getBoundingClientRect().left}px`;
    };
    this.getCards = () => {
      const slotElement = this.teaserSliderRef.querySelector('slot[name="slider-item"]');
      if (isEmpty(slotElement))
        return [];
      const assignedNodes = slotElement.assignedNodes();
      return assignedNodes;
    };
    this.slides = true;
  }
  /** listeners */
  handleScreenResized() {
    this.throttleMethod();
  }
  /** lifecycle hooks */
  componentDidLoad() {
    this.slides = this.teaserSliderRef.scrollWidth > this.teaserSliderRef.offsetWidth;
    if (this.slides) {
      this.handleOverlay();
      this.teaserSliderRef.addEventListener('scroll', throttle(() => {
        if (this.teaserSliderRef.scrollLeft + this.teaserSliderRef.offsetWidth >=
          this.teaserSliderRef.scrollWidth) {
          this.navigationRef.style.maxWidth = '100%';
        }
        else {
          this.handleOverlay();
        }
      }, 200));
    }
  }
  render() {
    return (h(Host, null, this.slides && (h("div", { class: "overlay" }, h("div", { class: "navigation", ref: (el) => {
        this.navigationRef = el;
      } }, h("div", { class: "navigation-back" }, h("bs-click-action", { name: "previous", onBsClickAction: this.onPreviousSlide, tagClass: "navigation-button", ariaLabelText: "backward" }, h("bs-icon", { name: IconName.ArrowBackward }))), h("div", { class: "navigation-forward" }, h("bs-click-action", { name: "next", onBsClickAction: this.onNextSlide, tagClass: "navigation-button", ariaLabelText: "forward" }, h("bs-icon", { name: IconName.ArrowForward })))), h("div", { class: "fade" }))), h("div", { class: "teaser-slider", ref: (el) => {
        this.teaserSliderRef = el;
      } }, h("slot", { name: "slider-item" }))));
  }
  static get is() { return "bs-slider"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["slider.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["slider.css"]
    };
  }
  static get states() {
    return {
      "slides": {}
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
//# sourceMappingURL=slider.js.map
