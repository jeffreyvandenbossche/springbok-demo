'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-34e16b56.js');
const icon_types = require('./icon.types-5e9e7ac2.js');
const baseModal_types = require('./base-modal.types-031a05df.js');
const memoize = require('./memoize-77bb7912.js');
const parseIfString = require('./parse-if-string-1e2d7fee.js');
const title_types = require('./title.types-c8079842.js');
const text_types = require('./text.types-317fe5a2.js');

const lightThemeOverlayCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}.light-overlay{height:100vh;overflow:auto;background-color:rgba(31, 31, 31, 0.6);backdrop-filter:blur(3px)}.light-overlay .light-overlay__content{position:relative;display:flex;flex-direction:column;justify-content:center;max-width:86rem;min-height:100vh;margin:0 auto}@media screen and (min-width: 1024px){.light-overlay .light-overlay__head{position:relative;flex-grow:1}}.light-overlay .light-overlay__close-icon{z-index:3;position:absolute;top:0.8333333333rem;right:0.8333333333rem;padding:0.5rem;font-size:1.6666666667rem;color:#000;background-color:transparent;border:0;border-radius:50%;outline:none}@media screen and (min-width: 768px){.light-overlay .light-overlay__close-icon{top:1.6666666667rem;right:1.6666666667rem;font-size:2rem}}@media screen and (min-width: 1024px){.light-overlay .light-overlay__close-icon{top:unset;right:0;bottom:1.6666666667rem;padding:0.5833333333rem;font-size:2rem;color:#fff;border:1px solid currentColor}}.light-overlay .light-overlay__close-icon:focus{background-color:rgba(203, 203, 203, 0.5)}.light-overlay .light-overlay__navigation-icon{position:absolute;top:50%;padding:0.5833333333rem;font-size:2rem;color:#fff;background-color:transparent;border:1px solid currentColor;border-radius:50%;z-index:2;outline:none}.light-overlay .light-overlay__navigation-icon:focus{background-color:rgba(203, 203, 203, 0.5)}.light-overlay .light-overlay__navigation-icon--previous{left:-1rem;transform:rotate(180deg) translateY(50%);transform-origin:left center}.light-overlay .light-overlay__navigation-icon--next{right:-1rem;transform:translateY(-50%) translateX(100%)}@media screen and (max-width: 1023px){.light-overlay .light-overlay__navigation-icon{display:none}}.light-overlay .light-overlay__body{position:relative;display:flex;flex-grow:1;align-items:top;width:100%;height:100%;padding:3.3333333333rem 0;background-color:#fff}@media screen and (min-width: 1024px){.light-overlay .light-overlay__body{box-sizing:border-box;flex-grow:0;padding:5.3333333333rem}}@media screen and (min-width: 1024px){.light-overlay .light-overlay__footer{flex-grow:1}}";

const BsLightOverlay = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    return (index.h(index.Host, null, index.h("bs-base-modal", { ref: (el) => {
        this.modalRef = el;
      }, modalId: baseModal_types.BaseModalId.Media, transitionType: "fade" }, index.h("div", { class: "light-overlay" }, index.h("div", { class: "light-overlay__content" }, index.h("bs-container", { class: "light-overlay__head", contained: true }, index.h("bs-click-action", { name: "close-light-overlay", tagClass: "light-overlay__close-icon", onBsClickAction: this.closeOverlay.bind(this) }, index.h("bs-icon", { name: icon_types.IconName.Close }))), index.h("div", { class: "light-overlay__body" }, this.screens && (index.h("bs-click-action", { name: "previous-media", tagClass: "light-overlay__navigation-icon light-overlay__navigation-icon--previous", onBsClickAction: this.previousSlide.bind(this) }, index.h("bs-icon", { name: icon_types.IconName.CaretForward }))), index.h("bs-container", { contained: true }, index.h("slot", { name: "media" })), this.screens && (index.h("bs-click-action", { name: "next-media", tagClass: "light-overlay__navigation-icon light-overlay__navigation-icon--next", onBsClickAction: this.nextSlide.bind(this) }, index.h("bs-icon", { name: icon_types.IconName.CaretForward })))), index.h("bs-container", { class: "light-overlay__footer", contained: true }))))));
  }
};
BsLightOverlay.style = lightThemeOverlayCss;

const testBadgeDetailCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;--grid-main-image-height:250px;--grid-main-image-padding:20px;--grid-support-image-height:0;--grid-gap:0}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}@media screen and (min-width: 1024px){:host{--grid-main-image-height:435px;--grid-main-image-padding:90px;--grid-support-image-height:0;--grid-gap:0}}:host .badge-detail{display:flex;flex-direction:column;gap:1.6666666667rem}@media screen and (min-width: 1024px){:host .badge-detail{flex-direction:row-reverse;gap:3.3333333333rem;height:calc(var(--grid-main-image-height) + var(--grid-support-image-height) + var(--grid-gap))}}:host .image-grid{display:grid;grid-template-areas:\"one one\" \"two three\";grid-template-rows:var(--grid-main-image-height) var(--grid-support-image-height);grid-template-columns:1fr 1fr;gap:var(--grid-gap);width:100%}@media screen and (min-width: 1024px){:host .image-grid{width:35rem}}:host .image{--image--fit:contain;--image--height:calc(var(--grid-support-image-height) - 20px);position:relative;display:flex;align-items:center;justify-content:center;padding:1.6666666667rem;overflow:hidden;background-color:#eff1f1}:host .image:nth-child(1){--image--height:calc(var(--grid-main-image-height) - (2 * var(--grid-main-image-padding)));grid-area:one}:host .image:nth-child(2){grid-area:two}:host .image:nth-child(3){grid-area:three}:host .content{position:relative;display:flex;flex:1;flex-direction:column;overflow:auto}@media screen and (min-width: 1024px){:host .cover{position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;padding-right:0.8333333333rem}}:host .button{color:#f00}";

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
const BsTestBadgeDetail = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.badgeTitle = undefined;
    this.badgeText = undefined;
    this.badgeCta = undefined;
    this.badgeImages = undefined;
  }
  get parsedBadgeCta() {
    return parseIfString.parseIfString(this.badgeCta);
  }
  get parsedbadgeImages() {
    return parseIfString.parseIfString(this.badgeImages);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "badge-detail" }, index.h("div", { class: "content" }, index.h("div", { class: "cover" }, index.h("bs-title", { class: "title", text: this.badgeTitle, tag: title_types.TitleTag.Span, size: title_types.TitleSize.Head3 }), index.h("bs-text", { class: "text", text: this.badgeText, size: text_types.TextSize.Default }), this.parsedBadgeCta.text && (index.h("bs-button", Object.assign({ class: "button" }, this.parsedBadgeCta))))), index.h("div", { class: "media" }, index.h("div", { class: "image-grid" }, index.h("div", { class: "image" }, index.h("bs-image", Object.assign({ class: "relative" }, this.parsedbadgeImages[0], { caption: "" }))))))));
  }
};
__decorate([
  memoize.Memoize('badgeCta')
], BsTestBadgeDetail.prototype, "parsedBadgeCta", null);
__decorate([
  memoize.Memoize('badgeImages')
], BsTestBadgeDetail.prototype, "parsedbadgeImages", null);
BsTestBadgeDetail.style = testBadgeDetailCss;

exports.bs_light_overlay = BsLightOverlay;
exports.bs_test_badge_detail = BsTestBadgeDetail;

//# sourceMappingURL=bs-light-overlay_2.cjs.entry.js.map