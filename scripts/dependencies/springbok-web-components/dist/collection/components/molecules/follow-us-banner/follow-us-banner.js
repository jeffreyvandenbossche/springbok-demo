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
import { TitleSize, TitleTag } from '../../atoms/title/title.types';
import { IconName } from '../../atoms/icon/icon.types';
import { ClickActionTarget } from '../../atoms/click-action/click-action.types';
/**
 * Follow us banner component.
 */
export class BsFollowUsBanner {
  constructor() {
    this.sectionTitle = undefined;
    this.socialLinks = undefined;
  }
  get parsedSocialLinks() {
    return parseIfString(this.socialLinks);
  }
  render() {
    return (h(Host, null, h("div", { class: "share-banner" }, h("bs-title", { text: this.sectionTitle, tag: TitleTag.H2, size: TitleSize.Head3 }), h("div", { class: "social-section" }, this.parsedSocialLinks.map((item) => (h("div", { class: "social-item" }, h("bs-text", { class: "text", text: item.type }), h("div", { class: "button-wrapper" }, item.instagramLink && (h("bs-click-action", { target: ClickActionTarget.Blank, href: item.instagramLink }, h("bs-icon", { name: IconName.SocialInstagram }))), item.facebookLink && (h("bs-click-action", { target: ClickActionTarget.Blank, href: item.facebookLink }, h("bs-icon", { name: IconName.SocialFacebook }))), item.youtubeLink && (h("bs-click-action", { target: ClickActionTarget.Blank, href: item.youtubeLink }, h("bs-icon", { name: IconName.SocialYoutube }))), item.linkedinLink && (h("bs-click-action", { target: ClickActionTarget.Blank, href: item.linkedinLink }, h("bs-icon", { name: IconName.SocialLinkedin })))))))))));
  }
  static get is() { return "bs-follow-us-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["../share-banner/share-banner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["../share-banner/share-banner.css"]
    };
  }
  static get properties() {
    return {
      "sectionTitle": {
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
          "text": "Section's title"
        },
        "attribute": "section-title",
        "reflect": false
      },
      "socialLinks": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "SocialLinks[] | string",
          "resolved": "SocialLinks[] | string",
          "references": {
            "SocialLinks": {
              "location": "import",
              "path": "./follow-us-banner.types"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The social media links."
        },
        "attribute": "social-links",
        "reflect": false
      }
    };
  }
}
__decorate([
  Memoize('socialLinks')
], BsFollowUsBanner.prototype, "parsedSocialLinks", null);
//# sourceMappingURL=follow-us-banner.js.map
