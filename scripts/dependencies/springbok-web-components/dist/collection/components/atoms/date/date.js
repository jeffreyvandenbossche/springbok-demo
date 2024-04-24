import { Host, h } from '@stencil/core';
/**
 * Date component.
 */
export class BsDate {
  constructor() {
    this.isDateValid = true;
    this.isLanguageCodeValid = true;
    this.date = undefined;
    this.languageIsoCode = undefined;
    this.isWhite = false;
  }
  checkDateFormat() {
    const regex = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2]\d|3[0-1])$/;
    this.isDateValid = regex.test(this.date);
  }
  checkLanguageCodeFormat() {
    const regex = /^[a-z]{2,3}(?:-[A-Z]{2})?$/;
    this.isLanguageCodeValid = regex.test(this.languageIsoCode);
  }
  renderDate() {
    const date = new Date(this.date);
    const locale = this.isLanguageCodeValid ? this.languageIsoCode : 'en';
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    };
    return date.toLocaleDateString(locale, options);
  }
  componentWillRender() {
    this.checkDateFormat();
    this.checkLanguageCodeFormat();
  }
  render() {
    return (h(Host, null, h("div", { class: `date ${this.isWhite ? 'is-white' : ''}` }, this.isDateValid && this.renderDate())));
  }
  static get is() { return "bs-date"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["date.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["date.css"]
    };
  }
  static get properties() {
    return {
      "date": {
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
          "text": "Raw date string in yyyy-mm-dd format"
        },
        "attribute": "date",
        "reflect": false
      },
      "languageIsoCode": {
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
          "text": "Language's iso code"
        },
        "attribute": "language-iso-code",
        "reflect": false
      },
      "isWhite": {
        "type": "boolean",
        "mutable": false,
        "complexType": {
          "original": "boolean",
          "resolved": "boolean",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "Has white text?"
        },
        "attribute": "is-white",
        "reflect": false,
        "defaultValue": "false"
      }
    };
  }
  static get states() {
    return {
      "isDateValid": {},
      "isLanguageCodeValid": {}
    };
  }
}
//# sourceMappingURL=date.js.map
