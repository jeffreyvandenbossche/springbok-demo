import { Host, h } from '@stencil/core';
import { isEmpty } from '@springbokagency/stencil-base';
import { playerApi } from './youtube-video.data';
import { PlayerState } from './youtube-video.types';
/**
 * The youtube video component.
 */
export class BsYoutubeVideo {
  constructor() {
    /** methods */
    this.onPlayerReady = (e) => {
      this.updateYoutubeController();
      this.onPlayerStateChange(e);
    };
    this.onPlayerStateChange = (e) => {
      var _a;
      this.playerState = e.target.getPlayerState();
      if (this.playerState === PlayerState.PLAYING) {
        this.progressBarInterval = setInterval(this.calculateTime, 100);
      }
      else if (this.playerState === PlayerState.UNSTARTED) {
        this.player.playVideo();
      }
      else if (this.playerState === PlayerState.ENDED) {
        this.updateYoutubeController();
        (_a = this.overlayRef) === null || _a === void 0 ? void 0 : _a.closeOverlay();
      }
      else {
        this.calculateTime();
        clearInterval(this.progressBarInterval);
      }
      this.updateYoutubeController();
    };
    this.calculateTime = () => {
      this.currentTime = (this.player.getCurrentTime() / this.player.getDuration()) * 100;
      this.updateYoutubeController();
    };
    this.updateYoutubeController = () => {
      const { mute, playerState, currentTime } = this;
      this.bsYoutubeControllerUpdate.emit({ id: this.videoId, mute, playerState, currentTime });
    };
    this.isIosOrSafari = () => {
      const { userAgent } = navigator;
      const chromeAgent = userAgent.indexOf('Chrome') > -1;
      let safariAgent = userAgent.indexOf('Safari') > -1;
      if (chromeAgent && safariAgent)
        safariAgent = false;
      // chrome on mac has match for both Chrome and Safari.
      const match = !isEmpty(userAgent.match(/(iPad|iPhone|iPod)/g)) || safariAgent;
      this.mute = match ? true : this.mute;
      return match;
    };
    this.createPlayer = () => {
      this.player = new YT.Player(this.videoElementRef, {
        width: '640',
        height: '360',
        videoId: this.videoId,
        host: 'https://www.youtube.com',
        playerVars: {
          playsinline: 1,
          controls: 0,
          rel: 0,
          mute: this.isIosOrSafari() ? 1 : +this.mute,
          // mute by default on IOS devices or safari for otherwise the autoplay will not work.
          autoplay: 1,
        },
        events: {
          onReady: this.onPlayerReady,
          onStateChange: this.onPlayerStateChange,
        },
      });
    };
    this.playerState = null;
    this.currentTime = undefined;
    this.inline = false;
    this.videoId = undefined;
    this.mute = false;
  }
  handleMute(mute) {
    if (mute) {
      this.player.mute();
    }
    else {
      this.player.unMute();
    }
  }
  /** Listeners */
  bsYoutubeControllerClickHandler(e) {
    if (this.videoId === e.detail.id) {
      switch (e.detail.action) {
        case 'play':
          if (e.detail.value === 1) {
            this.player.playVideo();
          }
          else {
            this.player.pauseVideo();
          }
          break;
        case 'mute':
          this.mute = !this.mute;
          break;
        case 'fullscreen': {
          this.player.getIframe().requestFullscreen();
          break;
        }
        case 'progress-bar-input':
          this.player.seekTo((e.detail.value / 100) * this.player.getDuration(), true);
          break;
        default:
          break;
      }
    }
  }
  bsYoutubeAPIReadyHandler() {
    this.createPlayer();
  }
  /** lifecycle hooks */
  componentDidLoad() {
    const tag = document.createElement('script');
    const scripts = document.getElementsByTagName('script');
    tag.src = playerApi;
    for (let i = 0; i < scripts.length; i += 1) {
      if (scripts[i].src === playerApi) {
        this.createPlayer();
        return;
      }
    }
    scripts[0].parentNode.insertBefore(tag, scripts[0]);
    this.mute = this.isIosOrSafari() ? true : this.mute;
  }
  disconnectedCallback() {
    this.player.destroy();
  }
  render() {
    if (this.inline) {
      return (h("div", { slot: "media", class: "youtube-video" }, h("div", { ref: (el) => {
          this.videoElementRef = el;
        }, class: "youtube-embed", tabIndex: -1 })));
    }
    return (h(Host, null, h("bs-dark-overlay", { class: "media", ref: (el) => {
        this.overlayRef = el;
      } }, h("div", { slot: "media", class: "youtube-video" }, h("div", { ref: (el) => {
        this.videoElementRef = el;
      }, class: "youtube-embed", tabIndex: -1 })), h("div", { slot: "controller", class: "media-control" }, h("bs-youtube-control", { mute: this.mute, videoId: this.videoId })))));
  }
  static get is() { return "bs-youtube-video"; }
  static get encapsulation() { return "shadow"; }
  static get originalStyleUrls() {
    return {
      "$": ["youtube-video.scss"]
    };
  }
  static get styleUrls() {
    return {
      "$": ["youtube-video.css"]
    };
  }
  static get properties() {
    return {
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
      }
    };
  }
  static get states() {
    return {
      "playerState": {},
      "currentTime": {}
    };
  }
  static get events() {
    return [{
        "method": "bsYoutubeControllerUpdate",
        "name": "bsYoutubeControllerUpdate",
        "bubbles": true,
        "cancelable": true,
        "composed": true,
        "docs": {
          "tags": [],
          "text": "Event for all user actions on the controller."
        },
        "complexType": {
          "original": "YoutubeControlUpdateEvent",
          "resolved": "{ id: string; mute?: boolean; playerState?: PlayerState; currentTime?: number; }",
          "references": {
            "YoutubeControlUpdateEvent": {
              "location": "import",
              "path": "./youtube-video.types"
            }
          }
        }
      }];
  }
  static get watchers() {
    return [{
        "propName": "mute",
        "methodName": "handleMute"
      }];
  }
  static get listeners() {
    return [{
        "name": "bsYoutubeControllerClick",
        "method": "bsYoutubeControllerClickHandler",
        "target": "window",
        "capture": false,
        "passive": false
      }, {
        "name": "bsYoutubeAPIReady",
        "method": "bsYoutubeAPIReadyHandler",
        "target": "window",
        "capture": false,
        "passive": false
      }];
  }
}
//# sourceMappingURL=youtube-video.js.map
