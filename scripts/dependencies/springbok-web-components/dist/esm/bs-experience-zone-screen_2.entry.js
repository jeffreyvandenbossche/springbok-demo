import { r as registerInstance, c as createEvent, h, H as Host } from './index-35b5e8ce.js';
import { M as Memoize } from './memoize-43914bec.js';
import { i as isEmpty } from './is-empty-0ea2058d.js';
import { p as parseIfString } from './parse-if-string-dba46397.js';
import { E as ExperienceZoneLayout } from './experience-zone.types-b888364a.js';
import { a as TextSize, T as TextColor } from './text.types-fbe6ed81.js';
import { c as compareBreakpoint, B as Breakpoint } from './breakpoints-eb85df3d.js';
import { T as TouchDirections } from './default-layout.types-54024110.js';

const experienceZoneScreenCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;height:100%;animation:fade-in 0.2s linear forwards}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .experience-zone-screen{display:flex;flex-direction:column;gap:1.3333333333rem;width:100%;height:100%;color:#fff}@media screen and (min-width: 768px){:host .experience-zone-screen{gap:2.6666666667rem}}:host .screen-container{flex-grow:1}:host .screen{display:grid;flex:1;gap:1.6666666667rem}:host .screen--one,:host .screen--video{grid-template-areas:\"one\";grid-template-rows:100%;grid-template-columns:100%}:host .screen--one *:nth-child(1),:host .screen--video *:nth-child(1){display:flex}:host .screen--video .screen-item{background-color:transparent}:host .screen--two{grid-template-areas:\"one\" \"two\";grid-template-rows:1fr 1fr;grid-template-columns:1fr}@media screen and (min-width: 1280px){:host .screen--two{grid-template-areas:\"one two\";grid-template-rows:auto;grid-template-columns:1fr 1fr}}:host .screen--two *:nth-child(1),:host .screen--two *:nth-child(2){display:flex}:host .screen--three{grid-template-areas:\"one one\" \"two three\";grid-template-rows:1fr 50vw;grid-template-columns:1fr 1fr}@media screen and (min-width: 1280px){:host .screen--three{grid-template-areas:\"one two\" \"one three\";grid-template-rows:1fr 1fr;grid-template-columns:auto 33%}}:host .screen--three *:nth-child(1),:host .screen--three *:nth-child(2),:host .screen--three *:nth-child(3){display:flex}:host .screen *:nth-child(1){grid-area:one}:host .screen *:nth-child(2){grid-area:two}:host .screen *:nth-child(3){grid-area:three}:host .screen-item{position:relative;display:none;align-items:center;justify-content:center;width:100%;height:100%;overflow:hidden;text-align:center;background-color:#1f1f1f;border-radius:0.6666666667rem}:host .bs-title-screen,:host .bs-quote-screen{padding:1.6666666667rem;overflow-y:auto}@media screen and (min-width: 768px){:host .bs-title-screen,:host .bs-quote-screen{padding:3.3333333333rem}}@keyframes fade-in{from{opacity:0}to{opacity:1}}";

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
const BsExperienceZoneScreen$1 = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bsYoutubeControllerClick = createEvent(this, "bsYoutubeControllerClick", 7);
    this.active = false;
    this.layout = undefined;
    this.disclaimer = undefined;
    this.components = undefined;
  }
  get parsedComponents() {
    if (this.components !== undefined) {
      return parseIfString(this.components);
    }
    return [];
  }
  /** Watchers */
  handleActiveChange(isActive) {
    if (this.layout === ExperienceZoneLayout.Video) {
      const videoId = this.parsedComponents[0].tag === 'bs-video-card' && this.parsedComponents[0].data.videoId;
      this.bsYoutubeControllerClick.emit({ id: videoId, action: 'play', value: isActive ? 1 : 0 });
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone-screen" }, h("div", { class: `screen screen--${this.layout}` }, isEmpty(this.parsedComponents)
      ? Array.from(Array(3)).map((_value, i) => (h("div", { class: `screen-item` }, h("slot", { name: `item-${i}` }))))
      : this.parsedComponents.map((component) => {
        const Tag = component.tag;
        return (h("div", { class: `screen-item ${Tag}-screen` }, h(Tag, Object.assign({}, component.data))));
      })), this.disclaimer && (h("bs-container", { contained: true }, h("bs-text", { text: this.disclaimer, size: TextSize.Small, color: TextColor.Default }))))));
  }
  static get watchers() { return {
    "active": ["handleActiveChange"]
  }; }
};
__decorate$1([
  Memoize('components')
], BsExperienceZoneScreen$1.prototype, "parsedComponents", null);
BsExperienceZoneScreen$1.style = experienceZoneScreenCss;

const experienceZoneStoryCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .experience-zone-story{position:relative;height:100%}:host .fade-out{animation:fade-out 0.2s linear forwards}@keyframes fade-out{from{opacity:1}to{opacity:0}}";

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
const BsExperienceZoneScreen = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    /** Methods */
    this.handleNextMedia = () => {
      this.updateIndex(this.activeIndex + 1);
    };
    this.updateIndex = (newValue) => {
      if (this.parsedStoryData.screens.length <= 1) {
        this.activeIndex = 0;
        return;
      }
      this.experienceZoneScreenRef.classList.add('fade-out');
      this.experienceZoneScreenRef.addEventListener('animationend', () => {
        this.experienceZoneScreenRef.classList.remove('fade-out');
        if (newValue > this.parsedStoryData.screens.length - 1) {
          this.activeIndex = 0;
        }
        else if (newValue < 0) {
          this.activeIndex = this.parsedStoryData.screens.length - 1;
        }
        else {
          this.activeIndex = newValue;
        }
      });
    };
    this.activeIndex = 0;
    this.active = false;
    this.hideNavigation = false;
    this.storyData = undefined;
  }
  get parsedStoryData() {
    return parseIfString(this.storyData);
  }
  /** Watchers */
  handleActiveChange(isActive) {
    if (isActive) {
      this.overlayRef.focusTrap();
    }
  }
  /** Listeners */
  handleBsSwipeAction(e) {
    if (this.active) {
      if (e.detail.direction === TouchDirections.Left) {
        this.overlayRef.nextSlide();
      }
      if (e.detail.direction === TouchDirections.Right) {
        this.overlayRef.previousSlide();
      }
    }
  }
  componentDidLoad() {
    if (this.active) {
      this.overlayRef.focusTrap();
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone-story" }, h("bs-dark-overlay", { ref: (el) => {
        this.overlayRef = el;
      }, "main-title": this.parsedStoryData.storyTitle, screens: !this.hideNavigation, logo: (this.parsedStoryData.screens[this.activeIndex].layout !==
        ExperienceZoneLayout.Video &&
        compareBreakpoint('max', Breakpoint.md)) ||
        compareBreakpoint('min', Breakpoint.md)
        ? this.parsedStoryData.storyLogo
        : '' }, h("bs-experience-zone-screen", { ref: (el) => {
        this.experienceZoneScreenRef = el;
      }, active: this.active, onClick: this.handleNextMedia, slot: "media", layout: this.parsedStoryData.screens[this.activeIndex].layout, disclaimer: this.parsedStoryData.screens[this.activeIndex].disclaimer, components: this.parsedStoryData.screens[this.activeIndex].components }), this.parsedStoryData.screens[this.activeIndex].layout ===
      ExperienceZoneLayout.Video && (h("bs-container", { slot: "controller", contained: true }, h("div", { class: "screen-footer" }, h("bs-youtube-control", { videoId: this.parsedStoryData.screens[this.activeIndex].components[0]
        .data.videoId }))))))));
  }
  static get watchers() { return {
    "active": ["handleActiveChange"]
  }; }
};
__decorate([
  Memoize('storyData')
], BsExperienceZoneScreen.prototype, "parsedStoryData", null);
BsExperienceZoneScreen.style = experienceZoneStoryCss;

export { BsExperienceZoneScreen$1 as bs_experience_zone_screen, BsExperienceZoneScreen as bs_experience_zone_story };

//# sourceMappingURL=bs-experience-zone-screen_2.entry.js.map