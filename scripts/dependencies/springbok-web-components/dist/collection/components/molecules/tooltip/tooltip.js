import { Host, h } from '@stencil/core';
import { IconName } from '../../atoms/icon/icon.types';
import { throttle } from '../../../utils/throttle';
/**
 * Tooltip component.
 */
export class BsTooltip {
  constructor() {
    /**
     * Properties
     */
    this.handleKeydownFunction = this.handleKeydown.bind(this); // to be able to remove event with ".bind()" function
    this.handleDocumentClickFunction = this.handleDocumentClick.bind(this); // to be able to remove event with ".bind()" function
    /**
     * Methods
     */
    this.onResize = () => {
      const windowWidth = window.innerWidth;
      const windowVerticalPadding = 10;
      const windowHorizontalPadding = 10;
      const windowContentWrapperTopBorder = windowVerticalPadding;
      const windowContentWrapperLeftBorder = windowHorizontalPadding;
      const windowContentWrapperRightBorder = windowWidth - windowHorizontalPadding;
      const tooltipTopBorder = this.tooltipPanelRef.getBoundingClientRect().top;
      const tooltipLeftBorder = this.tooltipPanelRef.getBoundingClientRect().left;
      const tooltipRightBorder = this.tooltipPanelRef.getBoundingClientRect().right;
      // if tooltip is not open
      if (!this.isContentVisible)
        return;
      // if tooltip overflows on top of window
      if (!this.bottomPosition && tooltipTopBorder < windowContentWrapperTopBorder)
        this.bottomPosition = true;
      // if tooltip don't overflow on left and right of content width
      if (tooltipLeftBorder >= windowContentWrapperLeftBorder &&
        tooltipRightBorder <= windowContentWrapperRightBorder) {
        this.tooltipContentRef.style.transform = 'translateX(0px)';
        return;
      }
      // if tooltip's right border overflows
      if (tooltipRightBorder > windowContentWrapperRightBorder) {
        const overflowAmount = windowContentWrapperRightBorder - tooltipRightBorder;
        this.tooltipContentRef.style.transform = `translateX(${overflowAmount}px)`;
        return;
      }
      // if tooltip's right border overflows
      if (tooltipLeftBorder < windowContentWrapperLeftBorder) {
        const overflowAmount = tooltipLeftBorder >= 0
          ? windowContentWrapperLeftBorder - tooltipLeftBorder
          : windowContentWrapperLeftBorder + Math.abs(tooltipLeftBorder);
        this.tooltipContentRef.style.transform = `translateX(${overflowAmount}px)`;
      }
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.bottomPosition = false;
    this.isContentVisible = false;
    this.isTransitioning = false;
    this.titleText = undefined;
    this.contentText = undefined;
  }
  /**
   * Events
   */
  // check tooltip position to avoid it overflowing the page
  setTooltipPosition() {
    this.throttleMethod();
  }
  openTooltip() {
    this.isTransitioning = true;
    this.isContentVisible = true;
    this.setTooltipPosition();
    window.addEventListener('keydown', this.handleKeydownFunction);
    document.addEventListener('click', this.handleDocumentClickFunction);
    // prevent click on tooltip trigger button when tooltip is transitioning
    this.tooltipWrapperRef.addEventListener('transitionend', () => {
      this.isTransitioning = false;
    }, { once: true });
  }
  closeTooltip() {
    this.isTransitioning = true;
    this.isContentVisible = false;
    window.removeEventListener('keydown', this.handleKeydownFunction);
    document.removeEventListener('click', this.handleDocumentClickFunction);
    // reset tooltip vertical position when closed
    // because we only check "top" overflowing in setTooltipPosition()
    this.tooltipWrapperRef.addEventListener('transitionend', () => {
      if (this.isContentVisible)
        return;
      this.bottomPosition = false;
      this.isTransitioning = false;
    }, { once: true });
  }
  handleKeydown(e) {
    if (e.key === 'Escape')
      this.closeTooltip();
  }
  handleDocumentClick(e) {
    // need to use composedPath, because by default "e.target" will always be the Shadow DOM host
    const clickTarget = e.composedPath()[0];
    if (!this.isContentVisible)
      return;
    // if click outside of tooltip
    if (!this.tooltipRef.contains(clickTarget)) {
      // close tooltip
      this.closeTooltip();
    }
  }
  toggleTooltipOpening(e) {
    e.stopPropagation(); // to avoid issues with "handleDocumentClick" function
    if (this.isTransitioning)
      return;
    if (this.isContentVisible) {
      this.closeTooltip();
    }
    else {
      this.openTooltip();
    }
  }
  render() {
    return (h(Host, null, h("button", { class: "tooltip-button", onClick: this.toggleTooltipOpening.bind(this), onMouseEnter: this.openTooltip.bind(this), onMouseLeave: this.closeTooltip.bind(this) }, h("span", { class: "highlighted-term" }, h("slot", null)), h("div", { ref: (el) => {
        this.tooltipRef = el;
      }, class: "tooltip" }, h("div", { class: `icon-wrapper ${this.isTransitioning ? 'is-disabled' : ''}` }, h("bs-icon", { name: IconName.Help })), h("div", { ref: (el) => {
        this.tooltipWrapperRef = el;
      }, class: `content-wrapper ${this.isContentVisible ? 'is-visible' : ''}` }, h("div", { ref: (el) => {
        this.tooltipPanelRef = el;
      }, class: `content-panel ${this.bottomPosition ? 'is-below-icon' : ''}` }, h("div", { ref: (el) => {
        this.tooltipContentRef = el;
      }, class: "content" }, h("span", { class: "title", innerHTML: this.titleText }), h("p", { innerHTML: this.contentText }))))))));
  }
  static get is() { return "bs-tooltip"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["tooltip.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["tooltip.css"]
    };
  }
  static get properties() {
    return {
      "titleText": {
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
          "text": "Tooltip's title"
        },
        "attribute": "title-text",
        "reflect": false
      },
      "contentText": {
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
          "text": "Tooltip's text content"
        },
        "attribute": "content-text",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "bottomPosition": {},
      "isContentVisible": {},
      "isTransitioning": {}
    };
  }
  static get elementRef() { return "host"; }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "setTooltipPosition",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
//# sourceMappingURL=tooltip.js.map
