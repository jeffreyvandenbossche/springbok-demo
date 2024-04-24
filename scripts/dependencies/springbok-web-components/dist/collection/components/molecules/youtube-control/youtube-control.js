import { Host, h } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
import { PlayerState, } from '../../organisms/youtube-video/youtube-video.types';
import { IconName } from '../../atoms/icon/icon.types';
/**
 * Youtube controls component.
 */
export class BsYoutubeControl {
  constructor() {
    /** Methods */
    this.onButtonClick = (e) => {
      this.bsYoutubeControllerClick.emit({
        id: this.videoId,
        action: e.detail.name,
        value: e.detail.value,
      });
    };
    this.onSliderChange = (e) => {
      const el = e.target;
      this.bsYoutubeControllerClick.emit({
        id: this.videoId,
        action: 'progress-bar-input',
        value: el.valueAsNumber,
      });
    };
    this.videoActive = false;
    this.videoId = undefined;
    this.playerState = PlayerState.UNSTARTED;
    this.mute = true;
    this.currentTime = 0;
  }
  /** Listeners */
  bsYoutubeControllerUpdateHandler(e) {
    if (this.videoId === e.detail.id) {
      this.mute = e.detail.mute;
      this.playerState = e.detail.playerState;
      this.currentTime = isEmpty(e.detail.currentTime) ? 0 : e.detail.currentTime;
      this.videoActive = [PlayerState.PLAYING, PlayerState.PAUSED, PlayerState.BUFFERING].includes(e.detail.playerState);
    }
  }
  render() {
    return (h(Host, null, h("div", { class: "youtube-control" }, h("div", { class: "media-control-bar" }, h("bs-click-action", { name: "play", tagClass: "youtube-control-button", onBsClickAction: this.onButtonClick, value: this.playerState === PlayerState.PLAYING ? PlayerState.PAUSED : PlayerState.PLAYING }, h("bs-icon", { name: [PlayerState.PLAYING, PlayerState.BUFFERING].includes(this.playerState)
        ? IconName.Pause
        : IconName.Play })), h("input", { onInput: this.onSliderChange, value: this.currentTime, type: "range", id: "vol", name: "vol", min: "0", max: "100", class: "slider", step: "0.1", disabled: !this.videoActive }), h("bs-click-action", { name: "mute", tagClass: "youtube-control-button", onBsClickAction: (e) => {
        this.mute = !this.mute;
        this.onButtonClick(e);
      } }, h("bs-icon", { name: this.mute ? IconName.Mute : IconName.Volume })), h("bs-click-action", { name: "fullscreen", tagClass: "youtube-control-button", onBsClickAction: this.onButtonClick, disabled: !this.videoActive }, h("bs-icon", { name: IconName.Resize }))))));
  }
  static get is() { return "bs-youtube-control"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["youtube-control.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["youtube-control.css"]
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
          "text": "The video ID the controller belongs to."
        },
        "attribute": "video-id",
        "reflect": false
      },
      "playerState": {
        "type": "number",
        "mutable": false,
        "complexType": {
          "original": "PlayerState",
          "resolved": "PlayerState.BUFFERING | PlayerState.CUED | PlayerState.ENDED | PlayerState.PAUSED | PlayerState.PLAYING | PlayerState.UNSTARTED",
          "references": {
            "PlayerState": {
              "location": "import",
              "path": "../../organisms/youtube-video/youtube-video.types"
            }
          }
        },
        "required": false,
        "optional": true,
        "docs": {
          "tags": [],
          "text": "The playing state of the youtube Player."
        },
        "attribute": "player-state",
        "reflect": false,
        "defaultValue": "PlayerState.UNSTARTED"
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
          "text": "Is the video muted."
        },
        "attribute": "mute",
        "reflect": false,
        "defaultValue": "true"
      },
      "currentTime": {
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
          "text": "The video current progress time."
        },
        "attribute": "current-time",
        "reflect": false,
        "defaultValue": "0"
      }
    };
  }
  static get states() {
    return {
      "videoActive": {}
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
          "text": "Youtube control event"
        },
        "complexType": {
          "original": "YoutubeControlClickEvent",
          "resolved": "{ id: string; action?: string; value?: number; }",
          "references": {
            "YoutubeControlClickEvent": {
              "location": "import",
              "path": "./youtube-control.types"
            }
          }
        }
      }];
  }
  static get listeners() {
    return [{
        "name": "bsYoutubeControllerUpdate",
        "method": "bsYoutubeControllerUpdateHandler",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=youtube-control.js.map
