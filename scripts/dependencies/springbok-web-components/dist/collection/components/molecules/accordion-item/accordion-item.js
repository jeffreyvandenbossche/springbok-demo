import { Host, h } from '@stencil/core';
import { IconName } from '../../atoms/icon/icon.types';
export class BsAccordionItem {
  constructor() {
    this.identifier = undefined;
    this.accordionItemTitle = undefined;
    this.active = undefined;
    this.expandable = true;
  }
  // eslint-disable-next-line class-methods-use-this
  validateIdentifier(newValue) {
    // don't allow `thingToDo` to be the empty string
    const isBlank = typeof newValue !== 'string' || newValue === '';
    if (isBlank) {
      throw new Error('BsAccordionItem identifier is a required property and cannot be empty');
    }
  }
  bsAccordionStateActionHandler(state) {
    this.bsAccordionStateAction.emit(state);
  }
  render() {
    const itemIdentifier = this.identifier.replace(/\s+/g, '-').toLowerCase();
    return (h(Host, null, h("li", { class: `accordion-item ${this.expandable && this.active ? 'is-active' : ''}` }, h("button", { class: "accordion-trigger", type: "button", "aria-controls": itemIdentifier, "aria-expanded": this.expandable && this.active && this.active.toString(), id: `accordion-${itemIdentifier}`, onClick: () => {
        this.bsAccordionStateActionHandler(this.active);
      }, tabIndex: this.expandable ? 1 : -1, disabled: !this.expandable }, h("span", { class: "accordion-trigger-title" }, this.accordionItemTitle), this.expandable && (h("bs-icon", { "aria-hidden": "true", class: "accordion-trigger-icon", name: IconName.CaretDownward }))), h("div", { class: "accordion-panel", role: "region", "aria-hidden": (!this.active).toString(), id: itemIdentifier }, h("div", { class: "accordion-panel-content" }, h("slot", { name: "accordion-content" }))))));
  }
  static get is() { return "bs-accordion-item"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["accordion-item.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["accordion-item.css"]
    };
  }
  static get properties() {
    return {
      "identifier": {
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
          "text": "Accordion's unique identifier used for accessibility."
        },
        "attribute": "identifier",
        "reflect": false
      },
      "accordionItemTitle": {
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
          "text": "Accordion's title."
        },
        "attribute": "accordion-item-title",
        "reflect": false
      },
      "active": {
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
          "text": "Accordion's active state"
        },
        "attribute": "active",
        "reflect": false
      },
      "expandable": {
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
          "text": "Is the accordion expandable?"
        },
        "attribute": "expandable",
        "reflect": true,
        "defaultValue": "true"
      }
    };
  }
  static get events() {
    return [{
        "method": "bsAccordionStateAction",
        "name": "bsAccordionStateAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Accordion's event emitter"
        },
        "complexType": {
          "original": "Boolean",
          "resolved": "Boolean",
          "references": {
            "Boolean": {
              "location": "global"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "identifier",
        "methodName": "validateIdentifier"
      }];
  }
}
//# sourceMappingURL=accordion-item.js.map
