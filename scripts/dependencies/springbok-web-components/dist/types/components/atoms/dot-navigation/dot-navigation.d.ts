/**
 * The dot navigation component used to indicate the current index in a list of views.
 */
export declare class BsDotNavigation {
  private timeout;
  private interval;
  progress: number;
  /**
   * The amount of dots in the navigation.
   */
  items: number;
  /**
   * The active dot index.
   */
  index: number;
  handleIndexChange(): void;
  /**
   * Should the auto navigation be slow?
   */
  slow?: boolean;
  /** Methods */
  private startProgress;
  /** lifecycle hooks */
  componentDidLoad(): void;
  render(): any;
}
