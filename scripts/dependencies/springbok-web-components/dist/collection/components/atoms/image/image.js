import { isEmpty } from '@springbokagency/stencil-base';
import { Host, h } from '@stencil/core';
import { Breakpoint } from '../../../utils/breakpoints';
/**
 * Description of the component.
 */
export class BsImage {
  constructor() {
    this.src = undefined;
    this.srcset = undefined;
    this.width = undefined;
    this.height = undefined;
    this.imageSizes = `
    (max-width: ${Breakpoint.xs}px) ${Breakpoint.xs}px,
    (max-width: ${Breakpoint.md}px) ${Breakpoint.md}px,
    (max-width: ${Breakpoint.xl}px) ${Breakpoint.xl}px,
    1920px`;
    this.altText = undefined;
    this.itemprop = 'contentUrl';
    this.caption = undefined;
    this.captionCover = undefined;
    this.cover = undefined;
    this.source = undefined;
    this.lazy = true;
  }
  render() {
    return (h(Host, null, h("figure", { class: "figure" }, h("img", { class: `image ${this.cover ? 'is-background-image' : ''}`, src: this.src, srcset: this.srcset, width: this.width, height: this.height, sizes: this.imageSizes, alt: this.altText, itemprop: this.itemprop, loading: this.lazy ? 'lazy' : 'eager', "aria-hidden": isEmpty(this.altText) }), 
    /* Caption */
    this.caption && (h("figcaption", { class: `caption ${this.captionCover ? 'is-caption-on' : ''}` }, this.caption, h("br", null), h("span", { class: "source" }, this.source))))));
  }
  static get is() { return "bs-image"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["image.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["image.css"]
    };
  }
  static get properties() {
    return {
      "src": {
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
          "text": "Image's src"
        },
        "attribute": "src",
        "reflect": false
      },
      "srcset": {
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
          "text": "Image's srcset"
        },
        "attribute": "srcset",
        "reflect": false
      },
      "width": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Image's width"
        },
        "attribute": "width",
        "reflect": false
      },
      "height": {
        "type": "any",
        "mutable": false,
        "complexType": {
          "original": "string | number",
          "resolved": "number | string",
          "references": {}
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Image's height"
        },
        "attribute": "height",
        "reflect": false
      },
      "imageSizes": {
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
          "text": "Image's sizes"
        },
        "attribute": "image-sizes",
        "reflect": false,
        "defaultValue": "`\n    (max-width: ${Breakpoint.xs}px) ${Breakpoint.xs}px,\n    (max-width: ${Breakpoint.md}px) ${Breakpoint.md}px,\n    (max-width: ${Breakpoint.xl}px) ${Breakpoint.xl}px,\n    1920px`"
      },
      "altText": {
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
          "text": "Image's alternative text"
        },
        "attribute": "alt-text",
        "reflect": false
      },
      "itemprop": {
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
          "text": "\"itemprop\" attribute"
        },
        "attribute": "itemprop",
        "reflect": false,
        "defaultValue": "'contentUrl'"
      },
      "caption": {
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
          "text": "Image's caption"
        },
        "attribute": "caption",
        "reflect": false
      },
      "captionCover": {
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
          "text": "Determine if text under or on image"
        },
        "attribute": "caption-cover",
        "reflect": false
      },
      "cover": {
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
          "text": "Determine if image is stretching to fill its container's size"
        },
        "attribute": "cover",
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
          "text": "Source image"
        },
        "attribute": "source",
        "reflect": false
      },
      "lazy": {
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
          "text": "Enable lazy loading?"
        },
        "attribute": "lazy",
        "reflect": false,
        "defaultValue": "true"
      }
    };
  }
}
//# sourceMappingURL=image.js.map
