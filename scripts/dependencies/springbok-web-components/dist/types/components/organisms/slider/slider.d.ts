/**
 * The Slider component.
 */
export declare class BsSlider {
  private teaserSliderRef;
  private navigationRef;
  private itemsVisible;
  /** States */
  slides: boolean;
  /** listeners */
  handleScreenResized(): void;
  /** Methods */
  private onResize;
  private throttleMethod;
  private onPreviousSlide;
  private onNextSlide;
  private handleOverlay;
  private getCards;
  /** lifecycle hooks */
  componentDidLoad(): void;
  render(): any;
}
