import { EventEmitter } from '../../../stencil-public-runtime';
import { ExperienceZoneComponent, ExperienceZoneLayout } from '../experience-zone/experience-zone.types';
import { YoutubeControlClickEvent } from '../youtube-control/youtube-control.types';
/**
 * Experience Zone screen component.
 */
export declare class BsExperienceZoneScreen {
  /** Is this screen currently active? */
  active?: boolean;
  /**
   * The Experience Zone screen layout name.
   */
  layout: ExperienceZoneLayout;
  /**
   * The Experience Zone screen disclaimer.
   */
  disclaimer?: string;
  /**
   * The Experience Zone card image.
   */
  components?: ExperienceZoneComponent[] | string;
  get parsedComponents(): ExperienceZoneComponent[];
  /** Events */
  /** Emits youtube control event action: 'play' */
  bsYoutubeControllerClick: EventEmitter<YoutubeControlClickEvent>;
  /** Watchers */
  handleActiveChange(isActive: boolean): void;
  render(): any;
}
