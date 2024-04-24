import { EventEmitter } from '../../../stencil-public-runtime';
import { ExperienceZone } from '../experience-zone/experience-zone.types';
import { YoutubeControlClickEvent } from '../youtube-control/youtube-control.types';
/**
 * Experience Zone modal component.
 */
export declare class BsExperienceZoneModal {
  private experienceZoneModalRef;
  /** State */
  activeIndex?: number;
  /**
   * The Experience Zone story data.
   */
  experienceZoneData: ExperienceZone | string;
  get parsedExperienceZoneData(): ExperienceZone;
  /** Events */
  bsPauseYoutubeAction: EventEmitter<YoutubeControlClickEvent>;
  /** Listeners */
  bsNextSlideActionHandler(): void;
  bsPreviousSlideActionHandler(): void;
  private updateIndex;
  componentDidLoad(): void;
  render(): any;
}
