import { h, Host } from '@stencil/core';
import DOMPurify from 'dompurify';
import { isEmpty } from '@springbokagency/stencil-base';
import { deepQuerySelector } from '../../../utils/deepQuerySelector';
import { TextSize, TextColor } from './text.types';
/**
 * The text component.
 */
export class Paragraph {
  constructor() {
    this.text = undefined;
    this.size = undefined;
    this.textColor = undefined;
  }
  // eslint-disable-next-line class-methods-use-this
  handleUrlHash(hash) {
    const element = deepQuerySelector(hash, document);
    if (isEmpty(element))
      return;
    const yOffset = -35;
    const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
  componentDidLoad() {
    // TODO: move anchor/hash logic inside future layout base component
    const urlHash = window.location.hash;
    // scroll to id on page load
    if (!isEmpty(urlHash))
      this.handleUrlHash(urlHash);
    // scroll to id when click on hash link
    window.addEventListener('hashchange', () => {
      this.handleUrlHash(window.location.hash);
    });
  }
  render() {
    this.text = DOMPurify.sanitize(this.text, {
      ALLOWED_TAGS: [
        'p',
        'br',
        'b',
        'i',
        'u',
        'ul',
        'ol',
        'li',
        'sub',
        'sup',
        'a',
        'img',
        'bs-tooltip',
      ],
      ADD_ATTR: ['target', 'title-text', 'content-text'],
    });
    const fontSize = Object.values(TextSize).includes(this.size)
      ? `font-${this.size}`
      : `font-inherit`;
    const textColor = Object.values(TextColor).includes(this.textColor)
      ? `text-color-${this.textColor}`
      : '';
    return (h(Host, null, h("div", { class: `text ${fontSize} ${textColor}`, innerHTML: this.text })));
  }
  static get is() { return "bs-text"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["text.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["text.css"]
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
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "To customize the text"
        },
        "attribute": "text",
        "reflect": false
      },
      "size": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextSize",
          "resolved": "TextSize.Bold | TextSize.Default | TextSize.Small",
          "references": {
            "TextSize": {
              "location": "import",
              "path": "./text.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "To set the title size"
        },
        "attribute": "size",
        "reflect": false
      },
      "textColor": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "TextColor",
          "resolved": "TextColor.Black | TextColor.Default | TextColor.White",
          "references": {
            "TextColor": {
              "location": "import",
              "path": "./text.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "To set the color"
        },
        "attribute": "text-color",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=text.js.map
