import { r as registerInstance, h, H as Host } from './index-35b5e8ce.js';
import { I as IconName } from './icon.types-2d98aa0e.js';
import { B as BaseModalId } from './base-modal.types-57eb75b1.js';
import { M as Memoize } from './memoize-43914bec.js';
import { p as parseIfString } from './parse-if-string-dba46397.js';
import { T as TitleTag, b as TitleSize } from './title.types-56e69b85.js';
import { a as TextSize } from './text.types-fbe6ed81.js';

const lightThemeOverlayCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}.light-overlay{height:100vh;overflow:auto;background-color:rgba(31, 31, 31, 0.6);backdrop-filter:blur(3px)}.light-overlay .light-overlay__content{position:relative;display:flex;flex-direction:column;justify-content:center;max-width:86rem;min-height:100vh;margin:0 auto}@media screen and (min-width: 1024px){.light-overlay .light-overlay__head{position:relative;flex-grow:1}}.light-overlay .light-overlay__close-icon{z-index:3;position:absolute;top:0.8333333333rem;right:0.8333333333rem;padding:0.5rem;font-size:1.6666666667rem;color:#000;background-color:transparent;border:0;border-radius:50%;outline:none}@media screen and (min-width: 768px){.light-overlay .light-overlay__close-icon{top:1.6666666667rem;right:1.6666666667rem;font-size:2rem}}@media screen and (min-width: 1024px){.light-overlay .light-overlay__close-icon{top:unset;right:0;bottom:1.6666666667rem;padding:0.5833333333rem;font-size:2rem;color:#fff;border:1px solid currentColor}}.light-overlay .light-overlay__close-icon:focus{background-color:rgba(203, 203, 203, 0.5)}.light-overlay .light-overlay__navigation-icon{position:absolute;top:50%;padding:0.5833333333rem;font-size:2rem;color:#fff;background-color:transparent;border:1px solid currentColor;border-radius:50%;z-index:2;outline:none}.light-overlay .light-overlay__navigation-icon:focus{background-color:rgba(203, 203, 203, 0.5)}.light-overlay .light-overlay__navigation-icon--previous{left:-1rem;transform:rotate(180deg) translateY(50%);transform-origin:left center}.light-overlay .light-overlay__navigation-icon--next{right:-1rem;transform:translateY(-50%) translateX(100%)}@media screen and (max-width: 1023px){.light-overlay .light-overlay__navigation-icon{display:none}}.light-overlay .light-overlay__body{position:relative;display:flex;flex-grow:1;align-items:top;width:100%;height:100%;padding:3.3333333333rem 0;background-color:#fff}@media screen and (min-width: 1024px){.light-overlay .light-overlay__body{box-sizing:border-box;flex-grow:0;padding:5.3333333333rem}}@media screen and (min-width: 1024px){.light-overlay .light-overlay__footer{flex-grow:1}}";

const BsLightOverlay = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
    registerInstance(this, hostRef);
    this.badgeTitle = undefined;
    this.badgeText = undefined;
    this.badgeCta = undefined;
    this.badgeImages = undefined;
  }
  get parsedBadgeCta() {
    return parseIfString(this.badgeCta);
  }
  get parsedbadgeImages() {
    return parseIfString(this.badgeImages);
  }
  render() {
    return (h(Host, null, h("div", { class: "badge-detail" }, h("div", { class: "content" }, h("div", { class: "cover" }, h("bs-title", { class: "title", text: this.badgeTitle, tag: TitleTag.Span, size: TitleSize.Head3 }), h("bs-text", { class: "text", text: this.badgeText, size: TextSize.Default }), this.parsedBadgeCta.text && (h("bs-button", Object.assign({ class: "button" }, this.parsedBadgeCta))))), h("div", { class: "media" }, h("div", { class: "image-grid" }, h("div", { class: "image" }, h("bs-image", Object.assign({ class: "relative" }, this.parsedbadgeImages[0], { caption: "" }))))))));
  }
};
__decorate([
  Memoize('badgeCta')
], BsTestBadgeDetail.prototype, "parsedBadgeCta", null);
__decorate([
  Memoize('badgeImages')
], BsTestBadgeDetail.prototype, "parsedbadgeImages", null);
BsTestBadgeDetail.style = testBadgeDetailCss;

export { BsLightOverlay as bs_light_overlay, BsTestBadgeDetail as bs_test_badge_detail };

//# sourceMappingURL=bs-light-overlay_2.entry.js.map