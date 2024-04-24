import { html } from 'lit-html';
import { testBadgeDetailData } from './test-badge-detail.data';
const meta = {
  title: 'components/molecules/bs-test-badge-detail',
  component: 'bs-test-badge-detail',
  args: testBadgeDetailData,
};
export default meta;
export const Default = {
  render: (args) => html `<bs-test-badge-detail
      badge-title="${args.badgeTitle}"
      badge-text="${args.badgeText}"
      badge-images="${JSON.stringify(args.badgeImages)}"
      badge-cta="${JSON.stringify(args.badgeCta)}"
    />`,
};
//# sourceMappingURL=test-badge-detail.stories.js.map
