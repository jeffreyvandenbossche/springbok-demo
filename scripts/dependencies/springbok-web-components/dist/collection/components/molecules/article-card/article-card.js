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
import { TitleColor, TitleSize, TitleTag } from '../../atoms/title/title.types';
import { ButtonVariant } from '../../atoms/button/button.types';
import { IconName } from '../../atoms/icon/icon.types';
/**
 * Article teaser card component.
 */
export class BsArticleCard {
  constructor() {
    this.articleImage = undefined;
    this.articleTitle = undefined;
    this.articleCta = undefined;
    this.articleHref = undefined;
  }
  get parsedArticleImage() {
    return parseIfString(this.articleImage);
  }
  render() {
    return (h(Host, null, h("bs-click-action", { class: "click-action", href: this.articleHref }, h("div", { class: "article-card" }, h("bs-title", { class: "article-title", tag: TitleTag.Span, size: TitleSize.Head5, text: this.articleTitle, color: TitleColor.White }), h("bs-button", { class: "article-button", text: this.articleCta, iconRight: IconName.CaretForward, href: this.articleHref, variant: ButtonVariant.Text }), h("bs-image", { class: "article-image", cover: true, src: this.parsedArticleImage.src, srcset: this.parsedArticleImage.srcset, imageSizes: "200px, 400px", altText: this.parsedArticleImage.altText })))));
  }
  static get is() { return "bs-article-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["article-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["article-card.css"]
    };
  }
  static get properties() {
    return {
      "articleImage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsImage | string",
          "resolved": "BsImage | string",
          "references": {
            "BsImage": {
              "location": "import",
              "path": "../../atoms/image/image"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The article related image."
        },
        "attribute": "article-image",
        "reflect": false
      },
      "articleTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The article title."
        },
        "attribute": "article-title",
        "reflect": false
      },
      "articleCta": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The cta label."
        },
        "attribute": "article-cta",
        "reflect": false
      },
      "articleHref": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The article href."
        },
        "attribute": "article-href",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('articleImage')
], BsArticleCard.prototype, "parsedArticleImage", null);
//# sourceMappingURL=article-card.js.map
