import { EventEmitter } from '../../../stencil-public-runtime';
import { PlayerState, YoutubeControlUpdateEvent } from './youtube-video.types';
import { YoutubeControlClickEvent } from '../../molecules/youtube-control/youtube-control.types';
declare global {
  interface Window {
    onYouTubeIframeAPIReady: () => void;
    onYouTubePlayerAPIReady: () => void;
  }
}
/**
 * The youtube video component.
 */
export declare class BsYoutubeVideo {
  private player;
  private progressBarInterval;
  private videoElementRef;
  private overlayRef;
  /** States */
  playerState: PlayerState;
  currentTime: number;
  /** Props */
  /**
   * Should the player be loaded inline?
   */
  inline?: boolean;
  /**
   * The youtube video ID.
   */
  videoId: string;
  /**
   * Should the video be muted initially?
   */
  mute?: boolean;
  handleMute(mute: boolean): void;
  /** Events */
  /** Event for all user actions on the controller. */
  bsYoutubeControllerUpdate: EventEmitter<YoutubeControlUpdateEvent>;
  /** Listeners */
  bsYoutubeControllerClickHandler(e: CustomEvent<YoutubeControlClickEvent>): void;
  bsYoutubeAPIReadyHandler(): void;
  /** methods */
  private onPlayerReady;
  private onPlayerStateChange;
  private calculateTime;
  private updateYoutubeController;
  private isIosOrSafari;
  private createPlayer;
  /** lifecycle hooks */
  componentDidLoad(): void;
  disconnectedCallback(): void;
  render(): any;
}
