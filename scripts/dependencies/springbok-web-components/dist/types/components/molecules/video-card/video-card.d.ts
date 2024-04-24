import { BsImage } from '../../atoms/image/image';
import { YoutubeControlClickEvent } from '../youtube-control/youtube-control.types';
import { YoutubeControlUpdateEvent } from '../../organisms/youtube-video/youtube-video.types';
/**
 * Video card component.
 */
export declare class BsVideoCard {
  /** Stages */
  active: boolean;
  /** Props */
  /**
   * The youtube video ID.
   */
  videoId: string;
  /**
   * Should the video be muted initially?
   */
  mute?: boolean;
  /**
   * Should the player be loaded inline?
   */
  inline?: boolean;
  /**
   * Should the player start automatically when the page is loaded?
   */
  autoplay?: boolean;
  /**
   * The image displayed on the card.
   */
  image: BsImage | string;
  get parsedImage(): BsImage;
  /** Listeners */
  bsYoutubeControllerClickHandler(e: CustomEvent<YoutubeControlClickEvent>): void;
  bsYoutubeControllerUpdateHandler(e: CustomEvent<YoutubeControlUpdateEvent>): void;
  /** Methods */
  private handlePlayVideo;
  componentDidLoad(): void;
  render(): any;
}
