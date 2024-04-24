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
import { ExperienceZoneLayout, } from '../experience-zone/experience-zone.types';
import { Breakpoint, compareBreakpoint } from '../../../utils/breakpoints';
import { TouchDirections } from '../../layouts/default-layout/default-layout.types';
/**
 * Experience Zone story component.
 */
export class BsExperienceZoneScreen {
  constructor() {
    /** Methods */
    this.handleNextMedia = () => {
      this.updateIndex(this.activeIndex + 1);
    };
    this.updateIndex = (newValue) => {
      if (this.parsedStoryData.screens.length <= 1) {
        this.activeIndex = 0;
        return;
      }
      this.experienceZoneScreenRef.classList.add('fade-out');
      this.experienceZoneScreenRef.addEventListener('animationend', () => {
        this.experienceZoneScreenRef.classList.remove('fade-out');
        if (newValue > this.parsedStoryData.screens.length - 1) {
          this.activeIndex = 0;
        }
        else if (newValue < 0) {
          this.activeIndex = this.parsedStoryData.screens.length - 1;
        }
        else {
          this.activeIndex = newValue;
        }
      });
    };
    this.activeIndex = 0;
    this.active = false;
    this.hideNavigation = false;
    this.storyData = undefined;
  }
  get parsedStoryData() {
    return parseIfString(this.storyData);
  }
  /** Watchers */
  handleActiveChange(isActive) {
    if (isActive) {
      this.overlayRef.focusTrap();
    }
  }
  /** Listeners */
  handleBsSwipeAction(e) {
    if (this.active) {
      if (e.detail.direction === TouchDirections.Left) {
        this.overlayRef.nextSlide();
      }
      if (e.detail.direction === TouchDirections.Right) {
        this.overlayRef.previousSlide();
      }
    }
  }
  componentDidLoad() {
    if (this.active) {
      this.overlayRef.focusTrap();
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "experience-zone-story" }, h("bs-dark-overlay", { ref: (el) => {
        this.overlayRef = el;
      }, "main-title": this.parsedStoryData.storyTitle, screens: !this.hideNavigation, logo: (this.parsedStoryData.screens[this.activeIndex].layout !==
        ExperienceZoneLayout.Video &&
        compareBreakpoint('max', Breakpoint.md)) ||
        compareBreakpoint('min', Breakpoint.md)
        ? this.parsedStoryData.storyLogo
        : '' }, h("bs-experience-zone-screen", { ref: (el) => {
        this.experienceZoneScreenRef = el;
      }, active: this.active, onClick: this.handleNextMedia, slot: "media", layout: this.parsedStoryData.screens[this.activeIndex].layout, disclaimer: this.parsedStoryData.screens[this.activeIndex].disclaimer, components: this.parsedStoryData.screens[this.activeIndex].components }), this.parsedStoryData.screens[this.activeIndex].layout ===
      ExperienceZoneLayout.Video && (h("bs-container", { slot: "controller", contained: true }, h("div", { class: "screen-footer" }, h("bs-youtube-control", { videoId: this.parsedStoryData.screens[this.activeIndex].components[0]
        .data.videoId }))))))));
  }
  static get is() { return "bs-experience-zone-story"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["experience-zone-story.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["experience-zone-story.css"]
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
          "text": "Is this story currently active?"
        },
        "attribute": "active",
        "reflect": false,
        "defaultValue": "false"
      },
      "hideNavigation": {
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
          "text": "Should navigation arrows be hidden?"
        },
        "attribute": "hide-navigation",
        "reflect": false,
        "defaultValue": "false"
      },
      "storyData": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "ExperienceZoneStory | string",
          "resolved": "string | { storyLogo: BsImage; screens: ExperienceZoneScreen[]; storyImage: BsImage; storyTitle: string; }",
          "references": {
            "ExperienceZoneStory": {
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
        "attribute": "story-data",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "activeIndex": {}
    };
  }
  static get watchers() {
    return [{
        "propName": "active",
        "methodName": "handleActiveChange"
      }];
  }
  static get listeners() {
    return [{
        "name": "bsSwipeAction",
        "method": "handleBsSwipeAction",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Memoize('storyData')
], BsExperienceZoneScreen.prototype, "parsedStoryData", null);
//# sourceMappingURL=experience-zone-story.js.map
