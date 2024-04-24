import { r as registerInstance, c as createEvent, h, H as Host } from './index-35b5e8ce.js';
import { i as isEmpty } from './is-empty-0ea2058d.js';
import { P as PlayerState } from './youtube-video.types-4fa0da6e.js';

const playerApi = 'https://www.youtube.com/player_api';

const youtubeVideoCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}.media{position:fixed;top:0;right:0;bottom:0;left:0;z-index:5}.youtube-video{position:relative;max-width:100%;height:100%;aspect-ratio:16/9;margin:0 auto;overflow:hidden;writing-mode:vertical-lr}.youtube-embed{width:100%;height:200%;margin-top:-50%}.youtube-thumbnail{position:absolute;top:0;left:0;width:100%;height:100%}.youtube-thumbnail-button{position:absolute;top:50%;left:50%;padding:1rem;font-size:2rem;color:#fff;pointer-events:all;border:4px solid #fff;border-radius:50%;transform:translate(-50%, -50%)}.is-disabled{pointer-events:none}.is-hidden{display:none}";

const BsYoutubeVideo = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.bsYoutubeControllerUpdate = createEvent(this, "bsYoutubeControllerUpdate", 7);
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
  static get watchers() { return {
    "mute": ["handleMute"]
  }; }
};
BsYoutubeVideo.style = youtubeVideoCss;

export { BsYoutubeVideo as bs_youtube_video };

//# sourceMappingURL=bs-youtube-video.entry.js.map