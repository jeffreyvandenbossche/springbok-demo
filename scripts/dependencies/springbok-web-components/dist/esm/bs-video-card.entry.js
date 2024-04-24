import { r as registerInstance, h, H as Host } from './index-35b5e8ce.js';
import { M as Memoize } from './memoize-43914bec.js';
import { p as parseIfString } from './parse-if-string-dba46397.js';
import { I as IconName } from './icon.types-2d98aa0e.js';

var PlayerState;
(function (PlayerState) {
  PlayerState[PlayerState["UNSTARTED"] = -1] = "UNSTARTED";
  PlayerState[PlayerState["ENDED"] = 0] = "ENDED";
  PlayerState[PlayerState["PLAYING"] = 1] = "PLAYING";
  PlayerState[PlayerState["PAUSED"] = 2] = "PAUSED";
  PlayerState[PlayerState["BUFFERING"] = 3] = "BUFFERING";
  PlayerState[PlayerState["CUED"] = 5] = "CUED";
})(PlayerState || (PlayerState = {}));

const videoCardCss = "@font-face{font-family:\"BridgestoneType\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Regular.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Bold\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Bold.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Italic\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Italic.woff\") format(\"woff\")}@font-face{font-family:\"BridgestoneType-Medium\";src:url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff2\") format(\"woff2\"), url(\"./assets/fonts/BridgestoneType/BridgestoneType-Medium.woff\") format(\"woff\")}.flex{display:flex}.flex-col{flex-direction:column}.flex-row{flex-direction:row}.flex-col-r{flex-direction:column-reverse}.flex-row-r{flex-direction:row-reverse}.flex.nowrap{flex-wrap:nowrap}.flex.wrap{flex-wrap:wrap}.flex.wrap-reverse{flex-wrap:wrap}.justify-start{justify-content:flex-start}.justify-end{justify-content:flex-end}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.justify-around{justify-content:space-around}.justify-evenly{justify-content:space-evenly}.align-start{align-items:flex-start}.align-end{align-items:flex-end}.align-center{align-items:center}.align-baseline{align-items:baseline}.align-stretch{align-items:stretch}.flex-grow{flex-grow:1}.flex-shrink{flex-shrink:1}.text-color-white{color:#fff}.text-color-light{color:#f8f7f3}.text-color-dark{color:#031824}.text-color-gray-800{color:#cbcbcb}.text-color-gray-700{color:#666}.text-color-black{color:#1f1f1f}.text-color-primary{color:#f00}.text-color-orange-700{color:#edd1ab}.text-color-orange-600{color:#e2b579}.text-color-green-700{color:#c8edab}.text-color-green-600{color:#a7e179}.text-color-blue-700{color:#abcfed}.text-color-blue-600{color:#79b3e2}.bg-color-gray-50{background-color:#161616}.bg-color-gray-100{background-color:#1f1f1f}.bg-color-gray-200{background-color:#292929}.bg-color-gray-400{background-color:#3d3d3d}.bg-color-black{background-color:#000}.bg-color-white{background-color:#fff}.bg-color-black-opacity-60{background-color:rgba(31, 31, 31, 0.6)}.bg-color-black-opacity-40{background-color:rgba(31, 31, 31, 0.4)}.bg-color-black-opacity-20{background-color:rgba(31, 31, 31, 0.2)}.bg-color-primary{background-color:#f00}.bg-color-orange-50{background-color:#642f16}.bg-color-orange-100{background-color:#86491d}.bg-color-green-50{background-color:#196316}.bg-color-green-100{background-color:#3d861d}.bg-color-blue-50{background-color:#163764}.bg-color-blue-100{background-color:#1d5286}.size-xx-small{font-size:0.8333333333rem}.size-x-small{font-size:1rem}.size-small{font-size:1.1666666667rem}.size-default{font-size:1.3333333333rem}.size-medium{font-size:1.5rem}.size-large{font-size:1.6666666667rem}.size-x-large{font-size:2rem}.size-xx-large{font-size:2.3333333333rem}.size-xxx-large{font-size:2.6666666667rem}.size-huge{font-size:3rem}.font-head-1{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:2.3333333333rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-1{font-size:2.6666666667rem}}.font-head-2{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.6666666667rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-2{font-size:2.3333333333rem}}.font-head-3{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.5rem;font-weight:300;line-height:1.1;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-3{font-size:1.6666666667rem}}.font-head-4{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}@media screen and (min-width: 768px){.font-head-4{font-size:1.6666666667rem}}.font-head-5{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:300;line-height:1.1;text-transform:default;letter-spacing:normal}.font-body-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-body-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-default{font-size:1.3333333333rem;line-height:1.6}}.font-body-bold{font-family:\"BridgestoneType-Bold\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:600;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-bold{line-height:1.6}}.font-body-italic{font-family:\"BridgestoneType-Italic\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-body-italic{font-size:1.3333333333rem;line-height:1.6}}.font-label{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.1;letter-spacing:normal}.font-caption{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}.font-hightlight{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:600;line-height:1.1;letter-spacing:normal}.font-cta-label-default{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:300;line-height:1.1;text-transform:capitalise;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-label-default{font-size:1.3333333333rem}}.font-cta-label-secondary{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:500;line-height:1.1;text-transform:inherit;letter-spacing:normal}.font-cta-text-link{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.3333333333rem;font-weight:400;line-height:1.4;letter-spacing:0.01rem}@media screen and (min-width: 768px){.font-cta-text-link{font-size:1.6666666667rem;line-height:1.6;letter-spacing:normal}}.font-cta-text-link-small{font-family:\"BridgestoneType\", Arial, sans-serif;font-size:1.1666666667rem;font-weight:400;line-height:1.4;letter-spacing:normal}@media screen and (min-width: 768px){.font-cta-text-link-small{font-size:1.3333333333rem}}:host{display:block;width:100%}:host *{box-sizing:border-box;padding:0;margin:0}:host *:before,:host *:after{box-sizing:border-box}:host .video-card{position:relative;margin:0 auto;overflow:hidden}:host(.is-background) .video-card{position:static}:host .inline-video{position:absolute;top:0;left:50%;width:100%;height:100%;transform:translateX(-50%)}:host .youtube-thumbnail-button{position:absolute;top:50%;left:50%;z-index:1;padding:0.5em;font-size:2.6666666667rem;color:#fff;background:transparent;border:4px solid #fff;border-radius:50%;transition:0.5s cubic-bezier(0.5, 0, 0, 1);transition-property:transform;transform:translate(-50%, -50%)}@media screen and (max-width: 767px){:host .youtube-thumbnail-button{font-size:1.8333333333rem;border-width:3px}}:host .youtube-thumbnail-button:hover{transform:translate(-50%, -50%) scale(1.07)}:host(.is-autoplayed) .youtube-thumbnail-button{top:unset;right:1rem;bottom:1rem;left:unset;padding:0.2rem;font-size:1.6666666667rem;border-width:2px;transform:none}:host .button{width:100%}";

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const BsVideoCard = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
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
};
__decorate([
  Memoize('image')
], BsVideoCard.prototype, "parsedImage", null);
BsVideoCard.style = videoCardCss;

export { BsVideoCard as bs_video_card };

//# sourceMappingURL=bs-video-card.entry.js.map