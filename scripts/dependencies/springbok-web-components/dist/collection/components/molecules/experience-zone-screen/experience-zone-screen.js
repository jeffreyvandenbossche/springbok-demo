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
import { Memoize, isEmpty, parseIfString } from '@springbokagency/stencil-base';
import { ExperienceZoneLayout, } from '../experience-zone/experience-zone.types';
import { TextColor, TextSize } from '../../atoms/text/text.types';
/**
 * Experience Zone screen component.
 */
export class BsExperienceZoneScreen {
  constructor() {
    this.active = false;
    this.layout = undefined;
    this.disclaimer = undefined;
    this.components = undefined;
  }
  get parsedComponents() {
    if (this.components !== undefined) {
      return parseIfString(this.components);
    }
    return [];
  }
  /** Watchers */
  handleActiveChange(isActive) {
    if (this.layout === ExperienceZoneLayout.Video) {
      const videoId = this.parsedComponents[0].tag === 'bs-video-card' && this.parsedComponents[0].data.videoId;
      this.bsYoutubeControllerClick.emit({ id: videoId, action: 'play', value: isActive ? 1 : 0 });
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone-screen" }, h("div", { class: `screen screen--${this.layout}` }, isEmpty(this.parsedComponents)
      ? Array.from(Array(3)).map((_value, i) => (h("div", { class: `screen-item` }, h("slot", { name: `item-${i}` }))))
      : this.parsedComponents.map((component) => {
        const Tag = component.tag;
        return (h("div", { class: `screen-item ${Tag}-screen` }, h(Tag, Object.assign({}, component.data))));
      })), this.disclaimer && (h("bs-container", { contained: true }, h("bs-text", { text: this.disclaimer, size: TextSize.Small, color: TextColor.Default }))))));
  }
  static get is() { return "bs-experience-zone-screen"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["experience-zone-screen.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["experience-zone-screen.css"]
    };
  }
  static get properties() {
    return {
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
          "text": "Is this screen currently active?"
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      },
      "layout": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ExperienceZoneLayout",
          "resolved": "ExperienceZoneLayout.One | ExperienceZoneLayout.Three | ExperienceZoneLayout.Two | ExperienceZoneLayout.Video",
          "references": {
            "ExperienceZoneLayout": {
              "location": "import",
              "path": "../experience-zone/experience-zone.types"
            }
          }
        },
        "required": true,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The Experience Zone screen layout name."
        },
        "attribute": "layout",
        "reflect": false
      },
      "disclaimer": {
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
          "text": "The Experience Zone screen disclaimer."
        },
        "attribute": "disclaimer",
        "reflect": false
      },
      "components": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ExperienceZoneComponent[] | string",
          "resolved": "ExperienceZoneComponent[] | string",
          "references": {
            "ExperienceZoneComponent": {
              "location": "import",
              "path": "../experience-zone/experience-zone.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The Experience Zone card image."
        },
        "attribute": "components",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "bsYoutubeControllerClick",
        "name": "bsYoutubeControllerClick",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Emits youtube control event action: 'play'"
        },
        "complexType": {
          "original": "YoutubeControlClickEvent",
          "resolved": "{ id: string; action?: string; value?: number; }",
          "references": {
            "YoutubeControlClickEvent": {
              "location": "import",
              "path": "../youtube-control/youtube-control.types"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "active",
        "methodName": "handleActiveChange"
      }];
  }
}
__decorate([
  Memoize('components')
], BsExperienceZoneScreen.prototype, "parsedComponents", null);
//# sourceMappingURL=experience-zone-screen.js.map
