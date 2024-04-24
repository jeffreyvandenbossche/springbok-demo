import { EventEmitter } from '../../../stencil-public-runtime';
import { PlayerState, YoutubeControlUpdateEvent } from '../../organisms/youtube-video/youtube-video.types';
import { YoutubeControlClickEvent } from './youtube-control.types';
/**
 * Youtube controls component.
 */
export declare class BsYoutubeControl {
  videoActive: boolean;
  /** Props */
  /** The video ID the controller belongs to. */
  videoId: string;
  /** The playing state of the youtube Player. */
  playerState?: PlayerState;
  /** Is the video muted. */
  mute?: boolean;
  /** The video current progress time. */
  currentTime?: number;
  /** Events */
  /**
   * Youtube control event
   */
  bsYoutubeControllerClick: EventEmitter<YoutubeControlClickEvent>;
  /** Listeners */
  bsYoutubeControllerUpdateHandler(e: CustomEvent<YoutubeControlUpdateEvent>): void;
  /** Methods */
  private onButtonClick;
  private onSliderChange;
  render(): any;
}
