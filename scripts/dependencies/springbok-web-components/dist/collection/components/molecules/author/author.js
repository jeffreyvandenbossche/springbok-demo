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
import { TextColor } from '../../atoms/text/text.types';
/**
 * Author component.
 */
export class BsAuthor {
  constructor() {
    this.authorImage = undefined;
    this.authorName = undefined;
    this.authorPosition = undefined;
    this.aboutTitle = undefined;
    this.description = undefined;
  }
  get parsedAuthorImage() {
    return parseIfString(this.authorImage);
  }
  render() {
    return (h(Host, null, h("div", { class: "author" }, h("div", { class: "info" }, h("div", { class: "author-image" }, h("bs-image", Object.assign({ class: "image" }, this.parsedAuthorImage, { cover: true }))), h("dl", { class: "author-info" }, h("dt", null, this.authorName), h("dd", null, this.authorPosition))), h("div", { class: "about" }, h("bs-title", { tag: TitleTag.H2, color: TitleColor.White, text: this.aboutTitle, size: TitleSize.Head4 }), h("bs-text", { textColor: TextColor.White, text: this.description })))));
  }
  static get is() { return "bs-author"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["author.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["author.css"]
    };
  }
  static get properties() {
    return {
      "authorImage": {
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
          "text": "Description."
        },
        "attribute": "author-image",
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
      "aboutTitle": {
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
          "text": "Main about title"
        },
        "attribute": "about-title",
        "reflect": false
      },
      "description": {
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
          "text": "Description text"
        },
        "attribute": "description",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('authorImage')
], BsAuthor.prototype, "parsedAuthorImage", null);
//# sourceMappingURL=author.js.map
