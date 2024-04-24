import { ExperienceZoneStory } from '../experience-zone/experience-zone.types';
/**
 * Experience Zone story component.
 */
export declare class BsExperienceZoneScreen {
  private experienceZoneScreenRef;
  private overlayRef;
  activeIndex: number;
  /** Is this story currently active? */
  active?: boolean;
  /** Should navigation arrows be hidden? */
  hideNavigation?: boolean;
  /**
   * The Experience Zone story data.
   */
  storyData: ExperienceZoneStory | string;
  get parsedStoryData(): ExperienceZoneStory;
  /** Watchers */
  handleActiveChange(isActive: boolean): void;
  /** Listeners */
  handleBsSwipeAction(e: CustomEvent): void;
  /** Methods */
  private handleNextMedia;
  private updateIndex;
  componentDidLoad(): void;
  render(): any;
}
