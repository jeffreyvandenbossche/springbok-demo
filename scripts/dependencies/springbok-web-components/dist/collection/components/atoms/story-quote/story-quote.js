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
import { Memoize, parseIfString } from '@springbokagency/stencil-base';
import { getAssetPath, h, Host } from '@stencil/core';
/**
 * The Quote component is used for indicating that a particular section of text is being taken from another website or other source.
 */
export class BsStoryQuote {
  constructor() {
    this.text = undefined;
    this.authorName = undefined;
    this.authorPosition = undefined;
    this.source = undefined;
    this.authorImage = undefined;
  }
  get parsedAuthorImage() {
    return parseIfString(this.authorImage);
  }
  render() {
    const schema = {
      '@context': 'https://schema.org/',
      '@type': 'Quotation',
      creator: {
        '@type': 'Person',
        name: this.authorName,
      },
      text: this.text,
    };
    return (h(Host, null, h("blockquote", { class: "blockquote", cite: this.source }, h("p", { class: "quote-mark" }, h("ion-icon", { class: "icon", "aria-hidden": "true", src: getAssetPath(`assets/quote.svg`) })), h("p", { class: "quote" }, "\"", this.text, "\""), h("div", { class: "info" }, h("div", { class: "author-image" }, h("bs-image", Object.assign({ class: "image" }, this.parsedAuthorImage, { cover: true }))), h("dl", { class: "author-info" }, h("dt", null, this.authorName), h("dd", null, this.authorPosition)))), h("script", { type: "application/ld+json" }, JSON.stringify(schema))));
  }
  static get is() { return "bs-story-quote"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["story-quote.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["story-quote.css"]
    };
  }
  static get properties() {
    return {
      "text": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The quote text copied from an external source."
        },
        "attribute": "text",
        "reflect": false
      },
      "authorName": {
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
          "text": "Author's name"
        },
        "attribute": "author-name",
        "reflect": false
      },
      "authorPosition": {
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
          "text": "Author's job position"
        },
        "attribute": "author-position",
        "reflect": false
      },
      "source": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "string",
          "resolved": "string",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "A URL that designates a source document or message for the information quoted. Used for SEO purposes."
        },
        "attribute": "source",
        "reflect": false
      },
      "authorImage": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsImage | string",
          "resolved": "BsImage | string",
          "references": {
            "BsImage": {
              "location": "import",
              "path": "../image/image"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Prop for adding an image"
        },
        "attribute": "author-image",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('authorImage')
], BsStoryQuote.prototype, "parsedAuthorImage", null);
//# sourceMappingURL=story-quote.js.map
