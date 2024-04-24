import { EventEmitter } from '../../../stencil-public-runtime';
import { ColorTheme, TouchDirections } from './default-layout.types';
import { BsImageCarousel } from '../../organisms/image-carousel/image-carousel';
import { BsExperienceZoneModal } from '../../molecules/experience-zone-modal/experience-zone-modal';
import { BsTestBadgeModal } from '../../organisms/test-badge-modal/test-badge-modal';
import { HeaderNavigation } from '../../organisms/overlay-menu/overlay-menu.types';
/**
 * Default layout component.
 */
export declare class BsDefaultLayout {
  private touchStartX;
  private touchEndX;
  private touchThreshold;
  /** States */
  overlayMenuIsOpen: boolean;
  overlayMenuData: HeaderNavigation;
  youtubeModalIsOpen: boolean;
  youtubeModalData: {
    videoId: string;
    mute: boolean;
  };
  carouselModalIsOpen: boolean;
  carouselModalData: BsImageCarousel;
  experienceZoneModalIsOpen: boolean;
  experienceZoneModalData: BsExperienceZoneModal;
  testBadgeModalIsOpen: boolean;
  testBadgeModalData: BsTestBadgeModal;
  /** Props */
  /**
   * Color theme
   */
  theme: ColorTheme;
  /** Listeners */
  bsClickActionHandler(e: CustomEvent): void;
  bsModalIsClosedHandler(e: CustomEvent): void;
  handleTouchStart(e: TouchEvent): void;
  handleTouchEnd(e: TouchEvent): void;
  /** Events */
  /**
   * Emitted when a swipe action is detected.
   */
  bsSwipeAction: EventEmitter<{
    direction: TouchDirections;
  }>;
  /**
   * Emitted when the youtube API script triggers the window.onYouTubeIframeAPIReady method.
   */
  bsYoutubeAPIReady: EventEmitter;
  /** Methods */
  handleTouch(): Promise<void>;
  /** lifecycle hooks */
  componentDidLoad(): void;
  render(): any;
}
