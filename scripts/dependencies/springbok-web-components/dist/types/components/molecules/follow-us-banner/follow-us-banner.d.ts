import { SocialLinks } from './follow-us-banner.types';
/**
 * Follow us banner component.
 */
export declare class BsFollowUsBanner {
  /** Props */
  /** Section's title */
  sectionTitle: string;
  /**
   * The social media links.
   */
  socialLinks: SocialLinks[] | string;
  get parsedSocialLinks(): SocialLinks[];
  render(): any;
}
