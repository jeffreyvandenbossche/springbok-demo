import { Host, h } from '@stencil/core';
/**
 * The dot navigation component used to indicate the current index in a list of views.
 */
export class BsDotNavigation {
  constructor() {
    /** Methods */
    this.startProgress = () => {
      let time = 0;
      clearTimeout(this.timeout);
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        time += 100;
        this.progress = (100 / (this.slow ? 30 : 15)) * (time / 1000);
      }, 100);
      this.timeout = setTimeout(() => {
        clearInterval(this.interval);
      }, this.slow ? 30000 : 15000);
    };
    this.progress = 0;
    this.items = undefined;
    this.index = undefined;
    this.slow = undefined;
  }
  handleIndexChange() {
    this.startProgress();
  }
  /** lifecycle hooks */
  componentDidLoad() {
    this.startProgress();
  }
  render() {
    const dots = Array.from(Array(this.items).keys());
    return (h(Host, { class: this.slow ? 'is-slow' : '' }, h("span", { class: "dot-nav" }, dots.map((index) => index === this.index ? (h("progress", { class: "dot dot--active", max: "100", value: this.progress })) : (h("progress", { class: "dot", max: "100", value: "0" }))))));
  }
  static get is() { return "bs-dot-navigation"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["dot-navigation.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["dot-navigation.css"]
    };
  }
  static get properties() {
    return {
      "items": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The amount of dots in the navigation."
        },
        "attribute": "items",
        "reflect": false
      },
      "index": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The active dot index."
        },
        "attribute": "index",
        "reflect": false
      },
      "slow": {
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
          "text": "Should the auto navigation be slow?"
        },
        "attribute": "slow",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "progress": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "index",
        "methodName": "handleIndexChange"
      }];
  }
}
//# sourceMappingURL=dot-navigation.js.map
