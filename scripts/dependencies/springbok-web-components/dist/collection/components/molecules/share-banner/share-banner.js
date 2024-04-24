import { Host, h } from '@stencil/core';
import { TitleSize, TitleTag } from '../../atoms/title/title.types';
import { sharingButtons } from './share-banner.data';
/**
 * Share banner component.
 */
export class BsShareBanner {
  constructor() {
    this.currentUrl = undefined;
    this.sectionTitle = undefined;
  }
  /** Methods */
  handleShareClick(type) {
    if (type === 'email') {
      this.shareByEmail();
    }
    else {
      this.shareToSocials(type);
    }
  }
  shareByEmail() {
    const encodedCurrentUrl = encodeURIComponent(this.currentUrl);
    window.open(`mailto:?body=${encodedCurrentUrl}`, '_blank' // <- This is what makes it open in a new window.
    );
  }
  shareToSocials(socialType) {
    const encodedCurrentUrl = encodeURIComponent(this.currentUrl);
    let sharingLinkUrl;
    switch (socialType) {
      case 'facebook':
        sharingLinkUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodedCurrentUrl}`;
        break;
      case 'twitter':
        sharingLinkUrl = `https://twitter.com/intent/tweet?url=${encodedCurrentUrl}`;
        break;
      case 'linkedin':
        sharingLinkUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodedCurrentUrl}`;
        break;
      default:
        break;
    }
    window.open(sharingLinkUrl, 'myWindow', 'width=550, height=400');
  }
  /** Lifecycle Hooks */
  componentDidLoad() {
    this.currentUrl = window.location.href;
  }
  render() {
    return (h(Host, null, h("div", { class: "share-banner" }, h("bs-title", { text: this.sectionTitle, tag: TitleTag.H2, size: TitleSize.Head3 }), h("div", { class: "button-wrapper" }, sharingButtons.map((item) => (h("bs-click-action", { class: "icon", onBsClickAction: () => this.handleShareClick(item.id) }, h("bs-icon", { name: item.icon }))))))));
  }
  static get is() { return "bs-share-banner"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["share-banner.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["share-banner.css"]
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
      }
    };
  }
  static get states() {
    return {
      "currentUrl": {}
    };
  }
}
//# sourceMappingURL=share-banner.js.map
