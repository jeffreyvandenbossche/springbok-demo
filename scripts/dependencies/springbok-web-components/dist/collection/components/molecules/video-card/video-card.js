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
import { IconName } from '../../atoms/icon/icon.types';
import { PlayerState } from '../../organisms/image-carousel/image-carousel.types';
/**
 * Video card component.
 */
export class BsVideoCard {
  constructor() {
    /** Methods */
    this.handlePlayVideo = () => {
      this.active = true;
    };
    this.active = false;
    this.videoId = undefined;
    this.mute = false;
    this.inline = false;
    this.autoplay = false;
    this.image = undefined;
  }
  get parsedImage() {
    return parseIfString(this.image);
  }
  /** Listeners */
  bsYoutubeControllerClickHandler(e) {
    if (this.videoId === e.detail.id && e.detail.value === 1) {
      this.active = true;
    }
  }
  bsYoutubeControllerUpdateHandler(e) {
    this.active = [PlayerState.PLAYING, PlayerState.PAUSED, PlayerState.BUFFERING].includes(e.detail.playerState);
  }
  componentDidLoad() {
    this.active = this.autoplay;
  }
  render() {
    return (h(Host, { class: `${this.parsedImage.cover ? 'is-background' : ''} ${this.autoplay ? 'is-autoplayed' : ''}` }, this.inline && this.active ? (h("div", { class: "inline-video" }, h("bs-youtube-video", { videoId: this.videoId, mute: this.mute, inline: true }))) : (h("div", { class: "video-card" }, h("bs-click-action", { tagClass: "button", name: this.inline ? 'open-youtube-inline' : 'open-youtube-modal', value: { videoId: this.videoId, mute: this.mute }, onBsClickAction: this.inline && this.handlePlayVideo }, h("bs-image", Object.assign({ class: "youtube-thumbnail" }, this.parsedImage, { caption: "" })), h("bs-icon", { class: "youtube-thumbnail-button", name: IconName.Play }))))));
  }
  static get is() { return "bs-video-card"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["video-card.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["video-card.css"]
    };
  }
  static get properties() {
    return {
      "videoId": {
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
          "text": "The youtube video ID."
        },
        "attribute": "video-id",
        "reflect": false
      },
      "mute": {
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
          "text": "Should the video be muted initially?"
        },
        "attribute": "mute",
        "reflect": false,
        "defaultValue": "false"
      },
      "inline": {
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
          "text": "Should the player be loaded inline?"
        },
        "attribute": "inline",
        "reflect": false,
        "defaultValue": "false"
      },
      "autoplay": {
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
          "text": "Should the player start automatically when the page is loaded?"
        },
        "attribute": "autoplay",
        "reflect": false,
        "defaultValue": "false"
      },
      "image": {
        "type": "string",
        "mutable": false,
        "complexType": {
          "original": "BsImage | string",
          "resolved": "BsImage | string",
          "references": {
            "BsImage": {
              "location": "import",
              "path": "../../atoms/image/image"
            }
          }
        },
        "required": false,
        "optional": false,
        "docs": {
          "tags": [],
          "text": "The image displayed on the card."
        },
        "attribute": "image",
        "reflect": false
      }
    };
  }
  static get states() {
    return {
      "active": {}
    };
  }
  static get listeners() {
    return [{
        "name": "bsYoutubeControllerClick",
        "method": "bsYoutubeControllerClickHandler",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "bsYoutubeControllerUpdate",
        "method": "bsYoutubeControllerUpdateHandler",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
__decorate([
  Memoize('image')
], BsVideoCard.prototype, "parsedImage", null);
//# sourceMappingURL=video-card.js.map
