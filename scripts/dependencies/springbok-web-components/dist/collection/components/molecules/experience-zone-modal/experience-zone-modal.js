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
 * Experience Zone modal component.
 */
export class BsExperienceZoneModal {
  constructor() {
    this.updateIndex = (newValue) => {
      if (newValue > this.parsedExperienceZoneData.stories.length - 1) {
        this.activeIndex = 0;
      }
      else if (newValue < 0) {
        this.activeIndex = this.parsedExperienceZoneData.stories.length - 1;
      }
      else {
        this.activeIndex = newValue;
      }
      this.experienceZoneModalRef.style.transform = `translateX(-${this.activeIndex * 100}vw)`;
    };
    this.activeIndex = 0;
    this.experienceZoneData = undefined;
  }
  get parsedExperienceZoneData() {
    return parseIfString(this.experienceZoneData);
  }
  /** Listeners */
  bsNextSlideActionHandler() {
    this.updateIndex(this.activeIndex + 1);
  }
  bsPreviousSlideActionHandler() {
    this.updateIndex(this.activeIndex - 1);
  }
  componentDidLoad() {
    this.experienceZoneModalRef.style.transform = `translateX(-${this.activeIndex * 100}vw)`;
    this.experienceZoneModalRef.style.transition = `transform 0.5s ease-in-out`;
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone-modal", ref: (el) => {
        this.experienceZoneModalRef = el;
      } }, this.parsedExperienceZoneData.stories.map((story, index) => (h("bs-experience-zone-story", { active: index === this.activeIndex, hideNavigation: this.parsedExperienceZoneData.stories.length < 2, storyData: story }))))));
  }
  static get is() { return "bs-experience-zone-modal"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["experience-zone-modal.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["experience-zone-modal.css"]
    };
  }
  static get properties() {
    return {
      "activeIndex": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "number",
          "resolved": "number",
          "references": {}
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "State"
        },
        "attribute": "active-index",
        "reflect": false,
        "defaultValue": "0"
      },
      "experienceZoneData": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ExperienceZone | string",
          "resolved": "string | { logo: BsImage; stories: ExperienceZoneStory[]; }",
          "references": {
            "ExperienceZone": {
              "location": "import",
              "path": "../experience-zone/experience-zone.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The Experience Zone story data."
        },
        "attribute": "experience-zone-data",
        "reflect": false
      }
    };
  }
  static get events() {
    return [{
        "method": "bsPauseYoutubeAction",
        "name": "bsPauseYoutubeAction",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Events"
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
  static get listeners() {
    return [{
        "name": "bsNextSlideAction",
        "method": "bsNextSlideActionHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }, {
        "name": "bsPreviousSlideAction",
        "method": "bsPreviousSlideActionHandler",
        "target": undefined,
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Memoize('experienceZoneData')
], BsExperienceZoneModal.prototype, "parsedExperienceZoneData", null);
//# sourceMappingURL=experience-zone-modal.js.map
