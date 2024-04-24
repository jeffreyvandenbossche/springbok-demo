import { TestBadge } from './test-badge.types';
/**
 * Test Badge component.
 */
export declare class BsTestBadge {
  /** Props */
  /**
   * The Experience Zone contract.
   */
  testBadgeCollection: TestBadge[] | string;
  get parsedTestBadgeCollection(): TestBadge[];
  render(): any;
}
