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
import { ExperienceZoneLayout } from './experience-zone.types';
import { IconName } from '../../atoms/icon/icon.types';
import { throttle } from '../../../utils/throttle';
/**
 * Experience Zone teaser component.
 */
export class BsExperienceZoneTeaser {
  constructor() {
    /** Methods */
    this.onResize = () => {
      this.slides =
        this.teaserSliderRef && this.teaserSliderRef.scrollWidth > this.teaserSliderRef.offsetWidth;
    };
    this.throttleMethod = throttle(this.onResize, 1000);
    this.onPreviousSlide = () => {
      if (this.activeIndex < 1)
        return;
      if (this.teaserSliderRef.scrollLeft === 0)
        return;
      this.activeIndex -= 1;
      this.scrollSlider();
    };
    this.onNextSlide = () => {
      if (this.activeIndex > this.parsedExperienceZoneData.stories.length - 2)
        return;
      if (this.teaserSliderRef.scrollLeft + this.teaserSliderRef.clientWidth ===
        this.teaserSliderRef.scrollWidth)
        return;
      this.activeIndex += 1;
      this.scrollSlider();
    };
    this.scrollSlider = () => {
      const scrollDistance = this.teaserSliderRef.children[this.activeIndex].offsetLeft -
        this.teaserSliderRef.offsetLeft;
      this.teaserSliderRef.scrollTo({
        top: 0,
        left: scrollDistance,
        behavior: 'smooth',
      });
    };
    this.slides = false;
    this.activeIndex = 0;
    this.experienceZoneData = undefined;
    this.teaserTitle = undefined;
  }
  get parsedExperienceZoneData() {
    return parseIfString(this.experienceZoneData);
  }
  get parsedTeaserTitle() {
    return parseIfString(this.teaserTitle);
  }
  /** listeners */
  handleScreenResized() {
    this.throttleMethod();
  }
  /** lifecycle hooks */
  componentDidLoad() {
    this.slides = this.teaserSliderRef.scrollWidth > this.teaserSliderRef.offsetWidth;
  }
  render() {
    return (h(Host, null, h("div", { class: "teaser-head" }, h("bs-title", { text: this.parsedTeaserTitle.text, tag: this.parsedTeaserTitle.tag, size: this.parsedTeaserTitle.size, variant: this.parsedTeaserTitle.variant, color: this.parsedTeaserTitle.color }), this.slides && (h("div", { class: "teaser-navigation" }, h("bs-click-action", { name: "previous", onBsClickAction: this.onPreviousSlide, tagClass: "navigation-button", ariaLabelText: "backward" }, h("bs-icon", { name: IconName.ArrowBackward })), h("bs-click-action", { name: "next", onBsClickAction: this.onNextSlide, tagClass: "navigation-button", ariaLabelText: "forward" }, h("bs-icon", { name: IconName.ArrowForward }))))), h("div", { class: "teaser-slider", ref: (el) => {
        this.teaserSliderRef = el;
      } }, this.parsedExperienceZoneData.stories.map((story, index) => (h("bs-click-action", { name: "open-experience-zone-modal", class: "grow", tagClass: "grow click-action", value: { activeIndex: index, experienceZoneData: this.experienceZoneData } }, h("bs-experience-zone-card", { class: "teaser-card", singular: this.parsedExperienceZoneData.stories.length === 1, cardTitle: story.storyTitle, cardImage: story.storyImage, video: story.screens[0].layout === ExperienceZoneLayout.Video })))))));
  }
  static get is() { return "bs-experience-zone"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["experience-zone.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["experience-zone.css"]
    };
  }
  static get properties() {
    return {
      "experienceZoneData": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ExperienceZone | string",
          "resolved": "string | { logo: BsImage; stories: ExperienceZoneStory[]; }",
          "references": {
            "ExperienceZone": {
              "location": "import",
              "path": "./experience-zone.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The Experience Zone contract."
        },
        "attribute": "experience-zone-data",
        "reflect": false
      },
      "teaserTitle": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsTitle | string",
          "resolved": "BsTitle | string",
          "references": {
            "BsTitle": {
              "location": "import",
              "path": "../../atoms/title/title"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The Experience Zone Teaser title."
        },
        "attribute": "teaser-title",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "slides": {},
      "activeIndex": {}
    };
  }
  static get listeners() {
    return [{
        "name": "resize",
        "method": "handleScreenResized",
        "target": "window",
        "capture": false,
        "passive": true
      }];
  }
}
__decorate([
  Memoize('experienceZoneData')
], BsExperienceZoneTeaser.prototype, "parsedExperienceZoneData", null);
__decorate([
  Memoize('teaserTitle')
], BsExperienceZoneTeaser.prototype, "parsedTeaserTitle", null);
//# sourceMappingURL=experience-zone.js.map
