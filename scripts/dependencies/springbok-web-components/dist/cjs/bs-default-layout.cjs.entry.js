'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-34e16b56.js');
const parseIfString = require('./parse-if-string-1e2d7fee.js');
const baseModal_types = require('./base-modal.types-031a05df.js');
const defaultLayout_types = require('./default-layout.types-40b44fd4.js');

const defaultLayoutCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host .default-layout{color:var(--text-color);background:var(--background-color);background-color:var(--background-color)}:host .is-default{--background-color:initial;--text-color:initial}:host .is-dark-mode{--background-color:#161616;--text-color:#f8f7f3}:host .is-light-mode{--background-color:#fff;--text-color:#031824}";

const BsDefaultLayout = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bsSwipeAction = index.createEvent(this, "bsSwipeAction", 7);
    this.bsYoutubeAPIReady = index.createEvent(this, "bsYoutubeAPIReady", 7);
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
    this.theme = defaultLayout_types.ColorTheme.Default;
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
        this.youtubeModalData = parseIfString.parseIfString(e.detail.value);
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
        this.testBadgeModalData = parseIfString.parseIfString(e.detail.value);
        this.testBadgeModalIsOpen = true;
        break;
    }
  }
  bsModalIsClosedHandler(e) {
    switch (e.detail.modalId) {
      case baseModal_types.BaseModalId.OverlayMenu:
        this.overlayMenuIsOpen = false;
        break;
      case baseModal_types.BaseModalId.Media:
        this.youtubeModalIsOpen = false;
        this.carouselModalIsOpen = false;
        this.experienceZoneModalIsOpen = false;
        this.testBadgeModalIsOpen = false;
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
      this.bsSwipeAction.emit({ direction: defaultLayout_types.TouchDirections.Left });
    }
    if (this.touchEndX - this.touchStartX > this.touchThreshold) {
      this.bsSwipeAction.emit({ direction: defaultLayout_types.TouchDirections.Right });
    }
  }
  /** lifecycle hooks */
  componentDidLoad() {
    window.onYouTubePlayerAPIReady = () => {
      this.bsYoutubeAPIReady.emit();
    };
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: `default-layout` }, this.overlayMenuIsOpen && (index.h("bs-overlay-menu", { "header-navigation": this.overlayMenuData })), index.h("main", null, index.h("slot", null)), this.youtubeModalIsOpen && index.h("bs-youtube-video", Object.assign({}, this.youtubeModalData)), this.carouselModalIsOpen && index.h("bs-image-carousel", Object.assign({}, this.carouselModalData)), this.experienceZoneModalIsOpen && (index.h("bs-experience-zone-modal", Object.assign({}, this.experienceZoneModalData))), this.testBadgeModalIsOpen && index.h("bs-test-badge-modal", Object.assign({}, this.testBadgeModalData)))));
  }
};
BsDefaultLayout.style = defaultLayoutCss;

exports.bs_default_layout = BsDefaultLayout;

//# sourceMappingURL=bs-default-layout.cjs.entry.js.map