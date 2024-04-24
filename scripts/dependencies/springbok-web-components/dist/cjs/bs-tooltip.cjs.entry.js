'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-34e16b56.js');
const icon_types = require('./icon.types-5e9e7ac2.js');
const throttle = require('./throttle-20539969.js');

const tooltipCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;display:inline}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .tooltip-button{display:inline-flex;align-items:center;padding:0.2em 0.5em;font:inherit;cursor:help;background:#f8f7f3;border:0;border-radius:0.3333333333rem}:host .tooltip-button p,:host .tooltip-button h1,:host .tooltip-button h2,:host .tooltip-button h3,:host .tooltip-button h4,:host .tooltip-button h5,:host .tooltip-button h6{font-size:100%;font-weight:normal;overflow-wrap:break-word}:host .highlighted-term{margin-right:0.25em;font-weight:600}:host .tooltip{position:relative;display:inline-flex}:host .icon-wrapper{font-size:1.2em;line-height:0;color:inherit;cursor:help;background:transparent;border:0}:host .icon-wrapper.is-disabled{pointer-events:none}:host .content-wrapper{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;visibility:hidden;opacity:0;transition:0.5s cubic-bezier(0.5, 0, 0, 1);transition-property:visibility, opacity, transform;transform:translateY(5px)}:host .content-wrapper.is-visible{visibility:visible;opacity:1;transform:translateY(0)}:host .content-panel{z-index:4;position:absolute;bottom:100%;left:50%;padding-bottom:0.75rem;margin-bottom:0.35em;transform:translateX(-50%)}:host .content-panel:before{position:absolute;bottom:0;left:50%;width:1.5833333333rem;height:calc(0.75rem + 1px);clip-path:polygon(50% 0%, 0% 100%, 100% 100%);content:\"\";background:#f8f7f3;border-radius:0.25em 0 0;transform:translateX(-50%) rotate(180deg)}:host .content-panel.is-below-icon{top:100%;bottom:unset;padding-top:0.75rem;padding-bottom:unset;margin-top:0.35em;margin-bottom:unset}:host .content-panel.is-below-icon:before{top:0;bottom:unset;transform:translateX(-50%)}:host .content{position:relative;width:max-content;max-width:30rem;max-height:16.6666666667rem;padding:20px 24px;overflow-y:auto;font-size:1.1666666667rem;text-align:left;pointer-events:visible;background:#f8f7f3;border-radius:1.3333333333rem}@media screen and (max-width: 767px){:host .content{max-width:25rem}}:host .title{display:block;margin-bottom:0.4166666667rem;font-size:2rem;font-weight:600}";

const BsTooltip = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    this.throttleMethod = throttle.throttle(this.onResize, 1000);
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
    return (index.h(index.Host, null, index.h("button", { class: "tooltip-button", onClick: this.toggleTooltipOpening.bind(this), onMouseEnter: this.openTooltip.bind(this), onMouseLeave: this.closeTooltip.bind(this) }, index.h("span", { class: "highlighted-term" }, index.h("slot", null)), index.h("div", { ref: (el) => {
        this.tooltipRef = el;
      }, class: "tooltip" }, index.h("div", { class: `icon-wrapper ${this.isTransitioning ? 'is-disabled' : ''}` }, index.h("bs-icon", { name: icon_types.IconName.Help })), index.h("div", { ref: (el) => {
        this.tooltipWrapperRef = el;
      }, class: `content-wrapper ${this.isContentVisible ? 'is-visible' : ''}` }, index.h("div", { ref: (el) => {
        this.tooltipPanelRef = el;
      }, class: `content-panel ${this.bottomPosition ? 'is-below-icon' : ''}` }, index.h("div", { ref: (el) => {
        this.tooltipContentRef = el;
      }, class: "content" }, index.h("span", { class: "title", innerHTML: this.titleText }), index.h("p", { innerHTML: this.contentText }))))))));
  }
  get host() { return index.getElement(this); }
};
BsTooltip.style = tooltipCss;

exports.bs_tooltip = BsTooltip;

//# sourceMappingURL=bs-tooltip.cjs.entry.js.map