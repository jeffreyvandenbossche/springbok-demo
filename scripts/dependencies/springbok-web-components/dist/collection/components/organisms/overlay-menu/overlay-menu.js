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
import { Memoize, isEmpty, parseIfString } from '@springbokagency/stencil-base';
import { IconName } from '../../atoms/icon/icon.types';
import { BaseModalId } from '../base-modal/base-modal.types';
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
/**
 * Overlay menu component.
 */
export class BsOverlayMenu {
  constructor() {
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
  static get is() { return "bs-overlay-menu"; }
  static get originalStyleUrls() {
    return {
      "$": ["overlay-menu.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["overlay-menu.css"]
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
              "path": "./overlay-menu.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The header navigation data."
        },
        "attribute": "header-navigation",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "isClosing": {}
    };
  }
  static get listeners() {
    return [{
        "name": "bsModalIsClosing",
        "method": "bsModalIsClosingHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Memoize('headerNavigation')
], BsOverlayMenu.prototype, "parsedHeaderNavigation", null);
//# sourceMappingURL=overlay-menu.js.map
