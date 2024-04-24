'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-34e16b56.js');
const memoize = require('./memoize-77bb7912.js');
const isEmpty = require('./is-empty-3de4afc0.js');
const parseIfString = require('./parse-if-string-1e2d7fee.js');
const icon_types = require('./icon.types-5e9e7ac2.js');
const title_types = require('./title.types-c8079842.js');
const throttle = require('./throttle-20539969.js');

const accordionCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .accordion{font-size:1.6666666667rem;list-style:none}";

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
const BsAccordion = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.mainTitle = undefined;
  }
  get parsedMainTitle() {
    return parseIfString.parseIfString(this.mainTitle);
  }
  // eslint-disable-next-line class-methods-use-this
  bsAccordionStateHandler(event) {
    const target = event.target;
    target.active = !target.active;
  }
  render() {
    return (index.h(index.Host, null, index.h("section", { class: "accordion-wrapper" }, !isEmpty.isEmpty(this.parsedMainTitle) && !isEmpty.isEmpty(this.parsedMainTitle.text) && (index.h("bs-title", { variant: this.parsedMainTitle.variant, color: this.parsedMainTitle.color, tag: this.parsedMainTitle.tag, text: this.parsedMainTitle.text, size: this.parsedMainTitle.size })), index.h("ul", { class: "accordion", "aria-label": "Accordion Control Group" }, index.h("slot", { name: "accordion-item" })))));
  }
};
__decorate$1([
  memoize.Memoize('mainTitle')
], BsAccordion.prototype, "parsedMainTitle", null);
BsAccordion.style = accordionCss;

const accordionItemCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;flex:1}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .accordion-item{margin-bottom:-0.0833333333rem;list-style:none;border-bottom:0.0833333333rem solid #cbcbcb}:host .accordion-item.is-active .accordion-panel{display:block}:host .accordion-item.is-active .accordion-trigger-icon{transform:scaleY(-100%)}:host .accordion-trigger{display:flex;gap:1.6666666667rem;align-items:center;justify-content:space-between;width:100%;padding:2rem 0;font:inherit;line-height:1.4;color:inherit;text-align:left;cursor:pointer;background-color:transparent;border:0}:host .accordion-trigger:disabled{pointer-events:none;cursor:default}:host .accordion-trigger-icon{font-size:2rem}:host .accordion-panel{display:none}";

const BsAccordionItem = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.bsAccordionStateAction = index.createEvent(this, "bsAccordionStateAction", 7);
    this.identifier = undefined;
    this.accordionItemTitle = undefined;
    this.active = undefined;
    this.expandable = true;
  }
  // eslint-disable-next-line class-methods-use-this
  validateIdentifier(newValue) {
    // don't allow `thingToDo` to be the empty string
    const isBlank = typeof newValue !== 'string' || newValue === '';
    if (isBlank) {
      throw new Error('BsAccordionItem identifier is a required property and cannot be empty');
    }
  }
  bsAccordionStateActionHandler(state) {
    this.bsAccordionStateAction.emit(state);
  }
  render() {
    const itemIdentifier = this.identifier.replace(/\s+/g, '-').toLowerCase();
    return (index.h(index.Host, null, index.h("li", { class: `accordion-item ${this.expandable && this.active ? 'is-active' : ''}` }, index.h("button", { class: "accordion-trigger", type: "button", "aria-controls": itemIdentifier, "aria-expanded": this.expandable && this.active && this.active.toString(), id: `accordion-${itemIdentifier}`, onClick: () => {
        this.bsAccordionStateActionHandler(this.active);
      }, tabIndex: this.expandable ? 1 : -1, disabled: !this.expandable }, index.h("span", { class: "accordion-trigger-title" }, this.accordionItemTitle), this.expandable && (index.h("bs-icon", { "aria-hidden": "true", class: "accordion-trigger-icon", name: icon_types.IconName.CaretDownward }))), index.h("div", { class: "accordion-panel", role: "region", "aria-hidden": (!this.active).toString(), id: itemIdentifier }, index.h("div", { class: "accordion-panel-content" }, index.h("slot", { name: "accordion-content" }))))));
  }
  static get watchers() { return {
    "identifier": ["validateIdentifier"]
  }; }
};
BsAccordionItem.style = accordionItemCss;

const productCardCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .card{display:flex;flex-direction:column;gap:1.3333333333rem;align-items:center;height:100%;padding:0.8333333333rem;border:1px solid #cbcbcb;border-radius:0.6666666667rem}@media screen and (min-width: 375px){:host .card{width:23.75rem}}@media screen and (min-width: 768px){:host .card{width:27.5rem}}.image{display:flex}.content{display:flex;flex:1;flex-direction:column;justify-content:flex-start;width:100%;max-height:100%;overflow:hidden}.content .title{margin-bottom:0.8333333333rem;line-height:1.1}.content .text{font-size:1rem}";

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
const BsProductCard = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
    this.cardTitle = undefined;
    this.cardText = undefined;
    this.cardImage = undefined;
  }
  get parsedCardImage() {
    return parseIfString.parseIfString(this.cardImage);
  }
  render() {
    return (index.h(index.Host, null, index.h("div", { class: "card" }, index.h("div", { class: "image" }, index.h("bs-image", Object.assign({}, this.parsedCardImage, { caption: "" }))), index.h("div", { class: "content" }, index.h("bs-title", { class: "title", tag: title_types.TitleTag.Span, size: title_types.TitleSize.Head4, text: this.cardTitle, color: title_types.TitleColor.Black }), index.h("bs-text", { class: "text", text: this.cardText })))));
  }
};
__decorate([
  memoize.Memoize('cardImage')
], BsProductCard.prototype, "parsedCardImage", null);
BsProductCard.style = productCardCss;

function isInViewport(el, container) {
  if (!isEmpty.isEmpty(el)) {
    const rect = el.getBoundingClientRect();
    if (container && !isEmpty.isEmpty(container.getBoundingClientRect())) {
      const containerRect = container.getBoundingClientRect();
      return (rect.top >= containerRect.top &&
        rect.left >= containerRect.left &&
        rect.bottom <= containerRect.bottom &&
        rect.right <= containerRect.right);
    }
    return (rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth));
  }
  return false;
}

const sliderCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;position:relative}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .overlay{z-index:2;position:absolute;top:0;left:0;width:100%;height:100%;object-fit:cover;object-position:center;display:flex;height:calc(100% - 1.6666666667rem);pointer-events:none}@media screen and (max-width: 767px){:host .overlay{display:none}}:host .navigation{position:relative;width:100%;transition:max-width 0.2s ease}@media screen and (max-width: 767px){:host .navigation{display:none}}:host .fade{flex:1;width:100%;background:linear-gradient(90deg, rgba(255, 255, 255, 0.5) 20%, #fff)}:host .navigation-back{position:absolute;top:50%;left:0;transform:translate(-50%, -50%)}:host .navigation-forward{position:absolute;top:50%;right:0;transform:translate(50%, -50%)}:host .teaser-slider{display:flex;gap:1rem;overflow:auto}@media screen and (min-width: 768px){:host .teaser-slider{gap:2rem;padding-bottom:1.6666666667rem}}:host .teaser-slider::-webkit-scrollbar-track{background-color:#f8f7f3}:host .teaser-slider::-webkit-scrollbar{height:2px;background-color:transparent}@media screen and (max-width: 767px){:host .teaser-slider::-webkit-scrollbar{display:none}}:host .teaser-slider::-webkit-scrollbar-thumb{background-color:#f00}:host .navigation-button{padding:0.6666666667rem;font-size:2rem;pointer-events:all;background-color:#fff;border:1px solid #cbcbcb;border-radius:50%}:host .navigation-button:focus{background-color:#cbcbcb;outline:0}";

const BsSlider = class {
  constructor(hostRef) {
    index.registerInstance(this, hostRef);
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
    this.throttleMethod = throttle.throttle(this.onResize, 1000);
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
      if (isEmpty.isEmpty(slotElement))
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
      this.teaserSliderRef.addEventListener('scroll', throttle.throttle(() => {
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
    return (index.h(index.Host, null, this.slides && (index.h("div", { class: "overlay" }, index.h("div", { class: "navigation", ref: (el) => {
        this.navigationRef = el;
      } }, index.h("div", { class: "navigation-back" }, index.h("bs-click-action", { name: "previous", onBsClickAction: this.onPreviousSlide, tagClass: "navigation-button", ariaLabelText: "backward" }, index.h("bs-icon", { name: icon_types.IconName.ArrowBackward }))), index.h("div", { class: "navigation-forward" }, index.h("bs-click-action", { name: "next", onBsClickAction: this.onNextSlide, tagClass: "navigation-button", ariaLabelText: "forward" }, index.h("bs-icon", { name: icon_types.IconName.ArrowForward })))), index.h("div", { class: "fade" }))), index.h("div", { class: "teaser-slider", ref: (el) => {
        this.teaserSliderRef = el;
      } }, index.h("slot", { name: "slider-item" }))));
  }
};
BsSlider.style = sliderCss;

exports.bs_accordion = BsAccordion;
exports.bs_accordion_item = BsAccordionItem;
exports.bs_product_card = BsProductCard;
exports.bs_slider = BsSlider;

//# sourceMappingURL=bs-accordion_4.cjs.entry.js.map