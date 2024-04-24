import { h, getAssetPath, Host } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
/**
 * The icon component.
 */
export class BsIcon {
  constructor() {
    this.name = undefined;
  }
  render() {
    if (!isEmpty(this.name)) {
      return (h(Host, null, h("ion-icon", { class: "icon", "aria-hidden": "true", src: getAssetPath(`assets/${this.name}.svg`) })));
    }
    return h(Host, null);
  }
  static get is() { return "bs-icon"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["icon.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["icon.css"]
    };
  }
  static get assetsDirs() { return ["assets"]; }
  static get properties() {
    return {
      "name": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "IconName",
          "resolved": "IconName",
          "references": {
            "IconName": {
              "location": "import",
              "path": "./icon.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "Icon's name"
        },
        "attribute": "name",
        "reflect": false
      }
    };
  }
}
//# sourceMappingURL=icon.js.map
