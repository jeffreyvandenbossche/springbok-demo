import { r as registerInstance, c as createEvent, h, H as Host } from './index-35b5e8ce.js';
import { M as Memoize } from './memoize-43914bec.js';
import { p as parseIfString } from './parse-if-string-dba46397.js';
import { c as compareBreakpoint, B as Breakpoint } from './breakpoints-eb85df3d.js';
import { t as throttle } from './throttle-fee772e9.js';
import { T as TouchDirections } from './default-layout.types-54024110.js';
import { i as isEmpty } from './is-empty-0ea2058d.js';
import { I as IconName } from './icon.types-2d98aa0e.js';
import { B as BaseModalId } from './base-modal.types-57eb75b1.js';

const experienceZoneModalCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;z-index:5;position:fixed;top:0;right:0;bottom:0;left:0}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .experience-zone-modal{display:flex;flex-wrap:nowrap;width:100vw;height:100vh}:host .experience-zone-modal *{flex:0 0 100%}";

var __decorate$3 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const BsExperienceZoneModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bsPauseYoutubeAction = createEvent(this, "bsPauseYoutubeAction", 7);
    this.updateIndex = (newValue) => {
      if (newValue > this.parsedExperienceZoneData.stories.length - 1) {
        this.activeIndex = 0;
      }
      else if (newValue < 0) {
        this.activeIndex = this.parsedExperienceZoneData.stories.length - 1;
      }
      else {
        this.activeIndex = newValue;
      }
      this.experienceZoneModalRef.style.transform = `translateX(-${this.activeIndex * 100}vw)`;
    };
    this.activeIndex = 0;
    this.experienceZoneData = undefined;
  }
  get parsedExperienceZoneData() {
    return parseIfString(this.experienceZoneData);
  }
  /** Listeners */
  bsNextSlideActionHandler() {
    this.updateIndex(this.activeIndex + 1);
  }
  bsPreviousSlideActionHandler() {
    this.updateIndex(this.activeIndex - 1);
  }
  componentDidLoad() {
    this.experienceZoneModalRef.style.transform = `translateX(-${this.activeIndex * 100}vw)`;
    this.experienceZoneModalRef.style.transition = `transform 0.5s ease-in-out`;
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone-modal", ref: (el) => {
        this.experienceZoneModalRef = el;
      } }, this.parsedExperienceZoneData.stories.map((story, index) => (h("bs-experience-zone-story", { active: index === this.activeIndex, hideNavigation: this.parsedExperienceZoneData.stories.length < 2, storyData: story }))))));
  }
};
__decorate$3([
  Memoize('experienceZoneData')
], BsExperienceZoneModal.prototype, "parsedExperienceZoneData", null);
BsExperienceZoneModal.style = experienceZoneModalCss;

const imageCarouselCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{position:fixed;top:0;right:0;bottom:0;left:0;z-index:5}:host .image-carousel{position:relative;display:flex;flex-direction:column;width:100%;height:100%;margin:auto;overflow:hidden}:host .carousel-body{position:relative;display:flex;flex:1 1 100%;flex-direction:column;justify-content:center}:host .focused-image{position:relative;display:flex;align-items:center;width:100%;opacity:0;animation:fade-in 0.2s linear 0.1s forwards;--image--height:240px}@media screen and (min-width: 375px){:host .focused-image{--image--height:350px}}@media screen and (min-width: 768px){:host .focused-image{height:100%;--image--height:100%}}@media screen and (max-width: 767px) and (orientation: landscape){:host .focused-image{--image--height:100vh;--image--width:100vw}}:host .counter{padding-left:2rem;color:#cbcbcb}@media screen and (min-width: 768px){:host .counter{position:absolute;right:1.3333333333rem;bottom:1.3333333333rem;padding:0.6666666667rem 1rem;font-size:1.3333333333rem;color:#fff;background-color:rgba(0, 0, 0, 0.5)}}@media screen and (max-width: 767px) and (orientation: landscape){:host .counter{position:absolute;right:1.3333333333rem;bottom:1.3333333333rem;padding:1rem}}:host .carousel-footer{display:none;width:100%;min-height:103px;margin-top:2.6666666667rem;overflow:hidden}@media screen and (min-width: 768px){:host .carousel-footer{display:block}}@media screen and (max-width: 1023px) and (orientation: landscape){:host .carousel-footer{display:none}}:host .thumbnail-wrap{display:flex;flex:1 1;gap:1.25rem;width:fit-content}:host .thumbnail{position:relative;width:13.3333333333rem;height:8.5833333333rem;color:#fff;opacity:0.5}:host .thumbnail--active{opacity:1}:host .fade-out{animation:fade-out 0.1s linear forwards}@keyframes fade-out{from{opacity:1}to{opacity:0}}@keyframes fade-in{from{opacity:0}to{opacity:1}}";

var __decorate$2 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const BsImageCarousel = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
  static get watchers() { return {
    "index": ["handleIndexChange"]
  }; }
};
__decorate$2([
  Memoize('imageCollection')
], BsImageCarousel.prototype, "parsedImageCollection", null);
BsImageCarousel.style = imageCarouselCss;

const overlayMenuCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}.base-modal{position:fixed;top:0;right:0;z-index:5}.overlay-menu,.overlay-menu>*{box-sizing:border-box}.overlay-menu{position:absolute;top:0;right:0;width:100vw;height:100%;background-color:rgba(31, 31, 31, 0.6);backdrop-filter:blur(3px)}.overlay-menu__container{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem;position:absolute;top:0;right:0;height:100%;padding:50px;padding-right:10vw;overflow:auto;background:#fff;animation:slide-in 0.5s cubic-bezier(0.5, 0, 0, 1)}@media screen and (min-width: 768px){.overlay-menu__container{font-size:1.3333333333rem;line-height:1.6}}@media screen and (max-height: 800px){.overlay-menu__container{padding-top:27px;padding-bottom:27px}}@media screen and (max-width: 1279px){.overlay-menu__container{padding-right:50px}}@media screen and (max-width: 639px){.overlay-menu__container{gap:1.8333333333rem;width:100%;padding:27px}}.overlay-menu__container.is-closing{animation:slide-out 0.5s cubic-bezier(0.5, 0, 0, 1)}.overlay-menu__head{position:relative;display:flex;justify-content:center;margin-bottom:4.1666666667rem}@media screen and (max-height: 800px){.overlay-menu__head{margin-bottom:0}}.overlay-menu__logo{--image--height:3.75rem;--image--fit:\"contain\"}@media screen and (max-width: 767px){.overlay-menu__logo{--image--height:2.6666666667rem}}.overlay-menu__close-button{position:absolute;top:50%;right:0;display:flex;align-items:center;justify-content:center;width:2.8333333333rem;height:2.8333333333rem;font-size:1.6666666667rem;cursor:pointer;border:0;border-radius:50%;outline:none;transform:translateY(-50%)}@media screen and (min-width: 768px){.overlay-menu__close-button{font-size:2rem}}.overlay-menu__content{display:flex;flex-direction:column;gap:3.3333333333rem;width:36.6666666667rem;min-height:1px}.overlay-menu__content bs-accordion-item{font-size:1.3333333333rem}@media screen and (max-width: 639px){.overlay-menu__content{width:unset}}.overlay-menu__thumbnail-item{display:flex;gap:1.3333333333rem;--image--height:65px;--image--width:65px}.overlay-menu__accordion-child{margin-left:1.6666666667rem;font-size:1rem}.overlay-menu__link{flex:1;width:100%;padding:0;font:inherit;pointer-events:all}.overlay-menu__content-panel{display:none;width:100%;height:100%;overflow:auto;-ms-overflow-style:none;scrollbar-width:none;}.overlay-menu__content-panel::-webkit-scrollbar{display:none;}.overlay-menu__content-panel.is-visible{display:block}.overlay-menu__panel-switch{display:flex;flex-shrink:0;gap:4px;align-self:center;padding:4px;margin-top:auto;border:1.5px solid #3d3d3d;border-radius:0.6666666667rem}.overlay-menu__switch-button{padding:0.75em 1.8em;font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:600;color:#000;cursor:pointer;background:transparent;border:0;border-radius:0.3333333333rem;opacity:0.38;transition:0.2s ease-out;transition-property:background, opacity}@media screen and (max-width: 767px){.overlay-menu__switch-button{font-size:1rem}}.overlay-menu__switch-button:not([aria-selected=true]):hover{background:#3d3d3d}.overlay-menu__switch-button[aria-selected=true]{color:#f00;background:#fff;opacity:1}@keyframes slide-in{from{transform:translateX(100%)}to{transform:translateX(0)}}@keyframes slide-out{from{transform:translateX(0)}to{transform:translateX(100%)}}";

var __decorate$1 = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const BsOverlayMenu = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.modalId = BaseModalId.OverlayMenu;
    /**
     * Methods
     */
    this.handleCloseButtonClick = () => {
      this.modalRef.close();
    };
    this.isClosing = false;
    this.headerNavigation = undefined;
  }
  get parsedHeaderNavigation() {
    return parseIfString(this.headerNavigation);
  }
  /**
   * Events
   */
  bsModalIsClosingHandler(e) {
    if (e.detail.modalId === this.modalId) {
      this.isClosing = true;
    }
  }
  render() {
    return (h(Host, null, h("bs-base-modal", { class: "base-modal", ref: (el) => {
        this.modalRef = el;
      }, modalId: this.modalId, transitionType: "fade" }, h("div", { class: "overlay-menu" }, h("div", { class: `overlay-menu__container ${this.isClosing ? 'is-closing' : ''}` }, h("div", { class: "overlay-menu__head" }, compareBreakpoint('max', Breakpoint.md) ? (h("bs-image", Object.assign({ class: "overlay-menu__logo" }, this.parsedHeaderNavigation.mobileMainLogo, { caption: "" }))) : (h("bs-image", Object.assign({ class: "overlay-menu__logo" }, this.parsedHeaderNavigation.mainLogo, { caption: "" }))), h("button", { class: "overlay-menu__close-button", "aria-label": "Close", onClick: this.handleCloseButtonClick.bind(this) }, h("bs-icon", { name: IconName.Close }))), h("div", { class: "overlay-menu__content" }, h("bs-accordion", null, this.parsedHeaderNavigation.navigation.secondary &&
      this.parsedHeaderNavigation.navigation.secondary.map((item, index) => (h("bs-click-action", { slot: "accordion-item", tagClass: "overlay-menu__link", href: isEmpty(item.children) ? item.href : '', target: item.target, disabled: !isEmpty(item.children) }, h("bs-accordion-item", { identifier: `primary-navigation-item-${index}`, "accordion-item-title": item.title, expandable: Boolean(item.children && item.children.length > 0) }, h("bs-accordion", { slot: "accordion-content" }, item.children &&
        item.children.map((child, childIndex) => (h("bs-click-action", { slot: "accordion-item", class: "overlay-menu__link", tagClass: "overlay-menu__link", target: item.target, href: isEmpty(child.children) ? child.href : '', disabled: !isEmpty(child.children) }, h("div", { class: "overlay-menu__thumbnail-item" }, h("bs-image", Object.assign({}, child.thumbnail, { caption: "" })), h("bs-accordion-item", { identifier: `primary-navigation-child-item-${childIndex}`, "accordion-item-title": child.title, expandable: Boolean(child.children && child.children.length > 0) })))))))))), this.parsedHeaderNavigation.navigation.primary &&
      this.parsedHeaderNavigation.navigation.primary.map((item, index) => (h("bs-click-action", { slot: "accordion-item", tagClass: "overlay-menu__link", href: isEmpty(item.children) ? item.href : '', target: item.target, disabled: !isEmpty(item.children) }, h("bs-accordion-item", { identifier: `secondary-navigation-item-${index}`, "accordion-item-title": item.title, expandable: Boolean(item.children && item.children.length > 0) }, h("bs-accordion", { class: "overlay-menu__accordion-child", slot: "accordion-content" }, item.children &&
        item.children.map((child, childIndex) => (h("bs-click-action", { slot: "accordion-item", tagClass: "overlay-menu__link", href: isEmpty(child.children) ? child.href : '', target: item.target, disabled: !isEmpty(item.children) }, h("bs-accordion-item", { identifier: `primary-navigation-child-item-${childIndex}`, "accordion-item-title": child.title, expandable: Boolean(child.children && child.children.length > 0) })))))))))), this.parsedHeaderNavigation.stickyButton &&
      this.parsedHeaderNavigation.stickyButton.text && (h("bs-button", Object.assign({}, this.parsedHeaderNavigation.stickyButton, { isFullWidth: true, iconRight: IconName.ArrowForward }))), this.parsedHeaderNavigation.navigation.sliderItems && (h("bs-slider", { class: "overlay-menu__slider" }, this.parsedHeaderNavigation.navigation.sliderItems.map((item) => (h("bs-click-action", { class: "overlay-menu__slider-item", slot: "slider-item", href: item.href, target: item.target }, h("bs-product-card", { "card-image": JSON.stringify(item.thumbnail), "card-title": item.title, "card-text": item.description }))))))))))));
  }
};
__decorate$1([
  Memoize('headerNavigation')
], BsOverlayMenu.prototype, "parsedHeaderNavigation", null);
BsOverlayMenu.style = overlayMenuCss;

const testBadgeModalCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;z-index:5;position:fixed;top:0;right:0;bottom:0;left:0}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}";

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
const BsTestBadgeModal = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** methods */
    this.updateIndex = (newIndex) => {
      if (!isEmpty(this.parsedtestBadgeCollection[newIndex])) {
        this.index = newIndex;
      }
      else {
        this.overlayRef.closeOverlay();
      }
    };
    this.index = 0;
    this.testBadgeCollection = undefined;
  }
  get parsedtestBadgeCollection() {
    return parseIfString(this.testBadgeCollection);
  }
  /** Listeners */
  bsNextSlideActionHandler() {
    this.updateIndex(this.index + 1);
  }
  bsPreviousSlideActionHandler() {
    this.updateIndex(this.index - 1);
  }
  render() {
    return (h(Host, null, h("bs-light-overlay", { ref: (el) => {
        this.overlayRef = el;
      }, screens: this.parsedtestBadgeCollection.length > 1 }, h("bs-test-badge-detail", Object.assign({}, this.parsedtestBadgeCollection[this.index], { slot: "media" })))));
  }
};
__decorate([
  Memoize('testBadgeCollection')
], BsTestBadgeModal.prototype, "parsedtestBadgeCollection", null);
BsTestBadgeModal.style = testBadgeModalCss;

export { BsExperienceZoneModal as bs_experience_zone_modal, BsImageCarousel as bs_image_carousel, BsOverlayMenu as bs_overlay_menu, BsTestBadgeModal as bs_test_badge_modal };

//# sourceMappingURL=bs-experience-zone-modal_4.entry.js.map