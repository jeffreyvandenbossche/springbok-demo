'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-34e16b56.js');
const memoize = require('./memoize-77bb7912.js');
const isEmpty = require('./is-empty-3de4afc0.js');
const parseIfString = require('./parse-if-string-1e2d7fee.js');
const icon_types = require('./icon.types-5e9e7ac2.js');
const baseModal_types = require('./base-modal.types-031a05df.js');
const breakpoints = require('./breakpoints-d2c74c04.js');
const throttle = require('./throttle-20539969.js');
const youtubeVideo_types = require('./youtube-video.types-596b7828.js');

const darkThemeOverlayCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}.dark-overlay{width:100%;height:100%;color:#fff;background-color:#161616}.dark-overlay .dark-overlay__content{display:flex;flex-direction:column;justify-content:center;max-width:108rem;height:100%;margin:0 auto}.dark-overlay .dark-overlay__head{display:flex;align-items:center;justify-content:space-between;margin:1.3333333333rem 0;font-size:1.5rem;color:#fff}@media screen and (max-width: 1023px) and (orientation: landscape){.dark-overlay .dark-overlay__head{z-index:3;position:absolute;top:0;left:0;box-sizing:border-box;max-width:100% !important;padding:0.8333333333rem 1.6666666667rem;margin:0 !important;background-color:rgba(255, 255, 255, 0.1)}}@media screen and (min-width: 1024px){.dark-overlay .dark-overlay__head{position:static;margin:2.6666666667rem 0}}.dark-overlay .dark-overlay__brand-icon{font-size:3.75rem}@media screen and (max-width: 767px){.dark-overlay .dark-overlay__brand-icon{font-size:2rem}}.dark-overlay .dark-overlay__close-icon{padding:0.5rem;font-size:1.6666666667rem;color:currentColor;background-color:#292929;border:0;border-radius:50%;outline:none}@media screen and (min-width: 768px){.dark-overlay .dark-overlay__close-icon{padding:0.6666666667rem;font-size:2rem}}.dark-overlay .dark-overlay__close-icon:focus{background-color:#3d3d3d}.dark-overlay .dark-overlay__navigation-icon{position:absolute;top:50%;padding:1.25rem;font-size:2rem;color:currentColor;color:#fff;background-color:#292929;border:0;border-radius:50%;z-index:2;outline:none}.dark-overlay .dark-overlay__navigation-icon:focus{background-color:#3d3d3d}.dark-overlay .dark-overlay__navigation-icon--previous{left:-1rem;transform:rotate(180deg) translateY(50%);transform-origin:left center}.dark-overlay .dark-overlay__navigation-icon--next{right:-1rem;transform:translateY(-50%) translateX(100%)}@media screen and (max-width: 1279px){.dark-overlay .dark-overlay__navigation-icon{display:none}}.dark-overlay .dark-overlay__body{position:relative;flex:1 1 500px;min-height:1px}@media screen and (max-width: 1023px){.dark-overlay .dark-overlay__body{display:flex;align-items:center;width:100%;overflow:scroll}}@media screen and (min-width: 1280px){.dark-overlay .dark-overlay__body{flex:0 1 679px}}.dark-overlay .dark-overlay__footer{display:flex;gap:1.6666666667rem;align-items:flex-end;justify-content:space-between;margin:1.3333333333rem 0;color:#fff}@media screen and (max-width: 1023px) and (orientation: landscape){.dark-overlay .dark-overlay__footer{z-index:3;position:absolute;bottom:0;left:0;box-sizing:border-box;max-width:100% !important;padding:0.8333333333rem 1.6666666667rem;margin:0 !important;background-color:rgba(255, 255, 255, 0.1)}}@media screen and (min-width: 1024px){.dark-overlay .dark-overlay__footer{box-sizing:border-box;gap:6.6666666667rem;align-items:center;margin:5.5rem 0 2.6666666667rem}}.dark-overlay .dark-overlay__title{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.dark-overlay .dark-overlay__title{font-size:1.3333333333rem;line-height:1.6}}.dark-overlay .dark-overlay__logo{max-width:120px;max-height:25px}@media screen and (min-width: 768px){.dark-overlay .dark-overlay__logo{max-width:200px;max-height:55px}}.media-container{width:100%;height:100%}.footer-main{display:flex;flex:1;flex-direction:column;gap:1.1666666667rem}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const BsDarkOverlay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    /** Methods */
    this.onResize = () => {
      this.isMobile = breakpoints.compareBreakpoint('max', breakpoints.Breakpoint.lg);
    };
    this.throttleMethod = throttle.throttle(this.onResize, 1000);
    this.isMobile = breakpoints.compareBreakpoint('max', breakpoints.Breakpoint.lg);
    this.mainTitle = undefined;
    this.screens = false;
    this.logo = undefined;
  }
  get parsedLogo() {
    return parseIfString.parseIfString(this.logo);
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
    return (index.h(index.Host, null, index.h("bs-base-modal", { ref: (el) => {
        this.modalRef = el;
      }, modalId: baseModal_types.BaseModalId.Media, transitionType: "fade" }, index.h("div", { class: "dark-overlay" }, index.h("div", { class: "dark-overlay__content" }, index.h("bs-container", { class: "dark-overlay__head", contained: true }, index.h("bs-icon", { class: "dark-overlay__brand-icon", name: icon_types.IconName.BMark }), index.h("bs-click-action", { name: "close-dark-overlay", tagClass: "dark-overlay__close-icon", onBsClickAction: this.closeOverlay.bind(this) }, index.h("bs-icon", { name: icon_types.IconName.Close }))), index.h("bs-container", { class: "dark-overlay__body", mobileFullWidth: true, contained: true }, this.screens && (index.h("bs-click-action", { name: "previous-media", tagClass: "dark-overlay__navigation-icon dark-overlay__navigation-icon--previous", onBsClickAction: this.previousSlide.bind(this), disabled: this.isMobile }, index.h("bs-icon", { name: icon_types.IconName.CaretForward }))), index.h("div", { class: "media-container" }, index.h("slot", { name: "media" })), this.screens && (index.h("bs-click-action", { name: "next-media", tagClass: "dark-overlay__navigation-icon dark-overlay__navigation-icon--next", onBsClickAction: this.nextSlide.bind(this), disabled: this.isMobile }, index.h("bs-icon", { name: icon_types.IconName.CaretForward })))), index.h("bs-container", { class: "dark-overlay__footer", contained: true }, index.h("div", { class: "footer-main" }, !isEmpty.isEmpty(this.mainTitle) && (index.h("bs-text", { text: this.mainTitle, class: "dark-overlay__title" })), index.h("slot", { name: "controller" })), !isEmpty.isEmpty(this.parsedLogo) && (index.h("bs-image", { class: "dark-overlay__logo", src: this.parsedLogo.src, "alt-text": this.parsedLogo.altText }))))))));
  }
};
__decorate([
  memoize.Memoize('logo')
], BsDarkOverlay.prototype, "parsedLogo", null);
BsDarkOverlay.style = darkThemeOverlayCss;

const youtubeControlCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host .youtube-control{background-color:#292929;border-radius:5px}@media screen and (max-width: 767px){:host .youtube-control{width:100%}}:host .media-control-bar{display:flex;gap:0.6666666667rem;align-items:center;height:40px;padding:0 8px;color:#fff}@media screen and (max-width: 767px){:host .media-control-bar{gap:1rem;height:54px}}:host .youtube-control-button{font-size:1.3333333333rem;color:#fff;background:transparent;border:0;outline-color:#fff}@media screen and (max-width: 767px){:host .youtube-control-button{font-size:1.5833333333rem}}:host .slider{width:100%;height:3px;appearance:none;outline-color:#fff}:host .slider::-webkit-slider-thumb{width:12px;height:12px;appearance:none;cursor:grabbing;background:#f00;border:2px solid #fff;border-radius:50%}:host .slider:disabled{background-color:#3d3d3d}:host .slider:disabled::-webkit-slider-thumb{cursor:default}:host bs-button{font-size:1.6666666667rem;line-height:0}:host bs-icon{font-size:2rem}";

const BsYoutubeControl = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bsYoutubeControllerClick = index.createEvent(this, "bsYoutubeControllerClick", 7);
    /** Methods */
    this.onButtonClick = (e) => {
      this.bsYoutubeControllerClick.emit({
        id: this.videoId,
        action: e.detail.name,
        value: e.detail.value,
      });
    };
    this.onSliderChange = (e) => {
      const el = e.target;
      this.bsYoutubeControllerClick.emit({
        id: this.videoId,
        action: 'progress-bar-input',
        value: el.valueAsNumber,
      });
    };
    this.videoActive = false;
    this.videoId = undefined;
    this.playerState = youtubeVideo_types.PlayerState.UNSTARTED;
    this.mute = true;
    this.currentTime = 0;
  }
  /** Listeners */
  bsYoutubeControllerUpdateHandler(e) {
    if (this.videoId === e.detail.id) {
      this.mute = e.detail.mute;
      this.playerState = e.detail.playerState;
      this.currentTime = isEmpty.isEmpty(e.detail.currentTime) ? 0 : e.detail.currentTime;
      this.videoActive = [youtubeVideo_types.PlayerState.PLAYING, youtubeVideo_types.PlayerState.PAUSED, youtubeVideo_types.PlayerState.BUFFERING].includes(e.detail.playerState);
    }
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "youtube-control" }, index.h("div", { class: "media-control-bar" }, index.h("bs-click-action", { name: "play", tagClass: "youtube-control-button", onBsClickAction: this.onButtonClick, value: this.playerState === youtubeVideo_types.PlayerState.PLAYING ? youtubeVideo_types.PlayerState.PAUSED : youtubeVideo_types.PlayerState.PLAYING }, index.h("bs-icon", { name: [youtubeVideo_types.PlayerState.PLAYING, youtubeVideo_types.PlayerState.BUFFERING].includes(this.playerState)
        ? icon_types.IconName.Pause
        : icon_types.IconName.Play })), index.h("input", { onInput: this.onSliderChange, value: this.currentTime, type: "range", id: "vol", name: "vol", min: "0", max: "100", class: "slider", step: "0.1", disabled: !this.videoActive }), index.h("bs-click-action", { name: "mute", tagClass: "youtube-control-button", onBsClickAction: (e) => {
        this.mute = !this.mute;
        this.onButtonClick(e);
      } }, index.h("bs-icon", { name: this.mute ? icon_types.IconName.Mute : icon_types.IconName.Volume })), index.h("bs-click-action", { name: "fullscreen", tagClass: "youtube-control-button", onBsClickAction: this.onButtonClick, disabled: !this.videoActive }, index.h("bs-icon", { name: icon_types.IconName.Resize }))))));
  }
};
BsYoutubeControl.style = youtubeControlCss;

exports.bs_dark_overlay = BsDarkOverlay;
exports.bs_youtube_control = BsYoutubeControl;

//# sourceMappingURL=bs-dark-overlay_2.cjs.entry.js.map