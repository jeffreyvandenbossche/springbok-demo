var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Host, h } from '@stencil/core';
import { Memoize, parseIfString } from '@springbokagency/stencil-base';
import { IconName } from '../../atoms/icon/icon.types';
import { throttle } from '../../../utils/throttle';
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
/**
 * Header navigation component.
 */
export class BsHeaderNavigation {
  constructor() {
    this.stickyMenuIsVisible = undefined;
    this.headerNavigation = undefined;
  }
  get parsedHeaderNavigation() {
    return parseIfString(this.headerNavigation);
  }
  /**
   * Listeners
   */
  handleBodyScroll() {
    throttle(() => {
      this.stickyMenuIsVisible = window.scrollY > 20;
    }, 500)();
  }
  render() {
    return (h(Host, null, h("header", { class: "header-navigation" }, h("div", { class: "bar" }, h("bs-container", { class: "flex-between", contained: true }, h("div", { class: "main-logo" }, h("a", { href: "/", tabIndex: this.stickyMenuIsVisible ? -1 : 0 }, compareBreakpoint('max', Breakpoint.md) ? (h("bs-image", Object.assign({ class: "logo" }, this.parsedHeaderNavigation.mobileMainLogo))) : (h("bs-image", Object.assign({ class: "logo" }, this.parsedHeaderNavigation.mainLogo))))), h("bs-click-action", { "tag-class": `menu-button`, value: this.headerNavigation, name: "open-overlay-menu" }, h("bs-icon", { name: IconName.Menu })))), h("div", { class: `sticky-header ${this.stickyMenuIsVisible ? 'is-visible' : ''}` }, h("bs-container", { class: "flex-between", contained: true }, h("div", { class: "logo" }, h("a", { href: "/", tabIndex: this.stickyMenuIsVisible ? 0 : -1 }, h("bs-image", Object.assign({ class: "logo" }, this.parsedHeaderNavigation.stickyLogo)))), h("div", { class: "flex-end" }, this.parsedHeaderNavigation.stickyButton &&
      this.parsedHeaderNavigation.stickyButton.text &&
      compareBreakpoint('min', Breakpoint.md) && (h("bs-button", Object.assign({}, this.parsedHeaderNavigation.stickyButton))), h("bs-click-action", { "tag-class": `menu-button`, value: this.headerNavigation, name: "open-overlay-menu" }, h("bs-icon", { name: IconName.Menu }))))))));
  }
  static get is() { return "bs-header-navigation"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["header-navigation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["header-navigation.css"]
    };
  }
  static get properties() {
    return {
      "headerNavigation": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "HeaderNavigation | string",
          "resolved": "string | { mainLogo: BsImage; mobileMainLogo: BsImage; stickyLogo: BsImage; stickyButton?: BsButton; navigation: { primary: NavigationItem[]; secondary: NavigationItem[]; sliderItems: NavigationItem[]; }; }",
          "references": {
            "HeaderNavigation": {
              "location": "import",
              "path": "../overlay-menu/overlay-menu.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The ."
        },
        "attribute": "header-navigation",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "stickyMenuIsVisible": {}
    };
  }
  static get listeners() {
    return [{
        "name": "scroll",
        "method": "handleBodyScroll",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
__decorate([
  Memoize('headerNavigation')
], BsHeaderNavigation.prototype, "parsedHeaderNavigation", null);
//# sourceMappingURL=header-navigation.js.map
