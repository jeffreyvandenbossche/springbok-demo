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
/**
 * The breadcrumb component.
 */
export class BsBreadcrumb {
  constructor() {
    this.action = 'unwrap';
    this.wrapper = 'wrapper';
    /** Methods */
    this.onBsButtonClick = (e) => {
      if (e.detail.name === this.action) {
        this.displayedItems = [...this.parsedData];
      }
    };
    this.wrapped = true;
    this.displayedItems = [];
    this.data = undefined;
  }
  get parsedData() {
    return parseIfString(this.data);
  }
  componentWillLoad() {
    this.displayedItems = [...this.parsedData];
    if (this.parsedData.length > 4) {
      this.displayedItems.splice(2, this.parsedData.length - 4, this.wrapper);
    }
  }
  render() {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        this.parsedData.map((item, index) => {
          const breadcrumb = {
            '@type': 'ListItem',
            position: index + 1,
            item: {
              '@id': item.url,
              name: item.pageTitle,
            },
          };
          return breadcrumb;
        }),
      ],
    };
    return (h(Host, null, h("nav", { "aria-label": "breadcrumb" }, h("ol", { class: "breadcrumb" }, this.displayedItems.map((breadcrumbItem, index) => {
      const isFirstItem = index === 0;
      const isLastItem = index === this.displayedItems.length - 1;
      return typeof breadcrumbItem !== 'string' ? (h("li", null, h("bs-click-action", { tagClass: `breadcrumb-item ${isLastItem ? 'is-active' : ''} ${isFirstItem ? 'is-b-mark' : ''}`, href: breadcrumbItem.url, "aria-current": isLastItem ? 'page' : '' }, h("bs-icon", { name: isFirstItem ? IconName.BMark : IconName.CaretForward }), !isFirstItem && h("span", null, breadcrumbItem.pageTitle)))) : (h("li", null, h("bs-click-action", { tagClass: 'breadcrumb-item', name: this.action, onBsClickAction: this.onBsButtonClick }, h("bs-icon", { name: IconName.CaretForward }), h("span", null, "..."))));
    })), h("script", { type: "application/ld+json" }, JSON.stringify(schema)))));
  }
  static get is() { return "bs-breadcrumb"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["breadcrumb.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["breadcrumb.css"]
    };
  }
  static get properties() {
    return {
      "data": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BreadcrumbData[] | string",
          "resolved": "BreadcrumbData[] | string",
          "references": {
            "BreadcrumbData": {
              "location": "import",
              "path": "./breadcrumb.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Breadcrumb items data."
        },
        "attribute": "data",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "wrapped": {},
      "displayedItems": {}
    };
  }
}
__decorate([
  Memoize('data')
], BsBreadcrumb.prototype, "parsedData", null);
//# sourceMappingURL=breadcrumb.js.map
