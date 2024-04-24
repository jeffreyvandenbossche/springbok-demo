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
/**
 * Related articles component.
 */
export class BsRelatedArticlesCard {
  constructor() {
    this.articlesData = undefined;
    this.relatedArticlesTitle = undefined;
  }
  get parsedArticlesData() {
    return parseIfString(this.articlesData);
  }
  get parsedRelatedArticlesTitle() {
    return parseIfString(this.relatedArticlesTitle);
  }
  render() {
    return (h(Host, null, h("bs-title", { text: this.parsedRelatedArticlesTitle.text, tag: this.parsedRelatedArticlesTitle.tag, size: this.parsedRelatedArticlesTitle.size, variant: this.parsedRelatedArticlesTitle.variant }), h("div", { class: "related-articles" }, this.parsedArticlesData.map((article) => (h("bs-article-card", { articleTitle: article.articleTitle, articleCta: article.articleCta, articleHref: article.articleHref, articleImage: article.articleImage }))))));
  }
  static get is() { return "bs-related-articles"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["related-articles.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["related-articles.css"]
    };
  }
  static get properties() {
    return {
      "articlesData": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsArticleCard[] | string",
          "resolved": "BsArticleCard[] | string",
          "references": {
            "BsArticleCard": {
              "location": "import",
              "path": "../../molecules/article-card/article-card"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The article related image."
        },
        "attribute": "articles-data",
        "reflect": false
      },
      "relatedArticlesTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsTitle | string",
          "resolved": "BsTitle | string",
          "references": {
            "BsTitle": {
              "location": "import",
              "path": "../../atoms/title/title"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Description."
        },
        "attribute": "related-articles-title",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('articlesData')
], BsRelatedArticlesCard.prototype, "parsedArticlesData", null);
__decorate([
  Memoize('relatedArticlesTitle')
], BsRelatedArticlesCard.prototype, "parsedRelatedArticlesTitle", null);
//# sourceMappingURL=related-articles.js.map
